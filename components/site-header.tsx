'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-600 bg-clip-text text-transparent">
              TaxEdu.pk
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant={pathname === '/' ? 'default' : 'ghost'}
                className={pathname === '/' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                Home
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                variant={pathname === '/chat' ? 'default' : 'ghost'}
                className={pathname === '/chat' ? 'bg-emerald-600 hover:bg-emerald-700' : ''}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat Assistant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
