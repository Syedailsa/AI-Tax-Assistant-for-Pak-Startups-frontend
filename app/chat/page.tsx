"use client"

import type React from "react"
import ReactMarkdown from "react-markdown"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ChatPage() {
  const [question, setQuestion] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "assistant",
          content:
            "Assalam-o-Alaikum! I’m your Tax Education assistant for Pakistan. Ask about NTN, filer status, IRIS, sales tax, or withholding. This is a UI demo — no backend connected.",
        },
      ])
    }
  }, [])

  useEffect(() => {
    viewportRef.current?.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages, loading])

const ask = async (e: React.FormEvent) => {
  e.preventDefault()
  setError(null)
  if (!question.trim()) return
  const q = question.trim()

  setMessages((prev) => [...prev, { role: "user", content: q }])
  setQuestion("")
  setLoading(true)

  try {
    const res = await fetch("http://localhost:8000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_CHAT_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [
          ...messages,
          { role: "user", content: q }
        ].slice(-10) // ✅ send only last 10 messages for context
      }),
    })

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || "API error");
    }

    const data = await res.json();
    const reply = data.reply ?? "No reply from server";
    setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: any) {
      setError(err?.message ?? "Something went wrong");
    }finally {
    // ✅ reset loading so button re-enables and "Thinking..." disappears
    setLoading(false)
    }
  }


  const fillExample = (text: string) => setQuestion(text)

  return (
    <div className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-pretty">AI Tax Education Chat</h1>
          <p className="text-muted-foreground">
            Ask about tax registration, filing, FBR processes, and more in Pakistan. Educational content — not legal
            advice.
          </p>
          <p className="mx-auto max-w-md text-xs rounded-md bg-accent text-accent-foreground px-2 py-1">
            demo only — Sending a message will show reply based on limited information agent has trained on.
          </p>
        </header>

        <Card className="grid h-[70vh] grid-rows-[1fr,auto]">
          <div ref={viewportRef} className="overflow-y-auto p-4">
            <div className="mx-auto flex max-w-2xl flex-col gap-3">
              {messages.length === 0 && !loading && (
                <div className="text-center text-sm text-muted-foreground">
                  Start a conversation. Example topics: NTN registration, filer status, withholding, sales tax, IRIS
                  portal.
                </div>
              )}
              {messages.map((m, i) => {
                const isUser = m.role === "user"
                return (
                  <div
                    key={i}
                    className={`whitespace-pre-wrap max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      isUser ? "ml-auto bg-primary text-primary-foreground" : "mr-auto bg-muted text-foreground"
                    }`}
                    role="group"
                    aria-label={isUser ? "User message" : "Assistant message"}
                  >
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p className="mb-1" {...props} />,
                          strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-1" {...props} />,
                          ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-1" {...props} />,
                          li: ({ node, ...props }) => <li className="mb-0.5" {...props} />,
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                )
              })}
              {loading && <div className="mr-auto max-w-[85%] rounded-2xl bg-muted px-3 py-2 text-sm">Thinking…</div>}
              {error && <p className="text-destructive text-sm">{error}</p>}
            </div>
          </div>

          <form onSubmit={ask} className="border-t bg-background p-3">
            <div className="mx-auto flex max-w-2xl items-end gap-2">
              <Textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., How do I register for NTN as a freelancer?"
                className="min-h-12"
              />
              <Button type="submit" disabled={loading} className="bg-primary text-primary-foreground hover:opacity-90">
                {loading ? "Sending…" : "Send"}
              </Button>
            </div>

            <div className="mx-auto mt-2 flex max-w-2xl flex-wrap gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => fillExample("Steps to become a filer and benefits in Pakistan")}
              >
                Filer steps
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => fillExample("How to register for NTN as a sole proprietor")}
              >
                NTN for sole prop
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => fillExample("Sales tax registration thresholds and process")}
              >
                Sales tax basics
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                onClick={() => fillExample("Withholding tax for freelancers receiving payments")}
              >
                Withholding for freelancers
              </Button>
            </div>

            <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground">
              Educational and demo purposes only. 
            </p>
          </form>
        </Card>
      </div>
    </div>
  )
}
