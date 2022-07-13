import React from "react";
import PageLayout from "../layouts/PagesLayout";
import "../assets/css/style.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import anhCLB from '../assets/img/clb.jpg';
import review from '../assets/img/review.png';
import document from '../assets/img/book.png';
import qa from '../assets/img/qa.png';
import { NavLink } from "react-router-dom";
import DocumentList from "../components/DocumentList";
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
      <div className="min-h-fit py-8 box-border">
        <div className="w-full my-8 relative md:h-fit">
        <div className="bg-gradient-to-t from-slate-50 to-black absolute h-full w-full top-0 left-0 z-10 opacity-40"></div>
        <div className="">
        <Slider {...settings}>
          <div className="">
            <img alt="" src={anhCLB} className='h-auto'></img>
          </div>
          <div className="">
            <img alt="" src={anhCLB} className='h-auto'></img>
          </div>
          <div className="">
            <img alt="" src={anhCLB} className='h-auto'></img>
          </div>
        </Slider>
        </div>
        <div className="absolute top-0 text-white z-20 font-sans text-2xl font-medium p-3">Phát triển bởi đội ngũ HEDSPI NICHIBU</div>
        </div>
      <div className="p-6 text-center text-3xl font-bold uppercase">Có gì ở VIJA ?</div> 
      <div className="flex flex-wrap justify-center md:flex-nowrap p-6">
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Kho tài liệu, đề thi phong phú</span>
          <img alt="" src={document} className='w-3/5'/>
          <NavLink to='/' className=" p-3 bg-main text-white rounded-3xl">Khám phá</NavLink>
        </div>
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Review môn học từ những người đi trước</span>
          <img alt="" src={review} className='w-3/5'/>
          <NavLink to='/' className=" p-3 bg-main text-white rounded-3xl">Khám phá</NavLink>
        </div>
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Giải đáp vướng bận cùng các bậc tiền bối</span>
          <img alt="" src={qa} className='w-3/5'/>
          <NavLink to='/' className=" p-3 bg-main text-white rounded-3xl">Khám phá</NavLink>
        </div>
      </div>
      </div>
      <div className="p-6 px-9 text-3xl font-bold">TRENDING (TÀI LIỆU ĐƯỢC TÌM KIẾM NHIỀU NHẤT)</div> 
      <DocumentList filter="trending"/>
    </>
  );

  return <PageLayout page={HomeContent} />;
};

export default HomePage;
