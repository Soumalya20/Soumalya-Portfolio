# 🚀 Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring dark/light theme toggle, smooth animations, and mobile-first design.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Running
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.3
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router DOM 7.8.2
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm
- **Language**: JavaScript (JSX)
- **CSS Processing**: PostCSS, Autoprefixer

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Automatic system preference detection
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎨 **Modern UI/UX** - Beautiful gradients and smooth animations
- ⚡ **Fast Performance** - Optimized with Vite build tool
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible** - ARIA labels and semantic HTML
- 🎭 **Smooth Animations** - Framer Motion powered interactions
- 📱 **Mobile Navigation** - Hamburger menu for mobile devices
- 🎯 **Component-Based** - Modular React architecture
- 🎨 **Custom Hooks** - Theme management and reusable logic

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── HomePage.jsx    # Landing page
│   │   ├── ProjectsPage.jsx # Projects showcase
│   │   ├── AboutPage.jsx   # About section
│   │   ├── ContactPage.jsx # Contact form
│   │   ├── Footer.jsx      # Site footer
│   │   └── ErrorBoundary.jsx # Error handling
│   ├── hooks/              # Custom React hooks
│   │   └── useTheme.js     # Theme management
│   ├── data/               # Centralized data
│   │   └── portfolioData.js # Projects, skills, socials
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## 🎮 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

## 🌐 Live Demo

**Development**: `http://localhost:5173` (after running `npm run dev`)

## 📸 Screenshots

### Desktop View - Light Theme
![Desktop Light Theme](screenshots/desktop-light.png)
*Clean, modern interface with light theme*

### Desktop View - Dark Theme
![Desktop Dark Theme](screenshots/desktop-dark.png)
*Elegant dark theme with gradient accents*

### Mobile View - Light Theme
![Mobile Light Theme](screenshots/mobile-light.png)
*Fully responsive mobile design*

### Mobile View - Dark Theme
![Mobile Dark Theme](screenshots/mobile-dark.png)
*Mobile dark theme with touch-friendly navigation*

### Projects Section
![Projects Section](screenshots/projects.png)
*Interactive project cards with hover effects*

### Skills Section
![Skills Section](screenshots/skills.png)
*Animated skill bars with progress indicators*

## 🔧 Customization

### Adding Projects
Edit `src/data/portfolioData.js`:
```javascript
export const projects = [
  {
    title: "Your Project",
    blurb: "Project description",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "https://demo-link.com",
    code: "https://github.com/username/project"
  }
  // Add more projects...
];
```

### Updating Skills
Edit the skills array in the same file:
```javascript
export const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 }
  // Add more skills...
];
```

### Changing Colors
Modify `tailwind.config.js` for custom color schemes.

## 🚀 Deployment

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### Other Platforms
- **Netlify**: Drag and drop `dist` folder
- **Vercel**: Connect GitHub repository
- **Firebase**: Use Firebase Hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Soumalya Mukherjee** - Fullstack Developer

---

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username in the clone URL above.
