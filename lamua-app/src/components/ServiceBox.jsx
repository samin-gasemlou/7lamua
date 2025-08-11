import React from 'react'

function ServiceBox({ icon, title, description }) {
  return (
    <div className=' w-[100px] md:w-[120px] h-[140px] md:h-[160px] bg-[#ffffff81] [border-radius:8px_24px_8px_8px] ' >
        <div className='w-full relative'>
    <div className=" w-[48px] h-[48px] bg-[#ffffff] rounded-full absolute top-[10px] right-[10px] flex items-center justify-center">
      {icon}
    </div>
    <h1 className=' text-[#312651] absolute top-[50px] right-[10px] pt-3 font-[YekanBakh-Bold]'>{title}</h1>
    <p className=" absolute top-[79px] right-[1px] p-3 pt-2 text-[10px] text-[#AEA3CC] w-full font-[IranSans]" dir="rtl">{description}</p>
    </div>
    </div>
  )
}

export default ServiceBox
