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
        <MenuSection />
        <OurStory/>
        <WhyChooseUs/>
      <Footer />
    </>
  );
}

export default Home;