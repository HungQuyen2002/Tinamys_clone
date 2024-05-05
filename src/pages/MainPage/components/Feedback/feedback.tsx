import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import feedback from "../../../../assets/background-night.png";
import { FaStar } from "react-icons/fa";
import avt from "../../../../assets/avatarfeedback1.png";

// Component MySlider
interface MySliderState {
  currentSlide: number;
}

class MySlider extends Component<{}, MySliderState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      currentSlide: 1,
    };
  }

  // Xử lý sau khi thay đổi slide
  afterChangeHandler = (currentSlide: number) => {
    this.setState({ currentSlide });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      afterChange: this.afterChangeHandler, // Gọi hàm xử lý sau khi thay đổi slide
    };
    return (
      <Slider {...settings} className="mx-auto w-full max-w-[112rem]">
        {/* slide 1 */}
        <div className="pt-2.5 px-5 mx-6 pb-2.5 md:pd-3.5 slide-content-mobile rounded-lg bg-white shadow-lg flex flex-col justify-center items-center">
          <div
            className={`${
              this.state.currentSlide === 0 ? "opacity-100" : "opacity-50"
            } pt-2.5 px-5 pb-2.5 md:pd-3.5 slide-content `}
          >
            <div className="text-content">
              <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                Chị Phạm Khánh Linh
              </h2>
              <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                Nhân viên kinh doanh
              </h3>
              <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">“</p>
              <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
              Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
              </p>
            </div>

            <div className="inline-block img-avatar rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2 ml-[212px]">
              <img src={avt} alt="" />
            </div>
          </div>
        </div>
        {/* slide 2 */}
        <div className="pt-2.5 px-5 mx-6 pb-2.5 md:pd-3.5 slide-content-mobile rounded-lg bg-white shadow-lg flex flex-col justify-center items-center">
          <div
            className={`${
              this.state.currentSlide === 1 ? "opacity-100" : "opacity-50"
            } pt-2.5 px-5 pb-2.5 md:pd-3.5 slide-content `}
          >
            <div className="text-content">
              <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                Chị Phạm Khánh Linh
              </h2>
              <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                Nhân viên kinh doanh
              </h3>
              <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">“</p>
              <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
              Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
              </p>
            </div>

            <div className="inline-block img-avatar rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2 ml-[212px]">
              <img src={avt} alt="" />
            </div>
          </div>
        </div>
        {/* slide 3 */}
        <div className="pt-2.5 px-5 mx-6 pb-2.5 md:pd-3.5 slide-content-mobile rounded-lg bg-white shadow-lg flex flex-col justify-center items-center">
          <div
            className={`${
              this.state.currentSlide === 2 ? "opacity-100" : "opacity-50"
            } pt-2.5 px-5 pb-2.5 md:pd-3.5 slide-content `}
          >
            <div className="text-content">
              <h2 className="not-italic text-center font-semibold text-[#101A29] text-base xl:text-lg xl:leading-6 xl:pt-[25px] pb-2 xl:pb-[9.5px]">
                Chị Phạm Khánh Linh
              </h2>
              <h3 className="not-italic text-center font-semibold text-[#737588] text-xs xl:text-sm xl:leading-5 pb-2 xl:pb-[15.5px]">
                Nhân viên kinh doanh
              </h3>
              <p className="not-italic text-center font-sembold text-[#63A5F1] leading-5 xl:leading-6 text-4xl xl:text-[42px]">“</p>
              <p className="not-italic text-center font-normal text-xs xl:text-base xl:px-14 xl:mt-4 xl:leading-6 pb-8 lg:pb-9">
              Tôi không bỏ lỡ bất cứ deadline nào nhờ MYS, hệ thống sẽ nhắc việc khi đến hạn hoặc quá hạn nhờ đó mà vị trí bận rộn như tôi không bị lỡ mất bất cứ công việc quan trọng nào!
              </p>
            </div>

            <div className="inline-block img-avatar rounded-full bg-white shadow-[#002147] w-12 xl:w-16 xl:mt-8 xl:p-2 ml-[212px]">
              <img src={avt} alt="" />
            </div>
          </div>
        </div>

      </Slider>
    );
  }
}

const Feedback = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="feedback max-w-[112rem] mx-auto bg-[#f2faff]">
          <div className="flex flex-col justify-center items-center mt-[88px] background-mobile">
            <div className="px-6 w-full lg:w-11/12 xl:w-10/12">
              <div className="feedback-body pt-[25px] flex flex-wrap justify-center items-center gap-6 pb-5 sm:pb-7 md:pb-8 lg:pb-10 xl:pb-12 ">
                <div className="w-[93%] max-w-[20rem] sm:max-w-fit sm:w-[80%] md:w-5/12 content-img">
                  <img src={feedback} alt="" />
                </div>
                <div className="w-full md:w-1/2 order-first md:order-last">
                  <div className="p-0 text-left">
                    <div className="not-italic font-bold text-[#272727] text-[28px] sm:text-[30px] md:text-[34px] lg:text-[36px] xl:text-[45px] leading-9 md:leading-10 lg:leading-[2.75rem] xl:leading-[3rem] xxl:leading-[3.375rem]">
                      Những phản hồi từ khách hàng
                    </div>

                    <div className="flex justify-start items-center gap-x-2 pt-1 lg:pt-5">
                      <ul className="ant-rate-star flex gap-2 m-0 p-0 text-[#fadb14] text-2xl">
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                        <li>
                          <FaStar />
                        </li>
                      </ul>
                    </div>

                    <div className="text-justify font-normal text-[#495460] text-xs md:text-sm lg:text-base xl:text-lg xxl:text-xl leading-[1.625rem] pt-1 lg:pt-8 pb-6 sm:pr-5 sm:pt-3">
                      "Một ứng dụng thú vị, nơi tôi có thể chia sẻ với bạn bè và
                      những người xung quanh. Mong mô hình của app sẽ được nhân
                      rộng và nhiều người biết đến"
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Feed back slick */}
            <MySlider /> {/* Thêm component MySlider vào đây */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
