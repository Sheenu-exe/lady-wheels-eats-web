import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      question: "Do you take bulk orders for events?",
      answer: "Yes! We cater for corporate events, parties, and gatherings. Contact us at least 24 hours in advance for bulk orders.",
    },
    {
      question: "What are your operating hours?",
      answer: "We're open from 11:00 AM to 10:00 PM, Monday through Sunday. We might have special holiday hours.",
    },
    {
      question: "Do you have vegetarian options?",
      answer: "Absolutely! We have a variety of delicious vegetarian wraps, burgers, and beverages to choose from.",
    },
    {
      question: "How can I track the food truck location?",
      answer: "Follow our Instagram @ladyonwheels for daily location updates, or call us directly to know our current location.",
    },
    {
      question: "Do you offer home delivery?",
      answer: "Currently, we operate as a food truck at fixed locations. However, you can order via WhatsApp for pickup.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI payments (GPay, PhonePe, Paytm), and card payments for your convenience.",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to place an order? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-display font-bold text-dark-brown mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Kokane Chowk, Pune, Maharashtra 411001<br />
                      (We move around! Call for exact location)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Available during operating hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Quick orders and inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-1">Operating Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Sunday: 11:00 AM - 10:00 PM<br />
                      Last order: 9:30 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      hello@ladyonwheels.com<br />
                      For general inquiries and feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark-brown">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="whatsapp" 
                  className="flex-1"
                  onClick={() => window.open("https://wa.me/919876543210?text=Hi! I'd like to order from Lady on Wheels 🚚", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => window.open("tel:+919876543210")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-display text-dark-brown">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-brown mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-brown mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-brown mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-dark-brown mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold text-dark-brown mb-6 text-center">
            Find Us
          </h2>
          <div className="bg-soft-beige rounded-2xl p-8 text-center">
            <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">
                  Interactive map would be embedded here<br />
                  <span className="text-sm">Kokane Chowk, Pune, Maharashtra</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * Food truck location may vary. Please call us to confirm our current location before visiting.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold text-dark-brown mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-dark-brown mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;