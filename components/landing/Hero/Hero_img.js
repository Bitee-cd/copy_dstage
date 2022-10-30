import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { landing } from "../../../data/landing";
import Image from "next/image";
import Link from "next/link";

// begining of carousel arrow styling
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img className={className}
    style={{ ...style, display: "block", position:"absolute", marginRight:"25px", width: "7%", height: "5%", zIndex:"100", }}
    onClick={onClick}src="images/right-arr.svg" alt=""/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <img className={className}
    style={{ ...style, display: "block", position:"absolute",   marginLeft:"85%", width: "7%", height: "5%", zIndex:"100", marginTop:"15px"}}
    onClick={onClick}src="images/left-arr.svg" alt=""/>
  );
}
// end of carousel arrow styling 


function SimpleSlider () {
  const sliderData = landing.slice(0,4)

  // beginnig of carousel styling
  const settings = {
    dots: true,
    dotsClass: "slick-dot",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

    
  };
// end of carousel styling 



  return (
    <div>
          <Slider {...settings}>
            {
              sliderData && sliderData.map((slide)=>(
                <Link href={`/NFT/${slide.id}/offers`} key={slide.id}><a><div  className=" relative p-4 pb-7 mb-5 rounded bg-hero ">
                  <div>
                  <Image
                   className="" 
                   src={`/images/${slide.image}`} 
                   alt=""
                   width="100%"
                   height="100%"
                   layout="responsive"
                   objectFit="cover"
                   />
                  </div>

                  <div className="flex justify-between relative my-5 px-2">
                    	<p className="p-text font-Head">{slide.name}</p>
                      <div className="flex align-middle gap-1 md:gap-2">
                        <img src="svg/ethereum.svg" layout="fill" alt=""/>
                        <p className="p-text font-Head font-[500] ">{slide.price} {slide.currency}</p>
                      </div>
                  </div>
               </div>
               </a></Link>
              ))
            }
          </Slider>
   </div>
  )
}

export default SimpleSlider
