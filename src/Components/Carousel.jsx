import React from "react";

// import govirtual from "../images/govirtual.png";
import uj from "../Components/images/uj.jpg";
// import ya from "../images/ya.png";
// import sterling from "../images/sterling.png";
// import tic from "../images/tic.png";
// import vesti from "../images/vesti.jpg";
import gps from "../Components/images/gps.jpg";
import giz from "../Components/images/giz.jpg";
import jtg from "../Components/images/jtg.png";
import itf from "../Components/images/itf.jpg";
import gdg from "../Components/images/gdg.png";
// import cp from "../images/cp.png";
// import pictda from "../Components/images/pictda.png";
// import Client10 from "../images/client-10.svg";
// import Carousel from "../Components/Carousel";

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/bundle';

const Carousel = () => {
     

  return (
    <section className="bg-geen-600 mt-0">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 className="h2 font-cabinet-grotesk text-green-800">
            Our Sponsors/Partners:
          </h2>
        </div>

        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <Swiper
            autoplay={{delay:1500, disableOnInteraction:false}}
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={0}
          className="flex"
          >
          <SwiperSlide className="bg-slate-900 ">
             <div className="!h-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 w-full group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={uj}
                alt="Client 02"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-32 !w-32 rounded-2xl transform duration-500 ease-in-out"
                src={gps}
                alt="Client 07"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={gdg}
                alt="Client 11"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={itf}
                alt="Client 10"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
             <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={giz}
                alt="Client 08"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-green-800 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-green-800">
          <div className="swiper-wrapper !ease-linear select-none">
            {/* Carousel items */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100  transform duration-500 ease-in-out" src={govirtual} alt="Client 01" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={uj}
                alt="Client 02"
              />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={ya} alt="Client 03" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={sterling} alt="Client 04" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out" src={vesti} alt="Client 05" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out" src={tic} alt="Client 06" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 !h-32 !w-32 rounded-2xl transform duration-500 ease-in-out"
                src={gps}
                alt="Client 07"
              />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={giz}
                alt="Client 08"
              />
            </div>

            <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform rounded-2xl duration-500 ease-in-out"
                src={jtg}
                alt="Client 09"
              />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 rounded-2xl transform duration-500 ease-in-out"
                src={itf}
                alt="Client 10"
              />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={gdg}
                alt="Client 11"
              />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" src={cp} alt="Client 11" />
            </div> */}
            {/* <div className=" !h-32 !w-32 bg-green-800 rounded-2xl flex items-center justify-center group">
              <img
                className="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out"
                src={pictda}
                alt="Client 11"
              />
            </div>
          </div>
        </div> */} 
      </div>
    </section>
  );
}

export default Carousel;
