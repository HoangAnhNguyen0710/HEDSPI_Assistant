import React from "react";
import PageLayout from "../layouts/PagesLayout";

const QAPage = () => {
  const QAContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">Q&A Page</p>
      </div>
    </>
  );
  return <PageLayout page={QAContent} />;
};

export default QAPage;
