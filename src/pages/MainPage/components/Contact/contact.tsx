import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import imgContact from "../../../../assets/main-image-ele.png";
import { FormLayout } from "antd/lib/form/Form";

const Contact: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<FormLayout>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: FormLayout }) => {
    setFormLayout(layout);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <div>
      <div id="contact" className="h-16 lg:h-[5rem] xxl:h-[6.5rem]"></div>
      <div className="flex items-center justify-center mt-20">
      <div className="Contact max-w-[112rem] mx-auto">
        <div className="Contact-container flex flex-wrap md:flex-nowrap bg-[#F2FAFF] md:bg-white xl:w-[80%] px-[18px] lg:px-16 xl:px-18 items-center md:gap-8 gap-16 mx-auto pb-11 md:justify-center">
          <div className="w-full md:w-[60%] xl:w-1/2 mx-auto max-w-fit">
            <img src={imgContact} alt="imgContact" />
          </div>
          <div className="w-full sm:w-10/12 xl:w-3/5 mx-auto">
            <h1 className="relative text-[#191D27] font-bold leading-[3.5rem] flex justify-center text-center lg:justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 text-xl sm:text-2xl md:text-3xl lg:text-4xl xxl:text-5xl z-10 ">
              Liên hệ với chúng tôi
              <svg
                className="absolute -bottom-[22%] -z-10"
                width="228"
                height="16"
                viewBox="0 0 228 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.97461 12.9513C56.6422 4.19511 151.592 -1.43388 224.869 8.57321"
                  stroke="#08F2C5"
                  strokeWidth="5.54249"
                  strokeLinecap="round"
                ></path>
              </svg>
            </h1>
            <Form
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}
              onFinish={onFinish}
              style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
            >
              <div className="flex flex-wrap">
                <Form.Item
                  label="Họ và tên"
                  name="name"
                  className="w-1/2 border-2 border-gray-300 rounded-lg p-4 shadow-md"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên" },
                  ]}
                >
                  <Input placeholder="Nhập họ và tên" />
                </Form.Item>
                <Form.Item
                  label="Số điện thoại"
                  name="phone"
                  className="w-1/2 border-2 border-gray-300 rounded-lg p-4 shadow-md"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
              </div>
              <Form.Item
                label="Email"
                name="email"
                className="border-2 border-gray-300 rounded-lg p-4 shadow-md"
                rules={[{ required: true, message: "Vui lòng nhập email" }]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>
              <Form.Item
                label="Lời nhắn"
                name="message"
                className="border-2 border-gray-300 rounded-lg p-4 shadow-md"
                rules={[{ required: true, message: "Vui lòng nhập lời nhắn" }]}
              >
                <Input.TextArea rows={4} placeholder="Nhập lời nhắn của bạn" />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="p-2 inline-flex items-center justify-center text-sm font-medium transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#1c7fff] px-3 w-[150px] h-9 md:w-[190px] md:h-[56px] rounded-2xl"
                >
                  Gửi lời nhắn
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Contact;
