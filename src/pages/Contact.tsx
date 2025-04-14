
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Check, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-rehoboth-dark">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-white">
          <div className="absolute inset-0 bg-rehoboth-dark bg-opacity-90 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-rehoboth-purple text-lg font-semibold mb-2">CONTACT US</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Start the Conversation</h2>
              <p className="text-xl text-gray-300">
                Whether you're an athlete seeking representation, a brand looking for partnerships, 
                or just want to learn more about Rehoboth International Athletics, we're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Information */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-rehoboth-dark/50 p-8 lg:p-10 rounded-lg border border-rehoboth-purple/20">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input 
                        id="phone" 
                        placeholder="Your phone number" 
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium">Inquiry Type</label>
                    <select 
                      id="inquiry" 
                      className="w-full rounded-md border border-rehoboth-purple/30 bg-rehoboth-dark px-3 py-2"
                    >
                      <option value="">Select an inquiry type</option>
                      <option value="athlete">Athlete Representation</option>
                      <option value="partnership">Brand Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="career">Career Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you" 
                      rows={6}
                      className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple resize-none" 
                    />
                  </div>

                  <Button className="w-full bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-rehoboth-dark/50 p-8 rounded-lg border border-rehoboth-purple/20">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-rehoboth-purple/10 rounded-lg mr-4">
                        <Mail className="h-5 w-5 text-rehoboth-purple" />
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:info@rehobothathletics.com" className="text-rehoboth-purple hover:underline">
                          info@rehobothathletics.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-rehoboth-purple/10 rounded-lg mr-4">
                        <Phone className="h-5 w-5 text-rehoboth-purple" />
                      </div>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <a href="tel:+12125551234" className="text-rehoboth-purple hover:underline">
                          +1 (212) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-rehoboth-purple/10 rounded-lg mr-4">
                        <MapPin className="h-5 w-5 text-rehoboth-purple" />
                      </div>
                      <div>
                        <p className="font-medium">Visit Our Headquarters</p>
                        <address className="not-italic text-gray-300">
                          1250 Broadway<br />
                          New York, NY 10001<br />
                          United States
                        </address>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-rehoboth-purple/10 rounded-lg mr-4">
                        <Clock className="h-5 w-5 text-rehoboth-purple" />
                      </div>
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                        <p className="text-gray-300">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Global Offices Teaser */}
                <div className="bg-gradient-to-r from-rehoboth-purple/20 to-rehoboth-dark p-8 rounded-lg border border-rehoboth-purple/30">
                  <h3 className="text-2xl font-bold mb-4">Global Presence</h3>
                  <p className="text-gray-300 mb-6">
                    In addition to our New York headquarters, Rehoboth International Athletics maintains offices in key 
                    markets worldwide to better serve our global roster of athletes and partners.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-rehoboth-purple" />
                      <span>London, UK</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-rehoboth-purple" />
                      <span>Los Angeles, USA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-rehoboth-purple" />
                      <span>Tokyo, Japan</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-rehoboth-purple" />
                      <span>Sydney, Australia</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 group">
                    <span>View All Locations</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Athletes & Agents CTA */}
                <div className="bg-rehoboth-dark/50 p-8 rounded-lg border border-rehoboth-purple/20">
                  <h3 className="text-xl font-bold mb-4">For Athletes & Agents</h3>
                  <p className="text-gray-300 mb-4">
                    For athlete representation inquiries, please include details about your sport, achievements, and career goals.
                  </p>
                  <p className="text-gray-300 mb-2">
                    For agent partnership opportunities, please contact our talent relations team directly:
                  </p>
                  <a href="mailto:talent@rehobothathletics.com" className="text-rehoboth-purple hover:underline">
                    talent@rehobothathletics.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-rehoboth-dark text-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">Find Us</h3>
            <div className="aspect-[16/9] lg:aspect-[21/9] rounded-lg overflow-hidden border border-rehoboth-purple/20">
              {/* Map iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3539234047027!2d-73.98959!3d40.747402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1ac7%3A0x7e33d1c0e3a9211c!2s1250%20Broadway%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1681688795278!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Rehoboth International Athletics Headquarters"
              ></iframe>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-rehoboth-dark to-rehoboth-dark/90 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
              <p className="text-gray-300">
                Here are answers to some common questions about working with Rehoboth International Athletics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-3">How do I apply for representation?</h4>
                <p className="text-gray-300">
                  Athletes can apply for representation by completing our online application form or by contacting
                  our talent acquisition team directly at talent@rehobothathletics.com.
                </p>
              </div>
              
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-3">What sports do you represent?</h4>
                <p className="text-gray-300">
                  Rehoboth represents athletes across a wide range of sports including track & field, tennis, 
                  soccer, basketball, swimming, golf, and many others.
                </p>
              </div>
              
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-3">How do brand partnerships work?</h4>
                <p className="text-gray-300">
                  We connect brands with athletes whose values and image align with their marketing goals.
                  Our team handles all aspects of the partnership from negotiation to execution.
                </p>
              </div>
              
              <div className="bg-rehoboth-dark/50 p-6 rounded-lg border border-rehoboth-purple/20">
                <h4 className="text-xl font-bold mb-3">What career services do you provide?</h4>
                <p className="text-gray-300">
                  Beyond traditional representation, we offer career planning, personal brand development,
                  media training, financial advice, and post-career transition support.
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

export default Contact;
