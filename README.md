# Sarixra - React + Vite Web Application

A modern, fully responsive React web application for Sarixra, a technology-driven company delivering innovative IT solutions. Built with Vite for lightning-fast development and optimized production builds.

## Overview

This is a complete React conversion of the Sarixra website from HTML + Tailwind CSS. It includes all pages, Components, client-side routing, responsive design, and maintains the exact UI design from the original while providing enhanced functionality and better code organization.

## Features

- **Multi-page Application**
  - Home page with hero section and CTA
  - About page with company info and values
  - Services page with offerings and industries
  - Projects portfolio showcase
  - Contact page with contact form
  - 404 Not Found page

- **Responsive Design**
  - Mobile-first approach
  - Seamless experience on all devices
  - Hamburger menu for mobile navigation

- **Interactive Components**
  - Sticky navigation header
  - Contact modal popup
  - Footer with social links
  - Hover effects and animations
  - Form validation

- **Modern Tech Stack**
  - React 18 with Hooks
  - Vite for ultra-fast builds
  - React Router v6+ for routing
  - Tailwind CSS for styling

## Project Structure

```
src/
├── Components/
│   ├── Header.jsx         # Navigation with responsive menu
│   ├── Footer.jsx         # Footer with links and social icons
│   └── ContactModal.jsx   # Contact form modal
├── pages/
│   ├── Home.jsx           # Homepage hero and features
│   ├── About.jsx          # Company information and values
│   ├── Services.jsx       # Services and industries
│   ├── Projects.jsx       # Portfolio showcase
│   ├── Contact.jsx        # Contact page with form
│   └── NotFound.jsx       # 404 error page
├── App.jsx                # Main app with routing
├── main.jsx               # React entry point
└── index.css              # Global Tailwind styles
```

## Installation & Setup

### Prerequisites
- Node.js 14.0 or higher
- npm, yarn, or pnpm package manager

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## Routes & Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, features, call-to-action |
| `/about` | About | Company info, vision, mission, values |
| `/services` | Services | Service offerings and industries served |
| `/projects` | Projects | Portfolio of completed projects |
| `/contact` | Contact | Contact form and company details |
| `*` | 404 | Page not found error |

## Key Components

### Header Component
- Responsive navigation with Sarixra logo
- Desktop menu with hover effects
- Mobile hamburger menu
- "Get Started" CTA button
- Sticky positioning

### Footer Component
- Company branding and description
- Quick links to all pages
- Social media icons
- Copyright information
- Beautiful gradient background

### ContactModal Component
- Form fields: name, email, phone, message
- Form validation
- Success message feedback
- Modal overlay with close button
- Accessible and responsive

### Home Page
- Full-screen hero section with background
- Feature cards highlighting company strengths
- Call-to-action section
- Responsive layout

### Services Page
- Service cards with descriptions
- Industries served section
- Call-to-action section
- Professional grid layout

### About Page
- Company overview and history
- Vision and mission statements
- Core values display
- Company statistics
- Professional imagery

### Projects Page
- Portfolio grid showcase
- Project cards with images and descriptions
- Category labels
- Company statistics
- Case study highlights

### Contact Page
- Full contact form
- Company contact information
- Business hours
- Location details
- Map placeholder

## Customization Guide

### Updating Colors
The app uses a blue color scheme. To customize:
1. Find Tailwind color classes (e.g., `bg-blue-600`, `text-blue-500`)
2. Replace with desired colors (e.g., `bg-red-600`)
3. Update in: Header, Footer, all pages

### Modifying Content
Each page file contains all page-specific content:
- Edit text, headings in individual page files
- Update URLs and links in Components
- Modify form fields in ContactModal and Contact pages

### Changing Images
Image URLs are embedded in Components:
- Hero background: `src/pages/Home.jsx`
- Services/About images: respective page files
- Replace URLs with your own image sources

### Adding New Pages
1. Create new file in `src/pages/NewPage.jsx`
2. Import in `App.jsx`
3. Add route: `<Route path="/new-page" element={<NewPage openModal={openModal} />} />`
4. Add navigation link in `Header.jsx`

## Technologies & Dependencies

### Core
- **React 18** - UI library with hooks
- **React Router v6** - Client-side routing
- **Vite** - Next generation build tool

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwind Plugins** - Additional utilities

### Optional
- **Lucide React** - Icon library (imported but not heavily used)

## Performance Features

- **Vite HMR** - Instant hot module replacement during development
- **Code Splitting** - Automatic route-based code splitting
- **Production Builds** - Optimized and minified bundles
- **Lazy Routes** - Can implement lazy loading for pages

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari 12+, Chrome Mobile)

## Development Tips

- Use `npm run dev` for development with live reload
- Tailwind classes provide all styling - no need for custom CSS
- React DevTools browser extension helps with debugging
- Keep Components focused and reusable
- Use React Router hooks like `useNavigate()`, `useParams()`

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder
```

### Any Static Host
```bash
npm run build
# Upload contents of dist/ folder
```

## Future Enhancements

- Email integration for contact form
- Blog/News section
- Testimonials/Case studies
- SEO optimization
- Analytics integration
- Dark mode theme
- Lazy loading for images
- API integration
- Search functionality

## Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Build issues:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

**Styling not applying:**
- Ensure Tailwind CSS is properly imported in `index.css`
- Check class names match Tailwind syntax
- Rebuild with `npm run dev`

## License

Proprietary - All rights reserved to Sarixra

## Support & Contact

For development inquiries or customization requests, contact the Sarixra development team.

---

Built with ❤️ using React, Vite, and Tailwind CSS
