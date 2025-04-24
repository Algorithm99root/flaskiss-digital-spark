import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "AI that Powers Your Digital World";

  useEffect(() => {
    let currentText = '';
    let index = 0;
    const typingTimer = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(typingTimer);
      }
    }, 50); // Adjust speed of typing here

    return () => clearInterval(typingTimer);
  }, []);

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
              <Link to="/chat">Start a Chat</Link>
            </Button>
          </div>
          
          <div className="mt-16 animate-float">
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
