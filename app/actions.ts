'use server'

import { headers } from 'next/headers'
import { checkRateLimit } from '../lib/rate-limit'

export async function joinWaitlist(formData: FormData) {
    const email = formData.get('email')
    const headersList = headers()
    const ip = (await headersList).get('x-forwarded-for') || 'anonymous'

    if (!email || typeof email !== 'string') {
        return {
            success: false,
            message: 'Please provide a valid email address'
        }
    }

    try {
        const { success, reset } = await checkRateLimit(ip)
        
        if (!success) {
            return {
                success: false,
                message: `Rate limit exceeded. Please try again in ${Math.ceil((reset.getTime() - Date.now()) / 1000 / 60)} minutes.`
            }
        }

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL

        if (!webhookUrl) {
            throw new Error('Discord webhook URL not configured')
        }

        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `New waitlist signup: ${email}`,
                embeds: [{
                    title: 'New Waitlist Signup',
                    fields: [
                        {
                            name: 'Email',
                            value: email,
                        },
                        {
                            name: 'Timestamp',
                            value: new Date().toLocaleString('en-US', {
                                dateStyle: 'medium',
                                timeStyle: 'short',
                                timeZone: 'UTC'
                            }),
                        }
                    ],
                    color: 0x00ff00,
                }]
            }),
        })

        return {
            success: true,
            message: "Thanks for joining the waitlist! We'll be in touch soon. For now join our Discord for updates 😉"
        }
    } catch (error) {
        console.error('Error:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again later.'
        }
    }
}

