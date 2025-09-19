'use client'

import { useState, useEffect, useCallback } from 'react'
import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase-browser'
import { Product } from '@/types/database'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const supabase = createClient()

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(name, slug)
        `)
        .eq('in_stock', true)
        .order('created_at', { ascending: false })

      if (selectedCategory) {
        query = query.eq('category.name', selectedCategory)
      }

      const { data, error } = await query

      if (error) {
        console.error('Error fetching products:', error)
      } else {
        setProducts(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, supabase])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const categories = [
    'همه',
    'مداد',
    'خودکار',
    'دفتر',
    'پاک‌کن',
    'خط‌کش',
    'ماژیک',
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center font-persian">
          محصولات
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === (category === 'همه' ? '' : category) ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category === 'همه' ? '' : category)}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  category: product.category?.name,
                  inStock: product.in_stock,
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 font-persian">
              {selectedCategory 
                ? `هیچ محصولی در دسته‌بندی "${selectedCategory}" یافت نشد.` 
                : 'هیچ محصولی یافت نشد.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}