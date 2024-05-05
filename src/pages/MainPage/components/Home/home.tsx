import img from "../../../../assets/background-one.png";
import img1 from "../../../../assets/image-section-one.png";
import img2 from "../../../../assets/image-section-two.png";
import img3 from "../../../../assets/image-section-three.png";
import img4 from "../../../../assets/image-section-four.png";
import img5 from "../../../../assets/image-section-five.png";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";

const Home = () => {
  return (
    <div>
      {/* Section 1 */}
      <div id="home"></div>
      <div className="flex items-center justify-center">
        <div className="sectionOne relative max-w-[1792px] flex items-center justify-center">
          <img src={img} alt="bg1" />
          <div className="sectionOne-container absolute top-0 left-0 w-full h-full flex items-center justify-center px-6 py-5 lg:px-8 lg:py-10 xl:px-14 xl:py-16">
            <div className="flex flex-wrap items-center w-full sm:flex-nowrap lg:justify-center lg:mx-auto sm:gap-x-3 md:gap-x-7 lg:gap-x-10 xl:gap-x-14 max-w-fit mx-auto">
              <div className="relative xxxl:translate-x-10 w-full order-first sm:order-last">
                <div className="relative flex-1 flex flex-col items-center pt-[260px]">
                  <h1 className="relative flex items-center justify-center font-jakarta text-5xl sm:text-3xl md:text-[28px] lg:text-3xl xl:text-[32px] xxl:text-[50px] text-[#001E4D] font-medium z-10 leading-normal xl:leading-[3.25rem] xxl:leading-[3.25rem]">
                    <span className="relative mr-2">
                      Thay{" "}
                      <div className="absolute -top-1/2 -left-1/2 w-full h-full">
                        <svg
                          width="80%"
                          height="80%"
                          viewBox="0 0 62 67"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="lineCircle"
                            strokeWidth="1.69062"
                            strokeLinecap="round"
                            d="M20.694 62.3197C14.8739 60.6864 8.7803 59.8625 2.86918 59.1077C1.59601 58.9495 0.413967 59.8326 0.323026 61.0766C0.141145 62.3216 1.05108 63.4601 2.2333 63.6183C7.96255 64.3449 13.8731 65.1226 19.4206 66.6949C20.6028 67.0358 21.8765 66.3339 22.2402 65.1262C22.6039 63.9194 21.8762 62.6616 20.694 62.3197Z"
                            stroke="#FF5F55"
                          ></path>
                          <path
                            className="lineCircle"
                            strokeWidth="1.69062"
                            strokeLinecap="round"
                            d="M38.3352 39.1642C28.9683 29.6055 18.4193 21.2772 9.23422 11.462C8.41575 10.5453 6.9607 10.4962 6.0513 11.352C5.14189 12.2086 5.05131 13.6491 5.96071 14.5658C15.1457 24.4091 25.6948 32.7648 35.0617 42.3518C35.9712 43.2466 37.4258 43.2593 38.3352 42.3789C39.1537 41.4996 39.2446 40.0592 38.3352 39.1642Z"
                            stroke="#FF5F55"
                          ></path>
                          <path
                            className="lineCircle"
                            strokeWidth="1.69062"
                            strokeLinecap="round"
                            d="M55.8886 2.39698C56.1614 7.86795 56.4336 13.3389 56.7065 18.8108C56.7065 20.064 57.7983 21.0316 59.0715 20.9706C60.3446 20.9088 61.2535 19.8421 61.2535 18.588C60.9807 13.1079 60.7083 7.62877 60.4356 2.14962C60.3446 0.896452 59.2532 -0.0647889 57.9801 0.00341648C56.7977 0.0716218 55.7976 1.14472 55.8886 2.39698Z"
                            stroke="#FF5F55"
                          ></path>
                        </svg>
                      </div>
                    </span>{" "}
                    đổi cách quản lý công việc
                  </h1>

                  <h1 className="relative font-jakarta text-5xl sm:text-3xl md:text-[34px] lg:text-4xl xl:text-[42px] xxl:text-[60px] text-[#001E4D] font-bold z-10 leading-normal xl:leading-[4.25rem] xxl:leading-[6.25rem]">
                    Mapping Your
                    <span className="relative ml-2">
                      Success
                      <div className="absolute top-0 left-0 w-full h-full">
                        <svg
                          width="110%"
                          height="110%"
                          viewBox="0 0 296 70"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="lineCircle"
                            d="M123.477 56.5914C47.3723 64.5971 -12.4993 43.7699 4.85737 27.8086C26.5533 7.85694 230.104 -10.2483 280.993 12.2282C355.842 45.2872 99.9566 92.2446 15.646 54.0127"
                            stroke="#FF5F55"
                            stroke-width="2"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </h1>

                  <ul className="relative pt-3 flex flex-col gap-y-2.5 xl:gap-y-2 xxxl:gap-y-5">
                    <li className="flex gap-x-1 lg:gap-x-6 items-center">
                      <div className="w-4 h-4 xxl:w-5 xxl:h-5 text-[#0070ff]">
                        <FaCheckCircle />
                      </div>
                      <p className="text-[16px] font-jakarta leading-[175%] font-bold text-[#6B6B6B]">
                        Quản lý mục tiêu của công ty, nhóm, nhân sự một cách dễ
                        dàng và tiện lợi
                      </p>
                    </li>

                    <li className="flex gap-x-1 lg:gap-x-6 items-center">
                      <div className="w-4 h-4 xxl:w-5 xxl:h-5 text-[#0070ff]">
                        <FaCheckCircle />
                      </div>
                      <p className="text-[16px] font-jakarta leading-[175%] font-bold text-[#6B6B6B]">
                        Cho phép lập mục tiêu theo chu kì năm, quý, tháng, tuần
                      </p>
                    </li>

                    <li className="flex gap-x-1 lg:gap-x-6 items-center">
                      <div className="w-4 h-4 xxl:w-5 xxl:h-5 text-[#0070ff]">
                        <FaCheckCircle />
                      </div>
                      <p className="text-[16px] font-jakarta leading-[175%] font-bold text-[#6B6B6B]">
                        Quản lý checkin tiến độ mục tiêu, dự án của công ty,
                        nhómn
                      </p>
                    </li>

                    <li className="flex gap-x-1 lg:gap-x-6 items-center">
                      <div className="w-4 h-4 xxl:w-5 xxl:h-5 text-[#0070ff]">
                        <FaCheckCircle />
                      </div>
                      <p className="text-[16px] font-jakarta leading-[175%] font-bold text-[#6B6B6B]">
                        Tự động nhắc việc và thông báo đến những người liên quan
                      </p>
                    </li>
                  </ul>

                  <div className="relative flex flex-col items-center mt-5">
                    <div className=" relative flex items-center gap-x-3">
                      <a href="#">
                        <button className="flex items-center bg-[#FF6C44] font-jakarta px-5 py-2.5 rounded-full text-slate-100 shadow-[0_0_30px_0_rgba(0,0,0,0.07) ]">
                          <AiOutlineDownload className="mr-1 text-xl" />
                          <p className="text-[14px]">Tải Profile</p>
                        </button>
                      </a>
                      <a href="/login">
                        <button className="bg-[#0070FF] font-jakarta px-5 py-2.5 rounded-full text-slate-100 shadow-[0_0_30px_0_rgba(0,0,0,0.07)] text-[14px]">
                          Trải nghiệm ngay!
                        </button>
                      </a>
                    </div>

                    <div>
                      <img
                        src={img1}
                        className="relative w-4/5 h-auto mx-auto"
                      />
                      <span className="absolute top-[54%] right-[5%]">
                        <svg
                          width="140px"
                          height="160px"
                          viewBox="0 0 181 169"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="lineGreenCircle"
                            d="M176.5 16.8031C187 51.5 171.646 60.7893 155.701 66.3031C140.274 67.8169 130.726 68.0348 110.701 66.3031C101.334 65.6499 96.3342 65.4112 77.2013 59.8031C64.8166 53.9343 59.3993 50.8962 54.7013 46.3031C45.7938 34.6432 42.8911 27.6899 50.2013 12.8031C59.1955 1.56931 66.067 -0.417149 80.7013 1.80307C96.4772 6.41586 100.474 10.1144 107.201 16.8031C111.634 27.2472 120.27 35.5732 115.5 51.5C111.436 66.2491 108.74 71.2081 102.201 81.3031C94.0929 94.1934 89.5035 99.5284 80.7013 108.5C71.8991 117.472 71.8505 119.669 64.5 123.303C51.4896 132.959 39.943 134.42 28.5 131C23.7987 132.251 10.1649 128.806 6.70131 123.303C1.68038 113.125 1.85283 109.014 6.70131 104.303C15.2617 97.9011 26.2013 104.303 26.2013 104.303C26.2013 104.303 36.0763 111.693 37.7013 118.303C42.7083 126.614 35.7024 140.803 35.7024 140.803C35.7024 140.803 25.9704 155.751 26.2013 156.303L17.5 161.5L6.70131 164.5"
                            stroke="#61CB8C"
                            stroke-width="2.5"
                          ></path>
                          <path
                            className="arrowLineGreenCircle"
                            d="M4 157L1 168.5H11.5H16"
                            stroke="#61CB8C"
                            stroke-width="2.5"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="flex items-center justify-center pt-[180px]">
        <div className="section-two lg:pt-14 px-5 sm:px-7 md:px-12 pt-6 md:pt-0 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
          <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 justify-center lg:gap-x-16 max-w-[80rem] lg:mx-auto xl:gap-16">
            <div className="relative w-11/12 max-w-[20rem] sm:max-w-fit md:w-[46%] lg:w-[60%] xl:w-[50%] mx-auto sm:m-0 hover:scale-105 duration-300">
              <img src={img2} alt="abc" className="mx-auto relative" />
              <div>
                <span className="absolute -top-[30%] -right-[6%]">
                  <svg
                    width="180px"
                    height="230px"
                    viewBox="0 0 296 197"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="line"
                      d="M2.39893 60.9506C4.16683 54.8839 4.51647 48.2074 7.70264 42.7504C17.2995 26.3138 31.1018 20.4503 48.4017 13.8871C69.4425 5.90452 93.8513 0.816731 116.513 3.00044C142.012 5.45767 169.71 17.2816 188.085 35.2694C199.825 46.7623 208.47 62.611 209.746 79.1507C210.84 93.3161 206.574 101.347 196.682 110.415C191.169 115.469 208.872 101.66 215.497 98.1882C231.179 89.9685 254.331 83.1748 270.99 92.9403C288.85 103.41 288.604 132.785 285.171 150.22C282.844 162.036 277.406 173.306 269.706 182.545"
                      stroke="#FD319E"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <path
                      className="arrowline"
                      d="M260.507 177.446C262.159 183.143 263.176 188.857 264.351 194.662"
                      stroke="#FD319E"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <path
                      className="arrowline"
                      d="M264.017 194.829C269.995 192.267 276.534 190.849 282.738 188.979"
                      stroke="#FD319E"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-2/5 lg:pl-12 xl:pl-0 order-first sm:order-last">
              <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[150%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                Lập mục tiêu theo chu kì năm, quý, tháng, tuần
              </h1>
              <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[20px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Lập mục tiêu chi tiết theo năm, quý, tháng, tuần
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[45px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Tổ chức các hạng mục công việc, phân bổ nhân lực liên nhóm
                    để thực hiện mục tiêu và quản lý tiến độ trên một nền tảng
                    hợp nhất
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[36px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Tổ chức công việc theo dự án, báo cáo độc lập, theo dõi đầu
                    việc đa chiều, cảnh báo tiến độ thông minh
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3  */}
      <div className="flex items-center justify-center ">
        <div className="section-three px-5 sm:px-7 lg:pt-14 md:px-12 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
          <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 md:justify-center lg:mx-auto lg:gap-x-10 max-w-[80rem]">
            {/* li container  */}
            <div className="relative w-full md:w-1/2 xl:w-2/5 xxl:w-1/2 xxl:pl-5">
              <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                Quản lý mục tiêu theo cấp bậc công ty, nhóm, nhân viên
              </h1>

              <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[26px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Chia nhỏ mục tiêu theo cấp bậc từ công ty, nhóm đến từng
                    nhân viên
                  </p>
                </li>
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[42px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Giám sát tiến độ thực hiện mục tiêu, đánh giá hiệu quả, giúp
                    cấp trên đưa ra quyết định chính xác và nhanh chóng
                  </p>
                </li>
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[38px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Giao tiếp và trao đổi nội bộ trên từng công việc. Thông tin
                    đồng bộ, kịp thời và dễ dàng phối hợp
                  </p>
                </li>
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[32px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Quản lý mục tiêu, tiến độ hoàn thành của nhân viên cấp dưới
                    trên một bảng chung
                  </p>
                </li>
              </ul>
            </div>
            {/* img  */}
            <div className="relative w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] xxl:w-3/5 sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
              <svg
                width="13%"
                height="10%"
                viewBox="0 0 86 86"
                className="hidden lg:inline-block absolute -bottom-[8%] -left-1/4 z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.5901 57.6732L41.7803 85.7443L38.5969 47.2789L64.4067 19.2077L67.5901 57.6732Z"
                  fill="#f37726"
                ></path>
                <path
                  d="M38.5974 47.2789L64.4072 19.2077L25.8103 19.2586L0.000451041 47.3297L38.5974 47.2789Z"
                  fill="#f37726"
                ></path>
              </svg>
              <img src={img3} alt="s3" />
            </div>
          </div>
        </div>
      </div>
      {/* Section 4  */}
      <div className="flex items-center justify-center">
        <div className="section-four px-5 sm:px-7 lg:pt-14 md:px-12 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
          <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 md:justify-center lg:mx-auto lg:gap-x-16 max-w-[80rem]">
            <div className="w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
              <img src={img4} alt="section4" />
            </div>

            <div className="relative w-full md:w-1/2 lg:w-[60%] xl:w-2/5 lg:pl-12 xl:pl-0 order-first sm:order-last">
              <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                Kế hoạch công việc hàng ngày
              </h1>
              <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[20px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Chia nhỏ mục tiêu thành các công việc hàng ngày
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[22px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Cho phép lên kế hoạch công việc một cách chi tiết và rõ ràng
                    hơn
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[26px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Định hướng mục tiêu của mỗi công việc đang được thực hiện
                    hàng ngày
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5  */}
      <div className="flex items-center justify-center">
        <div className="section-five px-5 sm:px-7 lg:pt-14 md:px-12 lg:px-14 pb-10 xl:mt-5 xxl:mt-10 max-w-[112rem] mx-auto">
          <div className="flex flex-wrap items-center sm:flex-nowrap sm:gap-5 md:justify-center lg:mx-auto lg:gap-x-16 max-w-[80rem]">
            <div className="relative w-full md:w-1/2 xl:w-2/5 xxl:w-2/5">
              <h1 className="text-xl lg:text-3xl xl:text-4xl xxl:text-[39px] xxl:leading-[178%] leading-9 font-semibold pb-2 lg:pb-6 text-[#001E4D] tracking-tighter">
                Checkin tiến độ công việc, mục tiêu
              </h1>
              <ul className="flex flex-col gap-1.5 lg:gap-x-7 justify-start items-start">
                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[28px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Checkin tiến độ công việc định kỳ để giúp quản lý đưa ra
                    quyết định chính xác
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[25px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Hệ thống tự động nhắc tiến độ công việc đến những người liên
                    quan
                  </p>
                </li>

                <li className="flex gap-x-2 lg:gap-x-7 justify-start items-start">
                  <IoMdCheckmark className="text-[22px] text-[#2B59FF]" />
                  <p className="text-sm text-justify xxl:text-xl xl:text-lg lg:text-lg font-normal text-[#495460] leading-[150%]">
                    Hệ thống tự động cảnh báo công việc sắp đến hạn, quá hạn
                  </p>
                </li>
              </ul>
            </div>

            <div className="relative w-10/12 max-w-[18.75rem] md:w-[44%] lg:w-[60%] xl:w-[50%] xxl:w-3/5 sm:max-w-fit mx-auto sm:m-0 hover:scale-105 duration-300">
              <div>
                <img src={img5} alt="section5" />
                <div>
                  <span className="absolute top-[46%] right-0 svg-line">
                    <svg
                      width="140px"
                      height="160px"
                      viewBox="0 0 296 197"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="line"
                        d="M2.39893 60.9506C4.16683 54.8839 4.51647 48.2074 7.70264 42.7504C17.2995 26.3138 31.1018 20.4503 48.4017 13.8871C69.4425 5.90452 93.8513 0.816731 116.513 3.00044C142.012 5.45767 169.71 17.2816 188.085 35.2694C199.825 46.7623 208.47 62.611 209.746 79.1507C210.84 93.3161 206.574 101.347 196.682 110.415C191.169 115.469 208.872 101.66 215.497 98.1882C231.179 89.9685 254.331 83.1748 270.99 92.9403C288.85 103.41 288.604 132.785 285.171 150.22C282.844 162.036 277.406 173.306 269.706 182.545"
                        stroke="#FD319E"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        className="arrowline"
                        d="M260.507 177.446C262.159 183.143 263.176 188.857 264.351 194.662"
                        stroke="#FD319E"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                      <path
                        className="arrowline"
                        d="M264.017 194.829C269.995 192.267 276.534 190.849 282.738 188.979"
                        stroke="#FD319E"
                        stroke-width="3"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
