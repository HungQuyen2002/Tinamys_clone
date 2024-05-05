import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import avt from "../../assets/avatarfeedback2.png";
import bot from "../../assets/bot.png";
import nodata from "../../assets/NoData.png";
import map from "../../assets/map.jpg";
import addModal from "../../assets/bannerModalAddNew.png"
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar, RxQuestionMarkCircled } from "react-icons/rx";
import { Dropdown, Form, Input, MenuProps, Select, Tooltip, Button } from "antd";
import {
  FaBriefcase,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HomeOutlined } from "@ant-design/icons";
import { GrSend, GrTarget } from "react-icons/gr";
import { TfiTarget } from "react-icons/tfi";
import { MdEditCalendar } from "react-icons/md";
import { CgAddR } from "react-icons/cg";
import { FaRegCircleCheck } from "react-icons/fa6";

// định nghĩa một biến items kiểu MenuProps["items"]. Đây là một mảng các đối tượng, mỗi đối tượng đại diện cho một mục trong menu dropdown.Đây là cho Notification
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="ant-dropdown pt-2 ant-dropdown-placement-bottomRight min-w-[22px] left-[1018px] top-[44px] hover:bg-white">
        <div className="dropdown-notification">
          <div className="flex p-3 items-center justify-between border-solid border-b border-slate-200">
            <p className="font-normal text-base">Thông báo</p>
            <button>
              <div className="font-normal text-sm text-blue-500 items-center flex">
                Đánh dấu tất cả là đã đọc
                <FaRegCircleCheck className="ml-1" />
              </div>
            </button>
          </div>
          <div className="ant-tabs-centered flex flex-col">
            <div className="tabs-nav relative flex items-center mb-4 border-b">
              <a href="" className="mx-4 my-3 hover:text-blue-600">
                <span>Tất cả</span>
              </a>
              <a href="" className="mx-4 my-3 hover:text-blue-600">
                <span>Cá nhân</span>
              </a>
              <a href="" className="mx-4 my-3 hover:text-blue-600">
                <span>Nhóm</span>
              </a>
              <a href="" className="mx-4 my-3 hover:text-blue-600">
                <span>Công ty</span>
              </a>
              <a href="" className="mx-4 my-3 hover:text-blue-600">
                <span>Hệ thống</span>
              </a>
            </div>

            <div className="ant-empty p-5 flex flex-col justify-center items-center">
              <div className="">
                <img src={nodata} alt="nodata" className="h-[100px]" />
              </div>
              <div>Không có dữ liệu</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// định nghĩa một biến contactItems kiểu MenuProps["items"]. Đây là một mảng các đối tượng, mỗi đối tượng đại diện cho một mục trong menu dropdown.
const contactItems: MenuProps["items"] = [
  {
    key: "2",
    label: (
      <div className="ant-dropdown pt-2 ant-dropdown-placement-bottomRight min-w-[22px] left-[1018px] top-[44px]">
        <div className="dropdown-contact boder border-gray-400 rounded-md hover: bg-white">
          <p className="font-normal text-base text-center p-2.5 border-b border-[#DCDCDC]">
            Liên hệ trợ giúp
          </p>
          <div className="px-4 my-5">
            <a className=" flex justify-start items-center bg-[#F2FAFF] gap-x-2 p-5 mb-2.5">
              <div className="p-1.5 h-9">
                <RxAvatar className="text-blue-600 text-2xl" />
              </div>
              <div>
                <p className="text-sm font-normal text-black">
                  Số điện thoại hỗ trợ
                </p>
                <p className="text-xs font-normal text-gray-400">
                  +(84) 246 329 5589
                </p>
              </div>
            </a>
            <a className=" flex justify-start items-center bg-[#F2FAFF] gap-x-2 p-5 mb-2.5">
              <div className="p-1.5 h-9">
                <GrSend className="text-blue-600 text-2xl" />
              </div>
              <div>
                <p className="text-sm font-normal text-black">Email</p>
                <p className="text-xs font-normal text-gray-400">
                  contact@tinasoft.vn
                </p>
              </div>
            </a>
            <a className=" flex justify-start items-center bg-[#F2FAFF] gap-x-2 p-5 mb-2.5">
              <div className="p-1.5 h-9">
                <FaBriefcase className="text-blue-600 text-2xl" />
              </div>
              <div>
                <p className="text-sm font-normal text-black">Địa chỉ hỗ trợ</p>
                <p className="text-xs font-normal text-gray-400">
                  Tầng 4, Tòa nhà Ellipse Tower, 110 Trần Phú, Hà Đông, Hà Nội
                </p>
              </div>
            </a>
          </div>

          <div className="px-4 pb-5">
            <div className="relative w-[400px] h-[220px]">
              <a href="https://www.google.com/maps?ll=20.97741,105.784034&z=15&t=m&hl=vi&gl=US&mapclient=embed&cid=7400002239385068685">
                <img src={map} alt="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

// định nghĩa một biến userItems kiểu MenuProps["items"]. Đây là một mảng các đối tượng, mỗi đối tượng đại diện cho một mục trong menu dropdown.
const userItems: MenuProps["items"] = [
  {
    key: "3",
    label: (
      <div className="ant-dropdown pt-2 ant-dropdown-placement-bottomRight min-w-[22px] left-[1018px] top-[44px] hover:bg-white">
        <div className="dropdown-contact boder border-gray-400 rounded-md ">
          <div className="flex items-center py-5 px-4 border-b border-[#DCDCDC]">
            <div className="w-[48px]">
              <img src={avt} alt="" />
            </div>
            <div className="flex flex-col justify-center items-start ml-2.5">
              <span className="font-normal text-lg leading-5">User1</span>
              <span className="font-light text-sm leading-5">
                user1@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start text-[#555]">
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6]"
            >
              Giới thiệu
            </button>
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6]"
            >
              Thông tin tài khoản
            </button>
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6]"
            >
              Đánh giá
            </button>
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6] border-b border-[#DCDCDC]"
            >
              Chính sách và quyền riêng tư
            </button>

            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6]"
            >
              Language
            </button>
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-[9px] px-4 hover:bg-[#F6F6F6]"
            >
              Đổi mật khẩu
            </button>
            <button
              className="w-full flex justify-between items-center font-normal leading-normal
                text-base py-4 px-4 hover:bg-[#F6F6F6]"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    ),
  },
];

//Modal
const { Option } = Select;

const CompanyGoal = () => {
  // Logic search
  // State để kiểm soát trạng thái của thanh tìm kiếm --> Default ban đầu là thanh input search đóng chỉ hiển thị icon
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  // Tạo một ref cho vùng input search để kiểm tra sự kiện click ngoài vùng này
  const searchInputRef = useRef<HTMLDivElement>(null);

  // Hàm xử lý sự kiện click ngoài vùng input
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target as Node)
    ) {
      setIsSearchExpanded(false);
    }
  };

  // Thêm sự kiện lắng nghe cho sự kiện mousedown khi component được mount
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // Xóa sự kiện lắng nghe khi component được unmount để tránh rò rỉ bộ nhớ
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Logic thông báo
  const [isOpenNotification, setIsOpenNotification] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdownNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  // Logic contact
  const [isOpenContact, setIsOpenContact] = useState(false);
  const dropdowncontactRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdowncontactRef.current &&
        !dropdowncontactRef.current.contains(event.target as Node)
      ) {
        setIsOpenContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleToggleDropdownContact = () => {
    setIsOpenContact(!isOpenContact);
  };

  // Logic User
  const [isOpenUser, setIsOpenUser] = useState(false);
  const dropdownuserRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownuserRef.current &&
        !dropdownuserRef.current.contains(event.target as Node)
      ) {
        setIsOpenUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleToggleDropdownUser = () => {
    setIsOpenUser(!isOpenUser);
  };

  //Hàm đóng mở Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Thêm state mới

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Xử lý logic Modal open or close 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClick = () => {
    setIsModalOpen(true);
    console.log("---> open");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("-->close");
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("overlay")) {
      closeModal();
    }
  };

  //Modal form 
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  // Change Avatar
  const [avatarSrc, setAvatarSrc] = useState<string | null>(null); // Ảnh mặc định

  const chooseAvatar = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (event: Event) => {
      // Sử dụng kiểu Event
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAvatarSrc(reader.result);
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    };

    input.click();
  };


  

  return (
    <div>
      <div className="wrapper min-h-screen w-full relative flex flex-col text-xs">
        {/* Navbar  */}
        <div className="sticky navbar flex items-center justify-between px-[15px] h-[60px] border-b border-gray-300">
          <div className="flex items-center navbar-left">
            <a href="./">
              <img src={logo} alt="logo" className="w-[80px] h-auto" />
            </a>
            <div className="flex ml-3 mr-9 content-theme-light"></div>
          </div>

          <div className="flex items-center justify-center navbar-right gap-x-3">
            {/* Tìm kiếm  */}
            <div className="search cursor-pointer transition-all relative flex items-center">
              {/* Hiển thị icon search khi thanh tìm kiếm không được mở rộng và nếu click vào icon thì isSearchExpanded = true --> sẽ mở ra thanh input */}
              {!isSearchExpanded && (
                <AiOutlineSearch
                  className="search-icon text-2xl"
                  onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                />
              )}

              {/* Hiển thị input search khi thanh tìm kiếm được mở rộng , và nếu click ra ngoài vùng input thì isSearchExpanded = false (đóng input)  */}
              {isSearchExpanded && (
                <div ref={searchInputRef}>
                  <Input
                    className="search-input border rounded-md w-[500px] mt-0 px-2 py-1 transition-all transform translate-x-[-8px] focus:border-primary focus:outline-none"
                    prefix={<AiOutlineSearch />}
                    placeholder="Tìm kiếm ..."
                  />
                </div>
              )}
            </div>

            {/* Hướng dẫn sử dụng tooltip antd  */}
            <Tooltip placement="bottom" title="Hướng dẫn">
              <a href="/tutorial">
                <button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#000000"
                    stroke-width="1"
                  >
                    <path
                      d="M3.84299 8.12534L11.1877 4.86101C11.7049 4.63118 12.2951 4.63118 12.8123 4.86101L20.157 8.12534C20.4817 8.26962 20.4817 8.73038 20.157 8.87466L12.8123 12.139C12.2951 12.3688 11.7049 12.3688 11.1877 12.139L3.84299 8.87466C3.51835 8.73038 3.51835 8.26962 3.84299 8.12534Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#242424"
                      stroke-width="1"
                    ></path>
                    <path
                      d="M20.5 8.5V12.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke="#242424"
                      stroke-width="1"
                    ></path>
                    <path
                      d="M6.5 10.5V15.5C6.5 15.5 7 17.5 12 17.5C17 17.5 17.5 15.5 17.5 15.5V10.5"
                      stroke="#242424"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </a>
            </Tooltip>

            {/* Thông báo  */}
            <div className="ant-dropdown-trigger cursor-pointer flex justify-center items-center">
              <div ref={dropdownRef} onClick={handleToggleDropdownNotification}>
                <Dropdown
                  menu={{ items: items }}
                  placement="bottomRight"
                  open={isOpenNotification}
                >
                  <svg
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                    // xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <path
                        d="M 18 40 L 30 40 L 30 45.550781 L 18 45.550781 Z M 18 40 "
                        clip-rule="nonzero"
                      ></path>
                      <path
                        d="M 3.179688 0 L 45.058594 0 L 45.058594 40 L 3.179688 40 Z M 3.179688 0 "
                        clip-rule="nonzero"
                      ></path>
                    </defs>
                    <path
                      fill="#242424"
                      d="M 24.117188 43.492188 C 22.453125 43.492188 20.953125 42.519531 20.28125 41.011719 L 18.371094 41.839844 C 19.371094 44.089844 21.625 45.550781 24.117188 45.550781 C 26.648438 45.550781 28.910156 44.070312 29.894531 41.777344 L 27.972656 40.96875 C 27.308594 42.5 25.800781 43.492188 24.117188 43.492188 Z M 24.117188 43.492188 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="#242424"
                      stroke-width="1"
                    ></path>
                    <path
                      fill="#242424"
                      d="M 44.644531 36.511719 L 39.128906 31.972656 C 38.890625 31.773438 38.75 31.492188 38.75 31.183594 L 38.75 18.730469 C 38.75 14.746094 37.140625 11.035156 34.214844 8.285156 C 32.496094 6.671875 30.453125 5.527344 28.246094 4.890625 C 28.292969 4.574219 28.3125 4.257812 28.285156 3.921875 C 28.128906 2.160156 26.8125 0.664062 25.082031 0.28125 C 23.816406 0 22.507812 0.289062 21.507812 1.078125 C 20.511719 1.871094 19.941406 3.039062 19.941406 4.300781 C 19.941406 4.511719 19.980469 4.703125 20.007812 4.902344 C 13.898438 6.699219 9.484375 12.378906 9.484375 19.113281 L 9.484375 31.175781 C 9.484375 31.484375 9.347656 31.773438 9.109375 31.964844 L 3.589844 36.503906 C 3.351562 36.703125 3.210938 36.992188 3.210938 37.292969 L 3.210938 38.328125 C 3.210938 38.898438 3.683594 39.363281 4.261719 39.363281 L 43.976562 39.363281 C 44.554688 39.363281 45.023438 38.898438 45.023438 38.328125 L 45.023438 37.292969 C 45.015625 36.992188 44.875 36.703125 44.644531 36.511719 Z M 22.019531 4.300781 C 22.019531 3.667969 22.304688 3.085938 22.804688 2.6875 C 23.308594 2.285156 23.941406 2.140625 24.613281 2.285156 C 25.453125 2.476562 26.113281 3.230469 26.195312 4.09375 C 26.207031 4.210938 26.1875 4.328125 26.179688 4.445312 C 25.269531 4.320312 24.347656 4.273438 23.402344 4.3125 C 22.941406 4.328125 22.480469 4.375 22.03125 4.445312 C 22.039062 4.394531 22.019531 4.347656 22.019531 4.300781 Z M 5.890625 37.300781 L 10.441406 33.554688 C 11.160156 32.964844 11.574219 32.101562 11.574219 31.175781 L 11.574219 19.113281 C 11.574219 12.28125 16.816406 6.679688 23.511719 6.371094 C 26.988281 6.207031 30.269531 7.425781 32.773438 9.773438 C 35.273438 12.132812 36.652344 15.3125 36.652344 18.730469 L 36.652344 31.175781 C 36.652344 32.089844 37.066406 32.964844 37.785156 33.554688 L 42.339844 37.300781 Z M 5.890625 37.300781 "
                      fill-opacity="1"
                      fill-rule="nonzero"
                      stroke="#242424"
                      stroke-width="1"
                    ></path>
                  </svg>
                </Dropdown>
              </div>
            </div>

            {/* Contact  */}
            <div className="ant-dropdown-trigger cursor-pointer">
              <div
                ref={dropdowncontactRef}
                onClick={handleToggleDropdownContact}
              >
                <Dropdown
                  menu={{ items: contactItems }}
                  placement="bottomRight"
                  open={isOpenContact}
                >
                  <RxQuestionMarkCircled className="text-2xl" />
                </Dropdown>
              </div>
            </div>

            {/* User  */}
            <div className="ant-dropdown-trigger flex justify-center items-center cursor-pointer">
              <div ref={dropdownuserRef} onClick={handleToggleDropdownUser}>
                <Dropdown
                  menu={{ items: userItems }}
                  placement="bottomRight"
                  open={isOpenUser}
                >
                  <img src={avt} alt="avt" className="w-[31px]" />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar + Main  */}
        <div className="flex">
          {/* Sidebar  */}
          <div
            className={`sidebar relative w-[250px] h-[92vh] border-r border-gray-300`}
            style={{ width: isSidebarOpen ? "250px" : "70px" }} // Thêm style để điều chỉnh chiều rộng của sidebar
          >
            <button
              className="absolute right-[-20px] top-28 flex justify-center items-center rounded-full w-10 h-10 bg-[#fff] shadow-md cursor-pointer z-40"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <FaChevronLeft className="text-[22px] font-light text-gray-400" />
              ) : (
                <FaChevronRight className="text-[22px] font-light text-gray-400" />
              )}
            </button>

            <div className="sidebar-detail_wrap flex flex-col justify-between h-full">
              <div className="sidebar-detail overflow-y-auto overflow-x-hidden text-base h-full ">
                <ul>
                  <a href="/">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span>
                        <div className="flex items-center justify-center">
                          <Tooltip placement="right" title="Trang chủ">
                            <button>
                              <HomeOutlined className="text-xl " />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Trang chủ
                          </p>
                        </div>
                      </span>
                    </li>
                  </a>

                  <a href="/company-goal">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span>
                        <div className="flex items-center">
                          <Tooltip placement="right" title="Mục tiêu công ty">
                            <button>
                              <TfiTarget className="text-xl" />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Mục tiêu công ty
                          </p>
                        </div>
                      </span>
                    </li>
                  </a>

                  <a href="/my-goal">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span className="flex items-center justify-center">
                        <div className="flex items-center">
                          <Tooltip placement="right" title="Mục tiêu cá nhân">
                            <button>
                              <GrTarget className="text-xl" />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Mục tiêu cá nhân
                          </p>
                        </div>
                      </span>
                    </li>
                  </a>

                  <a href="/daily-task">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span>
                        <div className="flex items-center">
                          <Tooltip placement="right" title="Lịch làm việc">
                            <button>
                              <MdEditCalendar className="text-xl" />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Lịch làm việc
                          </p>
                        </div>
                      </span>
                    </li>
                  </a>
                </ul>
              </div>
              <div>
                <div className="flex flex-col justify-center items-center">
                  {isSidebarOpen ? (
                    <div className="flex flex-col justify-center items-center m-5 p-3 w-[210px] rounded-lg border-sky-500 border">
                      <svg
                        width="129"
                        height="128"
                        viewBox="0 0 129 128"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M68.2687 127.178C61.7408 126.088 57.0575 121.694 52.9279 117.818C50.7163 115.744 48.6249 113.782 46.39 112.375C41.3397 109.196 36.8366 107.988 32.4802 106.821C25.4386 104.936 18.1568 102.985 10.3213 93.1277C2.43237 83.2007 -0.526371 73.7507 1.27823 64.2374C3.04614 54.9075 9.3439 46.8418 14.631 40.8609C18.08 36.9549 20.4917 32.1215 23.0402 27.0045C25.2584 22.5547 27.55 17.9548 30.6589 13.7819C38.6345 3.08438 46.4 -0.754992 56.6238 0.952875C60.5666 1.61 64.6195 3.02767 68.9091 4.52872C72.7018 5.85299 76.6212 7.22395 81.0143 8.30137C81.4379 8.40478 81.8883 8.49818 82.3486 8.5749C84.5835 8.9485 86.9385 8.9585 89.4269 8.97185C92.0854 8.98519 94.8307 8.99854 97.6227 9.46553C100.965 10.0226 103.84 11.1601 106.405 12.938C114.338 18.4318 115.065 24.7062 115.769 30.7705C116.056 33.2423 116.352 35.7941 117.143 38.4459C118.154 41.8283 119.975 44.9472 121.903 48.2528C124.852 53.303 127.901 58.5267 128.204 65.0947C128.788 77.7369 120.489 84.7585 114.198 88.9414C112.18 90.2857 110.192 91.3431 108.27 92.3672C104.274 94.4953 100.825 96.3333 98.56 100.039C97.8829 101.147 97.5226 103.045 97.1757 104.879C96.7587 107.081 96.3251 109.359 95.261 111.407C91.4116 118.826 82.9924 126.641 72.8619 127.388C71.3008 127.495 69.7564 127.425 68.2687 127.178Z"
                          stroke="url(#paint0_linear_2157_5920)"
                          stroke-miterlimit="10"
                          stroke-dasharray="25 25"
                        ></path>
                        <path
                          d="M12.9331 91.0529C24.7581 105.93 34.3182 100.83 48.1679 109.549C56.0601 114.516 61.5173 124.867 72.6184 124.053C80.9676 123.439 88.5596 117.075 92.3023 109.863C94.0502 106.494 93.81 101.414 95.7147 98.2947C99.6474 91.8601 106.139 90.289 112.353 86.1594C119.515 81.3961 125.336 75.2818 124.872 65.2447C124.422 55.4545 116.666 48.5163 113.944 39.3966C111.095 29.8498 114.158 22.3646 104.504 15.6732C96.8255 10.3528 88.1994 13.495 80.2171 11.537C59.8127 6.53678 48.6649 -4.79786 33.3308 15.7733C26.9163 24.3793 24.0176 35.2703 17.1261 43.0658C4.87744 56.9322 -2.75459 71.3157 12.9331 91.0529Z"
                          fill="url(#paint1_linear_2157_5920)"
                        ></path>
                        <path
                          d="M91.3484 26.5001H68.5649C65.4241 26.5001 62.7424 29.3083 62.7424 32.4492V51.4354C62.7424 54.5763 65.4241 57.1313 68.5649 57.1313H91.3484C94.4893 57.1313 97.1709 54.5763 97.1709 51.4354V32.4492C97.1709 29.3083 94.4893 26.5001 91.3484 26.5001ZM74.2608 47.6382C74.2608 48.6876 73.4116 49.5368 72.3622 49.5368C71.3127 49.5368 70.4635 48.6876 70.4635 47.6382V43.8409C70.4635 42.7915 71.3127 41.9423 72.3622 41.9423C73.4116 41.9423 74.2608 42.7915 74.2608 43.8409V47.6382ZM81.8553 47.6382C81.8553 48.6876 81.0061 49.5368 79.9567 49.5368C78.9072 49.5368 78.058 48.6876 78.058 47.6382V40.0437C78.058 38.9942 78.9072 38.145 79.9567 38.145C81.0061 38.145 81.8553 38.9942 81.8553 40.0437V47.6382ZM89.4498 47.6382C89.4498 48.6876 88.6006 49.5368 87.5512 49.5368C86.5017 49.5368 85.6526 48.6876 85.6526 47.6382V36.2464C85.6526 35.197 86.5017 34.3478 87.5512 34.3478C88.6006 34.3478 89.4498 35.197 89.4498 36.2464V47.6382Z"
                          fill="white"
                        ></path>
                        <path
                          d="M47.5534 38.145C43.3649 38.145 39.9589 41.551 39.9589 45.7395C39.9589 49.928 43.3649 53.334 47.5534 53.334C51.7419 53.334 55.1479 49.928 55.1479 45.7395C55.1479 41.551 51.7419 38.145 47.5534 38.145Z"
                          fill="white"
                        ></path>
                        <path
                          d="M54.2136 54.9395C52.3359 56.303 50.0465 57.1313 47.5534 57.1313C45.0602 57.1313 42.7709 56.303 40.8931 54.9395C36.5013 57.1031 33.2699 61.2757 32.528 66.2905C32.4246 66.9886 32.7252 67.6194 33.2149 68.0388C34.9119 63.876 38.9903 60.9285 43.7561 60.9285C48.428 60.9285 52.4432 63.7603 54.1986 67.793C55.4751 64.8605 57.9636 62.6081 61.0162 61.5745C59.5123 58.7094 57.1288 56.3755 54.2136 54.9395Z"
                          fill="white"
                        ></path>
                        <path
                          d="M43.7561 64.7258C39.5676 64.7258 36.1616 68.1318 36.1616 72.3203C36.1616 76.5088 39.5676 79.9149 43.7561 79.9149C47.9446 79.9149 51.3507 76.5088 51.3507 72.3203C51.3507 68.1318 47.9446 64.7258 43.7561 64.7258Z"
                          fill="white"
                        ></path>
                        <path
                          d="M64.641 64.7258C60.4525 64.7258 57.0465 68.1318 57.0465 72.3203C57.0465 76.5088 60.4525 79.9149 64.641 79.9149C68.8295 79.9149 72.3621 76.5088 72.3621 72.3203C72.3621 68.1318 68.8295 64.7258 64.641 64.7258Z"
                          fill="white"
                        ></path>
                        <path
                          d="M85.6525 64.7258C81.464 64.7258 78.058 68.1318 78.058 72.3203C78.058 76.5088 81.464 79.9149 85.6525 79.9149C89.841 79.9149 93.3736 76.5088 93.3736 72.3203C93.3736 68.1318 89.841 64.7258 85.6525 64.7258Z"
                          fill="white"
                        ></path>
                        <path
                          d="M49.452 87.5094C49.452 85.2117 49.9962 83.0509 50.9228 81.1024C48.959 82.7081 46.485 83.7121 43.7562 83.7121C40.4025 83.7121 37.4138 82.2285 35.3273 79.9149C33.5056 81.9349 32.3644 84.5812 32.3644 87.5094V89.408C32.3644 90.4574 33.2136 91.3066 34.263 91.3066H49.8018C49.589 90.7098 49.452 90.0768 49.452 89.408V87.5094Z"
                          fill="white"
                        ></path>
                        <path
                          d="M73.1965 79.9149C71.1099 82.2285 67.9947 83.7121 64.641 83.7121C61.2874 83.7121 58.2987 82.2285 56.2121 79.9149C54.3905 81.9349 53.2493 84.5812 53.2493 87.5094V89.408C53.2493 90.4574 54.0985 91.3066 55.1479 91.3066H74.2608C75.3102 91.3066 76.1594 90.4574 76.1594 89.408V87.5094C76.1594 84.5812 75.0182 81.9349 73.1965 79.9149Z"
                          fill="white"
                        ></path>
                        <path
                          d="M94.208 79.9149C92.1214 82.2285 89.0061 83.7121 85.6525 83.7121C82.9237 83.7121 80.4497 82.7081 78.4858 81.1024C79.4125 83.0509 79.9566 85.2117 79.9566 87.5094V89.408C79.9566 90.0768 79.8197 90.7098 79.6069 91.3066H95.2722C96.3217 91.3066 97.1709 90.4574 97.1709 89.408V87.5094C97.1709 84.5812 96.0297 81.9349 94.208 79.9149Z"
                          fill="white"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_2157_5920"
                            x1="29.5774"
                            y1="11.5785"
                            x2="101.046"
                            y2="111.677"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#3965FF"></stop>
                            <stop offset="1" stop-color="#6AFFF4"></stop>
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_2157_5920"
                            x1="31.977"
                            y1="14.9416"
                            x2="99.5532"
                            y2="109.588"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#8C79FF"></stop>
                            <stop offset="1" stop-color="#59F4E9"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="text-center text-sm mb-2 content">
                        <p>Bạn chưa có không gian làm việc</p>
                      </div>
                      <button
                        className="py-2 px-3 font-medium text-white bg-blue-500 rounded-lg text-sm hover:opacity-90"
                        onClick={handleCreateClick}
                      >
                        Tạo ngay nào
                      </button>
                    </div>
                  ) : (
                    <Tooltip
                      placement="right"
                      title="Tạo không gian làm việc"
                      className="mb-5"
                    >
                      <button>
                        <CgAddR
                          className="text-3xl text-blue-400 cursor-pointer"
                          onClick={handleCreateClick}
                        />
                      </button>
                    </Tooltip>
                  )}

                  {isModalOpen && (
                    <div
                      className="overlay fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                      onClick={handleOverlayClick}
                    >
                      {/* Your modal content here */}
                      <div className="modal bg-white rounded-lg w-[80%] max-w-[796px]">
                        <div className="modal-header h-[172px] bg-gradient-to-r rounded-t-lg from-[#8961ff] to-[#71bbff]">
                          <div className="modal-avatar relative top-[62px] pl-10">
                            <div
                              className="img-avatar w-[202px] h-[202px] cursor-pointer"
                              onClick={chooseAvatar}
                            >
                              <img
                                src={avatarSrc || addModal}
                                alt="avt"
                                className="border border-white rounded-full w-full h-full object-cover"
                              />
                              <span className="camera text-[27px] absolute bottom-[5px] right-[550px] p-[0.5rem] bg-[#efefef] rounded-full cursor-pointer">
                                <FaCamera />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="modalbody">
                          <Form className="w-full pt-[100px] px-[40px] pb-[30px]">
                            <div className="title-modal text-black text-3xl font-semibold mb-3 text-start">
                              Hãy xây dựng một không gian làm việc mới
                            </div>
                            <div className="text-modal text-black text-base font-normal mb-[18px] text-start">
                              Tăng năng suất công việc một cách tối đa nhất giúp
                              mọi người dễ dàng truy cập cùng nhau.
                            </div>
                            <div className="ant-row flex mx-[-8px] gap-2">
                              {/* trái  */}
                              <div className="ant-col px-2 max-w-[50%] w-[398px]">
                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Tên không gian làm việc
                                    <b className="text-red-400">*</b>
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="name"
                                    rules={[{ required: true , message: "Tên không gian làm việc không được để trống"}]}
                                  >
                                    <Input
                                      placeholder="Tên không gian làm việc"
                                      className="py-3"
                                    />
                                  </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Loại hình không gian làm việc
                                    <b className="text-red-400">*</b>
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="loaihinh"
                                    rules={[{ required: true, message:"Loại hình không gian làm việc không được để trống" }]}
                                  >
                                    <Select
                                      placeholder="Loại hình không gian làm việc"
                                      onChange={onGenderChange}
                                      allowClear
                                      className="h-12"
                                    >
                                      <Option value="male">Công ty</Option>
                                      <Option value="female">Tổ chức</Option>
                                    </Select>
                                  </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Số điện thoại
                                    <b className="text-red-400">*</b>
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="sdt"
                                    rules={[{ required: true , message: "Số điện thoại không được để trống"}]}
                                  >
                                    <Input
                                      placeholder="Số điện thoại"
                                      className="py-3"
                                    />
                                  </Form.Item>
                                </div>
                              </div>

                              {/* Phải  */}
                              <div className="ant-col px-2 max-w-[50%] w-[398px]">
                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Website
                                    {/* <b className="text-red-400">*</b> */}
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="website"
                                    // rules={[{ required: true }]}
                                  >
                                    <Input
                                      placeholder="Website"
                                      className="py-3"
                                    />
                                  </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Email
                                    {/* <b className="text-red-400">*</b> */}
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="email"
                                    // rules={[{ required: true }]}
                                  >
                                    <Input
                                      placeholder="Email"
                                      className="py-3"
                                    />
                                  </Form.Item>
                                </div>

                                <div className="form-item-custom">
                                  <div className="title text-base font-semibold mb-[5px] text-[#242424]">
                                    Quy mô nhân sự
                                    <b className="text-red-400">*</b>
                                  </div>
                                </div>
                                <div className="ant-form-item text-sm mb-6 w-full">
                                  <Form.Item
                                    name="quymo"
                                    rules={[{ required: true ,message: "Quy mô nhân sự không được để trống"}]}
                                  >
                                    <Select
                                      placeholder="Quy mô nhân sự"
                                      onChange={onGenderChange}
                                      allowClear
                                      className="h-12"
                                    >
                                      <Option value="male">
                                        Nhỏ hơn 50 nhân sự
                                      </Option>
                                      <Option value="female">
                                        Từ 50 đến 100 nhân sự
                                      </Option>
                                      <Option value="other">
                                        Lớn hơn 100 nhân sự
                                      </Option>
                                    </Select>
                                  </Form.Item>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-end items-center gap-x-1.5 pt-1">
                              <button className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#ee4b4b] font-semibold text-base h-12 py-3 px-6"
                              onClick={closeModal}
                              >Hủy</button>
                              <Button
                                className="p-2 inline-flex items-center justify-center rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white bg-[#2082ff] font-semibold text-base h-12 py-3 px-6"
                                type="primary"
                                htmlType="submit"
                              >
                                Tạo không gian làm việc
                              </Button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main  */}
          <div className="w-full">
            <div className="content flex w-[600px] py-[30px] px-[20px] border border-gray-300 mt-[150px] mx-auto mb-0 rounded-xl">
              <img src={bot} alt="bot" className="w-[160px]" />
              <div className="ml-7 pt-5">
                <div className="title mt-5 text-2xl font-medium">
                  Trang chủ của bạn đang được theo dõi và cập nhật
                </div>
                <div className="des__no-comapny mt-3 text-[16px] leading-[18px] font-light">
                  Khi các thành viên ở các không gian làm việc để lại bình luận
                  hay thả cảm xúc vào bảng công việc, tiến độ dự án hay các hoạt
                  động quan trọng trọng khác sẽ được hiện thị ở đây.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGoal;
