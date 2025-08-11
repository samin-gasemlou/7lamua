import { Link } from 'react-router-dom';

function CourseBox ({ index, number, EnTitle, title, description, btnTxt, linkTo }) {
  return (
    <div className='w-full flex items-center justify-center pt-16 px-4'>
      <div className="flex flex-col items-start lg:items-center lg:justify-center p-6 gap-4 w-full max-w-[342px] lg:max-w-[292px] h-auto lg:h-[205px] bg-[#F2EEFC] rounded-[16px]">
        <div className='flex flex-row items-end justify-between w-full md:gap-2'>
          <div className="flex flex-col justify-center items-end w-full max-w-[214px] h-[43px] p-0 lg:max-w-full lg:pl-4">
            <p className='text-[#8061D9] text-right text-[13px] xl:text-[13px] lg:text-[13px] md:text-[11px] leading-[20px] font-normal tracking-[0.5em] -mt-[6px]'>{EnTitle}</p>
            <h1 className='text-right text-[#312651] text-[18px] leading-[32px] lg:leading-5 lg:text-[15px] xl:text-[15px] md:text-[12px] font-bold font-[YekanBakh-Bold] tracking-[-0.04em]'>{title}</h1>
          </div>
          <div className='flex flex-row justify-center items-center px-[9px] py-[8px] gap-[10px] w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#8061D9] to-[#6A4BC4]'>
            <div className="w-[48px] h-[32px] text-[24px] leading-[37px] text-center tracking-[-0.04em] font-[300] text-[#F2EEFC] font-[YekanBakh-Light]">
              {number}
            </div>
          </div>
        </div>
        <div className='w-full max-w-[278px] lg:max-w-full h-auto text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]' dir='rtl'>
          <p>{description}</p>
        </div>
        <Link to={linkTo} className="w-full max-w-[278px] lg:max-w-[230px]">
          <button className="w-full h-[40px] px-[11px] py-[8px] flex justify-center items-center md:text-[13px] gap-[4px] font-[IranSans] text-[#8061D9] bg-white rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
            {btnTxt}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CourseBox;
