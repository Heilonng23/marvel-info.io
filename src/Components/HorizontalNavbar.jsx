import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HorizontalNavbar() {
  return (
    <div className="top-navbar">
      <p>
        <SiGmail /> Contact me
      </p>
      <p>
        <FaGithub /> Source Code
      </p>
    </div>
  );
}

export default HorizontalNavbar;
