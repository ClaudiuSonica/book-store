import "./LandingPage.scss"
import DesktopNav from "../molecules/desktopNav/DesktopNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../organisms/topSlider/TopSlider";
import RecSlider from "../organisms/recSlider/RecSlider";
import NewsSlider from "../organisms/newsSlider/NewsSlider";
import Cta from "../organisms/cta/Cta";
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