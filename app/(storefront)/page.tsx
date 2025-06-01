import { CategoryCard } from "@/components/CategoryCard";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { HomeBanner } from "@/components/HomeBanner";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex items-center gap-4 justify-center md:px-4">
        <HomeBanner />
      </div>
      <div className="flex items-center gap-4 justify-center md:px-4 w-full mt-4">
        <CategoryCard />
      </div>
      <div className="flex flex-col items-center gap-4 justify-center md:px-4 w-full mt-4">
        <h2 className="text-2xl font-bold mb-4 max-w-7xl mx-auto px-4 text-left">
          Featured Products
        </h2>
        <FeaturedProducts />
      </div>
    </div>
  );
}
