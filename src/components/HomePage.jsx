import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Sparkles, Code, Zap } from "lucide-react";

export default function HomePage({ theme, skills }) {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-sm font-medium text-indigo-600 dark:text-indigo-400"
            >
              <Rocket className="h-4 w-4 animate-bounce" />
              <span>Open to work</span>
              <Sparkles className="h-4 w-4 text-yellow-500" />
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-slate-100">Hi, I'm </span>
                <span className="text-gradient">Soumalya Mukherjee</span>
                <br />
                <span className="text-slate-900 dark:text-slate-100">a budding </span>
                <span className="text-gradient">Fullstack Developer</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                I build responsive, accessible, and delightful full-stack web applications with modern technologies. 
                Passionate about creating complete user experiences from frontend to backend.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/projects" 
                className="btn-primary group"
              >
                View Projects
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="btn-secondary"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">Fresher</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-cyan-500/5"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Code preview */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">portfolio.jsx</span>
                  </div>
                  
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-slate-600 dark:text-slate-300">
                      <span className="text-purple-500">const</span>{" "}
                      <span className="text-blue-500">Portfolio</span> = () => {"{"}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 ml-4">
                      <span className="text-purple-500">return</span> (
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 ml-8">
                      <span className="text-green-500">&lt;Awesome</span>
                      <span className="text-blue-500">/&gt;</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 ml-4">);
                    </div>
                    <div className="text-slate-600 dark:text-slate-300">{"}"};</div>
                  </div>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Continuously learning and improving my technical skills to deliver exceptional results
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">{skill.name}</span>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
