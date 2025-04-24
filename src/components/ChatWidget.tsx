import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ChatWidget = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Welcome to Flaskiss AI Chat. How can I help you today?", isUser: false },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: message, isUser: true }]);
    setIsTyping(true);
    setMessage("");
    
    // Simulate AI response after delay
    setTimeout(() => {
      const responses = [
        "That's a great question about our AI services! We specialize in creating custom solutions for businesses of all sizes.",
        "I'd be happy to tell you more about our SEO optimization tools. What specific aspects are you interested in?",
        "Our script automation services can save you hundreds of hours. Would you like a personalized demo?",
        "Thanks for reaching out! One of our AI specialists will contact you soon to discuss your specific needs.",
        "We offer flexible pricing based on your project requirements. Would you like me to explain our pricing structure?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Live Chat</h2>
        
        <div className="border border-gray-200 rounded-lg h-[400px] flex flex-col">
          {/* Messages Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    msg.isUser
                      ? "bg-flaskiss-primary text-white"
                      : "bg-gray-100 text-flaskiss-text"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-flaskiss-text rounded-lg px-4 py-2">
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse mr-1"></span>
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse mr-1" style={{ animationDelay: "0.2s" }}></span>
                  <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                </div>
              </div>
            )}
          </div>
          
          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <Button onClick={handleSendMessage} className="bg-flaskiss-primary hover:bg-flaskiss-secondary">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
        <p className="text-flaskiss-muted mb-6">
          If you prefer, fill out this form and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>
          <Button type="submit" className="w-full bg-flaskiss-primary hover:bg-flaskiss-secondary">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
