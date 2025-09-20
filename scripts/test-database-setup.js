// Test database connection and setup
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jpayhiklgvamdzbwzbar.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYXloaWtsZ3ZhbWR6Ynd6YmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjU5MjMsImV4cCI6MjA3MzgwMTkyM30.X5u4x3OZohXD9z81mCX8e9NO7mtwKfcqlOdrC6UJYAM';

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupCompleteDatabase() {
  console.log('🚀 Starting complete database setup for MojtabaTahrir...');
  
  try {
    // Check if database is already set up
    const { /*data: existingCats,*/ error: existingCatError } = await supabase
      .from('categories')
      .select('count');

    if (existingCatError) {
      console.log('📋 Categories table may not exist yet.');
    } else {
      console.log('✅ Categories table exists.');
    }

    // Test connection by trying to access auth table
    const { /*data: authData,*/ error: authError } = await supabase.auth.getSession();
    
    if (!authError) {
      console.log('✅ Auth service is accessible');
    } else {
      console.log('⚠️ Auth service might have restrictions:', authError.message);
    }

    // Check if products table exists and has data
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id', { count: 'exact' })
      .limit(1);

    if (productsError) {
      console.log('⚠️ Products table may not be fully set up yet');
    } else {
      console.log(`✅ Products table exists with ${products.length} products`);
    }

    // Try to insert a test category and product
    console.log('🧪 Testing data insertion...');
    
    const testCategory = {
      name: 'تست دسته‌بندی',
      slug: 'test-category',
      description: 'دسته‌بندی تستی برای بررسی اتصال دیتابیس'
    };

    const { data: testCat, error: testCatError } = await supabase
      .from('categories')
      .insert(testCategory)
      .select();

    if (testCatError) {
      console.log('⚠️ Test category insertion failed:', testCatError.message);
    } else if (testCat && testCat.length > 0) {
      console.log('✅ Test category inserted successfully:', testCat[0].name);
      
      // Test product insertion
      const testProduct = {
        name: 'محصول تستی',
        slug: 'test-product',
        description: 'محصول تستی برای بررسی عملکرد',
        price: 10000,
        category_id: testCat[0].id,
        in_stock: true
      };

      const { /*data: testProd,*/ error: testProdError } = await supabase
        .from('products')
        .insert(testProduct)
        .select();

      if (testProdError) {
        console.log('⚠️ Test product insertion failed:', testProdError.message);
      } else {
        console.log('✅ Test product inserted successfully');
      }

      // Clean up test data
      await supabase.from('categories').delete().eq('id', testCat[0].id);
      console.log('🧹 Test data cleaned up');
    }

    console.log('🎯 Database setup verification complete!');
    
    // Final status check
    const finalCatCheck = await supabase.from('categories').select('id', { count: 'exact' });
    const finalProdCheck = await supabase.from('products').select('id', { count: 'exact' });
    
    console.log('📊 Final Status:')
    console.log('Categories:', finalCatCheck.count || 0);
    console.log('Products:', finalProdCheck.count || 0);
    
    if ((finalCatCheck.count || 0) > 0 && (finalProdCheck.count || 0) > 0) {
      console.log('✅ Database operational!');
    } else {
      console.log('⚠️ Database ready for initial setup');
    }
    
  } catch (error) {
    console.error('❌ Database setup error:', error.message);
  }
}

// Execute the setup
setupCompleteDatabase();

export { setupCompleteDatabase };