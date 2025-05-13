
import React from 'react';
import SectionTitle from './SectionTitle';
import { Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and work experience"
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-1 bg-portfolio-blue/20 dark:bg-blue-900/30 h-full"></div>
          
          {/* Experience item */}
          <div className="mb-8 ml-12 md:ml-0 animate-fade-in-up">
            <div className="absolute left-4 md:left-1/2 transform -translate-x-4 md:-translate-x-3.5 bg-portfolio-blue dark:bg-blue-600 rounded-full w-7 h-7 flex items-center justify-center">
              <span className="text-white">1</span>
            </div>
            
            <div className="md:w-5/12 md:pr-10 md:float-left md:text-right">
              <h3 className="text-xl font-semibold">Web Application Intern</h3>
              <p className="text-portfolio-blue dark:text-blue-400">Indian Servers Pvt. Ltd.</p>
              <div className="flex items-center mt-2 md:justify-end">
                <Calendar size={16} className="mr-1"/>
                <span className="text-sm text-muted-foreground">Dec 2022 – Feb 2023</span>
              </div>
            </div>
            
            <div className="md:w-5/12 md:pl-10 md:float-right mt-4 md:mt-0">
              <div className="card">
                <h4 className="font-medium mb-3">Key Responsibilities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-portfolio-blue dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span>Conducted VAPT and web security audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-portfolio-blue dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span>Collaborated on implementing security improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-portfolio-blue dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span>Assisted in identifying and resolving vulnerabilities</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
