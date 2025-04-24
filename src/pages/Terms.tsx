
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-hero-pattern py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-flaskiss-muted">
              Last updated: April 24, 2025
            </p>
          </div>
        </section>
        
        {/* Terms Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-headings:text-flaskiss-text prose-p:text-flaskiss-muted prose-a:text-flaskiss-primary">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Service Usage Guidelines</h2>
                <p className="mb-4">
                  By using Flaskiss services, you agree to comply with all applicable laws and regulations and to use our services only for lawful purposes.
                </p>
                <p className="mb-4">
                  You may not use our services to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit malicious code or attempt to interfere with our systems</li>
                  <li>Engage in activities that could harm Flaskiss or our users</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate access to our services for users who violate these guidelines.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. User Obligations</h2>
                <p className="mb-4">
                  As a user of Flaskiss services, you are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>Ensuring that any content you provide is accurate and does not infringe on third-party rights</li>
                  <li>Using our services in compliance with our guidelines and applicable laws</li>
                  <li>Promptly notifying us of any unauthorized use of your account</li>
                </ul>
                <p>
                  You acknowledge that you are solely responsible for all activities that occur under your account.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Refund and Payment Terms</h2>
                <p className="mb-4">
                  Payment for Flaskiss services is due at the time of purchase unless otherwise specified in a written agreement.
                </p>
                <p className="mb-4">
                  Our refund policy is as follows:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>For standard services, we offer a 14-day money-back guarantee if you are not satisfied with the service</li>
                  <li>Custom development services are non-refundable once work has begun</li>
                  <li>Subscription services may be canceled at any time, but refunds are not provided for the current billing period</li>
                </ul>
                <p>
                  All prices are subject to change without notice. We will notify subscribers of any price changes before they take effect.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
                <p className="mb-4">
                  To the fullest extent permitted by law, Flaskiss shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-flaskiss-muted">
                  <li>Your use or inability to use our services</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any interruption or cessation of transmission to or from our services</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted through our services</li>
                </ul>
                <p>
                  Our total liability for any claim arising under these terms shall not exceed the amount you paid to us in the past six months.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Modifications to Terms</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. We will provide notice of any material changes by posting the updated terms on our website or by sending you an email.
                </p>
                <p>
                  Your continued use of Flaskiss services after such modifications constitutes your acceptance of the revised terms.
                </p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these terms, please contact us at:
                </p>
                <p>
                  <a href="mailto:legal@flaskiss.com">legal@flaskiss.com</a>
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

export default Terms;
