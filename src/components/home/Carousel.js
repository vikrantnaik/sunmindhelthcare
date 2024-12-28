import React, { useState } from "react";
import products from "../../data";
import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "Walmind DSR", type: "Capsule" },
//   { id: 2, name: "Calastoplus", type: "Capsule" },
//   { id: 3, name: "Telotel-H", type: "Capsule" },
//   { id: 4, name: "Glyrosun", type: "Tablet" },
//   { id: 5, name: "Coximind", type: "Tablet" },
//   { id: 6, name: "Naramind", type: "Tablet" },
//   { id: 7, name: "Setmind", type: "Injection" },
//   { id: 8, name: "Stromind", type: "Tablet & Injection" },
//   { id: 9, name: "Setrokind", type: "Tablet" },
// ];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3; // Number of cards visible at a time
  const cardWidth = 300; // W8dth of each card in pixels

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[420px] bg-slate-100 m-0">
      <div className="w-full p-2 justify-center flex">
        <strong className="text-3xl max-md:text-3xl text-center w-full">
          Popular items ⭐
        </strong>
      </div>
      <div className="relative w-full max-w-4xl mx-auto p-4 ">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(products.length / visibleCards) * 100}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 flex"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div
                  className="bg-white shadow-md rounded-md m-4 p-4 flex flex-col justify-center items-center"
                  style={{ height: "300px", width: "300px" }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="cursor-pointer"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-2/3 w-full object-cover rounded-md mb-4 cursor-pointer"
                    />
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </Link>
                </div>
                <p className="text-lg w-[450px] max-md:hidden text-center mt-16">
                  {product.description1}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full max-md:hidden"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full  max-md:hidden"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
