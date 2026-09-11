import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
//import { montez, moonDance, zain, aref } from "./font";

function Home() {
  return (
    <>
      <Header />
      {/*Main Body*/}
      <div className={`flex flex-col flex-1 items-center justify-center bg-cream dark:bg-espresso  text-mustard dark:text-cream pt-20`}>

      {/*Menu Section*/}
        <HeroSection />
        <MenuSection />
        <div id="story" className="bg-cream min-h-[calc(100dvh-5rem)] w-full flex items-center justify-center border-b border-mustard/20">section 3</div>
        <div id="chif-tips" className="bg-cream min-h-[calc(100dvh-5rem)] w-full flex items-center justify-center">section 4</div>
      </div>
      <Footer />
    </>
  );
}

export default Home;