import React from "react";
export default function Header() {
    return (
        <header className="fixed z-[9999] w-full top-[30px] 
        ">
            <div className="container  bg-primary flex items-center justify-between px-11  font-primary max-w-[1060px] h-[92px]
            pc:max-w-[900px] 
            lt:max-w-[768px]
            lt-mini:max-w-[650px]
            tab:max-w-[550px] tab:h-[85px]
            mob:max-w-[380px] mob:h-[80px] mob:px-8
            mob-mini:max-w-[300px]
            ">
                {/* logo  */}
                <div className="flex items-center w-[412px]
                pc:w-[250px]
                tab:gap-[2px]
                ">
                    <svg className="w-[14px] h-[16px] mr-[5px]  " preserveAspectRatio="xMidYMid meet" data-bbox="27.505 20 144.99 160.001" viewBox="27.505 20 144.99 160.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" aria-label="homepage"><defs></defs><g><path className="fill-[black] " d="m108.65 27.127 4.567 17.328c2.543 9.619 6.958 17.998 12.985 24.805 6.027 6.807 13.558 11.927 22.334 15.079l17.767 6.352c8.256 2.977 8.256 15.641 0 18.618l-17.767 6.352c-8.776 3.152-16.307 8.272-22.334 15.079-6.027 6.807-10.441 15.185-12.985 24.805l-4.567 17.328c-2.489 9.503-14.91 9.503-17.399 0l-4.522-17.27c-2.543-9.619-6.958-18.056-12.985-24.863-6.027-6.807-13.558-11.927-22.28-15.079l-17.767-6.352c-8.256-2.977-8.256-15.641 0-18.618l17.767-6.352c8.776-3.152 16.307-8.272 22.28-15.079 6.027-6.807 10.441-15.185 12.985-24.805l4.567-17.328c2.444-9.503 14.856-9.503 17.354 0z" fill="#533E2E" data-color="1"></path></g></svg>
                    <span className="text-[20px] font-400 
                    tab:text-[19px] 
                    mob:text-[17px]
                    ">The cleanic</span>
                </div>
                <div className="flex items-center justify-between w-full
                lt:w-auto">
                    <nav className="  w-[320px] flex justify-between text-[16px] 
                    lt:hidden ">
                        <a href="#"
                            className=" relative before:absolute before:content-[''] before:bottom-[-3px] before:left-0 before:w-[0] before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-[.3s]  before:ease-in-out ">Plans</a>
                        <a href="#"
                            className=" relative before:absolute before:content-[''] before:bottom-[-3px] before:left-0 before:w-[0] before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-[.3s]  before:ease-in-out " >Services</a>
                        <a href="#"
                            className=" relative before:absolute before:content-[''] before:bottom-[-3px] before:left-0 before:w-[0] before:h-[2px] before:bg-black hover:before:w-full before:transition-all before:duration-[.3s]  before:ease-in-out ">About</a>
                    </nav>
                    <button className="flex items-center gap-[15px]
                    lt:hidden">
                        <span className="text-[18px] hover:text-black hover:opacity-[0.7] transition-all duration-[0.3s] ease-in-out ">Log In</span>
                        <svg className="w-[26px] h-[26px] " data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><g><path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path></g></svg>
                    </button>
                    <button className="text-[16px] border-[1px] border-black bg-black text-primary w-[156px] h-[38px] rounded-[80px] 
                    hover:bg-transparent hover:text-black hover:border-[1px] hover:border-black transition-all duration-[0.5s] ease-in-out 
                    lt:hidden">Book Now</button>
                    <div className="w-[20px] h-[10px]  flex-col justify-between items-end hidden 
                    lt:flex">
                        <div className="w-full h-[2px] bg-customGray "></div>
                        <div className="w-full h-[2px] bg-customGray "></div>
                    </div>
                </div>
            </div>
        </header>
    )
}