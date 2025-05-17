import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-rehoboth-dark text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-rehoboth-purple text-lg font-semibold mb-2">CONTACT US</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to take your athletic career to the next level? Interested in partnering with our elite roster of talent?
            Our team is ready to discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-rehoboth-dark/50 p-8 rounded-lg border border-rehoboth-purple/20">
            <h4 className="text-2xl font-bold mb-6">Send Us a Message</h4>
            <form 
              action="https://formsubmit.co/abrehamnigus1996@gmail.com" 
              method="POST" 
              className="space-y-6"
            >
              {/* Optional: Prevent spam and redirect after submit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://rehobothathletics.com" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Your name" 
                    required
                    className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
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

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  name="subject"
                  placeholder="Subject of your message" 
                  className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={6}
                  placeholder="Your message"
                  required
                  className="bg-rehoboth-dark border-rehoboth-purple/30 focus:border-rehoboth-purple resize-none" 
                />
              </div>

              <Button type="submit" className="w-full bg-rehoboth-purple hover:bg-rehoboth-purple/90 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-rehoboth-dark/50 p-8 rounded-lg border border-rehoboth-purple/20 mb-8">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
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
                    <p className="font-medium">Visit Us</p>
                    <address className="not-italic text-gray-300">
                      1250 Broadway<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Athletes & Agents CTA */}
            <div className="bg-gradient-to-r from-rehoboth-purple/20 to-rehoboth-dark p-8 rounded-lg border border-rehoboth-purple/30">
              <h4 className="text-2xl font-bold mb-4">For Athletes & Agents</h4>
              <p className="text-gray-300 mb-6">
                Looking for representation or interested in joining our network of sport professionals? 
                We're always looking for exceptional talent.
              </p>
              <Button variant="outline" className="border-rehoboth-silver text-white hover:bg-rehoboth-purple/10 group">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
