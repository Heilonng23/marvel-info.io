import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function HorizontalNavbar() {
  return (
    <div className="top-navbar">
      <p>
        <SiGmail /> Contact me
      </p>
      <p>
        <a
          style={{ textDecoration: "none", color: "#fdf0d5" }}
          href="https://github.com/Heilonng23/marvel-info.io"
          target="_blank"
        >
          <FaGithub /> Source Code
        </a>
      </p>
    </div>
  );
}

export default HorizontalNavbar;
