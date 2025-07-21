import React from 'react'


function Hero() {
  return (
    <div className=' min-w-[390px] max-w-[639px] flex items-center justify-center'>
   <div class=" p-5 w-[342px] h-[200px] rounded-[16px] bg-[linear-gradient(251.43deg,_#8061D9_3.71%,_#6A4BC4_91.62%)] relative">
       <img className='absolute top-0 right-0' src='/images/layer.png'/>
       <svg className='absolute top-0 right-0' width="199" height="186" viewBox="0 0 199 186" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.3" cx="112.5" cy="73.5" r="112.25" stroke="#F2EEFC" stroke-width="0.5"/>
</svg>
<svg  className='absolute top-0 right-[5px]' width="226" height="200" viewBox="0 0 226 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.2" cx="139.5" cy="73.5" r="139.25" stroke="#F2EEFC" stroke-width="0.5"/>
</svg>
<svg className='absolute top-0 right-[10px]' width="251" height="200" viewBox="0 0 251 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="164.5" cy="73.5" r="164.25" stroke="#F2EEFC" stroke-width="0.5"/>
</svg>

<h1 className='absolute top-[35px] left-[18px] text-white text-2xl font-[YekanBakh-ExtraBold]'>از امروز شروع کن</h1>
<p className='absolute top-[75px] left-[14px] text-[#ffffff9a] font-[IranSans] text-sm'>برنامه ورزشی کاملا منعطف</p>
<button className="absolute left-[50px] top-[152px] w-[100px] h-[32px] flex justify-center items-center py-2 px-[11px] gap-1 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[8px] font-[IranSans]">
  ...بیشتر
</button>

   </div>
   </div>
   
  )
}

export default Hero
