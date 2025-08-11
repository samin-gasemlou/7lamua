import React from 'react';
import { Link } from 'react-router-dom';


function Description2 () {
  return (
    <div className='md:hidden w-full flex items-center justify-center pt-2' >
              <Link to="/Brand">
         <div className=" w-[342px] h-[197px] flex flex-col items-start p-8 gap-4 bg-[#F2EEFC] rounded-[16px]">
          <div className=" w-full flex flex-row items-center justify-between">
             
            <div className='flex flex-col items-start justify-center w-[200px]' >
            <span className='text-[#8061D9] tracking-widest font-sans pb-1'>0 7   L E V E L S</span>
            <h1 className='text-[#312651] font-bold text-xl font-[YekanBakh-ExtraBold]'>برند سازی شخصی</h1>
            </div>
            <div>
               <img src="./images/brand.svg" alt="" />


            </div>
           
          </div>
          <div className="flex items-center justify-center leading-5 text-[15px] w-full font-[IranSans]" dir="rtl">
            <p className='text-[#312651]'>برندسازی شخصی یعنی ساختن تصویری از خودت که فقط بر پایه قضاوت های بیرونی نیست، بلکه بیانگر داستان، ارزش ها، اهداف و قدرت درون توست!</p>
          </div>
         </div>
              </Link>
    </div>
  )
}

export default Description2
