import { RiInstagramLine } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";




function ManiFooter() {
  return (
    <div> 
      <div>
        <div className="ManiFooter1">
          <p className="mainfootertex">
            We are strategic & creative digital agency who are focused on user
            experience, mobile, social, data gathering and promotional
          </p>
          <br />

          <a href="##">sanketkhoyani1@gmail.com</a>
          <br />
          <FaSquareXTwitter className="icon" />
          <RiInstagramLine className="icon1" />
          <MdOutlineFacebook className="icon1" />
          <FaGithub className="icon1" />
        </div>
        <div className="ManiFooter2">
          
        </div>
        <div className="ManiFooter3"></div>
        <div className="ManiFooter4"></div>
      </div>
    </div>
  );
}
export default ManiFooter;
