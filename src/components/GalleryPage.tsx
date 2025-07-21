import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroFood from "@/assets/hero-food.jpg";
import foodTruck from "@/assets/food-truck.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import chickenBurger from "@/assets/chicken-burger.jpg";
import mangoLassi from "@/assets/mango-lassi.jpg";

const GalleryPage = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "food", name: "Food" },
    { id: "truck", name: "Food Truck" },
    { id: "customers", name: "Happy Customers" },
    { id: "behind-scenes", name: "Behind the Scenes" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: heroFood,
      alt: "Delicious chicken masala wrap",
      category: "food",
    },
    {
      id: 2,
      src: foodTruck,
      alt: "Lady on Wheels food truck",
      category: "truck",
    },
    {
      id: 3,
      src: loadedFries,
      alt: "Loaded cheese fries",
      category: "food",
    },
    {
      id: 4,
      src: chickenBurger,
      alt: "Spicy chicken burger",
      category: "food",
    },
    {
      id: 5,
      src: mangoLassi,
      alt: "Fresh mango lassi",
      category: "food",
    },
    {
      id: 6,
      src: heroFood,
      alt: "Cooking fresh wraps",
      category: "behind-scenes",
    },
    {
      id: 7,
      src: foodTruck,
      alt: "Serving customers",
      category: "customers",
    },
    {
      id: 8,
      src: loadedFries,
      alt: "Preparing loaded fries",
      category: "behind-scenes",
    },
    // Duplicate images for demo purposes
    {
      id: 9,
      src: chickenBurger,
      alt: "Fresh burger preparation",
      category: "behind-scenes",
    },
    {
      id: 10,
      src: mangoLassi,
      alt: "Making fresh lassi",
      category: "behind-scenes",
    },
    {
      id: 11,
      src: heroFood,
      alt: "Happy customer enjoying wrap",
      category: "customers",
    },
    {
      id: 12,
      src: foodTruck,
      alt: "Food truck at evening",
      category: "truck",
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-brown mb-4">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at our delicious food, happy customers, and behind-the-scenes moments from Lady on Wheels
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-warm transition-all duration-300"
              onClick={() => openLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16 p-8 bg-soft-beige rounded-2xl">
          <h3 className="text-2xl font-display font-bold text-dark-brown mb-4">
            Follow Us on Instagram
          </h3>
          <p className="text-muted-foreground mb-6">
            Stay updated with our latest dishes, offers, and food truck locations
          </p>
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://instagram.com/ladyonwheels" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @ladyonwheels
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;