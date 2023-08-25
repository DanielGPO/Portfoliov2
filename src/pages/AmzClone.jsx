import { Link } from "react-router-dom";
import Amz1 from "../components/assets/Amz1.png";
import Amz2 from "../components/assets/Amz2.png";
import Amz3 from "../components/assets/Amz3.png";
import Amz4 from "../components/assets/Amz4.png";
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

function AmzClone() {
  const { language } = UserLanguage()
  
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
          Amazon Clone
        </h3>

        <Link to="/digitalX">
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
              <img src={Amz1} alt="Amazon clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Amz2} alt="Amazon clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Amz3} alt="Amazon clone Print" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Amz4} alt="Amazon clone Print" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-row xl:flex-col items-center">
          <div className="relative ">
            <img
              className="rounded-full object-cover w-12 h-12  m-2  xl:w-18 bg-black
             xl:h-18"
              src="https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
              alt="icon"
            />
          </div>
          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  m-2 xl:w-18 bg-black
             xl:h-18"
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
              alt="icon"
            />
          </div>

          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  m-2 xl:w-18 bg-black
             xl:h-18"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk03fpMxbjzvgaDz2z3gu5G-9UeqgnNfUdd7gzSo9-er843XxKIG3g46lO1GRUF-L9UWs&usqp=CAU"
              alt="icon"
            />
          </div>

          <div className="relative  ">
            <img
              className="rounded-full object-cover w-12 h-12  m-2 xl:w-18 bg-black
             xl:h-18"
              src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
              alt="icon"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" py-2 bg-white/30 xl:w-[400px] px-2 xl:mx-0 mx-10">
            {language ? 
               <p className="font-semibold text-slate-950 md:text-lg">
                This project turned out to be very easy to do with the help of
                the Fakestore API and Redux. I didn't have big difficulties nor
                was I stuck for hours solving errors, which used to happen whenever
                I used an API and the slider was made with react-responsive-carousel
                {" "}
            </p>
            :
            <p className="font-semibold text-slate-950 md:text-lg">
              Esse projeto se mostrou ser bem tranquilo de ser feito com a ajuda
              da Fakestore API e Redux. Não tive grandes dificuldades nem fiquei
              preso por horas resolvendo erros, oque costumava acontecer sempre
              que eu utilizava uma API e o slider foi feito com o
              react-responsive-carousel.{" "}
            </p>}
          </div>

          <a href="https://github.com/bison7gpo/Amazon_Clone/tree/master">
            <div className="hover:cursor-pointer hover:bg-gray-600 my-4 flex flex-row bg-gray-700 text-white rounded-xl items-center lg:w-auto p-2">
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

             <Link to="/digitalX">
          {language ?
            <button className=" text-slate-900 font-bold  mx-6 md:hidden">
            Next Project
          </button>
          : 
          <button className=" text-slate-900 font-bold md:hidden mx-6">
            Próximo
          </button>}
        </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AmzClone;
