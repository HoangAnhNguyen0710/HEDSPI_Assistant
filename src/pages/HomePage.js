import React from "react";
import PageLayout from "../layouts/PagesLayout";

const HomePage = () => {
  const HomeContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">HomePage</p>
      </div>
    </>
  );

  return <PageLayout page={HomeContent} />;
};

export default HomePage;
