
import React from 'react';
import SectionTitle from './SectionTitle';
import { Code, Database, Layout, Server, Terminal, FileCode, User } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} className="text-portfolio-blue dark:text-blue-400" />,
      skills: ["C++", "Java", "Python", "JavaScript", "SQL", "HTML5/CSS3"]
    },
    {
      title: "Frameworks/Tools",
      icon: <FileCode size={24} className="text-portfolio-blue dark:text-blue-400" />,
      skills: ["Node.js", "Django", "Bootstrap", "Git", "GitHub", "React", "Selenium", "AWS"]
    },
    {
      title: "Databases",
      icon: <Database size={24} className="text-portfolio-blue dark:text-blue-400" />,
      skills: ["MySQL", "PostgreSQL"]
    },
    {
      title: "Design/UX",
      icon: <Layout size={24} className="text-portfolio-blue dark:text-blue-400" />,
      skills: ["Figma", "Adobe XD"]
    },
    {
      title: "Soft Skills",
      icon: <User size={24} className="text-portfolio-blue dark:text-blue-400" />,
      skills: ["Critical Thinking", "Communication", "Problem Solving", "Teamwork", "Adaptability", "Time Management", "Confidence"]
    }
  ];

  return (
    <section id="skills" className="bg-secondary/50">
      <div className="container mx-auto">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4 gap-3">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
