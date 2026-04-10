# React + Vite Project Setup

Your clean React + Vite project is ready!

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Visit:** `http://localhost:3000`

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx              # Main app with routes
├── index.css            # Global styles
├── Components/
│   └── Header.jsx       # Navigation
└── pages/
    ├── Home.jsx         # Home page (/)
    ├── About.jsx        # About page (/about)
    └── NotFound.jsx     # 404 page (*)
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Home page |
| `/about` | About | About page |
| `*` | NotFound | 404 Not Found |

## Features

✓ Vite - Fast development and production builds
✓ React 18 - Modern UI library
✓ React Router - Client-side routing
✓ Tailwind CSS - Utility-first styling
✓ Dark/Light mode - Theme toggle
✓ Responsive - Mobile-first design
✓ Lucide Icons - Beautiful icons

## Available Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies

- React 18.x
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React Icons

## Customization

### Add New Routes
Edit `src/App.jsx` and add new routes:
```jsx
<Route path="/new" element={<NewPage />} />
```

### Add New Pages
Create a new file in `src/pages/`:
```jsx
export default function NewPage() {
  return <main>...</main>
}
```

### Styling
- Use Tailwind CSS classes for styling
- Global styles in `src/index.css`
- Dark mode supported via `dark:` prefix

### Header Navigation
Update `src/Components/Header.jsx` to add/remove navigation links.

Enjoy your clean React project!
