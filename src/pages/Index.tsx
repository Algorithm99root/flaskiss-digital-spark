
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Settings, FileCode } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost your online visibility with our AI-powered SEO tools. Get ahead of the competition with intelligent keyword analysis and content optimization.",
    },
    {
      icon: Settings,
      title: "Tool Development",
      description:
        "Custom browser extensions, utilities, and web tools developed with AI assistance to streamline your workflows and enhance productivity.",
    },
    {
      icon: FileCode,
      title: "Script Automation",
      description:
        "Automate repetitive tasks with intelligent scripts and bots. Save time and reduce errors with our custom automation solutions.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Flaskiss transformed our digital marketing strategy with their AI-powered SEO tools. We've seen a 40% increase in organic traffic.",
      author: "Maria Rodriguez",
      company: "TechStart Inc.",
    },
    {
      quote:
        "The custom automation scripts developed by Flaskiss have saved our team countless hours of manual work. Highly recommended!",
      author: "David Chen",
      company: "Innovate Solutions",
    },
    {
      quote:
        "Working with Flaskiss was a game-changer for our startup. Their AI tools helped us compete with much larger companies in our space.",
      author: "Sarah Johnson",
      company: "GrowthLab",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* Features Section */}
        <section className="py-20 bg-flaskiss-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-flaskiss-text mb-4">
                Our AI-Powered Services
              </h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                Transforming businesses with intelligent digital solutions that deliver real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-flaskiss-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-flaskiss-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-flaskiss-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-flaskiss-muted mb-6">{feature.description}</p>
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="border-flaskiss-primary text-flaskiss-primary hover:bg-flaskiss-primary/10">
                      <Link to="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-flaskiss-primary hover:bg-flaskiss-secondary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-flaskiss-text mb-4">
                What Our Clients Say
              </h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                Hear from businesses that have transformed their digital presence with Flaskiss.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-flaskiss-light p-8 rounded-xl relative"
                >
                  <div className="absolute top-6 left-6 text-5xl text-flaskiss-primary/20 font-serif">
                    "
                  </div>
                  <p className="relative z-10 italic text-flaskiss-text mb-6">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-flaskiss-text">
                      {testimonial.author}
                    </p>
                    <p className="text-flaskiss-muted text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Digital World?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your journey with Flaskiss AI today and unlock the full potential of your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-flaskiss-primary hover:bg-gray-100">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/chat">Chat With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
