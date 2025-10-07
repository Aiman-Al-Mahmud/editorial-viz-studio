import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  timeAgo: string;
  readTime: string;
}

const ArticleCard = ({ image, category, title, excerpt, author, timeAgo, readTime }: ArticleCardProps) => {
  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-4 shadow-md">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <Badge variant="secondary" className="mb-2 text-xs">
        {category}
      </Badge>
      <h3 className="text-xl font-bold mb-2 font-serif group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
        {excerpt}
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <span>•</span>
        <span>{timeAgo}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </article>
  );
};

export default ArticleCard;
