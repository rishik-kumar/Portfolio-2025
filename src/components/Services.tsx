
import React from 'react';
import SectionTitle from './SectionTitle';
import { Layout, Code, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout size={36} className="text-portfolio-blue dark:text-blue-400" />,
      title: "UI/UX Design",
      description: "Clean interface design, responsive layouts, usability testing, and intuitive user experiences.",
    },
    {
      icon: <Code size={36} className="text-portfolio-blue dark:text-blue-400" />,
      title: "Web Design & Front-End Development",
      description: "Modern websites with HTML, CSS, JS, React, and cross-browser compatibility.",
    },
    {
      icon: <Server size={36} className="text-portfolio-blue dark:text-blue-400" />,
      title: "Full-Stack Web Development",
      description: "End-to-end solutions with Node.js, REST APIs, and database integration.",
    }
  ];

  return (
    <section id="services">
      <div className="container mx-auto">
        <SectionTitle 
          title="Services" 
          subtitle="What I can do for you"
          align="center"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-portfolio-blue/10 dark:bg-blue-900/20 group-hover:bg-portfolio-blue/20 dark:group-hover:bg-blue-800/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in-up">
          <a 
            href="#contact" 
            className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-blue-800 transition-colors inline-flex items-center gap-2"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
