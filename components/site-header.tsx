import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-primary text-primary-foreground shadow-sm">
      
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="logo" width={30} height={14} className="rounded-sm" />
            <Link href="/" className="font-semibold">
              TaxEdu PK
            </Link>
        </div>
        <nav className="flex items-center gap-2">
          <Button
            asChild
            className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20"
          >
            <Link href="/chat">Chat</Link>
          </Button>
          <Button
            asChild
            className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20"
          >
            <Link href="/waitlist">Waitlist</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
