import { Link } from "react-router-dom";

import Dx2 from "../components/assets/Dx2.png";
import Dx3 from "../components/assets/Dx3.png";
import Dx4 from "../components/assets/Dx4.png";
import Dx1 from "../components/assets/Dx1.png";

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

function DigitalX() {
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
          Digital X
        </h3>

        <Link to="/lenux">
          {language ?
           <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Next Project
            </button>
            :
          <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Próximo
          </button>
         }
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
              <img src={Dx1} alt="Digital X Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Dx2} alt="Digital X Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Dx3} alt="Digital X Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Dx4} alt="Digital X Print" />
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
           
I have this habit of creating web applications without any
              design in mind, with no idea how it will end. this case was
              one of them, one of my first projects made with HTML5
              </p>
              :
            <p className="font-semibold text-slate-950 md:text-lg">
              Eu possuo esse hábito de querer criar aplicações web sem nenhum
              design em mente, sem ter ideia de como vai terminar. Esse caso foi
              um deles, um dos meus primeiros projetos feitos com HTML5.{" "}
            </p>}
          </div>

          <a href="https://github.com/bison7gpo/DigitalX/tree/master">
            <div className="hover:cursor-pointer lg:w-auto hover:bg-gray-600 my-4 flex flex-row bg-gray-700 text-white rounded-xl items-center p-2 ">
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

              <Link to="/lenux">
          {language ?
           <button className=" text-slate-900 font-bold mx-6 md:hidden">
            Next Project
            </button>
            :
          <button className=" text-slate-900 font-bold mx-6 md:hidden">
            Próximo
          </button>
         }
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DigitalX;
