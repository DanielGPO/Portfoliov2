import { Link } from "react-router-dom";

import Lenux1 from "../components/assets/Lenux1.png";
import Lenux2 from "../components/assets/Lenux2.png";
import Lenux3 from "../components/assets/Lenux3.png";
import Lenux4 from "../components/assets/Lenux4.png";

import { BsArrowReturnLeft } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { SocialIcon } from "react-social-icons";
import { UserLanguage } from "../components/LanguageContext";

function Lenux() {
  const {language} = UserLanguage()
  return (
    <div className=" bg-gray-200 xl:h-screen ">
      <div className="items-center flex flex-row justify-between h-[50px] w-full">
        <Link to="/">
          <button className=" text-slate-900 hidden mx-6 md:flex">
            {" "}
            <BsArrowReturnLeft className="text-3xl" />
          </button>
        </Link>

        <h3 className="text-center uppercase tracking-[20px] text-slate-900 text-2xl">
          Lenux
        </h3>

        <Link to="/netflix">
          {language ?
                <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Next Project
            </button>
            :
            <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Próximo
          </button>}
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row items-center ">
        <div className="w-full xl:w-[900px] py-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Lenux1} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Lenux2} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Lenux3} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Lenux4} alt="Lenux Print" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-row xl:flex-col items-center">
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://www.pngkey.com/png/detail/624-6241203_css-icon-png-cascading-style-sheets.png"
              alt=""
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt=""
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" py-2 bg-white/30 xl:w-[400px] px-2 xl:mx-0 mx-10">
            {language ?
             <p className="font-semibold text-slate-950 md:text-lg">
              This was my first project made with HTML, I had the intention of
              use Grid and Flexbox in practice, I found this design on a website
              called NicePage and fell in love with it. The greatest difficulty in
              time was to use the Grid the way I wanted. Although the most modern tools are React,
              Angular and etc, I think it's important to show that I also know how to do
              basic, but honestly this project has a place in my heart.
              </p>
              : 
            <p className="font-semibold text-slate-950 md:text-lg">
              Este foi meu primeiro projeto feito com HTML, tinha o intuito de
              usar Grid e Flexbox na prática, encontrei esse design em um site
              chamado NicePage e me apaixonei por ele. A maior dificuldade na
              época foi utilizar o Grid da forma que eu queria, demorou mas
              consegui. Apesar das ferramentas mais modernas serem React,
              Angular e etc, eu acho importante mostrar que também sei fazer o
              básico, mas honestamente esse proejto tem um lugar no meu coração.{" "}
              </p>
            }
          </div>

          <a href="https://github.com/bison7gpo/Project-1/tree/master">
            <div className="hover:cursor-pointer lg:w-auto hover:bg-gray-600 my-4 flex flex-row bg-gray-700 text-white rounded-xl items-center p-2">
              {language ?
              <p className="text-lg font-semibold">Github Code</p>
 :
              <p className="text-lg font-semibold">Código no Github</p>

            }
              <SocialIcon
                fgColor="white"
                network="github"
                bgColor="transparent"
              />
            </div>
          </a>

          <div className="flex flex-row items-center justify-center my-10 ">
            <Link className="m-2 text-black font-bold mx-5 md:hidden" to="/">
              Home
            </Link>

                <Link to="/netflix">
          {language ?
                <button className=" text-slate-900 font-bold mx-6 md:hidden">
            Next Project
            </button>
            :
            <button className=" text-slate-900 font-bold mx-6 md:hidden">
            Próximo
          </button>}
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Lenux;
