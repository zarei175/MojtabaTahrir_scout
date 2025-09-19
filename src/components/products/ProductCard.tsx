import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  slug: string
  category?: string
  inStock?: boolean
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-medium">ناموجود</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="mb-2">
          {product.category && (
            <span className="text-sm text-gray-500 font-persian">{product.category}</span>
          )}
          <h3 className="font-semibold text-lg mt-1 font-persian">{product.name}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 font-persian">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900 font-persian">
              {new Intl.NumberFormat('fa-IR', {
                style: 'currency',
                currency: 'IRR',
                minimumFractionDigits: 0,
              }).format(product.price)}
            </span>
          </div>
          <Button 
            asChild
            size="sm"
            disabled={!product.inStock}
          >
            <Link href={`/products/${product.slug}`}>
              {product.inStock ? 'مشاهده' : 'ناموجود'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}