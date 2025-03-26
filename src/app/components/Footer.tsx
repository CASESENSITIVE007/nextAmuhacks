import csslogo from "../components/images/a.png";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image"

function Footer() {
  return (
    <div className="text-white mx-auto flex flex-col mt-20 items-center justify-center  ">
      <div>
        <Image src={csslogo} alt="CSS Logo" className="w-20 mx-auto" />
        <p>Computer Science Society</p>
      </div>
      <div>
        <p>Department Of Computer Science</p>
      </div>
      <div>
        <p>Aligarh Muslim University</p>
      </div>
      <div className="flex gap-5 p-2">
        <a
          href="https://www.instagram.com/css.amu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200">
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/cssamu/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
