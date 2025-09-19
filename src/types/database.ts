export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  slug: string
  category_id?: string
  in_stock: boolean
  created_at: string
  updated_at: string
  category?: Category
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
  updated_at: string
}

export interface CartItem {
  id: string
  product_id: string
  quantity: number
  user_id?: string
  created_at: string
  updated_at: string
  product?: Product
}

export interface User {
  id: string
  email: string
  full_name?: string
  phone?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  user_id: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total_amount: number
  shipping_address: string
  created_at: string
  updated_at: string
  user?: User
  order_items?: OrderItem[]
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
  updated_at: string
  product?: Product
}