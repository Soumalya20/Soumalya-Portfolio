import React from "react";
import { motion } from "framer-motion";
import { User, Code, Lightbulb, Target, Award, Heart } from "lucide-react";

export default function AboutPage({ theme }) {
  const features = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "I approach challenges with creativity and systematic thinking, always finding the most efficient solutions."
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Constantly exploring new technologies and approaches to deliver cutting-edge solutions."
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on delivering results that exceed expectations and drive business value."
    },
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "Genuinely excited about creating software that makes a difference in people's lives."
    }
  ];

  const stats = [
    { number: "Fresher", label: "Years Experience" },
    { number: "2+", label: "Projects Completed" },
    { number: "24/7", label: "Learning Mindset" }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 dark:from-cyan-950 dark:via-slate-900 dark:to-indigo-950"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A passionate developer with a love for clean code, user experience, and continuous learning
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Hi, I'm <span className="text-gradient">Soumalya</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a self-taught developer transitioning into IT, driven by a passion for creating meaningful digital experiences. 
                My journey began with curiosity and has evolved into a commitment to building software that not only works flawlessly 
                but also delights users.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I believe in the power of clean, maintainable code and user-centered design. Every project I work on is an opportunity 
                to learn something new and push the boundaries of what's possible with modern web technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
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
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-indigo-500/5 to-purple-500/5"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-indigo-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-8 left-6 w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                    Developer & Problem Solver
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Passionate about creating digital solutions that make a difference. 
                    Always learning, always growing.
                  </p>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              What Makes Me <span className="text-gradient">Different</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Beyond technical skills, I bring a unique combination of creativity, problem-solving, and user empathy to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-950/50 dark:to-indigo-950/50 rounded-3xl p-8 border border-cyan-200/50 dark:border-cyan-700/50">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Ready to work together?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate with amazing people. 
              Let's create something extraordinary together!
            </p>
            <a 
              href="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Get In Touch
              <Heart className="h-4 w-4 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
