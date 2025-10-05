import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function WaitlistPage() {
  return (
    <div className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">Join the Waitlist</h1>
        <p className="text-muted-foreground text-balance">
          Be the first to try Pakistan’s Agentic AI Tax Educational Platform. We’ll notify you when early access opens.
        </p>
        <Card className="p-6">
          {/* Paste your Google Form URL below:
             Example: https://docs.google.com/forms/d/FORM_ID/viewform
          */}
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="https://forms.gle/Kg1L82qAPpALJ1zP8" target="_blank" rel="noopener noreferrer">
              Open Waitlist Form
            </Link>
          </Button>
        </Card>
        <div className="flex items-center justify-center gap-3">
          <Button asChild variant="secondary">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/chat">Try AI Tax Chat</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
