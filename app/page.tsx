import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurStory from "../components/OurStory";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <MenuSection />
        <OurStory />
      </main>
      <Footer />
    </>
  );
}

export default Home;
