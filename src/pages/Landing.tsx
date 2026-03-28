import HeroSection from "../components/HeroSection";
import Existence from "../components/sections/Existence";
import Purpose from "../components/sections/Purpose";
import Navbar from "../layout/NavBar";
import Footer from "../layout/Footer";

import { purposeData } from "../../data/PurposePoints"; // ✅ correct import

export default function Landing() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <Existence />

      {/* ✅ PASS DATA */}
      <Purpose data={purposeData} />

      <Footer />
    </>
  );
}
