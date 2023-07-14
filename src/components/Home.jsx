import About from "./About";
import AboutMentor from "./AboutMentor";
import Community from "./Community";
import HeroSection from "./HeroSection";
import Message from "./Message";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
      </main>
      <About />
      <AboutMentor />
      <Community />
      <Message />
    </>
  );
}

export default Home;
