
import React from 'react';
import SectionTitle from './SectionTitle';
import { BookOpen, Calendar, User, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-secondary/50">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my journey"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate and detail-oriented software developer with a strong foundation in computer science 
              and hands-on experience in full-stack development. I thrive on solving real-world problems through 
              clean and efficient code.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in tech has equipped me with a diverse set of skills, from crafting elegant user interfaces 
              to building robust backend systems. I'm constantly learning and exploring new technologies to expand 
              my skillset and create more impactful solutions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-portfolio-blue dark:text-blue-400" size={18} />
                <span>+91 9502800969</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-portfolio-blue dark:text-blue-400" size={18} />
                <a href="mailto:rishikkumar3002@gmail.com" className="hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors">
                  rishikkumar3002@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-portfolio-blue dark:text-blue-400" size={18} />
                <span>Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-portfolio-blue dark:text-blue-400" size={18} />
                <a href="https://github.com/rishik-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors">
                  github.com/rishik-kumar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-portfolio-blue dark:text-blue-400" size={18} />
                <a href="https://www.linkedin.com/in/d-rishik-kumar-045b2b236/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors">
                  linkedin.com/in/d-rishik-kumar-045b2b236
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 animate-fade-in-up">Education</h3>
            <div className="space-y-6">
              <div className="flex gap-4 animate-fade-in-up">
                <div className="mt-1 p-2 bg-portfolio-blue/10 dark:bg-blue-900/20 rounded-full text-portfolio-blue dark:text-blue-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">B.E. in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">CMR Technical Campus</p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <Calendar size={14} />
                    <span>2021 - 2025</span>
                    <span className="mx-2">•</span>
                    <span>GPA: 7.5</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 animate-fade-in-up">
                <div className="mt-1 p-2 bg-portfolio-blue/10 dark:bg-blue-900/20 rounded-full text-portfolio-blue dark:text-blue-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate MPC</h4>
                  <p className="text-sm text-muted-foreground">Narayana Junior College</p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <Calendar size={14} />
                    <span>2019 - 2021</span>
                    <span className="mx-2">•</span>
                    <span>69%</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in-up">
                <div className="mt-1 p-2 bg-portfolio-blue/10 dark:bg-blue-900/20 rounded-full text-portfolio-blue dark:text-blue-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">10th CBSE</h4>
                  <p className="text-sm text-muted-foreground">Greenwood High School</p>
                  <div className="flex items-center gap-1 mt-1 text-sm">
                    <Calendar size={14} />
                    <span>2019</span>
                    <span className="mx-2">•</span>
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4 animate-fade-in-up">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Critical Thinking", "Communication", "Problem Solving", "Teamwork", "Adaptability", "Time Management", "Confidence"].map((skill) => (
                <span key={skill} className="skill-badge animate-fade-in-up">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
