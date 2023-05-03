import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/19705-chef.json";
import { HiArrowNarrowRight } from "react-icons/hi";
const HomeBanner = () => {
  return (
    <div>
      <div className="md:flex justify-center items-center md:w-10/12 mx-auto my-5">
        <div className="md:py-5 px-10 md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 leading-10 font-serif">
            <span className="text-amber-700">A Culinary Adventure</span> <br />{" "}
            Through Exotic Flavors <br /> and Spices
          </h2>
          <p className="text-gray-600">
            This chef provides a collection of recipes, cooking techniques, and
            resources to help home cooks create delicious meals and improve
            their culinary skills.
          </p>
          <button className="btn-secondary flex justify-center items-center">
            Read More
            <HiArrowNarrowRight className="ml-2" />
          </button>
        </div>
        <div className="md:w-1/2">
          <Lottie animationData={animationData} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
