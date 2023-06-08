import { motion } from "framer-motion";
import Eu from "./assets/Eu.jpeg";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="md:h-[1200px] bg-gray-300 pt-5 md:pt-0 lg:h-screen flex relative flex-col text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center"
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
        <p className="lg:text-lg text-md font-semibold">
          Tenho 21 anos, estudei sozinho por 3 anos para concursos militares e a
          cada ano que passava mais perto eu sentia que estava de ser aprovado
          mas pra ser sincero essa vontade nunca veio realmente de mim, eu
          percebi que havia herdado os desejos dos meus familiares e me vi cada
          vez mais sem a sensação de vontade própria. Eu não odiava a ideia de
          "estabilidade" que me prometiam mas eu não queria dedicar minha vida
          toda a um ideal que não era meu. Uma frase famosa do quadrinista Stan
          Lee sempre ficou gravada na minha memória onde ele dizia "Working with
          what you love isn't work at all" ou algo assim. Eu sempre tive
          facilidade para aprender, sejam fórmulas pra calcular volumes de
          pirâmides, inglês ou oque é uma oração subordinada substantiva
          objetiva direta e foi pensando nisso que buscando algo que eu quisesse
          fazer pra vida toda eu encontrei a
          <span className="underline decoration-sky-800"> Programação.</span> Eu
          estou apaixonado, e percebi isso logo no começo aprendendo HTML e CSS,
          o suficiente pra me fazer entrar nessa aventura de cabeça. Estou
          estudando sozinho do jeito que eu gosto e sinto confortável, quanto
          mais eu aprendo mais quero aprender e atualmente estou cursando
          ciências da computação oque me deixou ainda mais envolvido com esse
          mundo. eu poderia ficar falando o como estou apaixonado por essa área
          pra sempre aqui mas acho que vai ser mais fácil de explicar te
          mostrando. Be my guest!
        </p>
      </div>
    </motion.div>
  );
}

export default Sobre;
