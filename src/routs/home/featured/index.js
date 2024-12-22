import React from "react";
import featured1 from '../../../assets/IMAGEs/featured.png';
import featured2 from '../../../assets/IMAGEs/featured2.png';
import featured3 from '../../../assets/IMAGEs/featured3.png';
import featured4 from '../../../assets/IMAGEs/featured4.png';
import featured5 from '../../../assets/IMAGEs/featured5.png';
export default function Featured() {
    return (
        <div className="bg-primary py-[80px] font-primary ">
            <div className="container max-w-[1024px] py-[46px]   bg-customYellow 
            pc:max-w-[900px]
            lt:max-w-[768px]
            lt-mini:max-w-[680px]
            tab:max-w-[576px]
            tab:py-[20px]
            mob:max-w-[380px]
            ">
                <h1 className="text-[44px] text-center mb-[10px] animate__animated  animate__fadeInUp wow  
                tab:text-[42px]
                mob:text-[38px]
                " data-wow-offset="60" >Featured In</h1>
                <div className="flex justify-center gap-[10px] ml-[60px] 
                pc:gap-[10px]
                tab:ml-0
                ">
                    <img className="w-[134px] animate__animated  animate__fadeInUp wow 
                    pc:w-[130px]
                    lt:w-[120px]
                    tab:w-[100px]
                    mob:w-[60px]
                    " data-wow-offset="20"  src={featured1} />
                    <img className="w-[184px] animate__animated  animate__fadeInUp wow 
                    pc:w-[130px]
                    lt:w-[120px]
                    tab:w-[100px]
                    mob:w-[60px]
                    " data-wow-offset="30"  src={featured2} />
                    <img className="w-[184px] animate__animated  animate__fadeInUp wow 
                    pc:w-[130px]
                    lt:w-[120px]
                    tab:w-[100px]
                    mob:w-[60px]
                    " data-wow-offset="40"  src={featured3} />
                    <img className="w-[193px] animate__animated  animate__fadeInUp wow 
                    pc:w-[130px]
                    lt:w-[120px]
                    tab:w-[100px]
                    mob:w-[60px]
                    " data-wow-offset="50"  src={featured4} />
                    <img className="w-[171px] animate__animated  animate__fadeInUp wow 
                    pc:w-[130px]
                    lt:w-[120px]
                    tab:w-[100px]
                    mob:w-[60px]
                    " data-wow-offset="60"  src={featured5} />
                </div>
            </div>
        </div>
    )
}