import { WaitlistForm } from "../components/waitlist-form"
import { Sparkles } from 'lucide-react'
import "./globals.css"
import { Register } from "../components/register"

export default function Home() {
  return (
    <main className=" pb-20 md:pb-0 min-h-screen  bg-gradient-to-b from-background to-muted p-4">
      <a className="absolute top-0 right-0 p-4 text-sm text-muted-foreground" target="_blank" href="https://github.com/nermalcat69/minimal-waitlist">Source Code</a>
      <div className="container max-w-6xl space-y-12 pt-32 text-center">
        <div className="space-y-4">
        <Register />
          <h1 className="text-4xl pt-5 sm:text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Minimal Waitlist{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative px-2 text-primary">for SaaS</span>
              <Sparkles className="absolute -right-6 -top-1 h-6 w-6 text-neutral-600" />
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-md sm:text-lg text-muted-foreground md:text-xl">
            Minimal waitlist is a simple waitlist for SaaS products. It is built with Next.js and Tailwind CSS.
          </p>
        </div>

        <WaitlistForm />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 pt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border p-1.5 text-left transition-colors"
            >
              <div className="p-4 rounded-md card bg-[#FFF] border hover:-translate-y-[1px]">
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm monospace text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <p>
            Follow me at <a href="https://x.com/nermalcat69" target="_blank" className="text-primary underline">@nermalcat69</a>
          </p>
        </div>
      </div>
    </main>
  )
}

const features = [
  {
    title: 'Discord Webhook',
    description: 'Sends a webhook to your discord channel when someone joins the waitlist.',
  },
  {
    title: 'Rate Limit',
    description: 'Rate limits the requests for each IP address for 1 hour.',
  },
  {
    title: 'Fast & Reliable',
    description: 'Built with Next.js and Tailwind CSS and deployed on Zerops.',
  },
]

