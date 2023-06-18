import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Slider from "../components/slider";
import Form from "../components/form";

const Main = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className="h-screen mb-20 flex justify-center justify-items-center items-center">
        <div className="m-2 bg-gray-950 h-[50rem] w-[30rem]">
          <div id="about-us">
            <h1 className="text-center text-white font-serif text-5xl m-10 pt-20">
              About Us
            </h1>
            <p className="text-justify text-white font serif text-2x1 pt-10 m-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nulla blanditiis, fugiat commodi explicabo, amet minus,
              quia error ipsam corporis perspiciatis veniam ea illo voluptatem
              labore ipsa nobis alias optio?
            </p>
            <p className="text-justify text-white font serif text-2x1 m-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nulla blanditiis, fugiat commodi explicabo, amet minus,
              quia error ipsam corporis perspiciatis veniam ea illo voluptatem
              labore ipsa nobis alias optio?
            </p>
            <p className="text-justify text-white font serif text-2x1 m-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam nulla blanditiis, fugiat commodi explicabo, amet minus,
              quia error ipsam corporis perspiciatis veniam ea illo voluptatem
              labore ipsa nobis alias optio?
            </p>
          </div>
        </div>
        <div className="m-2 h-[50rem] w-[20rem]">
          <img
            className="object-cover h-[50rem] w-[20rem]"
            src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?cs=srgb&dl=pexels-ali-pazani-2584269.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="m-2 h-[50rem] w-[20rem] bg-gray-600">
          <img
            className="object-cover h-[50rem] w-[20rem]"
            src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?cs=srgb&dl=pexels-ali-pazani-2681751.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="m-2 h-[50rem] w-[20rem]">
          <img
            className="object-cover h-[50rem] w-[20rem]"
            src="https://i.pinimg.com/originals/ef/bf/32/efbf328bb7f4a7afd5ae982f771568af.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="h-screen flex flex-col shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="bg-white h-2/6">
          <h1 className="text-center text-9xl pt-20 font-serif">Our vision</h1>
        </div>
        <div className="bg-gray-950 h-4/6 font-serif text-3xl text-white p-20 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ducimus
          debitis quaerat quo adipisci est, rerum, necessitatibus placeat alias
          at laborum perferendis nulla iste cupiditate, ipsam omnis blanditiis
          nemo architecto. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Laboriosam optio consequatur porro temporibus at? Consequatur
          laborum libero, qui fuga labore architecto dolor, laboriosam error
          similique sapiente deleniti earum, voluptates rerum.
        </div>
      </div>
      <div
        id="contact-form"
        className="h-screen bg-gray-950 mb-20 flex justify-center pt-20 justify-items-center items-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"
      >
        <div className="pt-20 h-[60rem] w-[70rem] ">
          <h1 className="text-center text-white font-serif text-5xl -mt-20 pb-20">
            Contact Form
          </h1>
          <Form />
        </div>
      </div>
      <div className="h-screen flex flex-col mb-20">
        <div className="h-2/6">
          <h1 className="text-center pt-20 text-black font-serif text-7xl font-bol drop-shadow-lg shadow-black">
            Popular articles
          </h1>
        </div>
        <div className="bg-gray-950 h-4/6 flex justify-center justify-items-center items-center">
          <div className="m-7 h-[30rem] w-[30rem]">
            <img
              className="object-cover h-[30rem] w-[30rem]"
              src="https://media.gq-magazin.de/photos/6082e54ae675d71f466c39fb/master/w_1600%2Cc_limit/jeansjacken-kombinieren-kaufen-best-of-levis-trucker.jpg"
              alt=""
            />
          </div>
          <div className="m-7 h-[30rem] w-[30rem]">
            <img
              className="object-cover h-[30rem] w-[30rem]"
              src="https://www.hallensteins.com/content/products/ab-tactical-baggy-cargo-pant-green-front-10003249.jpg?width=2058"
              alt=""
            />
          </div>
          <div className="m-7 h-[30rem] w-[30rem]">
            <img
              className="object-cover h-[30rem] w-[30rem]"
              src="https://columbia.scene7.com/is/image/ColumbiaSportswear2/1861582_231_f?wid=768&hei=806&v=1679388927"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Main;
