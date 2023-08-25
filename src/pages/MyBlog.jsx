import { Link } from "react-router-dom";

import MyBlog1 from "../components/assets/MyB1.png";
import MyBlog2 from "../components/assets/MyB2.png";
import MyBlog3 from "../components/assets/MyB3.png";
import MyBlog4 from "../components/assets/MyB4.png";
import MyBlog5 from "../components/assets/MyB5.png";

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

function MyBlog() {
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
          MyBlog
        </h3>

        <Link to="/amzclone">
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
              <img src={MyBlog1} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MyBlog2} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MyBlog3} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MyBlog4} alt="Lenux Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={MyBlog5} alt="Lenux Print" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-row xl:flex-col items-center">
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5_pFXLFlros8tRZoOHLVZVI30KJEU411IQ&usqp=CAU"
              alt="react"
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="data:image/png;base64,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"
              alt="node"
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="data:image/png;base64,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"
              alt="express"
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&usqp=CAU"
              alt="mongodb"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" py-2 bg-white/30 xl:w-[400px] px-2 xl:mx-0 mx-10">
            {language ?
             <p className="font-semibold text-slate-950 md:text-lg">
                              This is my first personal FULL-STACK project. It was created with M.E.R.N,
                              has a system for creating login accounts, and creating articles that are
                              stored in a database in MongoDB.{" "}
              </p>
              : 
            <p className="font-semibold text-slate-950 md:text-lg">
                              Este é meu primeiro projeto pessoal FULL-STACK. Foi criado com M.E.R.N,
                              possui um sistema de criação de contas login, e criação de artigos que
                              ficam armazenados em um banco de dados no MongoDB.{" "}
              </p>
            }
          </div>

          <a href="https://github.com/DanielGPO/BlogTag">
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

                <Link to="/amzclone">
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
export default MyBlog;
