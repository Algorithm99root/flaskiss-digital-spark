
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Alexandra Chen",
      role: "Founder & AI Specialist",
      bio: "With over 15 years of experience in AI research and development, Dr. Chen leads our innovation efforts.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "A veteran software architect with a passion for creating elegant solutions to complex problems.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Sophia Rodriguez",
      role: "Head of SEO Services",
      bio: "SEO expert with a proven track record of improving search rankings for major brands.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Flaskiss was founded with a mission to make AI accessible to businesses of all sizes.",
    },
    {
      year: "2020",
      title: "Service Launch",
      description: "Launched our core services: SEO Optimization, Tool Development, and Script Automation.",
    },
    {
      year: "2022",
      title: "Technology Expansion",
      description: "Expanded our AI capabilities with advanced machine learning algorithms and predictive analytics.",
    },
    {
      year: "2024",
      title: "Today",
      description: "Serving clients worldwide with cutting-edge AI solutions that drive business growth.",
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
              About Flaskiss
            </h1>
            <p className="text-lg text-flaskiss-text max-w-2xl mx-auto">
              We're on a mission to empower businesses with intelligent AI solutions that drive growth and innovation.
            </p>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-flaskiss-text mb-4">Our Mission</h2>
                <p className="text-flaskiss-muted mb-6">
                  At Flaskiss, our mission is to democratize access to advanced AI technologies, 
                  enabling businesses of all sizes to leverage intelligent solutions for growth 
                  and innovation. We believe in creating tools that are not just powerful, but 
                  also accessible and easy to use.
                </p>
                <p className="text-flaskiss-muted">
                  We're committed to helping our clients navigate the rapidly evolving digital 
                  landscape with AI-powered solutions that deliver real, measurable results.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-flaskiss-text mb-4">Our Vision</h2>
                <p className="text-flaskiss-muted mb-6">
                  We envision a future where AI is an integral part of every business operation, 
                  providing insights, automating tasks, and driving decisions that lead to 
                  sustainable growth and competitive advantage.
                </p>
                <p className="text-flaskiss-muted">
                  Flaskiss aims to be at the forefront of this transformation, continuously 
                  innovating and refining our AI solutions to meet the evolving needs of our clients 
                  and the broader market.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-flaskiss-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-flaskiss-text mb-4">Our Team</h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                Meet the experts behind Flaskiss who are passionate about bringing AI innovation to your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-flaskiss-text">{member.name}</h3>
                  <p className="text-flaskiss-primary mb-3">{member.role}</p>
                  <p className="text-flaskiss-muted">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-flaskiss-text mb-4">Our Journey</h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                From our founding to the present day, we've been dedicated to advancing AI technology 
                and making it accessible to businesses worldwide.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {timeline.map((event, index) => (
                <div key={index} className="flex mb-8 last:mb-0">
                  <div className="mr-6 relative">
                    <div className="w-12 h-12 rounded-full bg-flaskiss-primary flex items-center justify-center text-white font-bold">
                      {event.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-full -ml-0.5 bg-flaskiss-primary/20"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-semibold text-flaskiss-text mb-2">
                      {event.title}
                    </h3>
                    <p className="text-flaskiss-muted">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section className="py-16 bg-flaskiss-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-flaskiss-text mb-4">Our Technology</h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                We leverage cutting-edge technologies and frameworks to deliver intelligent solutions that drive results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Machine Learning",
                  description: "We use advanced ML algorithms to analyze patterns and generate insights from your data.",
                },
                {
                  title: "Natural Language Processing",
                  description: "Our NLP technologies understand and process human language for better content optimization.",
                },
                {
                  title: "Computer Vision",
                  description: "Computer vision allows our systems to interpret visual content for comprehensive analysis.",
                },
                {
                  title: "Predictive Analytics",
                  description: "Forecast trends and make data-driven decisions with our predictive models.",
                },
                {
                  title: "Automation Frameworks",
                  description: "Streamline repetitive tasks with our robust automation technologies.",
                },
                {
                  title: "Cloud Infrastructure",
                  description: "Scalable, secure cloud solutions ensure your AI tools perform reliably.",
                },
              ].map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-flaskiss-text mb-2">{tech.title}</h3>
                  <p className="text-flaskiss-muted text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can help your business thrive in the digital landscape.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-flaskiss-primary hover:bg-gray-100">
              <Link to="/chat">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
