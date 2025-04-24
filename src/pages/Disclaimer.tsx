
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-hero-pattern py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Disclaimer
            </h1>
            <p className="text-flaskiss-muted">
              Last updated: April 24, 2025
            </p>
          </div>
        </section>
        
        {/* Disclaimer Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-headings:text-flaskiss-text prose-p:text-flaskiss-muted prose-a:text-flaskiss-primary">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. No Guarantee of Specific Results</h2>
                <p className="mb-4">
                  While we strive to provide high-quality AI services that deliver value to our clients, Flaskiss does not guarantee specific results from the use of our services. The effectiveness of our solutions may vary based on numerous factors including, but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>The nature and complexity of your specific requirements</li>
                  <li>The quality and accuracy of data provided</li>
                  <li>Changes in search engine algorithms and digital platforms</li>
                  <li>Industry competition and market conditions</li>
                  <li>Implementation and adherence to our recommendations</li>
                </ul>
                <p>
                  Any examples of results achieved are not intended to represent or guarantee that you will achieve the same or similar results.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. AI Tool Limitations</h2>
                <p className="mb-4">
                  Our AI-powered tools and services have inherent limitations that users should be aware of:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>AI models are trained on historical data and may not account for recent developments or changes</li>
                  <li>AI recommendations are probabilistic in nature and not deterministic</li>
                  <li>Results may require human interpretation and judgment</li>
                  <li>AI tools may exhibit biases present in training data despite our efforts to mitigate them</li>
                  <li>Continuous refinement and adjustment may be necessary as circumstances change</li>
                </ul>
                <p>
                  We continuously work to improve our AI models and systems, but users should be aware of these inherent limitations.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Legal Usage Only</h2>
                <p className="mb-4">
                  Flaskiss services are provided for lawful purposes only. Users are solely responsible for ensuring that their use of our services complies with all applicable laws and regulations.
                </p>
                <p className="mb-4">
                  You agree not to use our services for any illegal or unauthorized purposes, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>Violating intellectual property rights</li>
                  <li>Engaging in deceptive marketing practices</li>
                  <li>Collecting or processing data in violation of privacy laws</li>
                  <li>Any activity that could harm Flaskiss, our users, or the general public</li>
                </ul>
                <p>
                  We reserve the right to terminate service to any user found to be using our services for illegal purposes.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Third-Party Service Disclaimer</h2>
                <p className="mb-4">
                  Our services may integrate with or recommend third-party services, platforms, or tools. Flaskiss does not endorse, warrant, or guarantee the performance of these third-party offerings.
                </p>
                <p className="mb-4">
                  We are not responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>The content, privacy policies, or practices of third-party services</li>
                  <li>Any damage or loss caused by third-party services or tools</li>
                  <li>Changes to third-party APIs or services that may affect our service functionality</li>
                  <li>Any transactions you enter into with third parties through our services</li>
                </ul>
                <p>
                  Users are encouraged to review the terms and policies of any third-party services before use.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Information</h2>
                <p className="mb-4">
                  We make reasonable efforts to ensure that information provided through our services is accurate and up-to-date. However, we cannot guarantee the complete accuracy, reliability, or timeliness of this information.
                </p>
                <p>
                  Users should verify critical information and use professional judgment when acting on recommendations or information provided by our services.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Changes to Services</h2>
                <p className="mb-4">
                  Flaskiss reserves the right to modify, suspend, or discontinue any part of our services at any time without prior notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of our services.
                </p>
                <p>
                  While we strive to minimize disruption, technological advancements and business needs may necessitate changes to our service offerings.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
