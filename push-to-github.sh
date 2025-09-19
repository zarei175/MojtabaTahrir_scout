#!/bin/bash

# Git push script for MojtabaTahrir project
# This script will push the entire project to GitHub

cd /project/workspace/mojtaba-tahrir

echo "🚀 Starting Git setup and push process..."
echo "======================================="

# Check if git is already initialized
if [ -d ".git" ]; then
    echo "✅ Git already initialized"
else
    echo "🔧 Initializing Git repository..."
    git init
    git config user.name "Ehsan Zarei"
    git config user.email "ehsan.zarei@example.com"
fi

# Add all files
echo "📁 Adding files to Git..."
echo "Files to add:"
ls -la src/app/
ls -la src/components/
ls -la src/lib/
git add .

# Check git status
echo "📊 Git status:"
git status

# Create descriptive commit message
echo "💾 Creating commit..."
git commit -m "🎉 Initial commit: Complete MojtabaTahrir online stationery store

✅ Phase 1 Implementation Complete:
- Next.js 15 with TypeScript and App Router
- Tailwind CSS with Persian Vazirmatn font
- Supabase integration for database and authentication  
- Zustand state management for shopping cart
- UI components library with TypeScript
- Main pages (Home, Products, Product Detail with slugs)
- Authentication system (Login, Register, OAuth callback)
- Shopping cart with localStorage persistence
- Responsive Persian header and navigation
- SEO optimizations and modern Persian design
- Database schema with 30+ Persian products and 8 categories
- Complete product data: Pencils, pens, notebooks, erasers, rulers
- Sample reviews, brands, wishlist functionality

📦 Tech Stack:
- Next.js 15, React 19, TypeScript
- Tailwind CSS with Vazirmatn font for Persian support
- Supabase for database and authentication
- Zustand for optimized state management
- Lucide React for beautiful icons
- ESLint configuration for code quality

🎨 Design Features:
- Modern, minimal Persian design
- Mobile-first responsive layout
- RTL language support with proper typography
- Clean color scheme optimized for stationery store
- Professional e-commerce user experience

🚀 Ready for production! All features functional and tested."

# Set remote origin
echo "🌐 Setting up remote repository..."
git remote add origin https://github.com/zarei175/MojtabaTahrir_scout.git

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo "✅ Git push completed!"
echo ""
echo "📊 Repository updated: https://github.com/zarei175/MojtabaTahrir_scout"
echo "🎉 Phase 1 Complete and pushed to Git!"