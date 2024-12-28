import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarked,
  FaMapMarker,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Contact = ({ img }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esv4ejv", // Replace with your EmailJS Service ID
        "template_h7iku1l", // Replace with your EmailJS Template ID
        form.current,
        "4GZrz0yplK9zovO05" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="aboutuscontent"></div>
      {img && (
        <div className="contactus">
          Contact Us
          <p className="text-sm mt-2">
            "Let's Make Things Happen – Contact Us Now!"
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-8 gap-4 justify-center w-full max-w-screen-lg  overflow-hidden bg-white">
          <div className="col-span-5 p-8">
            <h5 className="text-xl font-semibold mb-10 text-gray-800">
              Get in touch
            </h5>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="p-2 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all bg-[#f5f7f9]"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="p-2 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all  bg-[#f5f7f9]"
              />

              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                required
                className="p-2 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all  bg-[#f5f7f9]"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="p-2 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all h-[200px]  bg-[#f5f7f9]"
              ></textarea>

              <button
                type="submit"
                className="p-2 mt-5 w-[140px] h-11 bg-[#006cff] text-white font-semibold  hover:bg-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Massage
              </button>
            </form>
          </div>
          <div className="col-span-3 p-8 text-[#57595c] flex justify-center md:justify-start items-start">
            <div className="about-widget space-y-8">
              <ul className="space-y-6 mt-16">
                <li className="flex items-start gap-4">
                  <FaMapMarked className="fa fa-twitter text-[#57595c] text-xl" />
                  <p>Address :Sunmind Healthcare, 562/1 , s.no 26 Nigdi Pune</p>
                </li>
                <li className="flex items-center gap-4">
                  <FaEnvelope className="fa fa-twitter text-[#57595c]" />
                  <Link to="#" className="hover:underline">
                    <p>Email : Support@sunmind.com</p>
                  </Link>
                </li>
                <li className="flex items-center gap-4">
                  <IoIosCall />
                  <p>Phone :9011889317</p>
                </li>
              </ul>
              <ul className="flex space-x-3 mt-8">
                <li>
                  <Link to="https://www.facebook.com/share/CKz42zyYNtCUijdR/">
                    <i className="fa fa-facebook text-white"></i>
                    <CiFacebook className=" text-blue-300 hover:text-blue-600" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTwitter className="fa fa-twitter text-blue-300 hover:text-blue-600" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/bhim-bhande-52a13788/">
                    <FaLinkedin className="fa fa-linkedin text-blue-300 hover:text-blue-600" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-6">
        <div className="w-full max-w-2xl ">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Find Us Here
          </h2>
          <div className="map-container mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.9949682362076!2d73.7701972749666!3d18.66422178245737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b7608cf9f561%3A0x1acee6fcfd61a4b1!2sNigdi%20Chowk%2C%20Nigdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411044!5e0!3m2!1sen!2sin!4v1728852408516!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir//Nigdi+Chowk+Nigdi+Pimpri-Chinchwad,+Maharashtra+411044/@18.6642218,73.7727722,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2b7608cf9f561:0x1acee6fcfd61a4b1!2m2!1d73.7727722!2d18.6642218?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
