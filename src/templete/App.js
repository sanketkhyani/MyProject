import ColorSchemesExample from "./navbar";
import "./style.css";
import HeroSection from "./heroimage";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import SectionFore from "./section-4";
import Footar from "./footar";
import ManiFooter from "./mainFooter";
// import Ifect from "../hooks/ifect";
// import Props from "./props";

function App() {
  return (
    <div className="color">
      <ColorSchemesExample />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFore />
      {/* <Props name="sanket" id="khoyani" /> */}
      <Footar />
      <ManiFooter />
      {/* <Ifect /> */}
     
    </div>
  );
}
export default App;
