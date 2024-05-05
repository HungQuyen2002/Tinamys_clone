import imgQuestion from "../../../../assets/icon-bg-ten.89fbfafa.png";
import { Collapse } from "antd";
import { useState } from "react";
import { RightCircleOutlined, DownCircleOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const Question = () => {
  const [activeKey, setActiveKey] = useState(["1"]);

  const togglePanel = (key: string) => {
    setActiveKey((prevActiveKey) => {
      if (prevActiveKey.includes(key)) {
        return prevActiveKey.filter((item) => item !== key);
      } else {
        return [...prevActiveKey, key];
      }
    });
  };

  const renderIcon = (key: string) => {
    return activeKey.includes(key) ? (
      <DownCircleOutlined className="text-[#2A6DF5] text-3xl" />
    ) : (
      <RightCircleOutlined className="text-[#2A6DF5] text-3xl" />
    );
  };

  const items = [
    {
      key: "1",
      label: "MYS có dễ dàng sử dụng không?",
      children: (
        <p>
          Ứng dụng hoàn toàn thân thiện với người dùng, các tính năng được bố
          trí rõ ràng, logic giúp người dùng dễ dàng tương tác. Đội ngũ hỗ trợ
          24/7 sẵn sàng giải đáp mọi thắc mắc của người dùng.
        </p>
      ),
    },
    {
      key: "2",
      label: "MYS có trên những nền tảng nào?",
      children: (
        <p>
          MYS đã sẵn sàng được sử dụng trên web và có mặt tại ứng dụng Android &
          IOS.
        </p>
      ),
    },
    {
      key: "3",
      label: "Tính năng chính của MYS? ",
      children: (
        <p>
          Xác lập, quản lý mục tiêu, người tham gia và dễ dàng theo dõi tiến độ,
          nhận thông báo mỗi khi có cập nhật, can thiệp kịp thời.
        </p>
      ),
    },
    {
      key: "4",
      label: "Những ưu điểm của MYS?",
      children: (
        <p>
          Dễ sử dụng và tiện lợi, hỗ trợ trên mọi nền tảng, chi phí thấp, hiệu
          quả sử dụng cao và được hỗ trợ công nghệ AI
        </p>
      ),
    },
  ];

  // Chia mảng items thành 2 phần
  const upperItems = items.slice(0, 2);
  const lowerItems = items.slice(2);

  return (
    <div className="flex items-center justify-center">
      <div className="question w-full max-w-[112rem] width-[1440px] mx-auto relative bg-[#f2faff] mt-8">
        <div className="hidden lg:inline-block absolute bottom-0 right-[5%] lg:w-36 xxl:w-fit">
          <img src={imgQuestion} alt="imgQuestion" />
        </div>
        <div className="question-body pb-[54px] lg:pb-[88px] xxl:pb-[124px] px-8 md:px-0 ">
          <div className="question-title pt-8 sm:pt-10 md:pt-12 lg:pt-14 xxl:pt-[110px] font-black text-[#0E1133] text-start sm:text-center text-[28px] sm:text-3xl md:text-[32px] lg:text-4xl xxl:text-[39px] leading-[3.375rem] sm:leading-normal">
            Những câu hỏi về MYS
          </div>

          <div className="question-content flex flex-col items-center mx-auto lg:flex-row lg:items-start lg:gap-5 px-2 lg:px-6 md:w-[90%] lg:w-[85%] pt-5 sm:pt-6 md:pt-8 lg:pt-14 xl:pt-14 xxl:pt-[90px]">
            {/* Render Collapse cho phần trên */}
            <div className="w-full lg:w-1/2 ">
              {upperItems.map((item) => (
                <Collapse
                  key={item.key}
                  activeKey={activeKey}
                  onChange={() => togglePanel(item.key)}
                  className="mb-4"
                >
                  <Panel
                    header={
                      <div className="flex items-center justify-between text-question font-bold text-[18px] not-italic leading-[1.125rem] text-[#0E1133]">
                        <div>{item.label}</div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePanel(item.key);
                          }}
                        >
                          {renderIcon(item.key)}
                        </div>
                      </div>
                    }
                    key={item.key}
                  >
                    {item.children}
                  </Panel>
                </Collapse>
              ))}
            </div>
            {/* Render Collapse cho phần dưới */}
            <div className="w-full lg:w-1/2 ">
              {lowerItems.map((item) => (
                <Collapse
                  key={item.key}
                  activeKey={activeKey}
                  onChange={() => togglePanel(item.key)}
                  className="mb-4"
                >
                  <Panel
                    header={
                      <div className="flex items-center justify-between text-question font-bold text-[18px] not-italic leading-[1.125rem] text-[#0E1133]">
                        <div>{item.label}</div>
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePanel(item.key);
                          }}
                        >
                          {renderIcon(item.key)}
                        </div>
                      </div>
                    }
                    key={item.key}
                  >
                    {item.children}
                  </Panel>
                </Collapse>
              ))}
            </div>
          </div>

          <div className="link-contact  flex items-center justify-center">
            <p className="not-italic text-[#505056] font-normal text-base leading-6 mr-1">
            Chưa thể giải đáp những thắc mắc?
            </p>
            <a href="/#contact">
                <span className="not-italic text-[#007BFF] font-normal text-base leading-6">
                Liên hệ với chúng tôi
                </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
