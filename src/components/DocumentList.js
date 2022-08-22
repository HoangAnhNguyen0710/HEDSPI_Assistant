import React from "react";
import Document from "./Document";

const DocumentList = () => {
  const document = {
    doc_id: "",
    title: "Lý thuyết CSDL lớp thầy Phương",
    author: "Nguyễn Hải Dương",
    date_created: "12/12/2020",
    subject_id: "",
    subject_name: "Cơ sở dữ liệu",
    description:
      "Tổng hợp lý thuyết + các ví dụ và lời giải đầy đủ từ chương I đến chương IV #database #csdl",
    seen_num: 200,
    likes_num: 150,
    rating: 4.1,
  };
  return (
    <div className="flex w-full flex-wrap p-3">
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
      <div className="w-full flex items-center justify-center lg:w-1/2 py-3 h-full">
        <Document document={document} />
      </div>
    </div>
  );
};

export default DocumentList;
