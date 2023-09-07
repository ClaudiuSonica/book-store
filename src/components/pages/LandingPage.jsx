import "./LandingPage.scss";
import DesktopNav from "../molecules/desktopNav/DesktopNav";
import MobileNav from "../molecules/mobileNav/MobileNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../organisms/topSlider/TopSlider";
import RecSlider from "../organisms/recSlider/RecSlider";
import NewsSlider from "../organisms/newsSlider/NewsSlider";
import Cta from "../organisms/cta/Cta";
import Footer from "../molecules/footer/Footer";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="container">
        {windowWidth < 768
          ? <MobileNav />
          : <DesktopNav />}
      </header>
      <main className="container">
        <Hero />
        <TopSlider />
        <RecSlider />
        <NewsSlider />
        <Cta />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LandingPage;
