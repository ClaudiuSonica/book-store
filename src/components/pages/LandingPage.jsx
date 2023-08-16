import "./LandingPage.scss"
import DesktopNav from "../atoms/desktopNav/DesktopNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../molecules/topSlider/TopSlider";

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <DesktopNav />
      </header>
      <main>
        <Hero />
        <TopSlider />
      </main>
    </div>
  )
}

export default LandingPage;