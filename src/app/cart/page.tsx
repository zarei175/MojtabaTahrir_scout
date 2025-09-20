'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { useCartStore } from '@/store/cartStore'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalItems, getTotalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 font-persian">سبد خرید شما خالی است</h3>
            <p className="mt-2 text-sm text-gray-500 font-persian">
              به نظر می‌رسد هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/products">مشاهده محصولات</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-persian">سبد خرید</h1>
          <Button variant="outline" onClick={clearCart}>
            پاک کردن سبد
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.product.image || '/images/pencil.jpg'}
                      alt={item.product.name}
                      fill={true}
                      className="object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg font-persian">{item.product.name}</h3>
                    <p className="text-gray-600 text-sm font-persian">{item.product.description}</p>
                    <p className="text-lg font-bold text-gray-900 mt-2 font-persian">
                      {new Intl.NumberFormat('fa-IR', {
                        style: 'currency',
                        currency: 'IRR',
                        minimumFractionDigits: 0,
                      }).format(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900 font-persian"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x border-gray-300 font-persian">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-900 font-persian"
                      >
                        +
                      </button>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      حذف
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-persian">خلاصه سفارش</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm font-persian">
                  <span>تعداد کل محصولات:</span>
                  <span>{getTotalItems()} کالا</span>
                </div>
                <div className="flex justify-between text-sm font-persian">
                  <span>مجموع قیمت:</span>
                  <span className="font-bold">
                    {new Intl.NumberFormat('fa-IR', {
                      style: 'currency',
                      currency: 'IRR',
                      minimumFractionDigits: 0,
                    }).format(getTotalPrice())}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-persian">
                  <span>هزینه ارسال:</span>
                  <span>رایگان</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-bold font-persian">
                  <span>مبلغ قابل پرداخت:</span>
                  <span className="text-green-600">
                    {new Intl.NumberFormat('fa-IR', {
                      style: 'currency',
                      currency: 'IRR',
                      minimumFractionDigits: 0,
                    }).format(getTotalPrice())}
                  </span>
                </div>
              </div>

              <Button className="w-full font-persian" size="lg">
                ادامه جهت پرداخت
              </Button>

              <div className="mt-4 text-center">
                <Link
                  href="/products"
                  className="text-sm text-indigo-600 hover:text-indigo-500 font-persian"
                >
                  ← بازگشت به فروشگاه
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}