'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  category?: string
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
}

export function ProductImage({ 
  src, 
  alt, 
  category,
  fill = false,
  className = '',
  sizes,
  priority = false
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])

  const handleError = () => {
    if (hasError) return // Prevent infinite loop

    setHasError(true)
    
    // انتخاب تصویر پیش‌فرض بر اساس دسته‌بندی محصول
    if (category?.includes('مداد') || category?.includes('pencil')) {
      setImgSrc('/images/pencil.jpg')
    } else if (category?.includes('خودکار') || category?.includes('pen')) {
      setImgSrc('/images/pen.jpg')
    } else if (category?.includes('دفتر') || category?.includes('notebook') || category?.includes('paper')) {
      setImgSrc('/images/notebook.jpg')
    } else if (category?.includes('پاک‌کن') || category?.includes('eraser')) {
      setImgSrc('/images/eraser.jpg')
    } else {
      // تصویر پیش‌فرض عمومی
      setImgSrc('/images/pencil.jpg')
    }
  }

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill={true}
        className={className}
        sizes={sizes}
        priority={priority}
        onError={handleError}
      />
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}