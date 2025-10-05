import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function HomePage() {
  return (
    <div className="px-4 py-12 md:py-16">
      <section className="mx-auto max-w-4xl text-center space-y-6">
        <p className="inline-block rounded-full bg-muted px-3 py-1 text-xs text-foreground">
          For Startups • Freelancers • SMEs
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
          Pakistan’s First Agentic AI Tax Educational Platform
        </h1>
        <p className="text-balance text-muted-foreground">
          Learn about tax registration, payments, and compliance in Pakistan. Our agentic AI, trained for the local
          context, helps startups, entrepreneurs, freelancers, small businesses, and tech founders navigate confusing
          tax processes— so you can focus on growth and contribute to Pakistan’s GDP.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="/chat">Try AI Tax Chat</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
        </div>
      </section>

      {/* Video section in the middle */}
      <section className="mx-auto mt-12 md:mt-16 max-w-3xl">
        <div className="rounded-lg border bg-card">
          <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
            {/* Paste your YouTube video URL below:
               Example: https://www.youtube.com/embed/VIDEO_ID
               Keep the /embed/ form for best results.
            */}
            <iframe
              title="Platform Overview"
              src="https://www.youtube.com/embed/PwEp6838Zsc" // placeholder YouTube link — replace VIDEO_ID
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Local Context</h3>
          <p className="text-sm text-muted-foreground">Guidance tailored to Pakistan’s tax laws and processes.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Agentic Assistance</h3>
          <p className="text-sm text-muted-foreground">Let the AI reason through steps, forms, and next actions.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Clarity & Confidence</h3>
          <p className="text-sm text-muted-foreground">Reduce confusion and make better tax decisions, faster.</p>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-4xl grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border p-5">
          <h3 className="font-medium mb-1">Who It’s For</h3>
          <p className="text-sm text-muted-foreground">
            Pakistani startups, entrepreneurs, freelancers, small businesses, and tech founders who want clear,
            step-by-step guidance on becoming compliant: from NTN and filer status to sales tax and withholding.
          </p>
        </div>
        <div className="rounded-lg border p-5">
          <h3 className="font-medium mb-1">What You Get</h3>
          <p className="text-sm text-muted-foreground">
            Localized explanations tailored to FBR and IRIS processes, simplified checklists, and an agentic AI that
            reasons through your situation to suggest next actions — reducing confusion and saving time.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto mt-12 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">1) Learn</h3>
            <p className="text-sm text-muted-foreground">
              Read concise guidance for Pakistan’s tax system (FBR, IRIS, NTN).
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">2) Ask</h3>
            <p className="text-sm text-muted-foreground">
              Use the chat UI to clarify steps and requirements for your case.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">3) Act</h3>
            <p className="text-sm text-muted-foreground">
              Follow checklists and next actions to become and stay compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="mx-auto mt-10 max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
        <ul className="grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
          <li>• NTN registration (individuals and sole proprietors)</li>
          <li>• Becoming a filer and benefits</li>
          <li>• Annual returns and wealth statements in IRIS</li>
          <li>• Sales tax registration and thresholds</li>
          <li>• Withholding tax basics for freelancers and SMEs</li>
          <li>• Record keeping, invoices, and compliance tips</li>
        </ul>
      </section>
    </div>
  )
}
