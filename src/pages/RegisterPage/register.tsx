import React, { useState } from "react";
import bg from "../../assets/loginBanner.f7fc6e11.png";
import gg from "../../assets/iconGoogle.png";
import fb from "../../assets/iconFaceBook.png";
import logo from "../../assets/logo.png";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import { ArrowLeftOutlined, LeftCircleOutlined } from "@ant-design/icons";

type FieldType = {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  repassword?: string;
};

const Login = () => {
  const [touchedFields, setTouchedFields] = useState<{
    name?: boolean;
    username?: boolean;
    email?: boolean;
    password?: boolean;
    repassword?: boolean;

  }>({
    name: false,
    username: false,
    password: false,
    email: false,
    repassword: false,

  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      ></Form>

      <div className="login relative flex justify-center items-center h-[100vh]">
        <img src={bg} alt="bg" className="z-0 absolute" />
        <div className="form-container absolute">
          <div className="container-login flex items-center justify-center rounded-lg">
            <a href="/login" className="fixed top-[40px] left-[40px] flex items-center justify-center w-14 h-14 rounded-full bg-white">
            <ArrowLeftOutlined className="text-black text-2xl"/>
            </a>
            <div className="flex justify-evenly gap-x-32">
              <form className="ant-form ant-form-horizontal container-form-login min-w-[450px] p-[50px] bg-[#ffffffb3] border-[3px] border-white shadow-md rounded-lg">
                <div className="header-wrapper flex flex-col items-center">
                  <div className="text-black text-3xl font-medium mb-3 uppercase">Đăng ký</div>
                </div>

                <div className="form-item-custom">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Họ và tên
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item<FieldType>
                              name="name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input name!",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Họ và tên"
                                style={{
                                  padding: "14px 176px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                }}
                                onBlur={() =>
                                  setTouchedFields({
                                    ...touchedFields,
                                    name: true,
                                  })
                                }
                              />
                            </Form.Item>

                            {touchedFields.name && (
                              <div style={{ color: "red", marginLeft: "8px" , marginTop: "-20px" }}>
                                Họ và tên không được để trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-item-custom ">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Tên tài khoản
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item<FieldType>
                              name="username"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your username!",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Tên tài khoản"
                                style={{
                                  padding: "14px 176px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                }}
                                onBlur={() =>
                                  setTouchedFields({
                                    ...touchedFields,
                                    username: true,
                                  })
                                }
                              />
                            </Form.Item>

                            {touchedFields.username && (
                              <div style={{ color: "red", marginLeft: "8px" , marginTop: "-20px" }}>
                                Tên tài khoản không được để trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-item-custom">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Email
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item<FieldType>
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your email!",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Email"
                                style={{
                                  padding: "14px 176px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                }}
                                onBlur={() =>
                                  setTouchedFields({
                                    ...touchedFields,
                                    email: true,
                                  })
                                }
                              />
                            </Form.Item>

                            {touchedFields.email && (
                              <div style={{ color: "red", marginLeft: "8px" , marginTop: "-20px" }}>
                                Email không được để trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-item-custom">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Mật khẩu
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item<FieldType>
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your password!",
                                },
                              ]}
                            >
                              <Input.Password
                                placeholder="Mật khẩu"
                                style={{
                                  padding: "14px 10px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                  width: "346px",
                                }}
                                onBlur={() =>
                                  setTouchedFields({
                                    ...touchedFields,
                                    password: true,
                                  })
                                }
                              />
                            </Form.Item>
                            {touchedFields.password && (
                              <div style={{ color: "red", marginLeft: "8px" , marginTop: "-20px" }}>
                                Mật khẩu không được bỏ trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-item-custom">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Nhập lại mật khẩu
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item<FieldType>
                              name="repassword"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your repassword!",
                                },
                              ]}
                            >
                              <Input.Password
                                placeholder="Nhập lại mật khẩu"
                                style={{
                                  padding: "14px 10px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                  width: "346px",
                                }}
                                onBlur={() =>
                                  setTouchedFields({
                                    ...touchedFields,
                                    repassword: true,
                                  })
                                }
                              />
                            </Form.Item>
                            {touchedFields.repassword && (
                              <div style={{ color: "red", marginLeft: "8px" , marginTop: "-20px" }}>
                                Mật khẩu nhập lại không được bỏ trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-11 w-full mb-1.2">
                  Đăng ký
                </button>
                
                <div className="flex justify-center mt-4">
                  <div className="text-res text-[14px] font-normal text-[#2b2b2b]">
                    Bạn đã có tài khoản?
                  </div>
                  <a
                    href="/login"
                    className="ml-[3px] text-[14px] font-semibold text-[#0b3a82]"
                  >
                    Đăng nhập ngay
                  </a>
                </div>
              </form>
              <div className="text-title text-[78px] font-bold text-[#1b3185cc]">
                Mapping Your
                <br />
                Success
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-7 pl-5 pr-5 text-blue-400 w-full text-base flex justify-between">
          <a href="#">Powered by Tinasoft</a>
          <a href="#">© 2023 TINASOFT VIỆT NAM</a>
        </div>
        <div className="absolute top-4 right-4">
          <a href="/">
            <img src={logo} alt="logo" className="h-[44px] w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
