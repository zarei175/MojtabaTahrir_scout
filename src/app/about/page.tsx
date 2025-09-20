export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center font-persian">
          درباره ما
        </h1>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="prose prose-lg max-w-none font-persian">
            <p className="text-gray-700 leading-relaxed">
              فروشگاه لوازم‌التحریر مجتبی تحریر با سال‌ها تجربه در زمینه تأمین و توزیع لوازم‌التحریر،
              بهترین و باکیفیت‌ترین محصولات را با قیمت‌های مناسب به شما مشتریان عزیز ارائه می‌دهد.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">تاریخچه ما</h2>
            <p className="text-gray-700 leading-relaxed">
              ما با هدف ارائه لوازم‌التحریر باکیفیت و متنوع به دانش‌آموزان، دانشجویان و عموم مردم،
              در سال 1380 فعالیت خود را آغاز کردیم. از آن زمان تاکنون، همواره در تلاش بوده‌ایم تا
              نیازهای تحریری شما را با بهترین کیفیت و قیمت مناسب برآورده کنیم.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ماموریت ما</h2>
            <p className="text-gray-700 leading-relaxed">
              ماموریت ما، ارائه لوازم‌التحریر باکیفیت با قیمت‌های منصفانه و ارائه خدمات پس از فروش
              مناسب به مشتریان عزیز است. ما معتقدیم که هر دانش‌آموز و دانشجو شایسته بهترین ابزارها
              برای یادگیری و رشد است.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">تماس با ما</h2>
            <ul className="list-disc pr-5 space-y-2 text-gray-700">
              <li>آدرس: تهران، خیابان ولیعصر، پلاک 123</li>
              <li>تلفن: 23456789-021</li>
              <li>ایمیل: info@mojtabatahrir.com</li>
              <li>ساعات کاری: شنبه تا چهارشنبه از 9 صبح تا 8 شب</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}