import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Building2, TrendingUp, CheckCircle2, Rocket, Map, MessageSquare } from 'lucide-react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            Pakistan's First Tax Education Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Master Tax Compliance with{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              TaxEdu.pk
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive guide to becoming an FBR filer. Empowering entrepreneurs, small businesses,
            and tech startups with the knowledge they need to navigate Pakistan's tax system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/chat">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
                <MessageSquare className="w-5 h-5 mr-2" />
                Try Our AI Assistant
              </Button>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckyXNeOCyLQ9bVRu4rFpjY3IN_tfg7itgGSnZ5akbsmv7OJQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive tax education and resources designed for Pakistani businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-emerald-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">FBR Filer Education</CardTitle>
              <CardDescription className="text-base">
                Complete guidance on becoming a registered filer with the Federal Board of Revenue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Step-by-step registration process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Required documents and procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tax filing deadlines and compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-emerald-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Business Registration</CardTitle>
              <CardDescription className="text-base">
                Learn how to register your business, startup, or become an individual filer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Business entity selection guide</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>SECP and FBR registration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tax obligations for businesses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-emerald-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Startup Support</CardTitle>
              <CardDescription className="text-base">
                Specialized tax guidance for tech startups and growing businesses in Pakistan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tax incentives and exemptions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scaling tax compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Growth-stage tax planning</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Vision for the Future
          </h2>
          <p className="text-lg text-gray-600">
            Building the ultimate tax compliance ecosystem for Pakistan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Topic-Wise Guides</h3>
            <p className="text-gray-600">
              Comprehensive guides covering every aspect of tax compliance, from basic registration
              to advanced tax planning strategies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Automation Agent</h3>
            <p className="text-gray-600">
              AI-powered automation for business registration, startup formation, and individual
              tax filer registration with FBR.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-xl border border-emerald-200">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <Map className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Achievement Roadmap</h3>
            <p className="text-gray-600">
              Interactive roadmap for startups to track milestones, understand compliance requirements,
              and follow the right direction for growth.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-emerald-50">
            Chat with our AI assistant to get instant answers about tax compliance in Pakistan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6">
                <MessageSquare className="w-5 h-5 mr-2" />
                Start Chatting Now
              </Button>
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSckyXNeOCyLQ9bVRu4rFpjY3IN_tfg7itgGSnZ5akbsmv7OJQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-emerald-50 text-lg px-8 py-6">
                Join Waitlist for Updates
              </Button>
            </a>
          </div>
          <p className="text-sm text-emerald-100 mt-4">Demo MVP Version</p>
        </div>
      </section>
    </main>
  );
}
