
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-portfolio-blue/10 to-transparent -z-10 rounded-bl-full" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <p className="text-portfolio-blue dark:text-blue-400 font-medium text-lg mb-2 animate-fade-in-up">Hello, I'm</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Dharavath <br />
            Rishik Kumar<span className="text-portfolio-blue dark:text-blue-400">.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
            Full-Stack Developer | Problem Solver | Lifelong Learner
          </p>
          
          <div className="flex space-x-4 mb-8 animate-fade-in-up">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-portfolio-blue text-portfolio-blue dark:border-blue-400 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative animate-fade-in">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-portfolio-blue dark:border-blue-700 rounded-2xl -z-10" />
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl bg-gray-200">
              <img 
                src="/placeholder.svg" 
                alt="Dharavath Rishik Kumar" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1000";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
