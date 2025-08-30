import React from "react";
import { Heart, Code, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial opacity-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Soumalya Mukherjee
              </span>
            </div>
            <p className="text-slate-300 max-w-xs">
              A passionate Fullstack developer creating beautiful, functional, and user-friendly web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="/projects" className="text-slate-300 hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-slate-300">
              <p>Ready to start a project?</p>
              <p>Let's create something amazing together!</p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-400">
              <span>© {new Date().getFullYear()} Soumalya Mukherjee. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4 text-slate-400">
              <span className="flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> and lots of <Coffee className="h-4 w-4 text-amber-400" />
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400">
              <span>Built with</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
                <span className="text-blue-400">React</span>
              </div>
              <span>&</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
                <span className="text-indigo-400">Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
