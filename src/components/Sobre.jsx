import { motion } from "framer-motion";
import Eu from "./assets/Eu.jpeg";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="md:h-[1200px] pb-10 bg-gray-300 pt-5 md:pt-0 lg:h-screen flex relative flex-col text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-8 hidden md:inline-block uppercase tracking-[20px] text-black">
        Sobre mim
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.9,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={Eu}
        alt="Eu"
        className="h-56 w-56 mt-[100px] md:mt-0 object-contain rounded-full -mb-20 md:mb-0 flex-shrink-0  md:w-64 md:h-[600px] xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10 text-black">
        <h4 className="text-4xl mt-[100px] md:mt-0 font-semibold">
          Um pouquinho{" "}
          <span className="underline decoration-blue-800"> Sobre mim</span>
        </h4>
        <ul className="flex flex-col">
          <li>
            <p className="lg:text-xl text-lg py-2 font-semibold">
          ❤ Cursando Bacharelado em Ciência da Computação
          </p>
          </li>
          <li>
            <p className="lg:text-xl text-lg py-2 font-semibold">
         📌 Possuo conhecimentos avançados em Front-End
          </p>
          </li>
          <li>
            <p className="lg:text-xl text-lg py-2 font-semibold">
        📖 Atualmente estou focando no Back-End para me tornar um Full-stack
          </p>
          </li>
          <li>
            <p className="lg:text-xl text-lg py-2 font-semibold">
         💻 Linguagem com mais domínio: Javascript
          </p>
          </li>
          <li>
            <p className="lg:text-xl text-lg py-2 font-semibold">
         🍪 Possuo 21 anos e comecei a estudar programação aos 19
          </p>
          </li>
        </ul>
       
      </div>
    </motion.div>
  );
}

export default Sobre;
