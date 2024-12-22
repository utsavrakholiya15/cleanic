import React from "react";
import heroBg from '../../../assets/IMAGEs/heroBg.jpg';
export default function Herobanner() {
    return (
        <div className="relative w-full h-[1050px] font-primary
        pc:h-[100vh]">
            {/* bg  */}
            <div className="w-full h-full">
                <img className="w-full h-full object-cover " src={heroBg} />
            </div>
            {/* layer */}
            <div className="absolute bg-black top-0 w-full h-full opacity-[0.4] "></div>
            {/* data  */}
            <div className=" absolute top-0 w-full h-full  ">
                <div className="container max-w-[1024px] w-full h-full flex flex-col justify-center items-start text-primary mt-[-200px] animate__animated animate__fadeIn wow
                pc:max-w-[900px] pc:mb-[100px] pc:mt-[-40px] 
                lt:max-w-[768px] 
                tab:px-[40px]
                mob:px-[25px]
                " data-wow-offset="80" data-wow-delay="0.5s" >
                    <h1 className="text-[56px] leading-[60px] 
                    pc:text-[52px] pc:leading-[normal]
                    lt:text-[48px]
                    tab:text-[45px]
                    mob:text-[38px]
                    mob-mini:text-[32px]
                    ">Remarkably Cleaner.<br />
                        Amazingly Simpler.</h1>
                    <p className=" max-w-[514px] my-[16px] text-[22px] 
                    pc:text-[20px] pc:leading-[normal]
                    tab:text-[18px] tab:max-w-[450px]
                     mob:text-[16px] mob:max-w-[330px]
                    ">Providing spotless cleaning services for busy people since 2035. Always on time, always smiling.</p>
                    <button className=" bg-primary border-[1px] border-white text-black w-[196px] h-[54px] rounded-[80px] 
                    hover:bg-transparent hover:text-primary hover:border-[1px] hover:border-primary transition-all duration-[0.5s] ease-in-out 
                    tab:w-[170px] tab:h-[45px] tab:mt-[10px]
                    " >Book Now</button>
                </div>
            </div>
            {/* form  */}
            <div className=" absolute bottom-0 w-[100%]
            ">
                <div className="container max-w-[1024px]  
                pc:max-w-[900px] lt:max-w-[768px]
                tab:px-[10px]
                ">
                    <div className=" ml-auto  mb-[-150px]  max-w-[745px] pt-[30px] lt:pt-0  pb-[80px] lt:pb-0 px-[15px] rounded-[8px]  bg-customYellow text-[black] animate__animated animate__fadeIn wow
                    pc:max-w-[600px] pc:mb-[-280px] pc:py-[20px]
                    lt:max-w-[500px] lt:h-[460px] lt:overflow-scroll lt:mt-[-150px]
                    lt-mini:max-w-[400px] lt-mini:mb-[-310px] lt-mini:py-[10px] lt-mini:mx-auto  
                    " data-wow-offset="120" >
                        <h1 className="text-[30px] text-center">Get a Free Estimate</h1>
                        <p className="text-center">Contact Us</p>
                        <form>
                            {/* first row */}
                            <div className="grid grid-cols-3 gap-[10px] 
                            lt:grid-cols-1
                            ">
                                <div className="flex flex-col
                                lt:flex-row lt:items-center 
                                ">
                                    <label className="text-[14px] w-[120px] mb-[10px]
                                    lt:mb-0
                                    " >First name * </label>
                                    <input className="bg-transparent w-full outline-none px-[5px]  border-black border-[1px] rounded-[8px] h-[52px] 
                                    lt:h-[28px] " type="text" ></input>
                                </div>
                                <div className="flex flex-col
                                lt:flex-row lt:items-center 
                                ">
                                    <label className="text-[14px] w-[120px] mb-[10px]
                                    lt:mb-0
                                    " >Last name * </label>
                                    <input className="bg-transparent w-[100%] h-[40px] outline-none px-[5px]  border-black border-[1px] rounded-[8px] h-[52px] 
                                    lt:h-[28px]" type="text" ></input>
                                </div>
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] mb-[10px] w-[120px]
                                    lt:mb-0
                                    " >Email * </label>
                                    <input className="bg-transparent w-[100%] h-[40px] outline-none px-[5px]  border-black border-[1px] rounded-[8px] h-[52px] 
                                    lt:h-[28px]" type="email" ></input>
                                </div>
                            </div>
                            {/* second row  */}
                            <div className="grid grid-cols-3 gap-[10px] mt-[15px] 
                            lt:grid-cols-1">
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] w-[120px] mb-[10px] 
                                    lt:mb-0
                                    " >Phone number * </label>
                                    <input className="bg-transparent w-[100%] h-[40px] border-black border-[1px] rounded-[8px] h-[52px] 
                                    outline-none px-[5px] lt:h-[28px] " type="tel" ></input>
                                </div>
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] mb-[10px] w-[120px]
                                    lt:mb-0
                                    " >Address * </label>
                                    <input className="bg-transparent w-[100%] h-[40px] outline-none px-[5px]  border-black border-[1px] rounded-[8px] h-[52px]
                                    lt:h-[28px]  " type="text" ></input>
                                </div>
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] mb-[10px] w-[120px]
                                    lt:mb-0
                                    " >City * </label>
                                    <input className="bg-transparent w-[100%] h-[40px] outline-none px-[5px]  border-black border-[1px] rounded-[8px] h-[52px]
                                    lt:h-[28px] " type="email" ></input>
                                </div>
                            </div>
                            {/* third row  */}
                            <div className="grid grid-cols-[32%_1fr] gap-[10px] mt-[15px] 
                            lt:grid-cols-1">
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] mb-[10px] w-[120px]
                                    lt:mb-0
                                    " >Number of rooms * </label>
                                    <select className="bg-transparent w-[100%] h-[40px] border-black border-[1px] rounded-[8px] h-[52px] 
                                    lt:h-[28px]" >
                                        <option className="bg-transparent" selected></option>
                                        <option className="bg-transparent" >2 Bedrooms</option>
                                        <option className="bg-transparent" >3 Bedrooms</option>
                                        <option className="bg-transparent" >4 Bedrooms</option>
                                    </select>
                                </div>
                                <div className="flex flex-col
                                lt:flex-row lt:items-center
                                ">
                                    <label className="text-[14px] mb-[10px] w-[120px]
                                    lt:mb-0
                                    " >Choose your service * </label>
                                    <select className="bg-transparent w-[100%] h-[40px] border-black border-[1px] rounded-[8px] h-[52px] 
                                    lt:h-[28px] " >
                                        <option className="bg-transparent" selected></option>
                                        <option className="bg-transparent" >Deep cleaning</option>
                                        <option className="bg-transparent" >Laundry</option>
                                        <option className="bg-transparent" >Moving in/out</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div className=" flex justify-center mt-[34px] " >
                            <button className=" w-[213px] h-[54px] border-[1px] border-customGreen rounded-[80px]   bg-customGreen text-white 
                            hover:bg-transparent hover:text-black hover:border-[1px] hover:border-black transition-all duration-[0.5s] ease-in-out " >Get a Quote</button>
                        </div>
                    </div>
                    {/* <div className="w-[745px] h-[555px] ml-auto  mb-[-180px]  bg-customYellow ">
                    </div> */}
                </div>
            </div>
        </div>
    )
}