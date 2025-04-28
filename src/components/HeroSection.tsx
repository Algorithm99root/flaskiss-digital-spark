import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TelegramIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.665 2.286 3.799.575.972 1.13 1.903 1.596 2.665.226.372.542.778.938.778.411-.001.816-.403.816-.814a.52.52 0 0 0-.052-.19c-.443-.898-1.674-2.665-2.441-3.966 1.863.222 3.829.43 5.896.63a.498.498 0 0 0 .461-.148c.282-.334.438-.777.438-1.182 0-.392-.144-.725-.415-.965a.503.503 0 0 0-.461-.148c-1.297.328-2.857.642-4.412.947-.907-1.892-1.851-3.92-2.665-5.666 1.456-.159 3.092-.329 4.829-.5 2.547-.5 5.093-.999 5.093-.999.447-.091.891-.181 1.336-.22z"/>
  </svg>
);

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "AI that Powers Your Digital World";

  useEffect(() => {
    let currentText = '';
    let index = 0;
    
    const typingTimer = setInterval(() => {
      if (!isDeleting) {
        if (index < fullText.length) {
          currentText = fullText.slice(0, index + 1);
          setDisplayText(currentText);
          index++;
        } else {
          setIsDeleting(true);
          index = fullText.length;
        }
      } else {
        if (index > 0) {
          currentText = fullText.slice(0, index - 1);
          setDisplayText(currentText);
          index--;
        } else {
          setIsDeleting(false);
          index = 0;
        }
      }
    }, 100); // Adjust typing speed here (milliseconds)

    return () => clearInterval(typingTimer);
  }, [isDeleting]);

  return (
    <div className="relative overflow-hidden bg-hero-pattern pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-flaskiss-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-flaskiss-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
            {displayText}
            <span className="animate-pulse text-flaskiss-primary">|</span>
          </h1>
          <p className="text-lg md:text-xl text-flaskiss-text mb-8 leading-relaxed">
            Flaskiss delivers intelligent AI-driven services for startups, developers, 
            and digital marketers. Unlock the potential of your digital presence with our 
            cutting-edge solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-flaskiss-primary hover:bg-flaskiss-secondary text-white">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-flaskiss-primary text-flaskiss-primary hover:bg-flaskiss-primary/10">
              <Link to="/upgrade">Get Started</Link>
            </Button>
          </div>
          
          {/* Telegram join animation */}
          <div className="mt-16 mb-8 animate-float">
            <div className="relative max-w-md mx-auto p-6 rounded-xl overflow-hidden bg-gradient-to-r from-[#2AABEE]/90 to-[#229ED9]/90 text-white backdrop-blur-sm shadow-xl transform transition-all hover:scale-105 cursor-pointer">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/10 rounded-full"></div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                  <p className="mb-4 text-white/90">Get updates, tips, and connect with other Flaskiss users!</p>
                  
                  <a 
                    href="https://t.me/flaskiss" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white text-[#229ED9] px-4 py-2 rounded-md font-semibold hover:bg-white/90 transition-colors"
                  >
                    <TelegramIcon />
                    Join on Telegram
                  </a>
                </div>
                
                <div className="hidden md:flex items-center justify-center animate-pulse-slow">
                  <TelegramIcon />
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse delay-100"></div>
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 animate-float">
            <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-white/90 backdrop-blur-sm">
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-flaskiss-primary/20 to-flaskiss-accent/20 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="pt-10 pb-6 px-6">
                <pre className="text-left overflow-x-auto">
                  <code className="text-sm text-flaskiss-text font-mono">
                    <span className="text-flaskiss-primary">import</span> Flaskiss <span className="text-flaskiss-primary">from</span> <span className="text-green-600">'flaskiss-ai'</span>;
                    <br /><br />
                    <span className="text-flaskiss-secondary">// Initialize Flaskiss AI</span>
                    <br />
                    <span className="text-flaskiss-accent">const</span> ai = <span className="text-flaskiss-primary">new</span> Flaskiss();
                    <br /><br />
                    <span className="text-flaskiss-secondary">// Power your digital projects</span>
                    <br />
                    ai.optimize({'{'}
                    <br />
                    &nbsp;&nbsp;seo: <span className="text-green-600">'advanced'</span>,
                    <br />
                    &nbsp;&nbsp;tools: [<span className="text-green-600">'custom'</span>, <span className="text-green-600">'intelligent'</span>],
                    <br />
                    &nbsp;&nbsp;automation: <span className="text-purple-500">true</span>
                    <br />
                    {'}'});
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
