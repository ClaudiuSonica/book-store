import "./LandingPage.scss"
import DesktopNav from "../atoms/desktopNav/DesktopNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../molecules/topSlider/TopSlider";
import RecSlider from "../molecules/recSlider/RecSlider";
import NewsSlider from "../molecules/newsSlider/NewsSlider";
import Cta from "../molecules/cta/Cta";
import Footer from "../molecules/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <header className="container">
        <DesktopNav />
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
    </div>
  )
}

export default LandingPage;