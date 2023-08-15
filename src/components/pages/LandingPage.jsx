import "./LandingPage.scss"
import DesktopNav from "../atoms/desktopNav/DesktopNav";
import Hero from "../molecules/hero/Hero";

const LandingPage = () => {
  return (
    <div className="container">
      <header>
        <DesktopNav />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default LandingPage;