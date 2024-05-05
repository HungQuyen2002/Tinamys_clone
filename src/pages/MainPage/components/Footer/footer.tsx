import footer1 from "../../../../assets/footer-shape-1.fcf37f00.png";
import footer2 from "../../../../assets/footer-shape-2.e79c086e.png";
import footer3 from "../../../../assets/footer-shape-3.6a2740c0.png";
import logo from "../../../../assets/logo.png";
import btnAppstore from "../../../../assets/apple.png";
import btnPlaystore from "../../../../assets/gg-play.png";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-10">
        <div className="footer relative overflow-hidden w-full h-auto max-w-[112rem] mx-auto xl:mt-10 bg-[#121933]">
          <svg
            width="80%"
            height="80%"
            className="absolute top-[-48%] right-[-5%] md:left-[-4%] z-0 w-[24%]"
            viewBox="0 0 338 338"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="168.891"
              cy="168.685"
              r="168.574"
              fill="#ffffff1a"
            ></circle>
          </svg>
          <div className="footer-container w-full h-full overflow-hidden pt-7 sm:pt-8 md:pt-10 xl:pt-16 xxl:pt-20 xxl:mx-auto ">
            <div className="footer-content relative  justify-center text-white grid grid-cols-1 sm:grid-cols-2 md:flex sm:gap-x-6 md:px-10 xl:px-14 pb-10 xl:pb-14 px-6">
              <img
                src={footer1}
                alt="footer1"
                className="absolute w-[4%] top-2/3 left-[8%] z-10"
              />
              <img
                src={footer2}
                alt="footer2"
                className="absolute w-[6%] hidden md:block right-[8%] z-10"
              />
              <img
                src={footer3}
                alt="footer3"
                className="absolute w-[24%] md:w-[8%] bottom-[5%] md:bottom-[12%] right-[-10%] md:right-[5%] z-0"
              />
              <div className="text-content contact pb-7 mr-32">
                <a href="#">
                  <img
                    src={logo}
                    alt="logo"
                    className="h-[auto] w-[160px] pb-3"
                  />
                </a>
                <div className="flex flex-col items-start opacity-[0.84] max-w-[19rem]">
                  <a href="#" className="hover:text-[#1890ff] text-[14px]">
                    Email: contact@tinasoft.vn
                  </a>
                  <a href="#" className="hover:text-[#1890ff] text-[14px]">
                    Số điện thoại: +(84) 246 329 5589
                  </a>
                  <p className="text-[14px]">
                    Địa chỉ văn phòng: Tầng 4, Tòa nhà Ellipse Tower, 110 Trần
                    Phú, Hà Đông, Hà Nội
                  </p>
                </div>
              </div>

              <div className="product-services text-content pb-7 sm:pt-[50px] mx-6">
                <div className="flex justify-start items-start gap-14 md:gap-14">
                  <div className="w-120% mr-10">
                    <h3 className="text-white text-2xl sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:title pb-8">
                      About MYS
                    </h3>
                    <ul className="grid">
                      <li>
                        <a href="about-us">
                          <p className="opacity-[0.84] hover:opacity-100 text-[14px] pb-2">
                            Giới thiệu
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="about-feature">
                          <p className="opacity-[0.84] hover:opacity-100 text-[14px] pb-2">
                            Tính năng
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="w-120%">
                    <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:title pb-8">
                      Solution
                    </h3>
                    <ul className="grid">
                      <li>
                        <a href="#">
                          <p className="opacity-[0.84] hover:opacity-100 text-[14px] pb-2">
                            Đăng ký dùng thử
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="opacity-[0.84] hover:opacity-100 text-[14px] pb-2">
                            Faqs
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <p className="opacity-[0.84] hover:opacity-100 text-[14px] pb-2">
                            Help Center
                          </p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="dowloadapp md:pt-[50px] pr-20 ml-24">
                <h3 className="title pb-2.5 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl xxl:text-[25px] font-semibold xl:pb-8">
                  Trải nghiệm ứng dụng!
                </h3>
                <div className="flex flex-row sm:flex-col gap-7 sm:gap-5">
                    <button className="btn-store bg-[#222943] flex items-center justify-center rounded-[5px] py-5 w-[166px] hover:bg-[#007aff]">
                        <img src={btnAppstore} alt="btnAppstore" className="pr-3 w-[25px] h-auto"/>
                        <span>
                            App Store
                        </span>
                    </button>
                    <button className="btn-store bg-[#222943] flex items-center justify-center rounded-[5px] py-5 w-[166px] hover:bg-[#007aff]">
                        <img src={btnPlaystore} alt="btnPlaystore" className="pr-3 w-[25px] h-auto"/>
                        <span>
                            Play Store
                        </span>
                    </button>
                </div>
              </div>
            </div>
            <hr className="w-full xl:w-10/12 mx-auto opacity-30 border-solid border-[#777e90]"/>
            <div className="flex justify-between py-2 xxl:py-6 text-white w-10/12 mx-auto">
                <a href="#" className="opacity-[0.84] hover:opacity-100 hover:text-[#3498db]">
                © 2023 
                TINASOFT VIỆT NAM
                </a>

                <div className="flex items-center">
                    <p className="opacity-[0.84] hover:opacity-100 cursor-text">
                    Privacy Policy
                    </p>
                    <svg width="6px" height="100%" className="mx-6" viewBox="0 0 338 338" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="168.891" cy="168.685" r="168.574" fill="#2B59FF"></circle></svg>
                    <p className="opacity-[0.84] hover:opacity-100 cursor-text">
                    Refund Policy
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
