import Link from 'next/link';
import { Mail, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TaxEdu.pk</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Pakistan's first tax education platform for entrepreneurs, small businesses, and tech startups.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🇵🇰</span>
              <span className="text-sm text-gray-400">Made in Pakistan</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-emerald-400 transition-colors">
                  Chat Assistant
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-2 text-sm mb-4">
              <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <a
                href="mailto:TaxEdupk@gmail.com"
                className="hover:text-emerald-400 transition-colors"
              >
                taxedupk@gmail.com
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Have questions? We'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} TaxEdu.pk by{' '}
            <span className="text-emerald-400 font-semibold">Codicup</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
