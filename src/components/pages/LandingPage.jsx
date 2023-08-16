import "./LandingPage.scss"
import DesktopNav from "../atoms/desktopNav/DesktopNav";
import Hero from "../molecules/hero/Hero";
import TopSlider from "../molecules/topSlider/TopSlider";
import RecSlider from "../molecules/recSlider/RecSlider";

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <DesktopNav />
      </header>
      <main>
        <Hero />
        <TopSlider />
        <RecSlider />
      </main>
    </div>
  )
}

export default LandingPage;