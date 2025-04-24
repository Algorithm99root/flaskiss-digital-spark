
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Search, Settings, FileCode } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "SEO Optimization",
      description: "Boost your online visibility with our AI-powered SEO tools that analyze your content and provide actionable recommendations.",
      icon: Search,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      prices: [
        { name: "Basic Analysis", price: "$50" },
        { name: "Pro Optimization", price: "$120" },
        { name: "Enterprise Solution", price: "$350" },
      ],
    },
    {
      title: "Tool Development",
      description: "Custom browser extensions, utilities, and web tools developed with AI assistance to streamline your workflows.",
      icon: Settings,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      prices: [
        { name: "Browser Extension", price: "$200" },
        { name: "Web Application", price: "$500" },
        { name: "Custom Solution", price: "Custom" },
      ],
    },
    {
      title: "Script Automation",
      description: "Automate repetitive tasks with intelligent scripts and bots. Save time and reduce errors with our solutions.",
      icon: FileCode,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      prices: [
        { name: "Basic Script", price: "$100" },
        { name: "Advanced Automation", price: "$300" },
        { name: "Full Workflow", price: "$750" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-hero-pattern py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Our AI Services
            </h1>
            <p className="text-lg text-flaskiss-text max-w-2xl mx-auto mb-10">
              Discover our range of intelligent AI-powered services designed to transform your digital presence and streamline your workflows.
            </p>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 bg-flaskiss-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  videoUrl={service.videoUrl}
                  prices={service.prices}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-flaskiss-text mb-4">Our Process</h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                We follow a streamlined approach to deliver high-quality AI solutions tailored to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description: "We start by understanding your specific needs and objectives.",
                },
                {
                  step: "2",
                  title: "Analysis",
                  description: "Our AI analyzes your requirements and develops a tailored solution.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "We implement the solution with careful attention to detail.",
                },
                {
                  step: "4",
                  title: "Optimization",
                  description: "Continuous monitoring and refinement ensure optimal results.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-flaskiss-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-flaskiss-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-flaskiss-muted">{step.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block h-1 w-full mt-6 relative">
                      <div className="absolute h-0.5 bg-flaskiss-primary/30 w-full top-1/2 -translate-y-1/2"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our AI services can help your business grow.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-flaskiss-primary hover:bg-gray-100">
              <Link to="/chat">Talk to Our Team</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
