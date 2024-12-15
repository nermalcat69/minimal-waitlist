import Redis from 'ioredis'
import { RateLimiterRedis } from 'rate-limiter-flexible'

const redis = new Redis({
  host: 'redis',
  port: 6379,
});

// Create rate limiter instance
const rateLimiter = new RateLimiterRedis({
  storeClient: redis,
  keyPrefix: 'waitlist_ratelimit',
  points: 1,
  duration: 3600,
});

interface RateLimiterResponse {
  success: boolean;
  reset: Date;
}

export async function checkRateLimit(ip: string): Promise<RateLimiterResponse> {
  try {
    const rateLimitResult = await rateLimiter.consume(ip);
    return {
      success: true,
      reset: new Date(Date.now() + rateLimitResult.msBeforeNext),
    };
  } catch (error) {
    // Check if error is from rate-limiter-flexible
    if (error && typeof error === 'object' && 'msBeforeNext' in error) {
      return {
        success: false,
        reset: new Date(Date.now() + (error.msBeforeNext as number)),
      };
    }
    // Default fallback for unexpected errors
    return {
      success: false,
      reset: new Date(Date.now() + 3600000),
    };
  }
} 