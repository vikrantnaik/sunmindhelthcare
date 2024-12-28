import React from "react";
import { Helmet } from "react-helmet"; // For meta tags
import sunmind from "../../assests/images/setmind.jpg";
import img from "../../assests/images/about1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import productData from "../../data";

// import { Carousel } from "@material-tailwind/react";

const ProductPage = () => {
  const { id } = useParams();

  const product = productData.find((item) => item.id === parseInt(id));
  //  const images = [
  //    {
  //      src:  sunmind ,
  //      alt: "Locomind - Pain Relief and Mobility Improvement 1",
  //    },
  //    {
  //      src:  img ,
  //      alt: "Locomind - Pain Relief and Mobility Improvement 2",
  //    },
  //    {
  //      src:  sunmind ,
  //      alt: "Locomind - Pain Relief and Mobility Improvement 3",
  //    },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          {product.name} - Pain Relief and Mobility Improvement | Sunmind
          Healthcare
        </title>
        <meta
          name="description"
          content="Discover the power of Locomind by Sunmind Healthcare for effective pain relief and improved mobility. Learn more about this revolutionary medicine and its benefits."
        />
        <meta
          name="keywords"
          content="Locomind, pain relief, mobility, healthcare, Sunmind Healthcare, orthopedic medicine"
        />
      </Helmet>

      {/* Header */}
      <header className="py-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">
            {product.name} by Sunmind Healthcare
          </h1>
        </div>
      </header>

      {/* Product Section */}
      <section className="py-8 container mx-auto px-4">
        <article className="md:flex gap-10">
          {/* Product Image */}
          <div className="md:w-1/2 ">
            <Slider {...settings}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt="ok"
                    className="w-full h-[400px] object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Product Details */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {product.name} - Pain Relief and Mobility Improvement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {/* Locomind is a groundbreaking medication designed to alleviate pain
              and enhance mobility. Trusted by healthcare professionals,
              Locomind provides long-term relief for patients suffering from
              joint and muscle discomfort. */}
              {product.description1}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {product.description2}
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li>Reduces joint and muscle pain.</li>
              <li>Enhances mobility for better movement.</li>
              <li>Suitable for long-term use.</li>
              <li>Recommended by doctors and physiotherapists.</li>
            </ul>

            {/* Call to Action */}
            <a
              href="tel:+919011889317"
              className="block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700"
            >
              Order by Phone: +91 - 9011889317
            </a>
          </div>
        </article>
      </section>

      {/* FAQ Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <details className="bg-white p-4 rounded-lg shadow-md">
                <summary className="cursor-pointer font-semibold text-gray-800">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-white shadow-inner">
        <div className="container mx-auto">
          <p className="text-center text-gray-600">
            © 2024 Sunmind Healthcare. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ProductPage;
