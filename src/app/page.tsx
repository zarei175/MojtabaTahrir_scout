import { ProductCard } from '@/components/products/ProductCard'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { createClient } from '@/lib/supabase-server'

export default async function Home() {
  const supabase = await createClient()
  
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name, slug)
    `)
    .eq('in_stock', true)
    .order('created_at', { ascending: false })
    .limit(12)

  if (error) {
    console.error('Error fetching products:', error)
  }

  const featuredProducts = products?.slice(0, 6) || []

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-persian">
            فروشگاه لوازم‌التحریر مجتبی تحریر
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-persian">
            بهترین و باکیفیت‌ترین لوازم‌التحریر برای شما
          </p>
          <Button asChild size="lg">
            <Link href="/products">مشاهده محصولات</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 font-persian">
              محصولات ویژه
            </h2>
            <Button asChild variant="outline">
              <Link href="/products">مشاهده همه</Link>
            </Button>
          </div>
          
          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
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
              <p className="text-gray-500 font-persian">هیچ محصولی یافت نشد.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-persian">
            دسته‌بندی‌ها
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'مداد', icon: '✏️' },
              { name: 'خودکار', icon: '🖊️' },
              { name: 'دفتر', icon: '📓' },
              { name: 'پاک‌کن', icon: '🧹' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name}`}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 font-persian">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-persian">
            درباره مجتبی تحریر
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-persian">
            فروشگاه لوازم‌التحریر مجتبی تحریر با سال‌ها تجربه در زمینه تأمین و توزیع لوازم‌التحریر،
            بهترین و باکیفیت‌ترین محصولات را با قیمت‌های مناسب به شما مشتریان عزیز ارائه می‌دهد.
            ما مفتخریم که در کنار شما هستیم تا نیازهای تحریری شما را برآورده کنیم.
          </p>
        </div>
      </section>
    </div>
  )
}