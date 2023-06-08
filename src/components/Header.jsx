import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import DanielGomesCV from "../Components/assets/DanielCV.pdf";

function Header() {
  return (
    <header className="sticky top-0 py-4 px-8 bg-black w-full item-start flex mx-auto z-20 justify-between ">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          fgColor="white"
          bgColor="transparent"
          url="https://www.linkedin.com/in/daniel-gomes-6358941b8/"
        />
        <SocialIcon
          fgColor="white"
          bgColor="transparent"
          url="https://github.com/DanielGPO"
        />
      </motion.div>

      <div className="flex flex-row items-center">
        <a
          className="font-bold text-sm text-white ml-2  "
          href={DanielGomesCV}
          download
        >
          Baixar CV
        </a>

        <a href="#contato">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center mx-5 text-white cursor-pointer"
          >
            <SocialIcon fgColor="white" network="email" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-white">
              {" "}
              contato
            </p>
          </motion.div>
        </a>
      </div>
    </header>
  );
}

export default Header;
