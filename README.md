# Soumalya's React Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light theme toggle
- **Responsive**: Mobile-first responsive design that works on all devices
- **Accessible**: Built with accessibility best practices (ARIA labels, semantic HTML)
- **Performance**: Optimized with React 19 and modern build tools
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Ready**: Meta tags and structured data for better search engine visibility

## 🚀 Tech Stack

- **Frontend**: React 19, React Router DOM
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Your name and title
- Project details
- Skills and proficiency levels
- Social media links

### Styling
- Colors and themes are managed in `src/hooks/useTheme.js`
- Tailwind classes can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`

### Content
- Update the hero section in `src/components/HomePage.jsx`
- Modify the about section in `src/components/AboutPage.jsx`
- Add/remove projects in the data file

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── HomePage.jsx    # Landing page
│   ├── ProjectsPage.jsx # Projects showcase
│   ├── AboutPage.jsx   # About section
│   ├── ContactPage.jsx # Contact form
│   ├── NotFound.jsx    # 404 page
│   ├── ErrorBoundary.jsx # Error handling
│   └── LoadingSpinner.jsx # Loading states
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme management
├── data/               # Static data
│   └── portfolioData.js # Portfolio content
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- ESLint configuration in `eslint.config.js`
- Prettier formatting (recommended)
- Component-based architecture
- Custom hooks for reusable logic

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:
- **Mobile**: Single column layout, optimized touch targets
- **Tablet**: Two-column grid for projects and skills
- **Desktop**: Full-width layout with enhanced spacing

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Color contrast compliance

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Vite settings
3. Deploy with one click

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy from Git

### GitHub Pages
1. Update `vite.config.js` with base path
2. Build and push to `gh-pages` branch

## 📈 Performance

- React 19 with concurrent features
- Code splitting with React Router
- Optimized images and assets
- Lazy loading for better performance
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Portfolio**: [your-portfolio-url]
- **GitHub**: [your-github-url]
- **LinkedIn**: [your-linkedin-url]
- **Email**: [your-email]

---

Built with ❤️ using React and modern web technologies.
