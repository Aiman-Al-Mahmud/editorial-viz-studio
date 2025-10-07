import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Sidebar = () => {
  const trending = [
    { title: "Markets Hit Record High Amid Economic Recovery", views: "125K" },
    { title: "Revolutionary AI Breakthrough Changes Healthcare", views: "98K" },
    { title: "Olympic Games: Historic Performances Captivate World", views: "87K" },
    { title: "Sustainable Fashion Movement Gains Global Momentum", views: "76K" },
    { title: "Major Policy Shift in International Relations", views: "65K" },
  ];

  return (
    <aside className="space-y-8">
      {/* Trending */}
      <div className="bg-card border rounded-lg p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-accent" />
          <h3 className="text-xl font-bold font-serif">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {trending.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex items-start gap-3">
                <span className="text-2xl font-bold text-accent">{index + 1}</span>
                <div>
                  <h4 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.views} views</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold font-serif mb-2">Stay Informed</h3>
        <p className="text-sm mb-4 text-primary-foreground/90">
          Get the latest news delivered to your inbox every morning.
        </p>
        <div className="space-y-2">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white text-foreground"
          />
          <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Topics */}
      <div className="bg-card border rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold font-serif mb-4">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          {["Climate Change", "AI & Technology", "Global Economy", "Health", "Culture", "Innovation"].map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
