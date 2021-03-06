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
import banner from '../assets/img/banner.jpg';
import qa from '../assets/img/qa.png';
import { NavLink } from "react-router-dom";
import DocumentList from "../components/DocumentList";
import QuestionList from "../components/QuestionList";
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
        <div className="md:mx-10 my-8 relative md:h-fit">
        <div className=" bg-gradient-to-t from-slate-50 to-black absolute h-full w-full top-0 left-0 z-10 opacity-40"></div>
        <div className="w-full">
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
        <div className="absolute top-0 text-white z-20 font-sans text-2xl font-medium p-3">Ph??t tri???n b???i ?????i ng?? HEDSPI NICHIBU</div>
        </div>
      <div className="p-6 text-center text-3xl font-bold uppercase">C?? g?? ??? VIJA ?</div> 
      <div className="flex flex-wrap justify-center md:flex-nowrap p-9">
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Kho t??i li???u, ????? thi phong ph??</span>
          <img alt="" src={document} className='w-1/2 p-4'/>
          <NavLink to='/documents' className=" p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300">Kh??m ph??</NavLink>
        </div>
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Review m??n h???c t??? nh???ng ng?????i ??i tr?????c</span>
          <img alt="" src={review} className='w-1/2 p-3 pb-4'/>
          <NavLink to='/reviews' className=" p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300">Kh??m ph??</NavLink>
        </div>
        <div className="w-4/5 md:w-1/3 lg:w-1/3 p-3 m-3 shadow-lg min-h-fit flex flex-col items-center justify-between">
          <span className="text-xl font-medium">Gi???i ????p v?????ng b???n c??ng c??c b???c ti???n b???i</span>
          <img alt="" src={qa} className='w-1/2 p-3'/>
          <NavLink to='/questions' className=" p-3 bg-main text-white rounded-3xl hover:bg-cyan-400 hover:text-slate-800 hover:scale-110 transition ease-in-out delay-150 duration-300">Kh??m ph??</NavLink>
        </div>
      </div>
      </div>
      <div className="p-6 px-9">
      <div className="text-3xl font-bold px-3">TRENDING (T??I LI???U ???????C T??M KI???M NHI???U NH???T)</div> 
      <DocumentList filter="trending"/>
      <div className="text-3xl font-bold px-3">BEST DOCS (T??I LI???U ???????C ????NH GI?? CAO NH???T)</div> 
      <DocumentList filter="best"/>
      <div className="text-3xl font-bold px-3">C??U H???I ???????C QUAN T??M </div> 
      <QuestionList/> 
      <div className="flex items-center justify-center">
        <img alt="" src={banner} className='rounded-2xl'></img>
      </div>
      </div>
    </>
  );

  return <PageLayout page={HomeContent} />;
};

export default HomePage;
