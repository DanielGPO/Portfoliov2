import { Link } from "react-router-dom";
import ck1 from "../components/assets/Ck1.png";
import Breve from "./assets/breve.jpg";
import { motion } from "framer-motion";
function TrueExp() {
  const experience = [
    {
      name: "CK Odontologia",
      photo: ck1,
      description:
        "Site criado para a clínica odontológica Ck Odontologia com o intuito de prospectar novos clientes e se estabelecer no mercado como um competidor regional.",
      contract: "Freelancer",
      path: "/ckodonto",
    },
    {
      name: "",
      photo: Breve,
      description: "",
      contract: "",
      path: "",
    },
    {
      name: "",
      photo: Breve,
      description: "",
      contract: "",
      path: "",
    },
    {
      name: "",
      photo: Breve,
      description: "",
      contract: "",
      path: "",
    },
  ];
  return (
    <div className="pb-5 bg-slate-900/95">
      <div>
        <p className="font-bold py-14 uppercase tracking-[13px] md:tracking-[20px] text-center  text-white text-2xl">
          Experiências
        </p>
      </div>

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
        className="w-full grid md:grid-cols-2 grid-cols-1 place-items-center gap-16 mb-20"
      >
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-black/25 relative lg:w-[500px] md:w-[400px] w-[340px] mx-4 group  h-[300px] rounded-lg p-2 hover:cursor-pointer hover:border-white  border border-slate-500"
          >
            <Link to={`${exp.path}`}>
              <img
                className="w-full object-center  object-cover h-full rounded-lg  hover:cursor-pointer "
                src={exp.photo}
                alt={exp.name}
              />
              <div className=" bg-black/75 top-0 absolute left-0 opacity-0 hover:opacity-100 right-0 bottom-0">
                <p className="text-white px-5 text-center my-20 font-extrabold text-xl">
                  {exp.description}
                </p>

                <p className="text-white text-bold m-2">{exp.contract}</p>
              </div>
              <div className="absolute hover:cursor-pointer flex flex-row group-hover:border-b border-b-white pb-1 -bottom-8 bg-transparen w-[270px] items-center md:w-[300px] ml-6 md:ml-16">
                <p className="font-semibold tracking-[2px] italic text-white ml-16 text-xl hover:cursor-pointer ">
                  {exp.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
export default TrueExp;
