import React from "react";
import PageLayout from "../layouts/PagesLayout";

const ReviewPage = () => {
  const ReviewContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">Review Page</p>
      </div>
    </>
  );
  return <PageLayout page={ReviewContent} />;
};

export default ReviewPage;
