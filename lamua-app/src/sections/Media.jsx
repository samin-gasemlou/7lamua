import React from 'react'


function Media () {
  return (
    <div className='w-full md:hidden flex flex-col items-center justify-center pt-11 relative' >
         <div className='w-full flex flex-col items-end justify-center px-10 pb-4 z-10'>
          <h1 className='text-3xl font-bold text-[#312651] font-[YekanBakh-ExtraBold]'>مارو دنبال کن</h1>
          <h2 className='text-xl text-[#8061D9] font-[YekanBakh-Regular]'>(:خوشحال میشیم</h2>
         </div>
         <div className='flex flex-col items-end justify-center px-4  w-[342px] h-[197px] gap-4 bg-[#F2EEFC] rounded-[16px]'>
          <div>
            <p className="text-[#312651] text-sm flex items-center justify-center leading-5 w-[200px] pl-10 font-[IranSans]" dir="rtl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
          </div>
          <button  className=" w-[155px] font-[IranSans] h-8 flex justify-center items-center py-2 text-[#312651] px-[11px] gap-1 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[8px]">مشاهده بیشتر

          </button>
         </div>
         <img className='absolute top-[43px] left-[45px]' src="./images/Media.png" alt="Media" />
    </div>
  )
}

export default Media
