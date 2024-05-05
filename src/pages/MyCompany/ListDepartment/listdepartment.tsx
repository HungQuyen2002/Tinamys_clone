import React, { ReactNode } from "react";

interface ListDepartmentProps {
  content: ReactNode;
}

const ListDepartment: React.FC<ListDepartmentProps> = ({ content }) => {
  return (
    <div className="content flex w-[600px] py-[30px] px-[20px] border border-gray-300 mt-[150px] mx-auto mb-0 rounded-xl">
      {/* Nội dung của bảng danh sách phòng ban */}
      {content}
    </div>
  );
};

export default ListDepartment;
