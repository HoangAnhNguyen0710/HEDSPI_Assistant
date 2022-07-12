import React from "react";
import PageLayout from "../layouts/PagesLayout";

const ExamPage = () => {
  const ExamContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">Exam Page</p>
      </div>
    </>
  );
  return <PageLayout page={ExamContent} />;
};

export default ExamPage;
