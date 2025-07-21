import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-4">
          <h1 className="text-8xl font-display font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-dark-brown">Page Not Found</h2>
          <p className="text-muted-foreground">
            Oops! The page you're looking for seems to have driven away. 
            Let's get you back to our delicious menu!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/menu">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
