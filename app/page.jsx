import HeroSection from "@/components/home/HeroSection";
import FeaturedCars from "@/components/home/FeaturedCars";
import HowItWorks from "@/components/home/HowItWorks";
import FleetCategories from "@/components/home/FleetCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

export const metadata = {
  title: "Velox Rentals | Premium Car Rental & Chauffeur Services",
  description: "Experience the ultimate in automotive luxury. Rent premium sports cars, SUVs, and luxury sedans with Velox Rentals.",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCars />
      <HowItWorks />
      <FleetCategories />
      <WhyChooseUs />
      <CTABanner />
    </main>
  );
}

export default function Home() {
  return (
    <div style={{ background: "black", color: "white", height: "100vh", padding: "20px" }}>
      <h1>Velox Rentals 🚗</h1>
      <p>إذا شايف هاد الكلام → الموقع شغال 100%</p>
    </div>
  );
}