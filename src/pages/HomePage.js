import React from "react";
import PageLayout from "../layouts/PagesLayout";
import "../assets/css/style.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import anhCLB from '../assets/img/clb.jpg'

function PrevArrow(props) {
  const {onClick} = props;
  return (
    <div className="absolute top-1/2 z-20" onClick={onClick}>
          <ArrowBackIosOutlinedIcon sx={{width:'2rem', height:'2rem'}}/>
    </div>

  );
}

function NextArrow(props) {
  const {onClick} = props;
  return (
    <div className="absolute top-1/2 right-0 z-20" onClick={onClick}>
          <ArrowForwardIosOutlinedIcon sx={{width:'2rem', height:'2rem'}}/>
    </div>

  );
}
const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
  };
  const HomeContent = (
    <>
      <div className="min-h-screen py-8 box-border">
        <div className="w-full my-8 relative h-fit">
        <div className="bg-gradient-to-t from-slate-50 to-black absolute h-full w-full top-0 left-0 z-10 opacity-40"></div>
        <div className="">
        <Slider {...settings}>
          <div className="">
            <img alt="" src={anhCLB} className=''></img>
          </div>
          <div className="">
            <img alt="" src={anhCLB} className=''></img>
          </div>
          <div className="">
            <img alt="" src={anhCLB} className=''></img>
          </div>
        </Slider>
        </div>
        <div className="absolute top-0 text-white z-20 font-mono text-2xl font-medium p-3">Phát triển bởi đội ngũ HEDSPI NICHIBU</div>
        </div>
       
      </div>
    </>
  );

  return <PageLayout page={HomeContent} />;
};

export default HomePage;
