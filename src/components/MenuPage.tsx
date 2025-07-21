import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, Leaf } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import mangoLassi from "@/assets/mango-lassi.jpg";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", count: 24 },
    { id: "wraps", name: "Wraps & Rolls", count: 8 },
    { id: "burgers", name: "Burgers", count: 6 },
    { id: "fries", name: "Loaded Fries", count: 5 },
    { id: "beverages", name: "Beverages", count: 5 },
  ];

  const menuItems = [
    // Wraps & Rolls
    {
      id: 1,
      name: "Chicken Masala Wrap",
      description: "Grilled chicken with spicy masala, onions, and fresh coriander",
      price: "₹149",
      image: heroFood,
      category: "wraps",
      isSpicy: true,
      isNew: false,
      isPopular: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Paneer Tikka Roll",
      description: "Smoky paneer tikka with mint chutney and crispy vegetables",
      price: "₹129",
      image: heroFood,
      category: "wraps",
      isSpicy: false,
      isNew: true,
      isPopular: false,
      rating: 4.6,
      isVeg: true,
    },
    {
      id: 3,
      name: "Egg Bhurji Wrap",
      description: "Spiced scrambled eggs with onions and peppers",
      price: "₹99",
      image: heroFood,
      category: "wraps",
      isSpicy: true,
      isNew: false,
      isPopular: true,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Mutton Keema Roll",
      description: "Spicy minced mutton with fresh herbs and onions",
      price: "₹179",
      image: heroFood,
      category: "wraps",
      isSpicy: true,
      isNew: false,
      isPopular: false,
      rating: 4.7,
    },

    // Burgers
    {
      id: 5,
      name: "Spicy Chicken Burger",
      description: "Juicy chicken patty with spicy mayo, lettuce, and tomato",
      price: "₹129",
      image: chickenBurger,
      category: "burgers",
      isSpicy: true,
      isNew: false,
      isPopular: true,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Veg Aloo Tikki Burger",
      description: "Crispy potato patty with mint chutney and fresh salad",
      price: "₹89",
      image: chickenBurger,
      category: "burgers",
      isSpicy: false,
      isNew: false,
      isPopular: false,
      rating: 4.3,
      isVeg: true,
    },
    {
      id: 7,
      name: "Double Cheese Burger",
      description: "Double chicken patty with cheese, lettuce, and special sauce",
      price: "₹189",
      image: chickenBurger,
      category: "burgers",
      isSpicy: false,
      isNew: true,
      isPopular: false,
      rating: 4.8,
    },

    // Loaded Fries
    {
      id: 8,
      name: "Loaded Cheese Fries",
      description: "Crispy fries loaded with cheese sauce and herbs",
      price: "₹99",
      image: loadedFries,
      category: "fries",
      isSpicy: false,
      isNew: false,
      isPopular: true,
      rating: 4.6,
      isVeg: true,
    },
    {
      id: 9,
      name: "Peri Peri Fries",
      description: "Spicy peri-peri seasoned fries with garlic mayo",
      price: "₹89",
      image: loadedFries,
      category: "fries",
      isSpicy: true,
      isNew: false,
      isPopular: false,
      rating: 4.4,
      isVeg: true,
    },
    {
      id: 10,
      name: "Chicken Loaded Fries",
      description: "Fries topped with spiced chicken pieces and cheese",
      price: "₹149",
      image: loadedFries,
      category: "fries",
      isSpicy: true,
      isNew: true,
      isPopular: false,
      rating: 4.7,
    },

    // Beverages
    {
      id: 11,
      name: "Fresh Mango Lassi",
      description: "Creamy traditional mango lassi made with fresh mangoes",
      price: "₹59",
      image: mangoLassi,
      category: "beverages",
      isSpicy: false,
      isNew: false,
      isPopular: true,
      rating: 4.5,
      isVeg: true,
    },
    {
      id: 12,
      name: "Masala Chai",
      description: "Aromatic spiced tea brewed to perfection",
      price: "₹29",
      image: mangoLassi,
      category: "beverages",
      isSpicy: false,
      isNew: false,
      isPopular: false,
      rating: 4.3,
      isVeg: true,
    },
    {
      id: 13,
      name: "Fresh Lime Soda",
      description: "Refreshing lime soda with mint and rock salt",
      price: "₹39",
      image: mangoLassi,
      category: "beverages",
      isSpicy: false,
      isNew: false,
      isPopular: false,
      rating: 4.2,
      isVeg: true,
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious range of street food favorites, made fresh daily with authentic spices and love
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="food-card group overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {item.isNew && (
                    <Badge className="bg-accent text-white">New</Badge>
                  )}
                  {item.isPopular && (
                    <Badge className="bg-primary text-white">Popular</Badge>
                  )}
                </div>

                {/* Icons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {item.isVeg && (
                    <div className="bg-green-500 p-1 rounded-full">
                      <Leaf className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-500 p-1 rounded-full">
                      <Flame className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current text-yellow-400" />
                  {item.rating}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-dark-brown mb-2 line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    {item.price}
                  </span>
                  <Button variant="cta" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-soft-beige rounded-2xl">
          <h3 className="text-2xl font-display font-bold text-dark-brown mb-4">
            Can't Decide? Try Our Combo!
          </h3>
          <p className="text-muted-foreground mb-6">
            Get any wrap + fries + drink for just ₹199. Perfect for a complete meal!
          </p>
          <Button variant="hero" size="lg">
            Order Combo Deal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;