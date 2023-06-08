import { Link } from "react-router-dom";

import Net1 from "../components/assets/Net1.png";
import Net2 from "../components/assets/Net2.png";
import Net3 from "../components/assets/Net3.png";
import Net4 from "../components/assets/Net4.png";

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

function Netflix() {
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
          Netflix Clone
        </h3>

        <Link to="/amzclone">
          <button className=" text-slate-900 font-bold hidden mx-6 md:flex">
            Próximo
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
              <img src={Net1} alt="Netflix Clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Net2} alt="Netflix Clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Net3} alt="Netflix Clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Net4} alt="Netflix Clone Print" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-row xl:flex-col items-center">
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  xl:w-18
             xl:h-18"
              src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=pt-br"
              alt=""
            />
          </div>

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
            <p className="font-semibold text-slate-950 md:text-lg">
              Foi Criado no intuito de aprender a usar tailwindcss mas acabei
              também usando o firebase e useContext para criação de conta e
              login, também possui uma Route protegida e tentei brincar um pouco
              colocando o video de introdução da Netflix ao clicar em um dos
              shows. Bem simples porém muito divertido. Me impressionei com o
              quão fácil o firebase cria um sistema de criação de conta.
              Pretendo usar mais vezes no futuro.
            </p>
          </div>

          <a href="https://github.com/bison7gpo/Netflix-clone-Project/tree/master">
            <div className="hover:cursor-pointer hover:bg-gray-600 my-4 flex flex-row bg-gray-700 text-white rounded-xl items-center p-2 w-[220px]">
              <p className="text-lg font-semibold">Código no Github:</p>

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

            <Link
              className="m-2 text-black font-bold mx-5 md:hidden"
              to="/amzclone"
            >
              Próximo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Netflix;
