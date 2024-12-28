import React from "react";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FaAngleRight, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { PiCertificateLight } from "react-icons/pi";
import { TbFileCertificate } from "react-icons/tb";
import { TiSocialVimeoCircular } from "react-icons/ti";
import { Link } from "react-router-dom";
import productData from "../../data";

const Fotter = () => {
  return (
    <div className="">
      <div className="bg-gray-800 text-white py-10 ">
        <div className="footer-top">
          <div className="container mx-2 max-md:ml-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <div className="about-widget">
                  <div className="footer-logo mb-4">
                    <Link to="/">
                      <strong className=" text-primary text-2xl max-md:text-xs">
                        Sunmind
                      </strong>
                      Health Care – Quality You Can Trust."
                    </Link>
                  </div>
                  <p className="mb-4">
                    Committed to providing safe, reliable, and effective medical
                    products for a healthier tomorrow.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <i className="fa fa-map-marker mr-2"></i>
                      <p>Sunmind Healthcare, 562/1 , s.no 26 Nigdi Pune</p>
                    </li>
                    <li className="flex items-center">
                      <i className="fa fa-envelope mr-2"></i>
                      <Link to="#" className="hover:underline">
                        <p>Support@sunmind.com</p>
                      </Link>
                    </li>
                    <li className="flex items-center gap-2">
                      <IoIosCall />
                      <p>9011889317</p>
                    </li>
                  </ul>
                  <ul className="flex space-x-3 mt-4">
                    <li>
                      <Link to="https://www.facebook.com/share/CKz42zyYNtCUijdR/">
                        <i className="fa fa-facebook text-white"></i>
                        <CiFacebook className=" text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter className="fa fa-twitter text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/bhim-bhande-52a13788/">
                        <FaLinkedin className="fa fa-linkedin text-white" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <TiSocialVimeoCircular className="fa fa-vimeo text-white" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="">
                <h6 className="text-xl font-semibold mb-4">Products</h6>
                {productData.map((product) => (
                  <ul className="space-y-2">
                    <li className="text-sm py-1">
                      <Link
                        to={`/products/${product.id}`}
                        className="hover:underline flex"
                        onClick={() =>
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          })
                        }
                      >
                        <FaAngleRight />
                        {product.name}
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>

              <div>
                <h6 className="text-xl font-semibold mb-4">
                  Certifications and Accreditations
                </h6>
                <ul className="space-y-4">
                  <li className="flex">
                    <Link to="#">
                      <PiCertificateLight />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <h4 className="font-medium">
                        <a
                          href="https://www.iso.org/standard/62085.html#:~:text=ISO%209001%20is%20a%20globally,demonstrate%20their%20commitment%20to%20quality."
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ISO 9001 Certified
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="flex">
                    <Link to="#">
                      <AiTwotoneSafetyCertificate />
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <h4 className="font-medium">
                        <a
                          href="https://www.fda.gov/drugs"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          FDA Approved
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="flex">
                    <Link to="#">
                      <TbFileCertificate />
                    </Link>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                      <h4 className="font-medium">
                        <a
                          href="https://fdawhogmp.maharashtra.gov.in/general/Pdf%20Revised%20GUIDELINES%20FOR%20CERT%20UNDER%20WHO.pdf?AspxAutoDetectCookieSupport=1"
                          className="hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WHO-GMP Compliant
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-10 border-t border-gray-700 pt-6 max-md:ml-3">
          <div className="container px-4 flex justify-between items-center max-md:flex-col max-md:items-start ">
            <p>
              © Copyright 2024. All Rights Reserved by *
              <a
                href="https://vikrant-portfolio1.netlify.app/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                VIKRANT NAIK
              </a>
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
