import React from "react";
import anything1 from '../../../assets/IMAGEs/anything1.webp';
import anything2 from '../../../assets/IMAGEs/anything2.webp';
import anything3 from '../../../assets/IMAGEs/anything3.webp';
export default function Anything() {
    return (
        <div className="pt-[100px] pb-[50px] bg-customGray text-primary font-primary ">
            {/* title */}
            <h1 className=" text-[44px] text-center animate__animated  animate__fadeIn wow 
            tab:text-[42px]
            mob:text-[38px]
            " data-wow-offset="20" >For Anything You Need</h1>
            <p className=" text-[22px] text-center animate__animated  animate__fadeIn wow
            tab:text-[20px]
            mob:text-[18px]
            " data-wow-offset="30">Our Steller Services</p>
            {/* cards */}
            <div className="container max-w-[1024px] mt-[50px] 
            pc:max-w-[900px]
            lt:max-w-[768px]
            ">
                {/* grid  */}
                <div className="grid grid-cols-3 gap-[20px] 
                lt:grid-cols-2
                tab:grid-cols-1
                ">
                    {/* item parent  */}
                    <div className=" group w-[full] h-[450px] relative rounded-[8px]  block  cursor-pointer overflow-hidden ">
                        <img className=" group-hover:scale-[1.1] rounded-[8px] w-full h-full transition-all ease-in-out duration-[1s] object-cover " src={anything1}  />
                        {/* layer  */}
                        <div className="absolute top-0 bg-black opacity-[0.3] w-full h-full rounded-[8px]  " ></div>
                        {/* text  */}
                        <div className=" absolute bottom-0 left-0  ">
                            <p className=" ml-[30px] mb-[30px] text-[28px]" >Move In/Move Out</p>
                        </div>
                    </div>
                    {/* item parent  */}
                    <div className=" group w-[full] h-[450px] relative rounded-[8px]  block  cursor-pointer overflow-hidden ">
                        <img className="group-hover:scale-[1.1] rounded-[8px] w-full h-full  transition-all ease-in-out duration-[1s] object-cover" src={anything2}  />
                        {/* layer  */}
                        <div className="absolute top-0 bg-black opacity-[0.3] w-full h-full rounded-[8px]  " ></div>
                        {/* text  */}
                        <div className=" absolute bottom-0 left-0  ">
                            <p className=" ml-[30px] mb-[30px] text-[28px]" >Deep Cleaning</p>
                        </div>
                    </div>
                    {/* item parent  */}
                    <div className=" group w-[full] h-[450px] relative rounded-[8px]  block  cursor-pointer overflow-hidden ">
                        <img className="group-hover:scale-[1.1] rounded-[8px] w-full h-full  transition-all ease-in-out duration-[1s] object-cover" src={anything3}  />
                        {/* layer  */}
                        <div className="absolute top-0 bg-black opacity-[0.3] w-full h-full rounded-[8px]  " ></div>
                        {/* text  */}
                        <div className=" absolute bottom-0 left-0  ">
                            <p className=" ml-[30px] mb-[30px] text-[28px]" >Laundry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex justify-center mt-[45px]  ">
                <button className=" w-[208px] h-[54px] border-[1px] border-white bg-white text-customGray text-[18px] rounded-[80px] 
                hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-[0.5s] ease-in-out " >See All Services</button>
            </div>
        </div>
    )
}