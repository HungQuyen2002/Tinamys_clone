import img from "../../../../assets/easy.png";
import img1 from "../../../../assets/smartphone.png";
import img2 from "../../../../assets/reduce-cost.png";
import img3 from "../../../../assets/target.png";
import img4 from "../../../../assets/artificial-intelligence.png";
import img5 from "../../../../assets/iPhone-7.png";
import img6 from "../../../../assets/applestore.png";
import img7 from "../../../../assets/chplay.png";
import bg from "../../../../assets/background-seven.png";

const Benefit = () => {
  return (
    <div>
        <div id="feature" className="h-9 lg:h-[5rem] xxl:h-[6.5rem]"></div>
        <div className="flex items-center justify-center">
            
            {/* Benefit */}
            <div className="benefit pb-16 max-w-[112rem] mx-auto">
                <div className="benefit-container pt-7 lg:pt-0">
                    <ul className="benefit-grid grid grid-cols-2 xxl:grid-cols-3 gap-x-8 gap-y-11 sm:w-11/12 md:w-11/12 lg:w-10/12 xl:w-9/12 xxl:w-8/12 mx-auto">
                        <li className="hover:scale-105 duration-300 p-0 hover:scale-100">
                            <div className="title">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-bold text-2xl sm:text-[28px] md:text-3xl lg:text-4xl xl:text-5xl leading-[2.875rem]">
                                Ưu điểm nổi trội của MYS
                                </h3>
                                <p className="text-[#323232] pb-7 font-normal text-sm md:text-base xl:text-lg leading-7 pr-12">
                                Với những ưu điểm và tính năng vượt trội của MYS, công nghệ và giải pháp của chúng tôi sẽ giúp bạn đạt được mục tiêu, tối ưu hoá năng suất của doanh nghiệp.
                                </p>
                            </div>
                        </li>

                        <li className="hover:scale-105 duration-300 p-10 benefit-item border-white rounded-lg bg-white shadow-md">
                            <img src={img} alt="" className=" flex w-[48px] h-[48px]"/>
                            <div className="item-title mt-5">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                                Dễ sử dụng và tiện lợi và tiết kiệm thời gian
                                </h3>
                                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">
                                Giao diện đơn giản và thân thiện, giúp người dùng dễ dàng sử dụng và tiết kiệm thời gian
                                </p>
                            </div>
                        </li>

                        <li className="hover:scale-105 duration-300 p-10 benefit-item border-white rounded-lg bg-white shadow-md">
                            <img src={img1} alt="" className=" flex w-[48px] h-[48px]"/>
                            <div className="item-title mt-5">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                                Hỗ trợ đa nền tảng
                                </h3>
                                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">
                                Ứng dụng hiện có mặt trên iOS, Android và Website
                                </p>
                            </div>
                        </li>

                        <li className="hover:scale-105 duration-300 p-10 benefit-item border-white rounded-lg bg-white shadow-md">
                            <img src={img2} alt="" className=" flex w-[48px] h-[48px]"/>
                            <div className="item-title mt-5">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                                Chi phí thấp
                                </h3>
                                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">
                                Cho phép người dùng sử dụng miễn phí các tính năng cơ bản
                                </p>
                            </div>
                        </li>

                        <li className="hover:scale-105 duration-300 p-10 benefit-item border-white rounded-lg bg-white shadow-md">
                            <img src={img3} alt="" className=" flex w-[48px] h-[48px]"/>
                            <div className="item-title mt-5">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                                Hiệu quả
                                </h3>
                                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">
                                Cho phép người dùng sử dụng miễn phí các tính năng cơ bản
                                </p>
                            </div>
                        </li>

                        <li className="hover:scale-105 duration-300 p-10 benefit-item border-white rounded-lg bg-white shadow-md">
                            <img src={img4} alt="" className=" flex w-[48px] h-[48px]"/>
                            <div className="item-title mt-5">
                                <h3 className="pb-2 md:pb-3 xl:pb-4 text-[#000001] font-medium text-base md:text-lg lg:text-xl xl:text-2xl leading-8">
                                Hỗ trợ công nghệ AI
                                </h3>
                                <p className="text-[#323232] pb-7 text-sm lg:text-base font-medium opacity-80 leading-6">
                                Người dùng sử dụng ứng dụng được hỗ trợ bởi công nghệ thông minh AI
                                </p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center">
            {/* experience  */}
            <div className=" experience pb-[80px] pt-24 max-w-[112rem] mx-auto relative">
                <img src={bg} alt="" className="mx-auto w-[1360px] h-auto absolute inset-0 z-2"/>
                <img src="" alt="" />
                <div className="experience-body w-full mx-auto relative z-10 flex">                 
                    <div className="experience-content ml-[160px] pl-[140px] text-white">
                        <div className="title font-bold text-3xl sm:text-2xl md:text-3xl xl:text-4xl xxl:text-5xl xl:leading-[3.625rem] leading-[120%] pb-5 max-w-[690px]">
                        Trải nghiệm ứng dụng quản lý 
                        <br />
                        công việc TinaMYS
                        </div>
                        <div className="description inline-block font-medium text-xs md:text-sm lg:text-base xl:text-lg leading-[160%] xl:leading-[1.813rem] pb-5 text-justify">
                        Khám phá sức mạnh đột phá với TinaMYS - giải pháp quản trị mục tiêu, công việc cho doanh nghiệp: Đa chiều - thông minh - linh hoạt - hiệu quả
                        </div>
                        <div className="flex flex-col gap-1.5 sm:flex-row md:gap-2 lg:gap-3 xl:xl:gap-4 xxl:gap-5 py-12">
                            <button className="w-[10rem] lg:w-32 xl:w-36 xxl:w-[11.125rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem] mr-2.5 lg:mr-3 xl:mr-4 xxl:mr-5 xxxl:mr-7">
                                <img src={img6} alt="" />
                            </button>
                            <button className="w-[10rem] lg:w-32 xl:w-36 xxl:w-[11.125rem] h-9 lg:h-10 xl:h-12 xxl:h-[3.375rem] mr-2.5 lg:mr-3 xl:mr-4 xxl:mr-5 xxxl:mr-7">
                                <img src={img7} alt="" />
                            </button>
                        </div>
                    </div>

                    <img src={img5} alt="" className="img-iphone w-[600px] h-auto hover:scale-105 duration-300 float-right pr-20"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefit