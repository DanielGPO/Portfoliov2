
import { motion } from "framer-motion";

function BackgroundLines() {
  return (
    <div className=" whitespace-nowrap overflow-auto scrollbar-x-hide">
      <motion.div
        // baixo que vai da esquerda pra direita -> //
        initial={{
          x: -900,
        }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 3 }}
        className="absolute bottom-14 right-16 hidden xl:inline-block"
      >
        <div className="border-b-2  animate-pulse border-[#45A29E]/75 w-[400px] h-4" />
      </motion.div>

      <motion.div
        // cima que vai da direita pra esquerda <-
        initial={{
          x: 900,
        }}
        animate={{
          x: 0,
        }}
        transition={{ duration: 3 }}
        className="absolute top-2 left-14 hidden xl:inline-block"
      >
        <div className="border-b-2  animate-pulse border-[#45A29E]/75 w-[400px] h-4" />
      </motion.div>

      <motion.div
        // esquerda que vai de baixo pra cima
        initial={{
          y: 400,
        }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 3 }}
        className="absolute top-10 left-5 hidden xl:inline-block"
      >
        <div className="border-r-2  animate-pulse border-[#45A29E]/75 h-[400px] w-4" />
      </motion.div>

      <motion.div
        // direita que vai de cima pra baixo
        initial={{
          y: -500,
        }}
        animate={{
          y: 0,
        }}
        transition={{ duration: 3 }}
        className="absolute bottom-20 right-8 hidden xl:inline-block"
      >
        <div className="border-l-2 animate-pulse  border-[#45A29E]/75 h-[400px] w-4" />
      </motion.div>
    </div>
  );
}

export default BackgroundLines;
