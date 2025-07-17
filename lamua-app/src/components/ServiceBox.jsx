import React from 'react'


function ServiceBox({ icon, title, description }) {
  return (
    <div className=' w-[100px] h-[140px] bg-white opacity-50 [border-radius:8px_24px_8px_8px] ' >
        <div className='w-full relative'>
    <div className=" w-[48px] h-[48px] bg-[#ffff] rounded-full absolute top-[10px] right-[10px] pt-2 flex items-center justify-center">
      {icon}
    </div>
    <h1 className='font-bold font-sans text-[#312651] absolute top-[50px] right-[10px] pt-2'>{title}</h1>
    <p className=" absolute top-[79px] right-[7px] p-1 pt-2 text-sm text-gray-700 leading-4 w-full" dir="rtl">{description}</p>
    </div>
    </div>
  )
}

export default ServiceBox
