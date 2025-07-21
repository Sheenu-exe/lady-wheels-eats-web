import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      <section className="relative bg-gradient-cream py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-dark-brown leading-tight">
                Your Favourite
                <span className="text-primary block">Street Food,</span>
                Served Hot & Fresh
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience authentic Indian street food from our mobile kitchen. 
                Fresh ingredients, bold flavors, and the love of home cooking.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg">
                  <Link to="/menu">View Menu</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  <span>11 AM - 10 PM</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>Kokane Chowk, Pune</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-warm rounded-full blur-3xl opacity-20 animate-float"></div>
                <img
                  src={heroFood}
                  alt="Delicious street food"
                  className="relative z-10 w-full h-auto rounded-full shadow-warm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-brown">
                About Lady on Wheels
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Started with a dream to bring authentic street food to every corner of Pune, 
                Lady on Wheels is more than just a food truck – it's a celebration of flavors 
                that remind you of home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our mobile kitchen, we serve fresh, hot meals made with the finest 
                ingredients and loads of love. Every dish tells a story of tradition 
                mixed with innovation.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Menu Items</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={foodTruck}
                alt="Lady on Wheels food truck"
                className="rounded-2xl shadow-soft w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16 bg-soft-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-brown mb-4">
              Popular Items
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our customers' favorites – dishes that keep them coming back for more
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {popularItems.map((item) => (
              <Card key={item.id} className="food-card group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    {item.isNew && (
                      <span className="bg-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                        New
                      </span>
                    )}
                    {item.isPopular && (
                      <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-dark-brown mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="cta" size="lg">
              <Link to="/menu">
                View Full Menu <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-brown mb-12">
            What Our Customers Say
          </h2>
          
          <div className="relative">
            <Card className="p-8 shadow-soft">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "{testimonials[currentTestimonial].review}"
                </blockquote>
                <cite className="font-semibold text-dark-brown">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </CardContent>
            </Card>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get your favorite street food delivered fresh and hot. Order now via WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-dark-brown">
              Order on WhatsApp
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark-brown">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;