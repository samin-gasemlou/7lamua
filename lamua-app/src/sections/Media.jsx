import React from 'react'


function Media () {
  return (
    <div className='min-w-[390px] max-w-[639px] flex flex-col items-center justify-center pt-11 relative' >
         <div className='w-full flex flex-col items-end justify-center px-10 pb-4'>
          <h1 className='text-4xl font-bold text-[#312651]'>مارو دنبال کن</h1>
          <h2 className='text-2xl text-[#8061D9]'>(:خوشحال میشیم</h2>
         </div>
         <div className='flex flex-col items-end justify-center px-4  w-[342px] h-[197px] gap-4 bg-[#F2EEFC] rounded-[16px]'>
          <div>
            <p className="text-[#312651] flex items-center justify-center leading-7 w-[200px] pl-6" dir="rtl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
          </div>
          <button  className=" w-[155px] h-8 flex justify-center items-center py-2 px-[11px] gap-1 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[8px]">مشاهده بیشتر

          </button>
         </div>
         <img className='absolute top-[43px] left-[45px]' src="./images/Media.png" alt="Media" />
    </div>
  )
}

export default Media
