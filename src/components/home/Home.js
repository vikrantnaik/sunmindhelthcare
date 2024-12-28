import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { about } from "../../assests/images";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Contact from "../contact/Contact";
import Order from "../howtoorder/Order";

const Home = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  return (
    <>
      <div id="home">
        <div className="pt-36 lg:ml-56 max-md:ml-10 max-md:gap-7 flex flex-col gap-4 max-md:text-neutral-50 md:ml-16">
          <strong className="text-6xl max-md:text-3xl">Health Care</strong>
          <h5 className="text-4xl max-md:text-xl ">For Your Family</h5>
          <div className="max-md:text-wrap">
            "At{" "}
            <strong className=" text-primary text-2xl max-md:text-xs">
              Sunmind
            </strong>
            HealthCares, we are committed to delivering quality <br />
            medications and injectable solutions that ensure the well-being of
            our patients."
          </div>
        </div>
        <div className="mt-20 flex justify-start align-middle ml-56 max-md:ml-6">
          <Link
            to="/products"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-black hover:border-slate-950 border max-md:ml-0"
          >
            See our Products
          </Link>
        </div>
      </div>
      <Carousel />
      <div className="w-full h-full bg-slate-100 flex justify-around p-16 max-md:flex-col-reverse max-md:justify-center max-md:gap-3">
        <div className="w-[50%] pl-32 max-md:p-0 max-md:w-full">
          <strong className="text-3xl max-md:text-lg">
            About Sunmind Helthcare
          </strong>
          <p className="mt-7 text-gray-500 max-md:mt-4">
            Sunmind Healthcare is a healthcare provider offering medical care
            and services across various fields. Our mission is to ensure quality
            healthcare for all patients.
          </p>
          <div className="mt-12 max-md:mt-6">
            {/* Question 1 */}
            <div className=" p-6 rounded-none shadow-md w-[430px] max-md:w-full max-md:p-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(1)}
              >
                <h3 className="text-lg font-semibold text-gray-800 max-md:text-sm max-md:font-light">
                  Our Mission
                </h3>
                {openQuestion === 1 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openQuestion === 1 && (
                <p className="mt-4 text-gray-600 max-md:text-sm">
                  To improve lives by providing high-quality, affordable medical
                  products that promote health and well-being for everyone.
                </p>
              )}
            </div>

            <div className=" p-6  shadow-md w-[430px] max-md:w-full max-md:p-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(2)}
              >
                <h3 className="text-lg font-semibold text-gray-800 max-md:text-sm max-md:font-light">
                  Our Vision
                </h3>
                {openQuestion === 2 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openQuestion === 2 && (
                <p className="mt-4 text-gray-600 max-md:text-sm">
                  To be a trusted leader in the healthcare industry, committed
                  to innovation, excellence, and accessibility in every product
                  we deliver.
                </p>
              )}
            </div>

            <div className=" p-6  shadow-md w-[430px] max-md:w-full max-md:p-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(3)}
              >
                <h3 className="text-lg font-semibold text-gray-800 max-md:text-sm max-md:font-light">
                  Why choose us
                </h3>
                {openQuestion === 3 ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openQuestion === 3 && (
                <p className="mt-4 text-gray-600 max-md:text-sm">
                  With a focus on quality, innovation, and customer
                  satisfaction, we deliver reliable medical solutions tailored
                  to meet diverse healthcare needs. Our dedication to excellence
                  ensures that you receive only the best products for better
                  outcomes.
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <img
            className="h-[90vh] max-md:h-[500px]"
            src={about}
            alt="aboutimg"
          />
        </div>
      </div>
      <Contact img={false} />
      <Order/>
    </>
  );
};

export default Home;
