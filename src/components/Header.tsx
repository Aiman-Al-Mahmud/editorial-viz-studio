import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const categories = ["World", "Business", "Technology", "Sports", "Lifestyle", "Politics"];

  return (
    <header className="border-b bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4 border-b">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary font-serif">
            Global Chronicle
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search news..." 
                className="border-0 bg-transparent focus-visible:ring-0 w-48"
              />
            </div>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-3">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {category}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
