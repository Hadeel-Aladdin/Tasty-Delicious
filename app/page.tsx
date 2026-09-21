import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurStory from "../components/OurStory";
//import { montez, moonDance, zain, aref } from "./font";

function Home() {
  return (
    <>
      <Header />
      {/*Main Body*/}
      {/*Menu Section*/}
      <HeroSection />
      <WhyChooseUs />
      <MenuSection />
      <OurStory />
      <Footer />
    </>
  );
}

export default Home;