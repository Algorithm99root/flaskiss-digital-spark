
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Rocket } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Upgrade = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // TODO: Backend Integration - Connect this form to a backend API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (subject.trim() && message.trim()) {
      toast({
        title: "Message Submitted",
        description: "Your message has been received. We'll get back to you soon!",
      });
      
      // Reset form
      setSubject('');
      setMessage('');
    } else {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Upgrade Your Flaskiss Experience
            </h1>
            <p className="text-lg text-flaskiss-muted">
              Get access to premium features and personalized support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-flaskiss-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-flaskiss-primary/10 to-flaskiss-accent/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-flaskiss-primary/20 rounded-full">
                    <Rocket className="h-5 w-5 text-flaskiss-primary" />
                  </div>
                  <CardTitle>Pro Plan</CardTitle>
                </div>
                <CardDescription>$49/month</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-primary"></div>
                    </div>
                    <span>Unlimited AI interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-primary"></div>
                    </div>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-primary"></div>
                    </div>
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-flaskiss-accent/20 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-flaskiss-accent/10 to-flaskiss-primary/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-flaskiss-accent/20 rounded-full">
                    <Rocket className="h-5 w-5 text-flaskiss-accent" />
                  </div>
                  <CardTitle>Enterprise Plan</CardTitle>
                </div>
                <CardDescription>Custom Pricing</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-accent/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-accent"></div>
                    </div>
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-accent/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-accent"></div>
                    </div>
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-flaskiss-accent/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-flaskiss-accent"></div>
                    </div>
                    <span>Dedicated support team</span>
                  </li>
                </ul>
                <Button className="w-full bg-flaskiss-accent hover:bg-flaskiss-primary">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Message form */}
          <Card className="border-flaskiss-primary/20 shadow-md max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Have questions about our plans? Send us a message and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's your message about?" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us what you need..." 
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upgrade;
