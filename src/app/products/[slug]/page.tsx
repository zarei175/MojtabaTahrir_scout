import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase-server'
import { Product } from '@/types/database'

interface ProductDetailPageProps {
  params: {
    slug: string
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('slug', params.slug)
    .single()

  if (error || !product) {
    notFound()
  }

  const { data: relatedProducts } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('category_id', product.category_id)
    .neq('id', product.id)
    .eq('in_stock', true)
    .limit(4)

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900 font-persian">خانه</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-gray-900 font-persian">محصولات</Link>
            </li>
            {product.category && (
              <>
                <li>/</li>
                <li>
                  <Link 
                    href={`/products?category=${product.category.name}`} 
                    className="hover:text-gray-900 font-persian"
                  >
                    {product.category.name}
                  </Link>
                </li>
              </>
            )}
            <li>/</li>
            <li className="text-gray-900 font-persian">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image || '/placeholder-product.png'}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              {product.category && (
                <span className="text-sm text-gray-500 font-persian">
                  {product.category.name}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mt-2 font-persian">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-gray-900 font-persian">
                {new Intl.NumberFormat('fa-IR', {
                  style: 'currency',
                  currency: 'IRR',
                  minimumFractionDigits: 0,
                }).format(product.price)}
              </span>
              {product.in_stock ? (
                <span className="text-green-600 font-medium font-persian">موجود</span>
              ) : (
                <span className="text-red-600 font-medium font-persian">ناموجود</span>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 font-persian">توضیحات محصول</h3>
              <p className="text-gray-600 leading-relaxed font-persian">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full font-persian"
                disabled={!product.in_stock}
              >
                {product.in_stock ? 'افزودن به سبد خرید' : 'ناموجود'}
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-persian">
              محصولات مرتبط
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={relatedProduct.image || '/placeholder-product.png'}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 font-persian">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900 font-persian">
                        {new Intl.NumberFormat('fa-IR', {
                          style: 'currency',
                          currency: 'IRR',
                          minimumFractionDigits: 0,
                        }).format(relatedProduct.price)}
                      </span>
                      <Button asChild size="sm">
                        <Link href={`/products/${relatedProduct.slug}`}>مشاهده</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}