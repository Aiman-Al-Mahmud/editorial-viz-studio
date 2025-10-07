import ArticleCard from "./ArticleCard";

interface Article {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  timeAgo: string;
  readTime: string;
}

interface CategorySectionProps {
  title: string;
  articles: Article[];
}

const CategorySection = ({ title, articles }: CategorySectionProps) => {
  return (
    <section id={title.toLowerCase()} className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold font-serif text-primary">{title}</h2>
        <a href={`#${title.toLowerCase()}`} className="text-sm font-medium text-accent hover:underline">
          View all →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
