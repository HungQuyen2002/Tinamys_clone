import React, { useState } from "react";
import { AiOutlineArrowUp, AiOutlineMail } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

const Groupcontroll: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveButton(index);
  };

  const handleMouseLeave = () => {
    setActiveButton(null);
  };
  // hàm cuộn trang đến id feature
  const handleBenefitClick = () => {
    const benefitSection = document.getElementById("feature");
    if (benefitSection) {
      window.scrollTo({
        top: benefitSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  // hàm cuộn trang đến id contact
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  // hàm cuộn trang đến id contact
  const handleHomeClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="groupControll flex flex-col justify-center fixed bottom-[20%] right-0 w-[55px] transition-all hover:w-[160px] h-auto bg-[#dde6ed] rounded-tl-[14px] rounded-bl-[14px] shadow-custom"
        onMouseLeave={handleMouseLeave}
      >
        <button
          className={`btn-controll flex items-center justify-start relative right-0 cursor-pointer h-[50px] pl-[16px] ${
            activeButton === 0 ? "bg-blue-500 text-white" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(0)}
          onClick={handleBenefitClick}
        >
          <span className={`title ${activeButton === 0 ? "" : "hidden"} mr-10`}>
            ƯU ĐIỂM
          </span>
          <span className="icon text-[20px]">
            <FaRegStar />
          </span>
        </button>
        <button
          className={`btn-controll flex items-center justify-start relative right-0 cursor-pointer h-[50px] pl-[16px] ${
            activeButton === 1 ? "bg-blue-500 text-white" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(1)}
          onClick={handleContactClick}
        >
          <span className={`title ${activeButton === 1 ? "" : "hidden"} mr-12`}>
            LIÊN HỆ
          </span>
          <span className="icon text-[20px]">
            <AiOutlineMail />
          </span>
        </button>
        <button
          className={`btn-controll flex items-center justify-start relative right-0 cursor-pointer h-[50px] pl-[16px] ${
            activeButton === 2 ? "bg-blue-500 text-white" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(2)}
          onClick={handleHomeClick}
        >
          <span className={`title ${activeButton === 2 ? "" : "hidden"} mr-6`}>
            ĐẦU TRANG
          </span>
          <span className="icon text-[20px]">
            <AiOutlineArrowUp />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Groupcontroll;
