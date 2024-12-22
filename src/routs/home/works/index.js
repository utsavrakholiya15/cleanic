import React from "react";
import worksBG from '../../../assets/IMAGEs/worksBg.jpg';
export default function Works() {
    return (
        <div className="relative font-primary h-[475px] ">
            <div className="absoulute top-0 w-full h-full object-cover ">
                <img className="w-full h-full object-cover  " src={worksBG} />
            </div>
            {/* layer  */}
            <div className="absolute top-0 w-full h-full bg-black opacity-[0.5]" ></div>
            {/* data  */}
            <div className="absolute top-0 w-full h-full flex flex-col justify-center ">
                <div className="container max-w-[1024px]">
                    <h1 className="text-primary text-[44px] text-center animate__animated animate__fadeIn wow 
                    tab:text-[42px]
                    mob:text-[38px]
                    " data-wow-offset="35" >How It Works</h1>
                    {/* flex  */}
                    <div className="  max-w-[1024px] flex justify-between mx-auto mt-[50px]  animate__animated animate__fadeIn wow " data-wow-offset="45" >
                        {/* item */}
                        <div className="max-w-[213px] text-center ">
                            <svg className="w-[74px] h-[74px] mx-auto 
                            lt:w-[58px]
                            tab:w-[50px]
                            mob:w-[45px]
                             " preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                                <g>
                                    <path d="M100 180c-44.187 0-80-35.813-80-80s35.813-80 80-80 80 35.813 80 80-35.813 80-80 80z" fill="#FFF7BD" data-color="1"></path>
                                    <path d="M99.869 136.494c-3.785 0-7.488-.73-11.002-2.161a28.735 28.735 0 0 1-9.445-6.242 26.254 26.254 0 0 1-6.083-9.139 25.98 25.98 0 0 1-1.81-10.815c.212-6.727 2.733-13.221 7.711-19.849l19.348-24.082c.165-.216.376-.397.617-.514l.282-.146.511-.047c.264 0 .529.058.764.175l.282.14.364.397 19.331 24.047c5.002 6.663 7.523 13.156 7.735 19.884a26.077 26.077 0 0 1-1.81 10.815 26.199 26.199 0 0 1-6.083 9.139 28.797 28.797 0 0 1-9.445 6.242c-3.55 1.448-7.3 2.061-11.132 2.161h-.012c-.041-.005-.082-.005-.123-.005zm.123-2.604h.018c3.568.006 6.9-.648 10.133-1.968s6.124-3.229 8.593-5.676a23.546 23.546 0 0 0 5.495-8.251 23.394 23.394 0 0 0 1.634-9.74c-.194-6.213-2.545-12.222-7.188-18.406l-18.678-23.23-18.703 23.264c-4.614 6.149-6.971 12.158-7.159 18.336-.153 3.375.4 6.657 1.634 9.775a23.634 23.634 0 0 0 5.484 8.24 26.065 26.065 0 0 0 8.604 5.688c3.233 1.32 6.595 2.003 10.133 1.968zm-.623-68.054.012.012-.012-.012z" fill="#533E2E" data-color="2"></path>
                                    <path d="m85.98 74.981.517 1.799a6.111 6.111 0 0 0 1.469 2.575 6.14 6.14 0 0 0 2.527 1.565l2.01.66c.934.309.934 1.623 0 1.933l-2.01.66a6.14 6.14 0 0 0-2.527 1.565 6.113 6.113 0 0 0-1.469 2.575l-.517 1.799c-.282.987-1.687.987-1.969 0l-.511-1.794a6.139 6.139 0 0 0-1.469-2.581 6.157 6.157 0 0 0-2.521-1.565l-2.01-.66c-.935-.309-.935-1.623 0-1.933l2.01-.66a6.08 6.08 0 0 0 2.521-1.565 6.113 6.113 0 0 0 1.469-2.575l.517-1.799c.277-.986 1.681-.986 1.963.001z" fill="#533E2E" data-color="2"></path>
                                </g>
                            </svg>
                            <p className=" text-primary mt-[10px] text-[18px] 
                            lt:text-[16px]
                            tab:text-[14px]
                            mob:text-[10px]
                            " >Choose your desired cleaning service</p>
                        </div>
                        {/* arrow */}
                        <svg className="w-[14px] h-[42px] rotate-[90deg] fill-primary mt-[15px] " preserveAspectRatio="none" data-bbox="72.5 20 55 160" viewBox="72.5 20 55 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M127.5 49.186L100 20 72.5 49.186l2.957 2.808 22.116-23.476V180h4.854V28.518l22.116 23.476 2.957-2.808z"></path>
                            </g>
                        </svg>
                        {/* item */}
                        <div className="max-w-[213px] text-center 
                        ">
                            <svg className="w-[74px] h-[74px] mx-auto
                            lt:w-[58px]
                            tab:w-[50px]
                            mob:w-[45px]
                            "  preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                                <g>
                                    <path d="M100 180c-44.187 0-80-35.813-80-80s35.813-80 80-80 80 35.813 80 80-35.813 80-80 80z" fill="#FFF7BD" data-color="1"></path>
                                    <path d="M120.929 136.5H79.113c-1.415 0-2.56-1.226-2.56-2.732V91.15c0-.243-.141-.364-.171-.364h-5.928c-1.2 0-2.229-.868-2.499-2.118l-2.884-11.06c-.288-1.335.331-2.647 1.47-3.169l23.303-10.702a2.204 2.204 0 0 1 1.262-.176l4.618.71c2.866.473 5.751.48 8.598 0 5.095-.826 5.095-.826 5.426-.728.129.036.135.036 23.713 10.896 1.133.522 1.752 1.833 1.476 3.12l-2.909 11.157c-.251 1.196-1.28 2.07-2.486 2.07h-5.867c-.031 0-.171.121-.171.364v42.624c-.015 1.5-1.167 2.726-2.575 2.726zM90.73 65.898l-23.192 10.69c-.092.042-.196.249-.147.48l2.884 11.06c.049.219.147.291.171.291h5.928c1.409 0 2.56 1.226 2.56 2.732v42.624c0 .249.141.364.178.364h41.816c.031 0 .171-.121.171-.364V91.15c0-1.505 1.151-2.732 2.56-2.732h5.867c.018 0 .122-.061.159-.243l2.909-11.163c.037-.182-.067-.388-.159-.431-7.416-3.417-21.061-9.7-23.229-10.689-1.066.152-4.507.71-4.507.71a28.552 28.552 0 0 1-9.37 0l-4.599-.704z" fill="#533E2D" data-color="2"></path>
                                    <path d="M87.491 83.192h6.963a.83.83 0 0 1 .833.826v8.34l-4.048 1.287a.901.901 0 0 1-.539 0l-4.048-1.287v-8.34a.84.84 0 0 1 .839-.826z" fill="#533E2D" data-color="2"></path>
                                </g>
                            </svg>
                            <p className=" text-primary mt-[10px] text-[18px] 
                            lt:text-[16px]
                            tab:text-[14px]
                            mob:text-[10px]
                            " >Use the Cleanic App for laundry pickup</p>
                        </div>
                        {/* arrow */}
                        <svg className="w-[14px] h-[42px] rotate-[90deg] fill-primary mt-[15px] " preserveAspectRatio="none" data-bbox="72.5 20 55 160" viewBox="72.5 20 55 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M127.5 49.186L100 20 72.5 49.186l2.957 2.808 22.116-23.476V180h4.854V28.518l22.116 23.476 2.957-2.808z"></path>
                            </g>
                        </svg>
                        {/* item */}
                        <div className="max-w-[213px] text-center ">
                            <svg className="w-[74px] h-[74px] mx-auto 
                            lt:w-[58px]
                            tab:w-[50px]
                            mob:w-[45px]
                            "  preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                                <g>
                                    <path d="M100 180c-44.187 0-80-35.813-80-80s35.813-80 80-80 80 35.813 80 80-35.813 80-80 80z" fill="#FFF7BD" data-color="1"></path>
                                    <path d="m68.047 123.249.949.814-.949-.814zm-.764 2.577-1.243.163 1.243-.163zm.88 6.577 1.243-.163-1.243.163zm3.339 2.848.02 1.248-.02-1.248zm6.692-.122-.02-1.248.02 1.248zm2.444-1.146.949.814-.949-.814zm8.399-9.71-.949-.814.949.814zm.724-1.445 1.222.264-1.222-.264zm.143-.671 1.229.264-1.229-.264zm1.755-2.028-.444-1.166.444 1.166zm1.755-2.027 1.229.264-1.229-.264zm1.748-2.035-.444-1.166.444 1.166zm.648-.237.444 1.166-.444-1.166zm1.332-.936-.949-.814.949.814zm6.029-6.971-.949-.814.949.814zm.546-.63-.949-.814.949.814zm1.987-.577.321-1.2-.321 1.2zM91.959 95.493l-1.127.549 1.127-.549zm39.528-9.398c0 11.101-9.061 20.093-20.232 20.093v2.489c12.557 0 22.744-10.111 22.744-22.588h-2.513v.006zm-20.231-20.1c11.178 0 20.232 8.999 20.232 20.093h2.506c0-12.471-10.181-22.588-22.744-22.588v2.495h.006zm-20.239 20.1c0-11.101 9.061-20.093 20.232-20.093v-2.489c-12.557 0-22.744 10.111-22.744 22.588h2.513v-.006zm2.062 8.849a19.952 19.952 0 0 1-2.062-8.849h-2.506c0 3.567.833 6.951 2.322 9.948l2.246-1.099zm-24.076 29.118 23.892-27.626-1.905-1.621-23.892 27.626 1.905 1.621zm-.478 1.594a2.039 2.039 0 0 1 .478-1.6l-1.905-1.621a4.503 4.503 0 0 0-1.058 3.547l2.485-.326zm.881 6.584-.888-6.584-2.485.332.888 6.585 2.485-.333zm2.076 1.77a2.052 2.052 0 0 1-2.076-1.77l-2.485.332a4.546 4.546 0 0 0 4.602 3.926l-.041-2.488zm6.685-.128-6.685.129.048 2.489 6.685-.129-.048-2.489zm1.522-.706a2.073 2.073 0 0 1-1.516.712l.048 2.489a4.575 4.575 0 0 0 3.373-1.58l-1.905-1.621zm8.392-9.71-8.399 9.711 1.905 1.621 8.399-9.711-1.905-1.621zm.451-.902a2.048 2.048 0 0 1-.451.902l1.905 1.621c.498-.576.84-1.261.997-2l-2.451-.523zm.143-.672-.143.671 2.451.522.143-.671-2.451-.522zm2.54-2.929a4.04 4.04 0 0 0-2.533 2.929l2.451.522c.109-.515.478-.936.976-1.126l-.894-2.325zm.97-1.126a1.555 1.555 0 0 1-.976 1.126l.888 2.326a4.04 4.04 0 0 0 2.533-2.929l-2.445-.523zm2.533-2.929a4.04 4.04 0 0 0-2.533 2.929l2.451.522c.109-.515.478-.936.976-1.126l-.894-2.325zm.649-.244-.649.244.888 2.326.649-.244-.888-2.326zm.826-.577a2.062 2.062 0 0 1-.826.576l.888 2.326a4.59 4.59 0 0 0 1.837-1.282l-1.899-1.62zm6.029-6.971-6.029 6.971 1.905 1.621 6.029-6.971-1.905-1.621zm.546-.63-.546.631 1.905 1.621.546-.631-1.905-1.621zm8.488-.299c-1.809 0-3.557-.237-5.224-.678l-.649 2.407c1.871.495 3.844.759 5.872.759v-2.488zm-6.583 1.919c.143-.17.417-.264.71-.19l.649-2.407c-1.147-.305-2.431.014-3.257.97l1.898 1.627zm-13.84-12.063c-.205-.42-.13-.902.157-1.227l1.905 1.621c.348-.4.444-.99.191-1.492l-2.253 1.098z" fill="#533E2D" data-color="2"></path>
                                    <path fill="#533E2D" d="M121.852 81.551c0 2.277-1.858 4.123-4.151 4.123-2.293 0-4.151-1.846-4.151-4.123s1.858-4.123 4.151-4.123c2.293 0 4.151 1.846 4.151 4.123z" data-color="2"></path>
                                </g>
                            </svg>
                            <p className=" text-primary mt-[10px]  text-[18px]
                            lt:text-[16px]
                            tab:text-[14px]
                            mob:text-[10px]
                            " >Leave us the keys and we'll take care of the rest</p>
                        </div>
                        {/* arrow */}
                        <svg className="w-[14px] h-[42px] rotate-[90deg] fill-primary mt-[15px] " preserveAspectRatio="none" data-bbox="72.5 20 55 160" viewBox="72.5 20 55 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
                            <g>
                                <path d="M127.5 49.186L100 20 72.5 49.186l2.957 2.808 22.116-23.476V180h4.854V28.518l22.116 23.476 2.957-2.808z"></path>
                            </g>
                        </svg>
                        {/* item */}
                        <div className="max-w-[213px] text-center ">
                            <svg className="w-[74px] h-[74px] mx-auto
                            lt:w-[58px]
                            tab:w-[50px]
                            mob:w-[45px]
                            "  preserveAspectRatio="xMidYMid meet" data-bbox="20 20 160 160" viewBox="20 20 160 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label=""><defs></defs>
                                <g>
                                    <path d="M100 180c-44.187 0-80-35.813-80-80s35.813-80 80-80 80 35.813 80 80-35.813 80-80 80z" fill="#FFF7BD" data-color="1"></path>
                                    <path d="M105.594 115.65h11.581c.342 0 .622.282.622.626v20.174h-12.824v-20.174c0-.344.28-.626.621-.626z" fill="#533E2D" data-color="2"></path>
                                    <path d="M125.511 136.5H74.489a1.998 1.998 0 0 1-1.989-2.003V85.355c0-.607.267-1.177.74-1.559l23.727-19.229a4.842 4.842 0 0 1 6.067 0l23.727 19.229c.472.382.74.951.74 1.559v49.148a1.994 1.994 0 0 1-1.99 1.997zm-50.313-2.717h49.604V85.699l-23.46-19.016a2.13 2.13 0 0 0-2.679 0L75.198 85.699v48.084z" fill="#533E2D" data-color="2"></path>
                                </g>
                            </svg>
                            <p className=" text-primary mt-[10px] text-[18px] 
                            lt:text-[16px]
                            tab:text-[14px]
                            mob:text-[10px]
                            " >Welcome back to your home clean home!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}