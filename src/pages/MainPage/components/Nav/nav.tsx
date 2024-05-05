import "../Nav/nav.css";
import img from "../../../../assets/logo.png";
import img1 from "../../../../assets/applestore.png";
import img2 from "../../../../assets/chplay.png";
import img3 from "../../../../assets/vietnam_flags.png";
import img4 from "../../../../assets/us_flags.png";
import img5 from "../../../../assets/china_flags.png";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";

const Nav = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  return (
    <nav className="navbar-about flex items-center justify-center w-full ">
      <div className="navbar-container flex items-center justify-between w-full max-w-[1380px]">
        <a href="#" className="imgLogo ml-0 lg:ml-16 cursor-pointer">
          <img src={img} alt="logo" className="h-[40px] w-[80px]" />
        </a>

        <div>
          <div className="flex items-center">
            <div className="flex gap-1.5">
              <button className="w-[5.8rem] h-[32px]">
                <img src={img1} alt="appstore" />
              </button>
              <button className="w-[5.8rem] h-[32px]">
                <img src={img2} alt="ggplay" />
              </button>
            </div>
            <a href="/login">
              <button className="p-2 inline-flex items-center justify-center font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed bg-[#1c7fff] h-[28.5px] ml-2.5 px-5 rounded-[4px] text-white text-xs">
              Trải nghiệm
            </button>
            </a>
            

            <div className="flex items-center mx-4">
              <FiPhoneCall className="h-[16px] w-[16px] text-blue-600" />
              <div className="flex flex-col justify-start text-contact ml-3 ">
                <p>Liên hệ với chúng tôi</p>
                <p>+(84) 246 329 5589</p>
              </div>
            </div>

            <div
              className="image-flag cursor-pointer"
              onMouseEnter={() => setIsOverlayVisible(true)}
              onMouseLeave={() => setIsOverlayVisible(false)}
            >
              <img src={img3} alt="VN" className="h-[38px] w-auto"/>
              {isOverlayVisible && (
                <div className="overlay">
                  <div className="flex items-center mr-2">
                    <img src={img4} alt="English" className="mr-2"/>
                    <p>English</p>
                  </div>

                  <div className="flex items-center mr-2">
                    <img src={img3} alt="Tiếng Việt" className="mr-2"/>
                    <p>Tiếng Việt</p>
                  </div>

                  <div className="flex items-center mr-2">
                    <img src={img5} alt="China" className="mr-2"/>
                    <p>China</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
