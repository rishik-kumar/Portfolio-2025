
import React from 'react';
import SectionTitle from './SectionTitle';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Code Editor",
      description: "Online compiler for C++, Java, Python with real-time code execution and output.",
      technologies: ["Node.js", "Compilex", "Express", "React"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "#",
      demo: "#",
    },
    {
      title: "Accident Severity & Hospital Recommender",
      description: "ML-based system to predict accident severity and recommend nearby hospitals.",
      technologies: ["Python", "Flask", "TensorFlow", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "#",
      demo: "#",
    },
    {
      title: "Liver Disease Prediction",
      description: "Web application to predict liver disease risk based on medical parameters.",
      technologies: ["Django", "ML", "Scikit-learn", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      github: "#",
      demo: "#",
    },
    {
      title: "Credit Card Processing System",
      description: "Secure system for credit card transaction processing and fraud detection.",
      technologies: ["C++", "SQL", "OOP", "Data Structures"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="My recent work and what I've built"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group card overflow-hidden flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden -mx-6 -mt-6 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-portfolio-blue/10 dark:bg-blue-900/20 text-portfolio-blue dark:text-blue-400 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm border border-border rounded flex items-center gap-1.5 hover:bg-secondary transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-sm bg-portfolio-blue text-white rounded flex items-center gap-1.5 hover:bg-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
