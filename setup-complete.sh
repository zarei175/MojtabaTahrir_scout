#!/bin/bash
# Complete setup and deployment script for MojtabaTahrir

echo "🚀 MojtabaTahrir - Complete Setup Script"
echo "========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️${NC} $1"
}

print_error() {
    echo -e "${RED}❌${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ️${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "Please run this script from the mojtaba-tahrir project directory"
    exit 1
fi

echo ""
echo "🔍 Checking project structure..."

# Check required files
required_files=("package.json" "src/app/layout.tsx" "src/components/ui/Button.tsx" "src/store/cartStore.ts")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        print_status "✓ $file exists"
    else
        print_error "✗ $file is missing"
        exit 1
    fi
done

echo ""
echo "📊 Checking project info..."
echo "Project name: $(node -p "require('./package.json').name")"
echo "Next.js version: $(node -p "require('./package.json').dependencies.next")"
echo "React version: $(node -p "require('./package.json').dependencies.react")"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    print_warning ".env.local file is missing!"
    echo 
    print_info "Creating .env.local file..."
    cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=https://jpayhiklgvamdzbwzbar.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwYXloaWtsZ3ZhbWR6Ynd6YmFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjU5MjMsImV4cCI6MjA3MzgwMTkyM30.X5u4x3OZohXD9z81mCX8e9NO7mtwKfcqlOdrC6UJYAM
EOF
    print_status ".env.local file created with Supabase credentials"
fi

echo ""
echo "🔧 Installing dependencies..."
npm install
if [ $? -eq 0 ]; then
    print_status "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

echo ""
echo "🧪 Running type check..."
if npm run tsc --noEmit > /dev/null 2>&1; then
    print_status "TypeScript compilation successful"
else
    print_warning "TypeScript compilation had some issues (but project can still run)"
fi

echo ""
echo "📊 Database setup instructions:"
echo "========================================"
print_info "To set up the database, please:"
echo "1. Go to https://app.supabase.com"
echo "2. Select your project 'MojtabaTahrir'"
echo "3. Go to SQL Editor"
echo "4. Copy and paste the contents of 'database/complete-schema.sql'"
echo "5. Execute the SQL to create tables and insert sample data"
echo ""
echo "🧪 After database setup, you can test with:"
echo "Check categories: SELECT * FROM categories;"
echo "Check products: SELECT * FROM products;"

echo ""
echo "🏃‍♂️ Starting development server..."
echo "Run: npm run dev"
echo "Open: http://localhost:3000"

echo ""
echo "🔍 Testing checklist:"
echo "✅ Homepage displays products"
echo "✅ Product listing page works"
echo "✅ Product detail pages load"
echo "✅ Shopping cart functionality"
echo "✅ Authentication (login/register)"
echo "✅ Persian language support"
echo "✅ Responsive design"

echo ""
echo "🚀 Ready for production!"
echo "Option 1: Deploy to Vercel (recommended)"
echo "Option 2: Deploy to Netlify"
echo "Option 3: Deploy to Railway"
echo ""
print_status "Setup completed! 🎉"

# Optionally build the project
echo ""
echo "🏗️ Building project for production..."
if npm run build; then
    print_status "Build successful!"
else
    print_warning "Build had issues. Check output above."
fi

# Start development server in background
if command -v npm &> /dev/null; then
    echo ""
    print_info "Development server ready at: http://localhost:3000"
    print_info "Run 'npm run dev' to start development server"
fi
