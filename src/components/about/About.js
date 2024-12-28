import React from "react";
import "./About.css";
import idea from "../../assests/images/idea.svg";
import journy from "../../assests/images/journey.svg";
import whatwedid from "../../assests/images/whatwedid.svg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="h-[100%] mb-16">
      <div className="aboutImg h-[50vh] max-md:w-[100%] ">
        <div className="top-1/4 absolute left-1/4 text-white max-md:text-black">
          <div className="text-6xl ml-8 max-md:text-2xl">
            We make healthcare
          </div>
          <div className="text-4xl mt-2 max-md:text-base">
            Understandable, Accessible and Affordable.
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 flex justify-center flex-col items-center  gap-12 max-md:bg-white ">
        <div className="-ml-36 text-3xl font-bold mt-5 -mb-11 max-md:m-0 max-md:mt-3">
          Our Story
        </div>
        <div className="grid grid-cols-6  justify-center  place-items-center mt-8 w-[80%] max-md:flex max-md:flex-col max-md:gap-4">
          <div className="col-span-2 max-md:h-12 max-md:w-12">
            <img src={idea} alt="idea" />
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="circle"></div>
          </div>
          <div className="col-span-3 flex flex-col max-md:items-center max-md:gap-5 max-md:text-center">
            <div className="text-3xl font-semiboldbold mb-3">The idea</div>
            <div className="text-slate-400 space-y-3 gap-3 max-md:text-black">
              <div>
                In healthcare, the information around our medicines and <br />{" "}
                lab tests is either unavailable or incomprehensible to us.
              </div>

              <div>
                So we decided to create a platform that stood <br /> for
                transparent, authentic and accessible information for all.
              </div>

              <div>
                This idea grew into a company and sunmind was <br /> created in
                2015.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6  justify-center place-items-center mt-4 max-md:flex max-md:flex-col-reverse max-md:gap-4 ">
          {/* Image Section */}
          <div className="col-span-2 flex flex-col max-md:items-center max-md:text-center max-md:gap-5">
            <div className="text-3xl font-semibold mb-3 text-black max-md:text-2xl">
              What we did
            </div>
            <div className="text-slate-400 space-y-3  max-md:text-black">
              <div>
                We provide accurate, authoritative &amp; trustworthy <br />{" "}
                medicines and help people use their <br /> medicines effectively
                and safely.
              </div>
              <div className="style__text-spacing___3F4hP"></div>
              <div>
                We get medicines and other health products delivered at <br />{" "}
                home in pune city. from licensed and <br /> Trusty Dealers.
              </div>
              <div></div>
              <div>
                We also provide services from certified labs <br /> and online
                orders at any time, from anywhere.{" "}
              </div>
            </div>
          </div>

          {/* Circle Section */}
          <div className="col-span-1 flex justify-center">
            <div className="circle"></div>
          </div>
          <div className="col-span-3 max-md:h-12 max-md:w-12">
            <img src={whatwedid} alt="journy" />
          </div>
          {/* Text Content Section */}
        </div>

        <div className="grid grid-cols-6  justify-center  place-items-center mt-8 w-[80%] max-md:flex max-md:flex-col max-md:gap-4">
          {/* Image Section */}
          <div className="col-span-2 max-md:h-12 max-md:w-12 ">
            <img src={journy} alt="journy" className="w-full" />
          </div>

          {/* Circle Section */}
          <div className="col-span-1 flex justify-center">
            <div className="circle1"></div>
          </div>

          {/* Text Content Section */}
          <div className="col-span-3 flex flex-col max-md:items-center max-md:gap-5 max-md:text-center">
            <div className="text-3xl font-semibold mb-3 text-black">
              The journey so far
            </div>
            <div className="text-slate-400 space-y-3  max-md:text-black">
              <div>
                In healthcare, the information around our medicines and <br />{" "}
                lab tests is either unavailable or incomprehensible to us.
              </div>

              <div>
                So we decided to create a platform that stood <br /> for
                transparent, authentic and accessible information for all.
              </div>

              <div>
                This idea grew into a company and sunmind was <br /> created in
                2015.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact py-12 mb-0 max-md:h-[350px]">
        <div className="container mx-auto  opacity-75  h-[250px] max-md:h-[100px] ">
          <div className="emj1 items-center grid lg:grid-cols-12 grid-cols-1 bg-[rgba(0,0,0,0.5)]">
            {/* Book Appointment Section */}
            <div className=" p-8 rounded-lg shadow-md col-span-6 h-[250px] opacity-100 ">
              <div className="mb-4">
                <span className="text-blue-600 text-sm uppercase font-semibold">
                  We are here for you
                </span>
                <h3 className="text-3xl font-bold text-gray-800 mt-2">
                  Book Your Order
                </h3>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
              >
                Book Order
              </Link>
            </div>

            {/* Emergency Contact Section */}
            <div className="emj2 flex items-center justify-end bg-white p-8 rounded-lg shadow-md col-span-6 h-[250px] max-md:h-[100px]">
              <div className="flex items-center space-x-4">
                {/* Phone Icon */}
                <div className="bg-blue-600 text-white p-4 rounded-full">
                  <FaPhoneAlt className="w-6 h-6" />
                </div>

                <div>
                  <span className="text-gray-900 text-sm uppercase font-semibold">
                    Sunmind Health Care
                  </span>
                  <h3 className="text-3xl font-bold text-gray-800">
                    +91-9011889317
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
