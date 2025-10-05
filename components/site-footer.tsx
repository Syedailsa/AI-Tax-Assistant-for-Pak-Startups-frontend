import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-primary text-primary-foreground shadow-inner">
      <div className="mx-auto max-w-5xl px-4 py-6 flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} TaxEdu PK. AI Agent By team Codicup.</p>
        <div className="flex items-center gap-2">
          <Image src="/pk.png" alt="Pakistan Flag" width={20} height={14} className="rounded-sm" />
          <Link href="/" className="text-sm underline-offset-4 hover:underline" aria-label="Back to home">
            Pakistan
          </Link>
        </div>
      </div>
    </footer>
  )
}
