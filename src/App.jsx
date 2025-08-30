import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";

// Custom hooks
import { useTheme } from "./hooks/useTheme";

// Data
import { projects, skills, socials } from "./data/portfolioData";

export default function App() {
  const { dark, setDark, theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.text} min-h-screen font-sans`}> 
      <BrowserRouter>
        <Header dark={dark} setDark={setDark} />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 pt-6">
          <Routes>
            <Route path="/" element={<HomePage theme={theme} skills={skills} />} />
            <Route path="/projects" element={<ProjectsPage theme={theme} projects={projects} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} socials={socials} />} />
            <Route path="*" element={<NotFound theme={theme} />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
