import React from "react";
import insta from '../../../assets/ICONs/insta.png';
import fb from '../../../assets/ICONs/fb.png';
import youtube from '../../../assets/ICONs/youtube.png';
import tiktok from '../../../assets/ICONs/tiktok.png';
export default function Footer() {
    return (
        <footer className="bg-customYellow py-[50px] font-primary ">
            <div className="container max-w-[1024px] grid grid-cols-4 
            pc:max-w-[900px]
            lt:grid-cols-1 lt:text-center
            ">
                <div className="flex flex-col gap-[15px] justify-between
                lt:items-center lt:mb-[15px]
                ">
                    <div className="flex items-center gap-[8px] ">
                        <svg className=" w-[14px] h-[14px] " preserveAspectRatio="xMidYMid meet" data-bbox="27.505 20 144.99 160.001" viewBox="27.505 20 144.99 160.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="home page"><defs></defs><g><path className="fill-black" d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805 6.027 6.807 13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079-6.027 6.807-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863-6.027-6.807-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0z" fill="#533E2E" data-color="1"></path></g></svg>
                        <p className=" text-[20px] ">The cleanic</p>
                    </div>
                    <button className=" w-[192px] h-[54px] border-[1px] border-customGreen rounded-[80px] bg-customGreen text-primary text-[16px] 
                    hover:bg-transparent hover:text-black hover:border-[1px] hover:border-black transition-all duration-[0.5s] ease-in-out ">Book Now</button>
                </div>
                <div className="text-[16px]  
                lt:my-[25px]
                ">
                    <p className="pb-[22px]">Legal</p>
                    <p className="pb-[4px]" ><a>Privacy Policy</a></p>
                    <p className="pb-[4px]" ><a>Terms & Conditions</a></p>
                    <p className="pb-[4px]" ><a>Refund Policy</a></p>
                </div>
                <div className="text-[16px]
                lt:my-[25px]
                ">
                    <p className="pb-[22px]">Operating Hours</p>
                    <p className="pb-[4px]" ><a>Mon - Fri: 8am - 8pm</a></p>
                    <p className="pb-[4px]" ><a>Saturday: 9am - 7pm​</a></p>
                    <p className="pb-[30px]" ><a>Sunday: 9am - 8pm</a></p>
                    <p className="pb-[3px]">Follow us for cleaning tips</p>
                    <div className="flex gap-[18px]
                    lt:justify-center lt:my-[15px]
                    ">
                        <img className="w-[24px] h-[24px]" src={insta} />
                        <img className="w-[24px] h-[24px]" src={fb} />
                        <img className="w-[24px] h-[24px]" src={youtube} />
                        <img className="w-[24px] h-[24px]" src={tiktok} />
                    </div>
                </div>
                <div className="text-[16px]
                lt:my-[25px]
                ">
                    <p className="pb-[22px]">Contact</p>
                    <p className="pb-[4px]" ><a>The cleanic</a></p>
                    <p className="pb-[4px] leading-6" ><a>500 Terry Francine Street<br /> San Francisco, CA 94158</a></p>
                    <p className="pb-[4px]" ><a>123-456-7890</a></p>
                    <p className="pb-[4px]" ><a>info@mysite.com</a></p>
                </div>
            </div>
        </footer>
    )
}