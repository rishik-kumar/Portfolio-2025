
import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-portfolio-blue dark:text-blue-400" />,
      text: "youremail@example.com",
      href: "mailto:youremail@example.com"
    },
    {
      icon: <Phone className="text-portfolio-blue dark:text-blue-400" />,
      text: "+91 XXXXXXXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <Linkedin className="text-portfolio-blue dark:text-blue-400" />,
      text: "linkedin.com/in/yourusername",
      href: "https://linkedin.com/in/yourusername"
    },
    {
      icon: <Github className="text-portfolio-blue dark:text-blue-400" />,
      text: "github.com/yourusername",
      href: "https://github.com/yourusername"
    }
  ];

  return (
    <section id="contact">
      <div className="container mx-auto">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Get in touch for collaborations or inquiries"
          align="center"
        />
        
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 animate-fade-in-up">
            <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out via the form below or through any of my contact channels. 
              I'm always open to discussing new projects, opportunities or partnerships.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-portfolio-blue dark:hover:text-blue-400 transition-colors"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-3 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-border bg-background"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-border bg-background resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-blue-800 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
