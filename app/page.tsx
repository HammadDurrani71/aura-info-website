import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import TeamSection from "@/components/landing/TeamSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#050a18]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TeamSection />
      <Footer />
    </main>
  );
}
