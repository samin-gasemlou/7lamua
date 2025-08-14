import React from 'react'


function ImageHero ({imageSrc,title,title2,icon}) {
  return (
    <div className=' w-full flex items-center justify-center md:pt-7' >
         <div className="w-[342px] md:w-full h-[225px] rounded-[16px] bg-cover bg-no-repeat relative md:flex md:items-center md:justify-center">
          <picture>
             <source media="(min-width:768px)" srcSet="/images/SinI.png" />
         <img className='md:w-[95%] md:m-auto lg:w-[1000px] rounded-lg md:h-full object-cover' src={imageSrc} />
         </picture>
         <div className='w-full min-h-20 absolute top-32 md:top-20 left-0 flex flex-col items-center justify-center'>
          <div className=" w-[64px] h-[64px] bg-[#312651] rounded-full flex items-center justify-center">
         {icon}
         </div>
         <div className='flex flex-col items-center justify-center pt-4'>
          <h1 className='tracking-[-0.04em] text-[#312651] font-[YekanBakh-ExtraBold]'>{title}</h1>
          <p className="h-[20px] text-center text-[13px] leading-[20px] font-light text-[#8061D9] font-sans">{title2}</p>
         </div>
         </div>
         </div>
    </div>
  )
}

export default ImageHero
