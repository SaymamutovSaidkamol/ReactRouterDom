import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import image from "../../assets/Illustration.svg"


const Home = () => {
  return (
    <div className="bg-[#1C1E53]">
      <div className="container mx-auto h-[668px] flex justify-center items-center max-[1000px]:flex-col max-[1000px]:gap-20 max-[1000px]:justify-center max-[1000px]:items-center max-[1000px]:pt-[300px]">
        <div className="flex flex-col justify-center items-start w-[502px]  mr-[60px]">
          <h3 className="text-[54px] text-white">Building stellar websites for early startups</h3>
          <p className="text-[#FFFFFF] opacity-70 mt-[24px] mb-[48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="flex justify-center items-center gap-[40px]">
            <button className="w-[230px] h-[64px] rounded-[41px] bg-[#FCD980] text-[18px]">View our work</button>
            <button className="flex justify-center items-center text-white gap-4">
              View Pricing <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
