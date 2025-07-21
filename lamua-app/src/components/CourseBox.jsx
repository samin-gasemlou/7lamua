import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function CourseBox ({ index, number,EnTitle, title, description,btnTxt,linkTo = "/SingleWoman" }) {
  
  return (
    <div className='min-w-[390px] max-w-[639px] flex items-center justify-center pt-16' >
         <div className="flex flex-col items-start p-8 gap-4 w-[342px] h-[250px] bg-[#F2EEFC] rounded-[16px]">
            <div className='flex flex-row items-end justify-between w-full'>
                <div className="flex flex-col justify-center items-end w-[214px] h-[43px] p-0">
                  <p className='text-[#8061D9] text-right text-[13px] leading-[20px] font-normal tracking-[0.5em] -mt-[6px]'>{EnTitle}</p>
                  <h1 className='text-right text-[#312651] text-[18px] leading-[32px] font-bold font-[YekanBakh-Bold] tracking-[-0.04em]'>{title}</h1>
                </div>
                <div className='flex flex-row justify-center items-center px-[9px] py-[8px] gap-[10px] w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#8061D9] to-[#6A4BC4]'>
                    <div className="w-[48px] h-[32px] text-[24px] leading-[37px] text-center tracking-[-0.04em] font-[300] text-[#F2EEFC] font-[YekanBakh-Light]">
                     {number}
                    </div>
                </div>
            </div>
            <div className='w-[278px] h-[66px] text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]' dir='rtl'>
              <p>{description}</p>
            </div>
                    <Link to={linkTo}>
            <button className="w-[278px] h-[40px] px-[11px] py-[8px] flex justify-center items-center gap-[4px] font-[IranSans] text-[#8061D9] bg-white rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
              {btnTxt}
            </button>
                    </Link>
        </div>
    </div>
  )
}

export default CourseBox
