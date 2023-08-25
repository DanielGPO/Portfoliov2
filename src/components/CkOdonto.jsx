import { Link } from "react-router-dom";

import Ck1 from "../components/assets/Ck1.png";
import Ck2 from "../components/assets/Ck2.png";
import Ck3 from "../components/assets/Ck3.png";
import Ck4 from "../components/assets/Ck4.png";
import Ck5 from "../components/assets/Ck5.png";
import Ck6 from "../components/assets/Ck6.png";

import { BsArrowReturnLeft } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../pages/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { SocialIcon } from "react-social-icons";
import { UserLanguage } from "./LanguageContext";

function CkOdonto() {
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

        <h3 className="text-center uppercase tracking-[10px] xl:tracking-[20px] text-slate-900 text-2xl">
          Ck Odontologia
        </h3>

        <Link to="/">
          <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Home
          </button>
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
              <img src={Ck1} alt="Ck Odontologia Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ck2} alt="Ck Odontologia Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ck3} alt="Ck Odontologia Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ck4} alt="Ck Odontologia Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ck5} alt="Ck Odontologia Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ck6} alt="Ck Odontologia Print" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-row xl:flex-col items-center">
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU"
              alt=""
            />
          </div>

          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" py-2 bg-white/30 xl:w-[400px] px-2 xl:mx-0 mx-10">
            {language ?
             <p className="font-semibold text-slate-950 md:text-lg">
            My first professional website as a freelance web developer.
              I worked alone on the code and design. I had complete freedom to
              create, and i hope to be the first of many. Domain:
              ckodontologia.online
              </p>
              :
            <p className="font-semibold text-slate-950 md:text-lg">
              Meu primeiro site profissional como desenvolvedor web freelancer.
              Trabalhei sozinho no código e design. Tive liberdade total para
              criar e espero ser o primeiro de muitos. Domínio:
              ckodontologia.online
              </p>
            }
          </div>

          <a href="https://github.com/DanielGPO/Ck-odontologia">
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
          <a href="https://ckodontologia.vercel.app/">
            <div className="hover:cursor-pointer lg:w-auto hover:text-white hover:border-blue-500 hover:border-[2px] my-4 flex flex-row bg-black text-[#66FCF1]  rounded-xl items-center p-4 ">
              {language ?
         <p className="text- font-extrabold">Visit Web Site</p>
          : 
        <p className="text- font-extrabold">Visitar Site</p>
}
            </div>
          </a>

          <div className="flex flex-row items-center justify-center my-10 ">
            <Link className="m-2 text-black font-bold mx-5 md:hidden" to="/">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CkOdonto;
