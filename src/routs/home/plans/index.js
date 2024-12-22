import React from "react";
export default function Plans() {
    return (
        <div className=" w-[100%] py-[100px] bg-customGray font-primary ">
            <div className=" grid grid-cols-2 container max-w-[1024px] items-center
            pc:max-w-[900px] 
            lt:grid-cols-1 lt:gap-[70px] lt:text-center
            ">
                {/* left */}
                <div>
                    <h1 className="text-[44px] text-primary leading-[50px] mb-[10px]  animate__animated animate__fadeIn wow 
                    tab:text-[40px]
                    tab:text-[36px] tab:leading-[normal]
                    " data-wow-offset="30" >Our Plans & <br /> Special Discounts</h1>
                    <p className="max-w-[405px]  text-primary text-[18px] mb-[20px]  animate__animated animate__fadeIn wow 
                    lt:mx-[auto]
                    tab:text-[16px] tab:leading-[normal]
                    mob:text-[14px]
                    " data-wow-offset="40" >I'm a paragraph. Click here to add your own text and edit me. It's easy. I'm a paragraph. Click here to add your own text and edit me. It's easy.</p>
                    <button className=" w-[214px] h-[54px] border-[1px] border-white rounded-[80px] text-[18px] bg-primary text-customGray  animate__animated animate__fadeIn wow 
                    hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-[0.5s] ease-in-out 
                    tab:w-[200px] tab:h-[50px] tab:text-[15px]
                    mob:w-[170px] mob:h-[45px] mob:text-[14px]
                    " data-wow-offset="40"  >Choose Your Plan</button>
                </div>
                {/* right */}
                <div className="pb-[90px] ">
                    {/* full-card */}
                    <div className=" relative grid grid-rows-[1fr_238px]  w-[411px] h-[509px] bg-customYellow rounded-[20px] ml-auto pt-[40px] text-center 
                    lt:mx-[auto] 
                    lt:w-[390px] 
                    lt-mini:w-[370px]
                    tab:w-[350px]
                    mob:w-[330px] 
                    ">
                        {/* best value */}
                        <div className=" absolute top-0 left-[50%] translate-x-[-50%] mt-[-8px] w-[82px] h-[18px] text-[14px] text-center  bg-customGreen text-primary ">Best Value</div>
                        {/* data-yellow */}
                        <div className="max-w-[297px] mx-auto ">
                            <p className="text-[20px]">The Bi-Monthly Plan</p>
                            <h2 className="text-[70px] flex justify-center items-start h-[90px] tab:text-[56px] tab:h-[70px]"><span className="text-[24px] opacity-[0.8] mt-[15px]  ">$</span>280</h2>
                            <p className="text-[12px]">Every month</p>
                            <button className=" w-full rounded-[80px] py-[12px] px-[16px] mt-[15px]  bg-customGreen text-primary 
                            tab:py-[8px] tab: px-[10px]
                            " >Select</button>
                        </div>
                        {/* data-white- */}
                        <div className="w-full rounded-[inherit] py-[6px] bg-primary ">
                            <div className="flex items-center gap-[10px] justify-center mb-[24px] ">
                                <svg className="w-[16px] h-[16px] fill-customGreen " preserveAspectRatio="xMidYMid meet" data-bbox="20 51.5 160 97" viewBox="20 51.5 160 97" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label=""><g><path d="m131.5 51.5-8.1 8.1L158.1 95H20v11h138.1l-34.7 34.4 8.1 8.1L180 100l-48.5-48.5z" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
                                <span className="text-customGreen">I’m a benefit</span>
                            </div>
                            <div className="flex items-center gap-[10px] justify-center mb-[24px] ">
                                <svg className="w-[16px] h-[16px] fill-customGreen " preserveAspectRatio="xMidYMid meet" data-bbox="20 51.5 160 97" viewBox="20 51.5 160 97" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label=""><g><path d="m131.5 51.5-8.1 8.1L158.1 95H20v11h138.1l-34.7 34.4 8.1 8.1L180 100l-48.5-48.5z" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
                                <span className="text-customGreen">I’m a benefit</span>
                            </div>
                            <div className="flex items-center gap-[10px] justify-center mb-[24px] ">
                                <svg className="w-[16px] h-[16px] fill-customGreen " preserveAspectRatio="xMidYMid meet" data-bbox="20 51.5 160 97" viewBox="20 51.5 160 97" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label=""><g><path d="m131.5 51.5-8.1 8.1L158.1 95H20v11h138.1l-34.7 34.4 8.1 8.1L180 100l-48.5-48.5z" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
                                <span className="text-customGreen">I’m a benefit</span>
                            </div>
                            <div className="flex items-center gap-[10px] justify-center mb-[24px] ">
                                <svg className="w-[16px] h-[16px] fill-customGreen " preserveAspectRatio="xMidYMid meet" data-bbox="20 51.5 160 97" viewBox="20 51.5 160 97" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label=""><g><path d="m131.5 51.5-8.1 8.1L158.1 95H20v11h138.1l-34.7 34.4 8.1 8.1L180 100l-48.5-48.5z" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
                                <span className="text-customGreen">I’m a benefit</span>
                            </div>
                            <div className="flex items-center gap-[10px] justify-center mb-[24px] ">
                                <svg className="w-[16px] h-[16px] fill-customGreen " preserveAspectRatio="xMidYMid meet" data-bbox="20 51.5 160 97" viewBox="20 51.5 160 97" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label=""><g><path d="m131.5 51.5-8.1 8.1L158.1 95H20v11h138.1l-34.7 34.4 8.1 8.1L180 100l-48.5-48.5z" fill-rule="evenodd" clip-rule="evenodd"></path></g></svg>
                                <span className="text-customGreen">I’m a benefit</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}