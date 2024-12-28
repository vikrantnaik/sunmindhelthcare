import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {medical1} from '../../assests/images'

const FAQ = () => {
  // State to keep track of which question is open
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="h-[100%] bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h1>

        {/* FAQ List */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(1)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                What is Sunmind Healthcare?
              </h3>
              {openQuestion === 1 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openQuestion === 1 && (
              <p className="mt-4 text-gray-600">
                Sunmind Healthcare is a healthcare provider offering medical
                care and services across various fields. Our mission is to
                ensure quality healthcare for all patients.
              </p>
            )}
          </div>

          {/* Question 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(2)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                How do I book an appointment?
              </h3>
              {openQuestion === 2 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openQuestion === 2 && (
              <p className="mt-4 text-gray-600">
                You can book an appointment by calling us directly at
                +91-9011889317. Our customer service representatives will guide
                you through the process and confirm your appointment.
              </p>
            )}
          </div>

          {/* Question 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(3)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                What services does Sunmind Healthcare offer?
              </h3>
              {openQuestion === 3 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openQuestion === 3 && (
              <p className="mt-4 text-gray-600">
                We offer a wide range of medical services, including primary
                care, emergency services, and specialty treatments in various
                medical fields.
              </p>
            )}
          </div>

          {/* Question 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(4)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Do you provide home care services?
              </h3>
              {openQuestion === 4 ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openQuestion === 4 && (
              <p className="mt-4 text-gray-600">
                Yes, we do offer home care services for certain conditions.
                Please contact us for more information about eligibility and
                availability.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row border border-cyan-500 justify-center mx-auto p-8 mt-12  w-[70%] gap-5 bg-white">
        {/* Medilife Tab Text */}
        <div className="md:w-1/2 mb-8 py-12 md:mb-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Take a look at this
          </h2>
          <p className="text-gray-600 leading-relaxed">
            "<strong> Lacosamide injection </strong> has transformed the way we
            approach patient care. It not only helps in pain management but also
            enhances mobility and overall quality of life. We have seen
            remarkable improvements in our patients who incorporate Lacosamide
            into their treatment regimen."
            <br />
            <span className="font-semibold">
              - Dr. Deshmukh, Orthopedic Specialist
            </span>
          </p>
        </div>

        {/* Medilife Tab Image */}
        <div className=" md:w-[300px] md:-h-[300px] flex justify-center">
          <img
            src={medical1}
            alt="Medical Care"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
