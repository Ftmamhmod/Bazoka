import HeroSection from "./../../combonents/ui/HeroSection";
import ProductCarousel from "./../../combonents/ui/ProductCarousel";

const Home = () => {
  return (
    <div className="flex flex-col gap-32 min-h-screen">
      <main>
        <HeroSection />
      </main>
      <div className="max-w-6xl mx-auto px-4 py-96">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Home;
