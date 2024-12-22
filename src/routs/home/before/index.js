import React from "react";
import carpet1 from '../../../assets/IMAGEs/carpet1.jpg';
import carpet2 from '../../../assets/IMAGEs/carpet2.jpg';
import couch1 from '../../../assets/IMAGEs/couch1.jpg';
import couch2 from '../../../assets/IMAGEs/couch2.jpg';
import window1 from '../../../assets/IMAGEs/window1.jpg';
import window2 from '../../../assets/IMAGEs/window2.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="w-[10px] absolute top-[50%] right-[2%] z-[9999] cursor-pointer 
        pc:right-[-5%]
        lt:right-[-4%]
        tab:hidden
        " onClick={onClick}>
            <svg className=" rotate-[180deg] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className="w-[10px] absolute top-[50%] left-[2%] z-[9999] cursor-pointer 
        pc:left-[-5%]
        lt:left-[-4%]
        tab:hidden
        " onClick={onClick}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 41"><path d="M20.3 40.8 0 20.5 20.3.2l.7.7L1.3 20.5 21 40.1z"></path></svg>
        </div>
    );
}

export default function Before() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
    };
    return (
        <div className="bg-primary font-primary pt-[50px] pb-[100px] text-center ">
            <div className="container max-w-[1101px]
            pc:max-w-[900px]
            lt:max-w-[768px]
            lt-mini:max-w-[600px]
            tab:max-w-[550px]
            mob:max-w-[370px]
            ">
                {/* title */}
                <h1 className="text-[44px] text-center mb-[10px]  animate__animated  animate__fadeIn wow
                tab:text-[40px]
                mob:text-[38px]
                " data-wow-offset="35" >Before & After</h1>
                {/* sliders */}
                <div>
                    <Slider {...settings}>
                        {/* carpet cleaning */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[22px] mb-[20px] 
                            tab:text-[20px]
                            mob:text-[18px]
                            " >Carpet Cleaning</p>
                            <div className="flex gap-[20px] justify-center 
                            tab:flex-col tab:items-center tab:gap-[15px]
                            ">
                                <div className=" w-[480px]  rounded-[8px] 
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover " src={carpet1} />
                                    <p className="text-[18px] mt-[5px] ">Before</p>
                                </div>
                                <div className=" w-[480px]  rounded-[8px] 
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover" src={carpet2} />
                                    <p className="text-[18px] mt-[5px] ">After</p>
                                </div>
                            </div>
                        </div>
                        {/* couch cleaning */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[22px] mb-[20px] 
                            tab:text-[20px]
                            mob:text-[18px]
                            " >Carpet Cleaning</p>
                            <div className="flex gap-[20px] justify-center
                            tab:flex-col tab:items-center tab:gap-[15px]
                            ">
                                <div className=" w-[480px]  rounded-[8px]
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover" src={couch1} />
                                    <p className="text-[18px] mt-[5px] ">Before</p>
                                </div>
                                <div className=" w-[480px]  rounded-[8px] 
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover" src={couch2} />
                                    <p className="text-[18px] mt-[5px] ">After</p>
                                </div>
                            </div>
                        </div>
                        {/* window cleaning */}
                        <div className="flex flex-col justify-center">
                            <p className="text-[22px] mb-[20px] 
                            tab:text-[20px]
                            mob:text-[18px]
                            " >Window cleaning</p>
                            <div className="flex gap-[20px] justify-center
                            tab:flex-col tab:items-center tab:gap-[15px]
                            ">
                                <div className=" w-[480px]  rounded-[8px] 
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover" src={window1} />
                                    <p className="text-[18px] mt-[5px] ">Before</p>
                                </div>
                                <div className=" w-[480px]  rounded-[8px] 
                                " >
                                    <img className="w-full h-full rounded-[8px] object-cover" src={window2} />
                                    <p className="text-[18px] mt-[5px] ">After</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}