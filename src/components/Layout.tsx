import { ReactNode } from "react";
import Navigation from "./Navigation";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>{children}</main>
      <WhatsAppButton />
    </div>
  );
};

export default Layout;