import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import avt from "../../assets/avatarfeedback2.png";
import nodata from "../../assets/NoData.png";
import map from "../../assets/map.jpg";
import bot from "../../assets/bot.png";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar, RxQuestionMarkCircled } from "react-icons/rx";
import {
  Dropdown,Form,Input,MenuProps,Select,Tooltip,Button,Menu,
} from "antd";

import { FaBriefcase, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HomeOutlined } from "@ant-design/icons";
import { GrSend, GrTarget } from "react-icons/gr";
import { TfiTarget } from "react-icons/tfi";
import { MdEditCalendar, MdOutlineFormatListNumbered } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsPersonVideo2 } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

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


const MyCompany = () => {
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

  // Hàm thay dổi main
  const [mainContent, setMainContent] = useState<any>(null); // State để lưu trữ nội dung của phần main

  // Handle cho việc chọn một mục trong danh sách
  const handleItemClick = (content: any) => {
    setMainContent(content);
  };

  return (
    <div>
      <div className="min-h-screen w-full relative flex flex-col text-xs">
        {/* Navbar */}
        <div className="sticky navbar flex items-center justify-between px-[15px] h-[60px] border-b border-gray-300">
          <div className="flex items-center navbar-left">
            <Link to="./">
              <img src={logo} alt="logo" className="w-[80px] h-auto" />
            </Link>
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

        {/* Sidebar + Main */}
        <div className="flex">
          {/* Sidebar  */}
          <div
            className={`sidebar relative w-[300px] h-[92vh] border-r border-gray-300 pt-4`}
            style={{ width: isSidebarOpen ? "300px" : "80px" }} // Thêm style để điều chỉnh chiều rộng của sidebar
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
            {/* Menu  sidebar*/}
            <div className="sidebar-detail_wrap flex flex-col justify-between h-full">
              <div className="sidebar-detail overflow-y-auto overflow-x-hidden text-base h-full">
                <ul>
                  <Link to="/">
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
                  </Link>

                  {/* <Link to="/list-department"> */}
                  <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                    <span>
                      <div className="flex items-center justify-center">
                        <Tooltip placement="right" title="Quản lý nhóm">
                          <button>
                            <MdOutlineFormatListNumbered className="text-xl " />
                          </button>
                        </Tooltip>
                        <p
                          className={`ml-3 text-sm ${
                            isSidebarOpen ? "block" : "hidden"
                          }`}
                        >
                          Quản lý nhóm
                        </p>
                      </div>
                    </span>
                  </li>
                  {/* </Link> */}

                  {/* <Link to="/list-personnel"> */}
                  <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                    <span>
                      <div className="flex items-center justify-center">
                        <Tooltip placement="right" title="Quản lý nhân sự">
                          <button>
                            <BsPersonVideo2 className="text-xl " />
                          </button>
                        </Tooltip>
                        <p
                          className={`ml-3 text-sm ${
                            isSidebarOpen ? "block" : "hidden"
                          }`}
                        >
                          Quản lý nhân sự
                        </p>
                      </div>
                    </span>
                  </li>
                  {/* </Link> */}

                  <Link to="/list-position">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span>
                        <div className="flex items-center justify-center">
                          <Tooltip placement="right" title="Quản lý chức vụ">
                            <button>
                              <RiTeamLine className="text-xl " />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Quản lý chức vụ
                          </p>
                        </div>
                      </span>
                    </li>
                  </Link>

                  <Link to="/modify-info">
                    <li className="menu-item flex items-center pl-[28px] mb-[8px] h-[40px] cursor-pointer hover:bg-gray-100 ">
                      <span>
                        <div className="flex items-center justify-center">
                          <Tooltip placement="right" title="Chỉnh sửa công ty">
                            <button>
                              <FiEdit className="text-xl " />
                            </button>
                          </Tooltip>
                          <p
                            className={`ml-3 text-sm ${
                              isSidebarOpen ? "block" : "hidden"
                            }`}
                          >
                            Chỉnh sửa công ty
                          </p>
                        </div>
                      </span>
                    </li>
                  </Link>

                  <Link to="/company-goal">
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
                  </Link>

                  <Link to="/my-goal">
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
                  </Link>

                  <Link to="/daily-task">
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
                  </Link>
                  
                </ul>
              </div>
            </div>
          </div>

          {/* Main  */}
          {/* Main */}
          <div className="main mx-auto">
            {mainContent ? ( // Nếu mainContent không null thì hiển thị nội dung
              mainContent
            ) : (
              // Nếu mainContent null thì hiển thị một nội dung mặc định
              <div className="content flex w-[600px] py-[30px] px-[20px] border border-gray-300 mt-[150px] mx-auto mb-0 rounded-xl">
                <img src={bot} alt="bot" className="w-[160px]" />
                <div className="ml-7 pt-5">
                  <div className="title mt-5 text-2xl font-medium">
                    Công ty của bạn đang được theo dõi và cập nhật
                  </div>
                  <div className="des__no-comapny mt-3 text-[16px] leading-[18px] font-light">
                    Khi các thành viên ở các không gian làm việc để lại bình
                    luận hay thả cảm xúc vào bảng công việc, tiến độ dự án hay
                    các hoạt động quan trọng trọng khác sẽ được hiện thị ở đây.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCompany;
