# مجتبی تحریر | فروشگاه لوازم‌التحریر

فروشگاه آنلاین لوازم‌التحریر مجتبی تحریر - ارائه انواع لوازم‌التحریر با کیفیت و قیمت مناسب

## 🚀 ویژگی‌ها

- ✅ **Next.js 15** با App Router و TypeScript
- ✅ **Tailwind CSS** برای طراحی واکنش‌گرا
- ✅ **Supabase** برای دیتابیس و احراز هویت
- ✅ **Zustand** برای مدیریت وضعیت سبد خرید
- ✅ **فونت فارسی Vazirmatn** برای پشتیبانی از زبان فارسی
- ✅ **کامپوننت‌های قابل استفاده مجدد** با TypeScript
- ✅ **سبد خرید** با قابلیت ذخیره در localStorage
- ✅ **سیستم احراز هویت** کامل با ورود و ثبت‌نام
- ✅ **صفحات محصولات** با فیلتر و جستجو
- ✅ **بهینه‌سازی SEO** برای موتورهای جستجو

## 🛠️ تکنولوژی‌های استفاده شده

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Vazirmatn Font
- **State Management**: Zustand
- **Database & Auth**: Supabase
- **Icons**: Lucide React
- **Package Manager**: npm

## 📦 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js 18 یا بالاتر
- npm یا yarn

### مراحل نصب

1. کلون کردن پروژه:
```bash
git clone <repository-url>
cd mojtaba-tahrir
```

2. نصب وابستگی‌ها:
```bash
npm install
```

3. تنظیم متغیرهای محیطی:
```bash
cp .env.local.example .env.local
```

4. تنظیم متغیرهای Supabase در فایل `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

5. اجرای پروژه در حالت توسعه:
```bash
npm run dev
```

6. باز کردن مرورگر در آدرس [http://localhost:3000](http://localhost:3000)

## 🏗️ ساختار پروژه

```
src/
├── app/                    # صفحات و مسیرهای اصلی (App Router)
│   ├── (auth)/           # صفحات احراز هویت
│   │   ├── login/        # صفحه ورود
│   │   └── register/     # صفحه ثبت‌نام
│   ├── auth/             # کالبک احراز هویت
│   │   └── callback/
│   ├── cart/             # صفحه سبد خرید
│   ├── products/         # صفحات محصولات
│   │   ├── [slug]/       # صفحه جزئیات محصول
│   │   └── page.tsx      # صفحه لیست محصولات
│   ├── layout.tsx        # لایوت اصلی
│   └── page.tsx          # صفحه اصلی
├── components/           # کامپوننت‌های قابل استفاده مجدد
│   ├── ui/              # کامپوننت‌های پایه UI
│   │   ├── Button.tsx
│   │   └── CartIcon.tsx
│   ├── products/        # کامپوننت‌های محصولات
│   │   └── ProductCard.tsx
│   └── Header.tsx       # هدر سایت
├── lib/                 # توابع کمکی و کلاینت‌ها
│   ├── supabase-browser.ts  # کلاینت Supabase برای مرورگر
│   ├── supabase-server.ts   # کلاینت Supabase برای سرور
│   └── utils.ts            # توابع کمکی
├── store/               # مدیریت وضعیت
│   └── cartStore.ts     # استور سبد خرید
└── types/               # تعاریف TypeScript
    └── database.ts      # تایپ‌های دیتابیس
```

## 🎯 کامپوننت‌های اصلی

### Button (`src/components/ui/Button.tsx`)
- کامپوننت دکمه با واریانت‌های مختلف (primary, secondary, outline, ghost)
- پشتیبانی از سایزهای مختلف
- طراحی با استفاده از class-variance-authority

### ProductCard (`src/components/products/ProductCard.tsx`)
- کارت نمایش محصول با تصویر، نام، قیمت و دکمه اقدام
- پشتیبانی از وضعیت موجودی محصول
- طراحی واکنش‌گرا

### Header (`src/components/Header.tsx`)
- هدر سایت با لوگو، منوی ناوبری و سبد خرید
- منوی ریسپانسیو برای موبایل
- آیکون سبد خرید با شمارنده

## 🛒 سبد خرید

سبد خرید با استفاده از Zustand پیاده‌سازی شده و شامل قابلیت‌های زیر است:

- افزودن محصول به سبد
- تغییر تعداد محصول
- حذف محصول از سبد
- محاسبه مجموع قیمت
- ذخیره وضعیت در localStorage
- نمایش آیکون سبد خرید با شمارنده

## 🔐 احراز هویت

سیستم احراز هویت با استفاده از Supabase پیاده‌سازی شده و شامل:

- ورود با ایمیل و رمز عبور
- ثبت‌نام کاربر جدید
- ورود با گوگل (OAuth)
- صفحه کالبک برای احراز هویت
- مدیریت نشست کاربر

## 📱 صفحات

### صفحه اصلی (`src/app/page.tsx`)
- نمایش محصولات ویژه
- دسته‌بندی‌ها
- بخش درباره ما
- طراحی مدرن و جذاب

### صفحه محصولات (`src/app/products/page.tsx`)
- نمایش لیست محصولات
- فیلتر بر اساس دسته‌بندی
- جستجوی محصول
- بارگذاری داینامیک

### صفحه جزئیات محصول (`src/app/products/[slug]/page.tsx`)
- نمایش اطلاعات کامل محصول
- تصویر محصول
- محصولات مرتبط
- نان بردکرامپ

### صفحه سبد خرید (`src/app/cart/page.tsx`)
- نمایش لیست محصولات در سبد
- تغییر تعداد محصولات
- حذف محصول
- محاسبه مجموع قیمت
- دکمه ادامه جهت پرداخت

## 🎨 طراحی

- **رنگ بندی**: طراحی مینیمال و مدرن
- **فونت**: استفاده از فونت Vazirmatn برای زبان فارسی
- **واکنش‌گرایی**: پشتیبانی کامل از دستگاه‌های مختلف
- **تم**: پشتیبانی از حالت تیره و روشن
- **آیکون‌ها**: استفاده از Lucide React

## 🚀 اسکریپت‌ها

```bash
npm run dev          # اجرای سرور توسعه
npm run build        # بیلد پروژه برای تولید
npm run start        # اجرای سرور تولید
npm run lint         # چک کردن کد با ESLint
```

## 📝 متغیرهای محیطی

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🤝 توسعه

برای توسعه پروژه:

1. ایجاد شاخه جدید از اصلی:
```bash
git checkout -b feature/new-feature
```

2. انجام تغییرات و کامیت:
```bash
git add .
git commit -m "Add new feature"
```

3. پوش به ریپازیتوری:
```bash
git push origin feature/new-feature
```

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است.

## 🙏 تشکر

- [Next.js](https://nextjs.org/) برای فریمورک ری‌اکت
- [Tailwind CSS](https://tailwindcss.com/) برای استایل‌دهی
- [Supabase](https://supabase.com/) برای دیتابیس و احراز هویت
- [Zustand](https://zustand.docs.pmnd.rs/) برای مدیریت وضعیت
- [Lucide](https://lucide.dev/) برای آیکون‌ها

---

**توسعه داده شده با ❤️ برای مجتبی تحریر**