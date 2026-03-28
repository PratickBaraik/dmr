import Navbar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Introduction from "../components/sections/Introduction";
import TeamSection from "../components/sections/TeamMember";
import JoinSection from "../components/sections/JointSection";

/**
 * 🔷 MENU CONFIG (PAGE-SPECIFIC)
 */
const menu = [{ label: "Home", href: "/" }];

export default function Landing() {
  return (
    <>
      {/* ✅ PASS MENU HERE */}
      <Navbar menu={menu} />
      <Introduction />
      <TeamSection />
      <JoinSection />
      <Footer />
    </>
  );
}
