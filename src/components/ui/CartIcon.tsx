'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { Button } from '@/components/ui/Button'
import { ShoppingCart } from 'lucide-react'

export function CartIcon() {
  const { getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/cart" className="relative">
        <ShoppingCart className="h-4 w-4" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </Link>
    </Button>
  )
}