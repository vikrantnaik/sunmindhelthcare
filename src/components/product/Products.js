import React from "react";
import { Link } from "react-router-dom";
import productData from "../../data";

//     id: 1,
//     name: "Locomind",
//     description: "Pain Relief and Mobility Improvement",
//     price: "$49.99",
//     image: "/img/locomind.png",
//   },
//   {
//     id: 2,
//     name: "Sunvitamin",
//     description: "Essential Vitamins and Minerals",
//     price: "$29.99",
//     image: "/img/sunvitamin.png",
//   },
//   {
//     id: 3,
//     name: "Sunenergy",
//     description: "Boost Your Energy Naturally",
//     price: "$39.99",
//     image: "/img/sunenergy.png",
//   },
//   {
//     id: 4,
//     name: "Suncare",
//     description: "Skincare Protection and Hydration",
//     price: "$59.99",
//     image: "/img/suncare.png",
//   },
//   {
//     id: 5,
//     name: "Sunimmunity",
//     description: "Immunity Booster",
//     price: "$24.99",
//     image: "/img/sunimmunity.png",
//   },
//   {
//     id: 6,
//     name: "Sunrelax",
//     description: "Relaxation and Stress Relief",
//     price: "$44.99",
//     image: "/img/sunrelax.png",
//   },
// ];

const Products = () => {
  const trimDesc = (desc, limit) => {
    if (desc.length > limit) {
      return desc.substring(0, limit) + "...";
    }
  };
  return (
    <main className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {productData.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-40 w-full object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  {/* {trimDesc(product.description2, 100)}
                   */}
                          {trimDesc(product.description1,100)}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
