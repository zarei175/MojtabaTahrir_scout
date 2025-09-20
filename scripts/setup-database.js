import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jpayhiklgvamdzbwzbar.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYXloaWtsZ3ZhbWR6Ynd6YmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjU5MjMsImV4cCI6MjA3MzgwMTkyM30.X5u4x3OZohXD9z81mCX8e9NO7mtwKfcqlOdrC6UJYAM'

const supabase = createClient(supabaseUrl, supabaseKey)

// Categories data (Persian stationery categories)
const categories = [
  {
    name: 'مداد',
    slug: 'pencils', 
    description: 'مدادهای با کیفیت در انواع مختلف - مداد معمولی، رنگی، مکانیکی',
  },
  {
    name: 'خودکار', 
    slug: 'pens',
    description: 'خودکار برای نوشتن روزانه و حرفه‌ای',
  },
  {
    name: 'دفتر',
    slug: 'notebooks',
    description: 'دفتر مشق، دفترچه یادداشت و جزوه',
  },
  {
    name: 'پاک‌کن',
    slug: 'erasers',
    description: 'پاک‌کن‌های با کیفیت برای پاک کردن تمیز',
  },
  {
    name: 'خط‌کش',
    slug: 'rulers',
    description: 'خط‌کش‌های پلاستیکی و فلزی',
  },
  {
    name: 'خودکار خاص',
    slug: 'premium-pens',
    description: 'خودکارهای ویژه و برند',
  },
  {
    name: 'کاغذ',
    slug: 'papers',
    description: 'کاغذهای A4 و A5',
  },
  {
    name: 'کیف',
    slug: 'bags',
    description: 'کیف‌های مدرسه و اداری',
  },
]

// Sample products data with Persian IRT prices
const products = [
  {
    name: 'مداد رنگی 12 رنگ',
    slug: 'colored-pencils-12',
    description: 'مداد رنگی حرفه‌ای با رنگ‌های شاد و زنده، مناسب برای هنرمندان با رنگ‌دانه‌های غنی و ماندگار',
    price: 85000,
    image: '/images/pencil.jpg',
    categorySlug: 'pencils',
    in_stock: true,
  },
  {
    name: 'خودکار ژل رنگی',
    slug: 'gel-pen-colored',
    description: 'خودکار ژل با جوهر رنگی، نوشتن نرم و روان، بدون نیاز به فشار',
    price: 25000,
    image: '/images/pen.jpg',
    categorySlug: 'pens',
    in_stock: true,
  },
  {
    name: 'دفتر 60 برگ A4',
    slug: 'notebook-a4-60',
    description: 'دفتر با کاغذ فابریکانو، مناسب برای یادداشت‌های مهمه و کنفرانس‌ها',
    price: 45000,
    image: '/images/notebook.jpg',
    categorySlug: 'notebooks',
    in_stock: true,
  },
  {
    name: 'پاک‌کن کوچک',
    slug: 'small-eraser',
    description: 'پاک‌کن نرم، لاستیکی، بدون خراش، پاک کردن تمیز',
    price: 8000,
    image: '/images/eraser.jpg',
    categorySlug: 'erasers',
    in_stock: true,
  },
  {
    name: 'خط‌کش 30 سانتی',
    slug: 'ruler-30cm',
    description: 'خط‌کش پلاستیکی، شفاف، مقاوم، کشیدن خط مستقیم آسان',
    price: 12000,
    image: '/images/pencil.jpg',
    categorySlug: 'rulers',
    in_stock: true,
  },
  {
    name: 'خودکار هایلایت',
    slug: 'highlight-pen',
    description: 'خودکار هایلایت رنگی، هایلایت نرم و یکنواخت، متریال کیفیت بالا',
    price: 18000,
    image: '/images/pen.jpg',
    categorySlug: 'premium-pens',
    in_stock: true,
  },
  {
    name: 'دفترچه یادداشت A5',
    slug: 'notepad-a5',
    description: 'دفترچه جیبی با کاغذ کرک شده، مناسب برای یادداشت‌های روزانه',
    price: 22000,
    image: '/images/notebook.jpg',
    categorySlug: 'notebooks',
    in_stock: true,
  },
  {
    name: 'کاغذ A4 500 برگ',
    slug: 'paper-a4-500',
    description: 'کاغذ A4 پلاس، ۸۰g/m²، بسته ۵۰۰ برگی، مناسب پرینتر و دستی',
    price: 380000,
    image: '/images/notebook.jpg',
    categorySlug: 'papers',
    in_stock: true,
  },
  {
    name: 'مداد تراش مکانیکی',
    slug: 'mechanical-pencil',
    description: 'مداد تراش با سیستم مکانیکی، جوهر غلیظ و ماندگار، مناسب طراحی و نوشتن دقیق',
    price: 65000,
    image: '/images/pencil.jpg',
    categorySlug: 'pencils',
    in_stock: true,
  },
  {
    name: 'خودکار خودنویس فارریک',
    slug: 'fountain-pen-farricar',
    description: 'خودکار خودنویس چند رنگ، دیزاین اروپایی، جوهر با دوام',
    price: 95000,
    image: '/images/pen.jpg',
    categorySlug: 'premium-pens',
    in_stock: true,
  },
  {
    name: 'کیف مدرسه دوشی',
    slug: 'school-bag',
    description: 'کیف دوشی و رو دوشی انگشتی، جیب‌های جانبی ، مقاوم در برابر آب',
    price: 120000,
    image: '/images/notebook.jpg',
    categorySlug: 'bags',
    in_stock: true,
  },
  {
    name: 'دفتر فنوس آبی',
    slug: 'notebook-fanus',
    description: 'دفتر کلاسیک ایرانی با کاغذ فابریکانو ، تخریب ناپذیر در زمان',
    price: 50000,
    image: '/images/notebook.jpg',
    categorySlug: 'notebooks',
    in_stock: true,
  },
  {
    name: 'مداد پاک‌کنموند',
    slug: 'eraser-pencil-blackburn',
    description: 'مداد پاک‌کن آنتی باکتریال، لاستیکی، ایده‌آل برای مداد و خودکار',
    price: 15000,
    image: '/images/eraser.jpg',
    categorySlug: 'erasers',
    in_stock: true,
  },
  {
    name: 'کاغذ پرینتر A4 سفید',
    slug: 'printer-paper-a4',
    description: 'کاغذ A4 با براقیت بالا، مناسب برای پرینترهای جوهرافشان و لیزری',
    price: 420000,
    image: '/images/notebook.jpg',
    categorySlug: 'papers',
    in_stock: true,
  },
  {
    name: 'قلم‌نویس خمیده',
    slug: 'calligraphy-pen',
    description: 'قلم نوک کالیگرافی برای نوشتن‌های نفیس، قلمی شیک و با دوام',
    price: 80000,
    image: '/images/pen.jpg',
    categorySlug: 'premium-pens',
    in_stock: true,
  },
  {
    name: 'تراش چرخشی مداد',
    slug: 'pencil-sharpener-rotary',
    description: 'تراش مداد چرخشی با تنظیمکننده سایز، منظم‌ترین تراش‌ها، تیغه تیز استیل',
    price: 35000,
    image: '/images/pencil.jpg',
    categorySlug: 'pencils',
    in_stock: true,
  },
]

// Function to setup database
async function setupDatabase() {
  try {
    console.log('Starting database setup...')
    
    // Insert categories
    console.log('Inserting categories...')
    for (const category of categories) {
      const { error } = await supabase
        .from('categories')
        .insert(category)
      
      if (error && error.code !== '23505') { // Duplicate key error
        console.error('Error inserting category:', category.name, error)
      }
    }
    console.log('Categories inserted successfully!')
    
    // Get category IDs
    const { data: categoryData, error: categoryError } = await supabase
      .from('categories')
      .select('id, slug')

    if (categoryError) {
      console.error('Error fetching categories:', categoryError)
      return
    }

    const categoryIdMap = new Map(categoryData.map(cat => [cat.slug, cat.id]))

    // Insert products
    console.log('Inserting products...')
    for (const product of products) {
      const categoryId = categoryIdMap.get(product.categorySlug)
      if (!categoryId) {
        console.error('Category not found for product:', product.name)
        continue
      }

      const productData = {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        image: product.image,
        category_id: categoryId,
        in_stock: product.in_stock
      }

      const { error } = await supabase
        .from('products')
        .insert(productData)
      
      if (error && error.code !== '23505') { // Duplicate key error
        console.error('Error inserting product:', product.name, error)
      }
    }
    
    console.log('Products inserted successfully!')
    console.log('Database setup completed!')
    
  } catch (error) {
    console.error('Database setup failed:', error)
  }
}

// Run the setup
setupDatabase()