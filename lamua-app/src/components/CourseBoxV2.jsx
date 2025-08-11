import React from 'react'

function CourseBoxV2 ({ index, number, EnTitle, title, btnTxt, icon = null, buttonClassName = "", onClick }) {
  return (
    <div className='w-full flex items-center justify-center pt-2 px-4'>
      <div className="flex flex-col items-start lg:items-center lg:justify-center p-6 lg:p-4 gap-4 w-full max-w-[342px] lg:max-w-[294px] h-auto lg:h-[144px] bg-[#F2EEFC] rounded-[16px]">
        <div className='flex flex-row items-end justify-between w-full'>
          <div className="flex flex-col justify-center xl:items-end lg:items-end md:items-center md:gap-0 w-full lg:w-full lg:pl-4 h-auto p-0">
            <p className='text-[#8061D9] text-right lg:text-[13px] xl:text-[13px] md:text-[11px] leading-[20px] font-normal -mt-[6px]'>{EnTitle}</p>
            <h1 className='text-right text-[#312651] text-[18px] lg:text-[15px] xl:text-[15px] md:text-[12px] leading-[32px] lg:leading-5 font-bold font-[YekanBakh-Bold] tracking-[-0.04em]'>{title}</h1>
          </div>
          <div className='flex flex-row justify-center items-center px-3 py-2 gap-2 w-12 h-12 rounded-full bg-gradient-to-br from-[#8061D9] to-[#6A4BC4]'>
            <div className="w-12 h-8 text-[24px] leading-[37px] text-center tracking-[-0.04em] font-[300] text-[#F2EEFC] font-[YekanBakh-Light]">
              {number}
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-between lg:w-full w-full'>
          <button
            onClick={onClick}
            className={`w-full h-10 px-3 py-2 flex justify-center md:text-[12px] items-center gap-1 font-[IranSans] ${buttonClassName} rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]`}
          >
            {btnTxt}
            {icon && <span className="ml-2">{icon}</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseBoxV2
