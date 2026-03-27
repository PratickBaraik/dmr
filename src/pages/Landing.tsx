import HeroSection from "../components/HeroSection";
import Existence from "../components/sections/Existence";
import Navbar from "../layout/NavBar";
import Footer from "../layout/Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Existence />
      <Footer />
    </>
  );
}
