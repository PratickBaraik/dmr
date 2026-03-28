import HeroSection from "../components/HeroSection";
import Existence from "../components/sections/Existence";
import Purpose from "../components/sections/Purpose";
import Navbar from "../layout/NavBar";
import Footer from "../layout/Footer";

import { purposeData } from "../../data/PurposePoints";

/**
 * 🔷 MENU CONFIG (PAGE-SPECIFIC)
 */
const menu = [{ label: "About", href: "/about" }];

export default function Landing() {
  return (
    <>
      {/* ✅ PASS MENU HERE */}
      <Navbar menu={menu} />

      <HeroSection />

      <Existence />

      <Purpose data={purposeData} />

      <Footer />
    </>
  );
}
