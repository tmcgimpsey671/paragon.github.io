# Paragon Business Advisors Website

Professional single-page website for Paragon Business Advisors, LLC - Strategic M&A advisory services.

## 🌐 Live Site

- **Production URL**: [https://paragon-business.com](https://paragon-business.com)
- **GitHub Pages URL**: [https://tmcgimpsey671.github.io/paragon.github.io/](https://tmcgimpsey671.github.io/paragon.github.io/)

## 📋 Project Overview

This is a static, single-page responsive website built with pure HTML, CSS, and JavaScript (no build process required). The design is adapted from the metalsmith.io template with a professional color scheme and typography suited for M&A advisory services.

### Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fixed navigation with smooth scrolling
- ✅ Professional color scheme (black, gold, blue accents)
- ✅ Mobile hamburger menu
- ✅ Accessible (WCAG AA compliant)
- ✅ Fast loading (no external dependencies except Google Fonts)
- ✅ SEO optimized

## 📁 File Structure

```
paragon.github.io/
├── index.html           # Main single-page website
├── styles.css           # All CSS styles
├── script.js            # Navigation and interactions
├── assets/
│   └── tom-photo.jfif   # Team photo (user to provide)
├── CNAME                # Custom domain configuration
└── README.md            # This file
```

## 🚀 Deployment Instructions

### Prerequisites

1. GitHub account (tmcgimpsey671)
2. GoDaddy domain: paragon-business.com
3. Tom's professional photo for the Team section

### Step 1: Add Tom's Photo

Before deploying, add Tom McGimpsey's professional photo:

1. Save the photo as `tom-photo.jfif` in the `assets/` folder
2. Recommended specs:
   - Size: 300x300 pixels (minimum 150x150)
   - Format: JPG (optimized for web)
   - File size: ~50KB or less
   - Square aspect ratio (will be displayed as a circle)

### Step 2: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Paragon Business Advisors website"

# Add remote repository
git remote add origin https://github.com/tmcgimpsey671/paragon.github.io.git

# Push to main branch
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to repository settings: https://github.com/tmcgimpsey671/paragon.github.io/settings/pages
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click "Save"
4. GitHub Pages will automatically build and deploy your site

### Step 4: Configure Custom Domain at GoDaddy

#### DNS Configuration

Go to GoDaddy DNS Management and add the following records:

**A Records** (for apex domain):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600

Type: A
Name: @
Value: 185.199.109.153
TTL: 600

Type: A
Name: @
Value: 185.199.110.153
TTL: 600

Type: A
Name: @
Value: 185.199.111.153
TTL: 600
```

**CNAME Record** (for www subdomain):
```
Type: CNAME
Name: www
Value: tmcgimpsey671.github.io
TTL: 600
```

#### Enable Custom Domain on GitHub

1. Go to repository settings: https://github.com/tmcgimpsey671/paragon.github.io/settings/pages
2. Under "Custom domain", enter: `paragon-business.com`
3. Click "Save"
4. Check "Enforce HTTPS" (wait for DNS propagation first, may take 24 hours)

### Step 5: Verify Deployment

1. Wait 5-10 minutes for GitHub Pages to build
2. Wait up to 24 hours for DNS propagation
3. Visit https://paragon-business.com
4. Test all sections and links
5. Test on mobile devices

## 🛠️ Local Development

To preview the site locally:

### Option 1: Python Simple Server
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Direct File
Simply open `index.html` in your web browser (some features like fonts may not load without a server).

## 📝 Content Updates

### Updating Text Content

Edit `index.html` directly. Main sections:

- **Hero Section** (lines 38-51): Tagline and contact info
- **Value Proposition** (lines 55-92): Three highlight cards
- **Services** (lines 97-179): Core service descriptions
- **Team** (lines 184-226): Tom's bio and credentials
- **Markets** (lines 231-248): Industry list
- **Deals** (lines 266-352): Transaction table

### Updating Styles

Edit `styles.css`. Key customizable variables at the top:

```css
:root {
  --color-gold: #daae20;      /* Primary accent color */
  --color-blue: #6ec9dc;      /* Secondary accent */
  --font-headings: 'Antonio'; /* Heading font */
  --font-body: 'TimesNewRoman'; /* Body text font */
}
```

### Adding New Sections

1. Add HTML section in `index.html`
2. Add corresponding styles in `styles.css`
3. Add navigation link in the `<nav>` menu
4. Ensure section has an `id` attribute for smooth scrolling

## 🎨 Design System

### Colors

- **Black**: #262727 (primary text, navigation)
- **Gold**: #daae20 (primary accent, CTAs)
- **Blue**: #6ec9dc (secondary accent, links)
- **Green**: #3eb991 (tertiary accent)
- **Light Gray**: #ededed (section backgrounds)
- **White**: #fefefe (card backgrounds)

### Typography

- **Headings**: Antonio (bold, sans-serif)
- **Body**: TimesNewRoman (serif)
- **Base Size**: 16px mobile, 18px tablet, 20px desktop

### Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

## ♿ Accessibility

The site follows WCAG AA guidelines:

- Semantic HTML5 elements
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA labels on interactive elements
- Sufficient color contrast ratios
- Keyboard navigation support
- Focus visible states
- Alt text on images
- Responsive text sizing

## 📱 Browser Support

Tested and working on:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

## 🔧 Maintenance

### Regular Updates

- **Deal List**: Add new transactions as they close
- **Contact Info**: Update email/phone as needed
- **Bio**: Update credentials and experience

### Performance

Current page weight: ~150KB (including optimized photo)
- HTML: ~15KB
- CSS: ~20KB
- JS: ~5KB
- Photo: ~50KB (when optimized)
- Fonts: ~60KB (Google Fonts)

## 📧 Support

For questions or issues:

- **Email**: tom.mcgimpsey@gmail.com
- **Repository**: https://github.com/tmcgimpsey671/paragon.github.io

## 📄 License

© 2025 Paragon Business Advisors, LLC. All rights reserved.

---

**Built with**: HTML5, CSS3, JavaScript ES6
**Design inspired by**: metalsmith.io template
**Deployed on**: GitHub Pages
**Domain**: GoDaddy DNS → GitHub Pages