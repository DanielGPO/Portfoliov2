import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import DanielOliveiraCV from "../Components/assets/DanielOliveiraCV.pdf";

import DanOliveiraEngCV from "../Components/assets/DanOliveiraEngCV.pdf";

import { UserLanguage } from "./LanguageContext";
function Header() {

  const {lang, language} = UserLanguage()



  return (
    <header className="sticky top-0 py-4 px-2 lg:px-8 bg-black w-full item-start flex mx-auto z-20 justify-between ">
      <motion.div
      className="flex flex-row items-center"
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
        {language ? 
          <>
              <div className="text-yellow-400 px-2 hover:cursor-pointer hover:underline" onClick={lang}>
              <p className="font-bold italic"
              >port<span className="text-green-400"
              >uguês</span></p>
          </div>
            <a
          className="text-sm font-semibold text-white mx-4  "
          href={DanOliveiraEngCV}
          download
          >
          Download Resume
        </a>
          </>
          :
            <>
          <div className="text-red-400 px-2 hover:cursor-pointer hover:underline" onClick={lang}>
          <p className="font-bold italic"
              >Eng<span className="text-blue-400"
              >lish</span></p>
          </div>
            <a
            className="font-bold text-sm text-white ml-2  "
            href={DanielOliveiraCV}
            download
            >
          Baixar CV
        </a>
          </>
          }

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
            className="flex flex-row items-center mx-2 md:mx-5 text-white cursor-pointer"
          >
            <SocialIcon fgColor="white" network="email" bgColor="transparent" />
            {language
              ? 
                <p className="uppercase hidden md:inline-flex text-sm text-white">
              {" "}
              Hire me
            </p>
          :
                <p className="uppercase hidden md:inline-flex text-sm text-white">
              {" "}
              contato
            </p>
          }
          </motion.div>
        </a>
      </div>
    </header>
  );
}

export default Header;
