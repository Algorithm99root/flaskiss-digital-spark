
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Chat = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-hero-pattern py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Talk to Us
            </h1>
            <p className="text-lg text-flaskiss-text max-w-2xl mx-auto">
              Have questions about our services? Want to discuss a custom project? Chat with our team or leave us a message.
            </p>
          </div>
        </section>
        
        {/* Chat Section */}
        <section className="py-16 bg-flaskiss-light">
          <div className="container mx-auto px-4">
            <ChatWidget />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-flaskiss-text mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-flaskiss-muted max-w-2xl mx-auto">
                Find answers to common questions about our services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How do your AI SEO tools work?",
                  answer: "Our AI SEO tools analyze your website content, structure, and performance metrics to provide actionable recommendations for improving your search engine rankings. The system uses machine learning to identify patterns and optimization opportunities based on current search engine algorithms.",
                },
                {
                  question: "Can you develop custom tools for my specific industry?",
                  answer: "Absolutely! We specialize in creating custom tools that address the unique challenges of your industry. Our development process starts with a consultation to understand your specific needs and workflows, followed by a tailored solution designed to maximize your efficiency.",
                },
                {
                  question: "How long does it take to develop a custom automation script?",
                  answer: "Development time varies based on the complexity of the automation required. Simple scripts may be completed within a few days, while more complex solutions could take 2-3 weeks. During our initial consultation, we'll provide you with a detailed timeline tailored to your project.",
                },
                {
                  question: "Do you offer ongoing support for your services?",
                  answer: "Yes, we offer various support packages to ensure your solutions continue to perform optimally. These range from basic maintenance to comprehensive managed services, depending on your needs and budget.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-flaskiss-light p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-flaskiss-text mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-flaskiss-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;
