'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { CartIcon } from '@/components/ui/CartIcon'
import { Menu, X, User } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">م</span>
            </div>
            <span className="text-xl font-bold text-gray-900 font-persian">مجتبی تحریر</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium font-persian"
            >
              خانه
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-gray-900 font-medium font-persian"
            >
              محصولات
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 font-medium font-persian"
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-gray-900 font-medium font-persian"
            >
              تماس با ما
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <CartIcon />
            
            <Link href="/login">
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 ml-2" />
                <span className="hidden sm:inline font-persian">ورود</span>
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-persian"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-persian"
              onClick={() => setIsMenuOpen(false)}
            >
              محصولات
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-persian"
              onClick={() => setIsMenuOpen(false)}
            >
              درباره ما
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-persian"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس با ما
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md font-persian"
              onClick={() => setIsMenuOpen(false)}
            >
              ورود / ثبت‌نام
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}