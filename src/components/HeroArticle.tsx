import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-global.jpg";

const HeroArticle = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer">
        <img 
          src={heroImage} 
          alt="Global connectivity" 
          className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <Badge className="mb-4 bg-accent text-accent-foreground">Featured Story</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif leading-tight">
            Global Leaders Convene for Historic Climate Summit in Geneva
          </h2>
          <p className="text-lg mb-4 text-white/90 max-w-3xl">
            World leaders from over 150 nations gather to address urgent climate action, 
            proposing unprecedented international cooperation on carbon reduction and sustainable energy.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-medium">Sarah Mitchell</span>
            <span className="text-white/70">•</span>
            <span className="text-white/70">2 hours ago</span>
            <span className="text-white/70">•</span>
            <span className="text-white/70">8 min read</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArticle;
