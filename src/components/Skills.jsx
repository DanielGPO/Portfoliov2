import { motion } from "framer-motion";
import { UserLanguage } from "./LanguageContext";
function Skills() {
  const {language} = UserLanguage()
  const skills = [
    {
      photo:
        "https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
      alt: "Next.js",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
      alt: "React.js",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      alt: "HTML",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo:
        "https://www.pngkey.com/png/detail/624-6241203_css-icon-png-cascading-style-sheets.png",
      alt: "CSS",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo:
        "https://youteam.io/blog/wp-content/uploads/2022/04/expressjs_logo.png",
      alt: "Express.js",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo:
        "https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png",
      alt: "Javascript",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU",
      alt: "Tailwind Css",
      status: "Finalizado",
      statuseng: "Finished",
    },
    {
      photo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      alt: "Redux",
      status: "Progresso: 70%",
      statuseng: "Progress: 70%",
    },
    {
      photo:
        "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png",
      alt: "Node.js",
      status: "Finalizado",
      statuseng: "Finished",
    },
  ];

  return (
    <div className=" md:w-full pb-20 bg-black sm:mt-0  relative">
      <div className=" flex flex-col ">
        <h3 className="uppercase py-10 xl:py-14 tracking-[8px] md:tracking-[20px] text-blue-500 font-bold text-2xl text-center">
          Skills
        </h3>
      </div>

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="sm:gap-10 gap-4  grid md:grid-cols-3 grid-cols-2  px-10 py-18   relative cursor-pointer "
      >
        {skills.map((skill, i) => (
          <div key={i} className="relative">
            <div className="absolute hidden lg:inline-block  md:w-[350px] h-full bg-blue-950/60 opacity-0 hover:opacity-100 text-white rounded-full">
              {language ?
                  <p className="absolute right-10 bottom-7 font-bold text-2xl">
                {skill.statuseng}
              </p>
               : 
              <p className="absolute right-10 bottom-12 font-bold text-2xl">
                {skill.status}
              </p>}
            </div>
            <img
              className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32
             xl:h-32 filter  hover:grayscale"
              src={skill.photo}
              alt={skill.alt}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
