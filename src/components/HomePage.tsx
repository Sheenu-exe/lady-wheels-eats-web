import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FloatingElements from "./FloatingElements";
import heroFood from "@/assets/hero-food.jpg";
import foodTruck from "@/assets/food-truck.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import mangoLassi from "@/assets/mango-lassi.jpg";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const popularItems = [
    {
      id: 1,
      name: "Chicken Masala Wrap",
      description: "Grilled chicken with spicy masala and fresh veggies",
      price: "₹149",
      image: heroFood,
      isNew: false,
      isPopular: true,
    },
    {
      id: 2,
      name: "Loaded Cheese Fries",
      description: "Crispy fries loaded with cheese and special sauce",
      price: "₹99",
      image: loadedFries,
      isNew: true,
      isPopular: false,
    },
    {
      id: 3,
      name: "Spicy Chicken Burger",
      description: "Juicy chicken patty with spicy mayo and crisp lettuce",
      price: "₹129",
      image: chickenBurger,
      isNew: false,
      isPopular: true,
    },
    {
      id: 4,
      name: "Fresh Mango Lassi",
      description: "Creamy traditional mango lassi made fresh daily",
      price: "₹59",
      image: mangoLassi,
      isNew: false,
      isPopular: false,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      review: "Amazing taste! The chicken wrap is my favorite. Always fresh and served hot!",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Patil",
      review: "Best food truck in Pune! Great variety and pocket-friendly prices.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sneha Joshi",
      review: "Love the loaded fries! Perfect evening snack with friends.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-cream py-16 md:py-24 overflow-hidden">
        <FloatingElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                <span className="text-gradient">Flavour That</span>
                <span className="text-charcoal block">Rolls With</span>
                <span className="text-bright-red block glow-text">You</span>
              </h1>
              <p className="text-xl text-charcoal/80 max-w-lg leading-relaxed">
                Street Food. Fresh. Local. Loved. 
                Experience the authentic taste of India from our premium mobile kitchen.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Link to="/menu">
                    🍽️ View Menu
                  </Link>
                </Button>
                <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Order on WhatsApp
                </Button>
              </div>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="info-pill">
                  <Clock className="w-4 h-4 mr-2" />
                  11 AM - 10 PM
                </div>
                <div className="info-pill">
                  <MapPin className="w-4 h-4 mr-2" />
                  Kokane Chowk, Pune
                </div>
                <div className="info-pill">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" />
                  4.8★ Rating
                </div>
              </div>
            </div>

            {/* Hero Image with Enhanced Effects */}
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 bg-gradient-premium rounded-full blur-3xl opacity-30 animate-pulse-glow"></div>
                
                {/* Main Image */}
                <div className="relative z-10 tilt-on-hover">
                  <img
                    src={heroFood}
                    alt="Delicious street food"
                    className="w-full h-auto rounded-full shadow-floating"
                  />
                  
                  {/* Decorative Ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-float" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Floating Mini Elements around Image */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-bright-red rounded-full flex items-center justify-center shadow-floating animate-float">
                  <span className="text-white font-bold text-sm">HOT</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-mint-green rounded-full flex items-center justify-center shadow-floating animate-float-slow">
                  <span className="text-white font-bold text-xs text-center">FRESH<br/>DAILY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal">
                About <span className="text-gradient">Lady on Wheels</span>
              </h2>
              <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
                <p>
                  Started with a dream to bring authentic street food to every corner of Pune, 
                  Lady on Wheels is more than just a food truck – it's a celebration of flavors 
                  that remind you of home.
                </p>
                <p>
                  From our premium mobile kitchen, we serve fresh, hot meals made with the finest 
                  ingredients and loads of love. Every dish tells a story of tradition 
                  mixed with innovation.
                </p>
              </div>
              
              {/* Stats with Premium Cards */}
              <div className="grid grid-cols-3 gap-6">
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient">500+</div>
                  <div className="text-sm text-charcoal/70 font-medium">Happy Customers</div>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient">2+</div>
                  <div className="text-sm text-charcoal/70 font-medium">Years Serving</div>
                </div>
                <div className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-gradient">25+</div>
                  <div className="text-sm text-charcoal/70 font-medium">Menu Items</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative tilt-on-hover">
                <img
                  src={foodTruck}
                  alt="Lady on Wheels food truck"
                  className="rounded-3xl shadow-floating w-full h-auto"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-gradient-premium text-white px-4 py-2 rounded-full font-bold shadow-floating">
                  Est. 2022
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-warm rounded-full opacity-10 animate-float-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-mint-green rounded-full opacity-15 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-20 bg-soft-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-6">
              <span className="text-gradient">Popular</span> Items
            </h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
              Our customers' favorites – dishes that keep them coming back for more
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto pb-4 mb-12">
            <div className="flex gap-8 w-max">
              {popularItems.map((item, index) => (
                <Card key={item.id} className="food-card group w-80 flex-shrink-0 relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Enhanced Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.isNew && (
                        <span className="bg-bright-red text-white text-xs px-3 py-1 rounded-full font-bold shadow-floating animate-pulse">
                          ✨ NEW
                        </span>
                      )}
                      {item.isPopular && (
                        <span className="bg-gradient-premium text-white text-xs px-3 py-1 rounded-full font-bold shadow-floating">
                          🔥 POPULAR
                        </span>
                      )}
                    </div>

                    {/* Floating Price Tag */}
                    <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full font-bold text-lg shadow-floating">
                      {item.price}
                    </div>

                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-premium opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-bold text-charcoal mb-3 text-xl">{item.name}</h3>
                    <p className="text-charcoal/70 mb-6 leading-relaxed">{item.description}</p>
                    
                    <Button variant="premium" size="lg" className="w-full">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
              <Link to="/menu">
                View Full Menu <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-warm rounded-full opacity-5 animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-mint-green rounded-full opacity-10 animate-float"></div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-16">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
          
          <div className="relative">
            <Card className="glass-card p-12 shadow-floating hover:shadow-glow transition-all duration-500 tilt-on-hover">
              <CardContent className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-current text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <blockquote className="text-2xl italic text-charcoal/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                <cite className="font-bold text-xl text-gradient">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>
            
            {/* Enhanced testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? "bg-gradient-premium shadow-glow scale-125" 
                      : "bg-muted hover:bg-primary/50 hover:scale-110"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            {/* Background quote marks */}
            <div className="absolute -top-8 -left-8 text-8xl text-primary/10 font-serif">"</div>
            <div className="absolute -bottom-8 -right-8 text-8xl text-primary/10 font-serif rotate-180">"</div>
          </div>
        </div>

        {/* Background Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-yellow-300 rounded-full opacity-10 animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-mint-green rounded-full opacity-15 animate-float"></div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-premium text-white relative overflow-hidden">
        <FloatingElements className="opacity-20" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 glow-text">
            Ready to Order?
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Get your favorite street food delivered fresh and hot. 
            <br />Order now via WhatsApp for instant service!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="glass" size="lg" className="text-xl px-10 py-5 group">
              <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Order on WhatsApp
            </Button>
            <Button asChild variant="glass" size="lg" className="text-xl px-10 py-5">
              <Link to="/contact">
                <MapPin className="w-6 h-6 mr-3" />
                Get Directions
              </Link>
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 glass-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4">Get Exclusive Offers</h3>
            <p className="text-sm opacity-80 mb-6">Be the first to know about new dishes and special deals!</p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <Button variant="glass" size="sm" className="px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Floating CTA Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
      </section>
    </div>
  );
};

export default HomePage;