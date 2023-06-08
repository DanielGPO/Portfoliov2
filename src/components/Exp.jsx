import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Lenux1 from "./assets/Lenux1.png";
import Amz1 from "./assets/Amz1.png";
import Net1 from "./assets/Net1.png";
import Dx1 from "./assets/Dx1.png";

function Exp() {
  const projetos = [
    {
      name: "Amazon ",
      image: Amz1,
      path: "/amzclone",
    },
    {
      name: "Digital X ",
      image: Dx1,
      path: "/digitalx",
    },
    {
      name: "Lenux",
      image: Lenux1,
      path: "/lenux",
    },
    {
      name: "Netflix",
      image: Net1,
      path: "/netflix",
    },
  ];
  const [tip, setTip] = useState(false);

  function ajuda() {
    setTip(!tip);
  }

  return (
    <div>
      <div
        className=" relative flex flex-col text-left 
     max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className=" font-bold my-14 uppercase tracking-[20px] text-center  text-[#66FCF1] text-2xl">
          Projetos Pessoais
        </h3>

        {tip ? (
          <p
            onClick={ajuda}
            className="px-2 bg-yellow-500 rounded-md text-md font-bold absolute top-10  hover:cursor-pointer right-5 md:right-[100px] z-50"
          >
            Click em um projeto para saber mais
          </p>
        ) : (
          <p
            onClick={ajuda}
            className="px-2 bg-yellow-500 rounded-full text-md font-bold absolute top-10  animate-pulse hover:cursor-pointer hover:bg-yellow-700 right-5 md:right-[100px] z-50"
          >
            {" "}
            ?{" "}
          </p>
        )}

        <motion.div
          initial={{
            y: 400,
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" w-full grid md:grid-cols-2 grid-cols-1 place-items-center gap-16 mb-20"
        >
          {projetos.map((projeto, i) => (
            <div
              key={i}
              className="bg-transparent relative lg:w-[500px] md:w-[400px] w-[340px] mx-4 group  h-[300px] rounded-lg p-2 hover:cursor-pointer hover:border-white  border border-slate-500"
            >
              <Link to={`${projeto.path}`}>
                <img
                  className="w-full object-left  object-cover h-full rounded-lg  hover:cursor-pointer "
                  src={projeto.image}
                  alt={projeto.name}
                />
                <div className="absolute hover:cursor-pointer group-hover:border-b border-b-white pb-1 -bottom-8 bg-transparen w-[270px] items-center md:w-[250px] ml-6 md:ml-16">
                  <p className="text-[#66FCF1] italic font-semibold px-20 text-xl hover:cursor-pointer ">
                    {projeto.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Exp;
