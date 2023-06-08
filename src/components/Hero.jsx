import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Olá, meu nome é Daniel Gomes",
      "... Quero ser um desenvolvedor Full-stack",
      "<Esse é meu Portfólio />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <main className="h-[90vh] bg-black/60 flex relative flex-col items-center justify-center">
      <BackgroundCircles />

      <motion.div
        initial={{
          y: -500,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-col items-center rounded-l-full rounded-r-full"
      >
        <img
          className="md:h-[150px] mb-2 h-[130px] pl-1  object-cover w-[120px] lg:h-[150px]  lg:w-[150px] rounded-full "
          src="https://avatars.githubusercontent.com/u/110188725?s=400&u=6dae916ba1c68742dbc60418bdf01349a709ebca&v=4"
          alt="Eu de óculos, hihi"
        />

        <h1 className="text-md md:text-5xl font-semibold px-10 relative">
          <span className="mr-3 text-slate-200">{text}</span>
          <Cursor cursorColor="#ffff" />
        </h1>
      </motion.div>
      <h2 className="text-sm uppercase my-10 text-gray-400 tracking-[7px] lg:tracking-[15px]">
        Computer Science
      </h2>

      <div className="pt-5 flex flex-row xl:mx-auto">
        <a href="#projetos">
          <button className="heroButton">Projetos Pessoais</button>
        </a>

        <a href="#skills">
          <button className="heroButton">Skills</button>
        </a>

        <a href="#xp">
          <button className="heroButton">Experiência</button>
        </a>

        <a className="hidden md:flex" href="#sobre">
          <button className="heroButton">Sobre mim</button>
        </a>
      </div>
    </main>
  );
}

export default Hero;
