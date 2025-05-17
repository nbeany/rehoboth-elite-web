import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Check, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-rehoboth-dark text-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="absolute inset-0 bg-rehoboth-dark bg-opacity-90 z-0" />
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

        {/* Main Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-rehoboth-dark/50 p-8 lg:p-10 rounded-lg border border-rehoboth-purple/20">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form
                  action="https://formsubmit.co/abrehamnigus1996@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New contact form submission!" />
                  <input type="hidden" name="_next" value="http://localhost:8080/" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject of your message"
                        required
                        className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-medium">Inquiry Type</label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
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
                      name="message"
                      placeholder="Tell us how we can help you"
                      rows={6}
                      required
                      className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white"
                  >
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

                {/* Global Offices */}
                <div className="bg-gradient-to-r from-rehoboth-purple/20 to-rehoboth-dark p-8 rounded-lg border border-rehoboth-purple/30">
                  <h3 className="text-2xl font-bold mb-4">Global Presence</h3>
                  <p className="text-gray-300 mb-6">
                    In addition to our New York headquarters, Rehoboth International Athletics maintains offices in key markets worldwide to better serve our global roster of athletes and partners.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {["London, UK", "Los Angeles, USA", "Tokyo, Japan", "Sydney, Australia"].map((city) => (
                      <div key={city} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-rehoboth-purple" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 group">
                    <span>View All Locations</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Contact;
