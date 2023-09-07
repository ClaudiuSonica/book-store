import "./LandingPage.scss";
import DesktopNav from "../molecules/desktopNav/DesktopNav";
import MobileNav from "../molecules/mobileNav/MobileNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../organisms/topSlider/TopSlider";
import RecSlider from "../organisms/recSlider/RecSlider";
import NewsSlider from "../organisms/newsSlider/NewsSlider";
import Cta from "../organisms/cta/Cta";
import Footer from "../molecules/footer/Footer";
import Discount from "../molecules/discount/Discount";
import MobileFooter from "../molecules/mobileFooter/MobileFooter";
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

  const desktopWidth = 768;

  return (
    <>
      <header className="container">
        {windowWidth < desktopWidth ? <MobileNav /> : <DesktopNav />}
      </header>
      <main className="container">
        {windowWidth < desktopWidth ? (
          <NewsSlider />
        ) : (
          <Hero />
        )}
        <TopSlider
          width={windowWidth}
          desktop={desktopWidth}
        />
        <RecSlider
          width={windowWidth}
          desktop={desktopWidth}
        />
        {windowWidth < desktopWidth
          ? <Discount />
          : <NewsSlider />}
        {windowWidth < desktopWidth ?? <Cta />}
      </main>
      <footer>
        {windowWidth < desktopWidth
          ? <MobileFooter />
          : <Footer />}
      </footer>
    </>
  );
};

export default LandingPage;
