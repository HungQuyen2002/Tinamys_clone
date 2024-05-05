import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import bg from "../../assets/loginBanner.f7fc6e11.png";
import gg from "../../assets/iconGoogle.png";
import fb from "../../assets/iconFaceBook.png";
import logo from "../../assets/logo.png";
import { Button, Checkbox, Form, type FormProps, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const [touchedFields, setTouchedFields] = useState<{
    username: boolean;
    password: boolean;
  }>({
    username: false,
    password: false,
  });

  const [apiResponse, setApiResponse] = useState<any>(null);
  // const history = useHistory(); // Sử dụng useHistory
  // Use useNavigate hook to redirect to daily_task page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66022edd9d7276a75552b87b.mockapi.io/api1/login"
        );
        setApiResponse(response.data);
        console.log("API Response:", response.data); // Log API response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onFinish: any = (values: FieldType) => {
    const { username, password } = values;

    if (!username || !password) {
      console.log("Vui lòng nhập đầy đủ thông tin đăng nhập");
      alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
      return;
    }

    if (apiResponse) {
      const matchedUser = apiResponse.find(
        (user: any) => user.username === username && user.password === password
      );

      if (matchedUser) {
        console.log("Đăng nhập thành công");
        alert("Đăng nhập thành công");
        // chuyển hướng
        navigate("/company");
      } else {
        console.log("Tên đăng nhập hoặc mật khẩu không đúng");
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
      }
    } else {
      console.log("Không có dữ liệu từ API");
      alert("Không có dữ liệu từ API");
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
  };

  return (
    <div>
      <div className="login relative flex justify-center items-center h-[100vh]">
        <img src={bg} alt="bg" className="z-0 absolute" />
        <div className="form-container absolute">
          <div className="container-login flex items-center justify-center rounded-lg">
            <div className="flex justify-evenly gap-x-32">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="ant-form ant-form-horizontal container-form-login min-w-[450px] p-[50px] bg-[#ffffffb3] border-[3px] border-white shadow-md rounded-lg"
              >
                <div className="header-wrapper flex flex-col items-center">
                  <div className="text-black text-4xl font-medium">
                    Đăng nhập
                  </div>
                  <p className="text-[18px] mt-[10px] mb-8 text-[#2b2b2b80]">
                    Hoàn thành các thông tin chi tiết dưới đây
                  </p>
                </div>

                <div className="form-item-custom">
                  <div className="title text-base font-semibold mt-[5px] text-[#242424] mb-2">
                    Email hoặc tên tài khoản
                  </div>
                  <div className="ant-form-item text-[#000000d9] text-sm mb-2 align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item
                              name="username"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Email hoặc tên tài khoản không được để trống",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Email hoặc tên tài khoản"
                                style={{
                                  width: "346px",
                                  padding: "14px 10px 15px 10px",
                                  borderRadius: "0.375rem",
                                  border: "1px solid #88888840",
                                }}
                              />
                            </Form.Item>

                            {touchedFields.username && (
                              <div style={{ color: "red", marginLeft: "8px" }}>
                                Email hoặc tên tài khoản không được để trống
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
                  <div className="ant-form-item text-[#000000d9] text-sm mb-6 align-top box-border">
                    <div className="ant-row flex flex-row flex-wrap">
                      <div className="ant-form-item-control flex flex-col">
                        <div className="ant-form-item-control-input relative flex items-center min-h-8">
                          <div className="ant-form-item-control-input-content max-w-full rounded-md">
                            <Form.Item
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Mật khẩu không được bỏ trống",
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
                              />
                            </Form.Item>
                            {touchedFields.password && (
                              <div style={{ color: "red", marginLeft: "8px" }}>
                                Mật khẩu không được bỏ trống
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between xxxl:mb-2 float-right">
                  <a
                    href="#"
                    className="text-[14px] text-[#2b2b2b] font-semibold mb-3 mt-[-10px]"
                  >
                    Quên mật khẩu?
                  </a>
                </div>

                <button
                  type="submit"
                  className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-11 w-full mb-1.2"
                >
                  Đăng nhập
                </button>
                <button className="btn-login-social flex items-center justify-center p-2 text-[14px] mt-3 font-semibold text-[#2b2b2b] rounded-lg bg-white border border-solid border-gray-300 max-w-[1600px] w-full">
                  <img src={gg} alt="gg" className="w-5 h-auto" />
                  <div className="ml-2">Đăng nhập với Google</div>
                </button>
                <button className="btn-login-social flex items-center justify-center p-2 text-[14px] mt-3 font-semibold text-[#2b2b2b] rounded-lg bg-white border border-solid border-gray-300 max-w-[1600px] w-full">
                  <img src={fb} alt="fb" className="w-2.5 h-auto" />
                  <div className="ml-2">Đăng nhập với Facebook</div>
                </button>
                <div className="flex justify-center mt-4">
                  <div className="text-res text-[14px] font-normal text-[#2b2b2b]">
                    Bạn chưa có tài khoản?
                  </div>
                  <a
                    href="/register"
                    className="ml-[3px] text-[14px] font-semibold text-[#0b3a82]"
                  >
                    Đăng ký ngay
                  </a>
                </div>
              </Form>

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
