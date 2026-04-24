import almahTechLogo from "../../assets/image-removebg-preview.png";
import {FaLinkedin, FaGithub} from "react-icons/fa";
import {FiDownload} from "react-icons/fi";
import {motion, AnimatePresence} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const icons = [
  {icon: FaLinkedin, link: "https://linkedin.com/in/ahmed-dem"},
  {icon: FaGithub, link: "https://github.com/adem02"},
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY.current || currentY < 60);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key={"navbar"}
          initial={{y: -80, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: -80, opacity: 0}}
          transition={{duration: 0.3, ease: "easeInOut"}}
          className={"sticky top-0 z-50 backdrop-blur-md border-b border-neutral-800/50"}
        >
          <div className={"container mx-auto flex items-center justify-between px-8 py-2"}>
            <div className={"flex flex-shrink-0 items-center"}>
              <img className={"m-0 cursor-pointer"} width={120} src={almahTechLogo} alt={""}/>
            </div>
            <div className={"flex items-center gap-4 text-2xl"}>
              {icons.map((icon, index) => (
                <motion.a
                  whileHover={{scale: 1.2}}
                  key={index} href={icon.link} target={"_blank"} rel={"noreferrer"}
                >
                  <icon.icon/>
                </motion.a>
              ))}
              <a
                href={"/CV_Ahmed_DEM.pdf"}
                download
                className={"text-sm font-medium px-4 py-2 rounded-lg border border-neutral-700 text-neutral-200 transition-colors duration-300 hover:border-neutral-500 hover:bg-neutral-900/80"}
              >
                <FiDownload className={"inline mr-1.5 text-base"}/>Téléchargez mon CV
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default Navbar;
