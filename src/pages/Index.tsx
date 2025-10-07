import Header from "@/components/Header";
import HeroArticle from "@/components/HeroArticle";
import CategorySection from "@/components/CategorySection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

// 🌍 World Images
import worldImage1 from "@/assets/world-network.jpg";
import worldImage2 from "@/assets/united-nations.jpg";
import worldImage3 from "@/assets/global-trade.jpg";


// 💼 Business Images
import businessImage1 from "@/assets/stock-market.jpeg";
import businessImage2 from "@/assets/startup-team.jpg";
import businessImage3 from "@/assets/global-supplychain.jpg";

// 💻 Tech Images
import techImage1 from "@/assets/tech-innovation.jpg";
import techImage2 from "@/assets/quantum-lab.jpg";
import techImage3 from "@/assets/cybersecurity.jpg";

// 🏆 Sports Images
import sportsImage1 from "@/assets/Sports.jpeg";
import sportsImage2 from "@/assets/football-victory.jpg";
import sportsImage3 from "@/assets/olympic-runner.jpg";

// 🌿 Lifestyle Images
import lifestyleImage1 from "@/assets/lifestyle-wellness.jpg";
import lifestyleImage2 from "@/assets/sustainable-living.jpg";
import lifestyleImage3 from "@/assets/farm-to-table.jpg";

// 🏛️ Politics Images
import politicsImage1 from "@/assets/politics-gov.jpg";
import politicsImage2 from "@/assets/election-reform.jpg";
import politicsImage3 from "@/assets/global-summit.jpg";

const Index = () => {
  const worldArticles = [
    {
      image: worldImage1,
      category: "World",
      title: "UN Security Council Reaches Landmark Agreement on Peacekeeping",
      excerpt: "After months of negotiations, member states approve comprehensive reform package aimed at strengthening international peacekeeping operations.",
      author: "James Rodriguez",
      timeAgo: "3 hours ago",
      readTime: "6 min read",
    },
    {
      image: worldImage2,
      category: "World",
      title: "European Union Announces New Digital Privacy Framework",
      excerpt: "Sweeping legislation aims to protect citizen data while fostering innovation in the digital economy across member states.",
      author: "Emma Chen",
      timeAgo: "5 hours ago",
      readTime: "5 min read",
    },
    {
      image: worldImage3,
      category: "World",
      title: "Historic Trade Agreement Signed Between Pacific Nations",
      excerpt: "Regional partnership promises to boost economic cooperation and reduce trade barriers across Asia-Pacific region.",
      author: "Michael Park",
      timeAgo: "7 hours ago",
      readTime: "7 min read",
    },
  ];

  const businessArticles = [
    {
      image: businessImage1,
      category: "Business",
      title: "Stock Markets Surge on Strong Corporate Earnings Reports",
      excerpt: "Major indices reach new highs as tech giants report better-than-expected quarterly results, boosting investor confidence.",
      author: "Rachel Goldman",
      timeAgo: "1 hour ago",
      readTime: "4 min read",
    },
    {
      image: businessImage2,
      category: "Business",
      title: "Startup Revolution: How Small Companies Are Disrupting Industries",
      excerpt: "Young entrepreneurs leverage technology and innovative business models to challenge established market leaders.",
      author: "David Zhang",
      timeAgo: "4 hours ago",
      readTime: "8 min read",
    },
    {
      image: businessImage3,
      category: "Business",
      title: "Global Supply Chains Adapt to New Economic Realities",
      excerpt: "Companies implement resilient strategies to navigate changing international trade landscape and reduce vulnerabilities.",
      author: "Lisa Martinez",
      timeAgo: "6 hours ago",
      readTime: "6 min read",
    },
  ];

  const techArticles = [
    {
      image: techImage1,
      category: "Technology",
      title: "AI Breakthrough Promises Revolutionary Medical Diagnostics",
      excerpt: "New machine learning algorithm demonstrates unprecedented accuracy in early disease detection, potentially saving millions of lives.",
      author: "Dr. Alan Turing",
      timeAgo: "2 hours ago",
      readTime: "7 min read",
    },
    {
      image: techImage2,
      category: "Technology",
      title: "Quantum Computing Reaches Major Milestone in Development",
      excerpt: "Researchers achieve stable quantum state for record duration, bringing practical quantum computers closer to reality.",
      author: "Sarah Johnson",
      timeAgo: "5 hours ago",
      readTime: "9 min read",
    },
    {
      image: techImage3,
      category: "Technology",
      title: "Cybersecurity Experts Warn of Emerging Threats in Cloud Computing",
      excerpt: "As businesses migrate to cloud infrastructure, new vulnerabilities emerge requiring innovative security solutions.",
      author: "Kevin Anderson",
      timeAgo: "8 hours ago",
      readTime: "5 min read",
    },
  ];

  const sportsArticles = [
    {
      image: sportsImage1,
      category: "Sports",
      title: "Olympic Champion Sets New World Record in Dramatic Finale",
      excerpt: "Athletes deliver stunning performances at international championships, rewriting record books and inspiring new generation.",
      author: "Marcus Williams",
      timeAgo: "30 min ago",
      readTime: "4 min read",
    },
    {
      image: sportsImage2,
      category: "Sports",
      title: "Underdog Team Stuns Champions in Historic Upset Victory",
      excerpt: "In one of the greatest sports upsets, lower-ranked team defeats defending champions in thrilling championship match.",
      author: "Jennifer Lee",
      timeAgo: "3 hours ago",
      readTime: "6 min read",
    },
    {
      image: sportsImage3,
      category: "Sports",
      title: "Major League Announces Expansion and New Sustainability Initiatives",
      excerpt: "Sports organization commits to carbon neutrality while expanding global reach with new franchise locations.",
      author: "Tom Bradley",
      timeAgo: "9 hours ago",
      readTime: "5 min read",
    },
  ];

  const lifestyleArticles = [
    {
      image: lifestyleImage1,
      category: "Lifestyle",
      title: "Wellness Trends: How Mindfulness is Transforming Modern Living",
      excerpt: "Growing movement towards conscious living reshapes how people approach work-life balance and mental health.",
      author: "Maya Patel",
      timeAgo: "4 hours ago",
      readTime: "8 min read",
    },
    {
      image: lifestyleImage2,
      category: "Lifestyle",
      title: "Sustainable Living: Small Changes Making Big Environmental Impact",
      excerpt: "Eco-conscious consumers adopt practical habits that reduce carbon footprint while maintaining quality of life.",
      author: "Oliver Green",
      timeAgo: "6 hours ago",
      readTime: "7 min read",
    },
    {
      image: lifestyleImage3,
      category: "Lifestyle",
      title: "Culinary Innovation: Farm-to-Table Movement Goes Mainstream",
      excerpt: "Chefs and consumers embrace locally-sourced ingredients, supporting sustainable agriculture and community economy.",
      author: "Sophie Bernard",
      timeAgo: "10 hours ago",
      readTime: "6 min read",
    },
  ];

  const politicsArticles = [
    {
      image: politicsImage1,
      category: "Politics",
      title: "Bipartisan Coalition Announces Landmark Infrastructure Initiative",
      excerpt: "Political rivals unite behind ambitious plan to modernize national infrastructure and create jobs across regions.",
      author: "Robert Thompson",
      timeAgo: "2 hours ago",
      readTime: "9 min read",
    },
    {
      image: politicsImage2,
      category: "Politics",
      title: "Electoral Reform Debate Intensifies Ahead of Major Elections",
      excerpt: "Lawmakers discuss voting system modernization as citizens demand greater transparency and accessibility.",
      author: "Victoria Adams",
      timeAgo: "5 hours ago",
      readTime: "7 min read",
    },
    {
      image: politicsImage3,
      category: "Politics",
      title: "International Summit Addresses Global Security Challenges",
      excerpt: "World leaders collaborate on strategies to combat terrorism, cyber threats, and promote international stability.",
      author: "Daniel Foster",
      timeAgo: "8 hours ago",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroArticle />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-0">
            <CategorySection title="World" articles={worldArticles} />
            <CategorySection title="Business" articles={businessArticles} />
            <CategorySection title="Technology" articles={techArticles} />
            <CategorySection title="Sports" articles={sportsArticles} />
            <CategorySection title="Lifestyle" articles={lifestyleArticles} />
            <CategorySection title="Politics" articles={politicsArticles} />
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
