import almahTechLogo from "../../assets/image-removebg-preview.png";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {motion} from "framer-motion";

const icons = [
  {
    icon: FaLinkedin,
    link: "https://linkedin.com/in/ahmed-dem",
  },
  {
    icon: FaGithub,
    link: "https://github.com/adem02"
  },
];

const Navbar = () => {
  return (
    <nav className={"flex items-start justify-between py-6 mb-20"}>
      <div className={"flex flex-shrink-0 items-center"}>
        <img className={"m-0 cursor-pointer"} width={200} height={150} src={almahTechLogo} alt={""}/>
      </div>
      <div className={"m-8 flex items-center justify-center gap-4 text-2xl"}>
        {icons.map((icon, index) => (
          <motion.a
            whileHover={{scale: 1.2}}
            key={index} href={icon.link} target={"_blank"} rel={"noreferrer"}
          >
            <icon.icon/>
          </motion.a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;