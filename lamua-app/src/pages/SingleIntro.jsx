import React, { useState } from 'react'
import Header from '../sections/Header'
import ImageHero from '../components/ImageHero'
import Footer from '../sections/Footer'
import DesktopHeader from '../sections/DesktopHeader'
import { useParams } from "react-router-dom";
function SingleIntro ({linkTo}) {
   const { id } = useParams();

  // دیتای نمونه برای هر صفحه
  const pagesData = {
    skin: {
      title: "پوست ",
      title2: "Skin",
      imageSrc: "/images/SinI.png",
      description: "مقدمه پوست",
    },
    woman: {
      title: "شکوفایی برند زنانه",
      title2: "Personal branding ",
      imageSrc: "/images/SinI.png",
      description:"مقدمه شکوفایی برند زنانه"
    },
    brand: {
      title: "برندسازی شخصی",
      title2: "The flourishing of women's brands",
      imageSrc: "/images/SinI.png",
      description: "مقدمه برندسازی شخصی"
    },
    eye:{
      title:"ابرو و مژه",
      title2:"Eyebrows and eyelashes",
      imageSrc: "/images/SinI.png",
      description: "مقدمه ابرو و مژه"

    },    
    skinny:{
      title:"رژیم لاغری",
      title2:" Weight loss diet ",
      imageSrc: "/images/SinI.png",
      description: "مقدمه رژیم لاغری"

    }
    // بقیه آیتم‌ها...
  };

  // گرفتن دیتا بر اساس id
  const page = pagesData[id];

  if (!page) {
    return <div>صفحه پیدا نشد</div>;
  }

  return (
    <div className='pt-[95px] md:pt-0' >
      <Header />
      <DesktopHeader/>
     <ImageHero
      title={page.title}
      title2={page.title2}
      icon={
      <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8616 0.645844C11.798 0.645844 10.7779 1.06837 10.0258 1.82047C9.27374 2.57257 8.85121 3.59263 8.85121 4.65626C8.85121 5.71989 9.27374 6.73995 10.0258 7.49205C10.7779 8.24415 11.798 8.66668 12.8616 8.66668C13.9253 8.66668 14.9453 8.24415 15.6974 7.49205C16.4495 6.73995 16.872 5.71989 16.872 4.65626C16.872 3.59263 16.4495 2.57257 15.6974 1.82047C14.9453 1.06837 13.9253 0.645844 12.8616 0.645844ZM11.3805 10.125C10.1662 10.125 9.11959 10.7964 8.55926 11.7813C8.54646 11.8005 8.53411 11.8199 8.52223 11.8397L4.85789 17.8397L0.750628 20.5783C0.588 20.6831 0.44784 20.8191 0.33831 20.9786C0.22878 21.1381 0.152068 21.3177 0.112641 21.5071C0.0732149 21.6965 0.0718614 21.8919 0.10866 22.0818C0.145458 22.2717 0.219673 22.4524 0.326982 22.6134C0.434292 22.7744 0.572553 22.9124 0.733714 23.0194C0.894875 23.1264 1.07572 23.2003 1.26571 23.2367C1.4557 23.2732 1.65104 23.2715 1.84036 23.2317C2.02969 23.1919 2.20921 23.1149 2.36847 23.0051L6.74347 20.0884C6.91992 19.9709 7.06863 19.8163 7.17926 19.6355L7.76886 18.6685C7.68774 19.6198 7.89072 20.5221 8.51084 21.3545L4.75677 24.573C4.13844 25.1032 3.87273 25.9367 4.07033 26.7264C4.3095 27.683 5.16946 28.3542 6.15529 28.3542H9.93784C9.71763 27.9546 9.58038 27.5033 9.58038 27.0155C9.58038 25.5418 10.7336 24.3153 12.2051 24.2241L16.0987 23.9806C16.4932 23.9507 16.8458 24.2603 16.872 24.6628C16.8968 25.0653 16.5916 25.4106 16.1899 25.4361L12.2948 25.6796C11.5904 25.7226 11.0387 26.3096 11.0387 27.0155C11.0387 27.7541 11.6388 28.3542 12.3774 28.3542H19.5694C20.556 28.3542 21.4159 27.6838 21.6558 26.7264C21.8534 25.9367 21.5869 25.1032 20.9693 24.573L17.2153 21.3545C17.8368 20.4652 18.0198 19.5595 17.943 18.6443L18.544 19.6327C18.6543 19.8145 18.803 19.9701 18.9798 20.0884L23.3548 23.0051C23.5141 23.1149 23.6936 23.1919 23.8829 23.2317C24.0722 23.2715 24.2676 23.2732 24.4576 23.2367C24.6475 23.2003 24.8284 23.1264 24.9895 23.0194C25.1507 22.9124 25.289 22.7744 25.3963 22.6134C25.5036 22.4524 25.5778 22.2717 25.6146 22.0818C25.6514 21.8919 25.65 21.6965 25.6106 21.5071C25.5712 21.3177 25.4945 21.1381 25.385 20.9786C25.2754 20.8191 25.1353 20.6831 24.9726 20.5783L20.8668 17.8411L17.2324 11.8653C17.2014 11.8129 17.1671 11.7625 17.1298 11.7144C16.5604 10.7656 15.5315 10.125 14.3442 10.125H11.3805ZM11.6582 15.9626C12.0304 15.9342 12.4126 16.0476 12.7178 16.3101L12.8616 16.434L13.0055 16.3101C13.6158 15.7844 14.5377 15.855 15.0619 16.4668C15.5877 17.0771 15.5178 17.9982 14.9067 18.5232L12.8616 20.2778L10.818 18.5232C10.2069 17.9982 10.1363 17.0778 10.6613 16.4668C10.9238 16.1612 11.2861 15.9911 11.6582 15.9626Z" fill="#D5CFE6"/>
      </svg>
          }
      imageSrc={page.imageSrc}
      
      />
      <div className='w-full flex items-center justify-center md:justify-between md:px-32 mt-32'>
         <button className="hidden md:flex text-[#312651] font-[IranSans] box-border flex-row justify-center items-center p-2 px-12 gap-2 text-[13px] w-[178px] h-[48px] border border-[#312651] rounded-lg ">دانلود PDF <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99224 -0.0071716C5.85974 -0.00510167 5.73349 0.0494733 5.6412 0.144566C5.54892 0.239659 5.49815 0.367493 5.50005 0.49999V7.62629L4.35357 6.47981C4.30696 6.43181 4.2512 6.39366 4.18958 6.3676C4.12796 6.34154 4.06174 6.32812 3.99484 6.32811C3.89534 6.32814 3.7981 6.35785 3.71557 6.41345C3.63305 6.46905 3.56898 6.548 3.53158 6.64021C3.49418 6.73242 3.48514 6.83369 3.50562 6.93107C3.5261 7.02845 3.57516 7.1175 3.64654 7.18684L5.64654 9.18684C5.74031 9.28057 5.86747 9.33323 6.00005 9.33323C6.13264 9.33323 6.2598 9.28057 6.35357 9.18684L8.35357 7.18684C8.40155 7.14077 8.43986 7.08558 8.46626 7.02452C8.49265 6.96345 8.50659 6.89774 8.50727 6.83122C8.50794 6.7647 8.49534 6.69871 8.47019 6.63712C8.44505 6.57554 8.40787 6.51958 8.36083 6.47255C8.31379 6.42551 8.25784 6.38833 8.19625 6.36318C8.13466 6.33804 8.06868 6.32543 8.00216 6.32611C7.93564 6.32679 7.86992 6.34073 7.80886 6.36712C7.74779 6.39351 7.69261 6.43182 7.64654 6.47981L6.50005 7.62629V0.49999C6.50101 0.433068 6.48853 0.366634 6.46334 0.304626C6.43815 0.242618 6.40077 0.186297 6.35341 0.139002C6.30606 0.0917064 6.24969 0.0543988 6.18765 0.0292901C6.12561 0.00418136 6.05916 -0.00821748 5.99224 -0.0071716ZM0.492239 8.32616C0.359744 8.32823 0.233489 8.38281 0.141204 8.4779C0.0489186 8.57299 -0.00184913 8.70083 5.15067e-05 8.83332V10.1667C5.15067e-05 11.1732 0.826793 12 1.83338 12H10.1667C11.1733 12 12.0001 11.1732 12.0001 10.1667V8.83332C12.001 8.76707 11.9887 8.70129 11.964 8.6398C11.9393 8.57832 11.9027 8.52236 11.8561 8.47517C11.8096 8.42799 11.7542 8.39052 11.693 8.36494C11.6319 8.33937 11.5663 8.3262 11.5001 8.3262C11.4338 8.3262 11.3682 8.33937 11.3071 8.36494C11.2459 8.39052 11.1905 8.42799 11.144 8.47517C11.0975 8.52236 11.0608 8.57832 11.0361 8.6398C11.0114 8.70129 10.9991 8.76707 11.0001 8.83332V10.1667C11.0001 10.6327 10.6328 11 10.1667 11H1.83338C1.36731 11 1.00005 10.6327 1.00005 10.1667V8.83332C1.00101 8.7664 0.988527 8.69997 0.963339 8.63796C0.938151 8.57595 0.900771 8.51963 0.853415 8.47233C0.806059 8.42504 0.74969 8.38773 0.68765 8.36262C0.625609 8.33751 0.55916 8.32512 0.492239 8.32616Z" fill="#312651"/>
</svg>
</button>
       <div className='w-[342px] h-[48px] flex flex-row justify-center items-center gap-[16px] p-0'>

              <div className='flex flex-col justify-center items-end w-[214px] h-[43px] pr-1 pt-5'>
               <p className="font-[IranSans] font-normal text-[13px] leading-[20px] text-right tracking-[0.5em] text-[#8061D9] -mt-[6px] mb-0 self-stretch">
  START
</p>
<h1 className="font-[YekanBakh-Bold] font-bold text-[18px] leading-[32px] text-right tracking-[-0.04em] text-[#312651]">
 {page.description}
</h1>


                <h1></h1>
              </div>
                <div className='flex flex-row justify-center items-center px-[9px] py-[8px] gap-[10px] w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#8061D9] to-[#6A4BC4]'>
                    <div className="w-[48px] h-[32px] text-[24px] leading-[37px] text-center tracking-[-0.04em] font-[300] text-[#F2EEFC] font-[YekanBakh-Light]">
                    0
                    </div>
                </div>
               <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.494063 16.3275L7.82156 9.00002L0.494063 1.67252C0.168646 1.3471 0.168646 0.819601 0.494062 0.494185C0.819479 0.168768 1.34698 0.168768 1.6724 0.494185L9.58906 8.41085C9.75198 8.57377 9.83323 8.78668 9.83323 9.00002C9.83323 9.21335 9.75198 9.42627 9.58906 9.58918L1.6724 17.5059C1.34698 17.8313 0.81948 17.8313 0.494063 17.5059C0.168647 17.1804 0.168647 16.6529 0.494063 16.3275Z" fill="#312651"/>
               </svg>
       </div>
      
       </div>
        <div className=" w-full rounded-[8px] flex items-center justify-center mt-7">
     <div className="relative w-[90%] md:w-[70%] md:h-[380px] h-[194px] rounded-[8px] overflow-hidden">
  {/* ویدیو */}
  <video
    className="w-full h-full object-cover"
    src="/videos/intro.mp4" // مسیر ویدیو
    controls
  ></video>

  {/* عنوان بالا سمت چپ */}
  <div className="absolute top-2 left-2 text-white text-sm font-[IranSans] px-2 py-1 ">
    Video Title
  </div>

  {/* آیکون اینفو بالا سمت راست */}
  <div className="absolute top-2 right-2 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-white/70 cursor-pointer">
    <span className="text-center text-[transparant] font-[IranSans] flex items-center justify-center">i</span>
  </div>
     </div>

    </div>


    <div className="desc w-full h-[194px] rounded-[8px] flex items-center justify-center mt-7">
      <p className="w-[342px] h-[132px] md:w-[70%] text-justify text-[#312651] text-[13px] md:text-[15px] leading-[22px] font-light font-[IranSans]" dir='rtl'>
  اگر تو یکی از زنانی هستی که مسیر «7 مرحله شکوفایی زنانه» را تجربه کرده ای، می دانی که آن سفر ساده نبود؛ سفری بود به عمق وجود، به روبرو شدن با صدای خاموش شده، لایه های زخمی و دخترک درون که سال ها بی صدا مانده بود. در آن مسیر، در آینه به خودت گفتی: «من کامل هستم، همین طور که هستم.»
</p>

    </div>
    <div className="exp w-full h-[194px] rounded-[8px] flex items-center justify-center mt-8">
      <div className="flex flex-col items-start p-0 gap-4 w-[342px] md:w-full h-[331px]">
        <div className="flex flex-row md:w-full md:justify-center justify-end items-center p-0 gap-4 w-[342px] h-[29px]">
          <h2 className="w-[214px] md:w-[70%] h-[29px] text-right text-[#312651] text-[18px] leading-[32px] font-bold tracking-[-0.04em] font-[YekanBakh-Bold]">
  چرا این دوره لازم است؟
</h2>
<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5.5" r="5" fill="url(#paint0_linear_1_584)"/>
<defs>
<linearGradient id="paint0_linear_1_584" x1="9.66374" y1="1.00802" x2="-1.02632" y2="4.36608" gradientUnits="userSpaceOnUse">
<stop stop-color="#8061D9"/>
<stop offset="1" stop-color="#6A4BC4"/>
</linearGradient>
</defs>
</svg>

        </div>
        <p className="w-[342px] h-[286px] md:h-[100px] md:w-[70%] md:text-right md:m-auto md:text-[15px] text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]" dir='rtl'>
  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد...
       </p>
        <p className="w-[342px] h-[286px] md:w-[70%] md:m-auto md:text-[15px] md:text-right text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]" dir='rtl'>
  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد...
       </p>
     </div>

    </div>
    <div className="exp w-full h-[194px] md:h-[290px] rounded-[8px] flex items-center justify-center md:mt-8 mt-36">
      <div className="flex flex-col items-start p-0 gap-4 w-[342px] md:w-full h-[331px]">
        <div className="flex flex-row justify-end md:w-full md:justify-center items-center p-0 gap-4 w-[342px] h-[29px]">
          <h2 className="w-[250px] h-[29px] md:w-[70%] text-right text-[#312651] text-[18px] leading-[32px] font-bold tracking-[-0.04em] font-[YekanBakh-Bold]">
  این دوره برای چه کسانی است؟
</h2>
<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5.5" r="5" fill="url(#paint0_linear_1_584)"/>
<defs>
<linearGradient id="paint0_linear_1_584" x1="9.66374" y1="1.00802" x2="-1.02632" y2="4.36608" gradientUnits="userSpaceOnUse">
<stop stop-color="#8061D9"/>
<stop offset="1" stop-color="#6A4BC4"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className="w-[342px] h-[220px] text-[13px]  md:h-[100px] md:w-full md:text-[15px] leading-[22px] font-light text-[#312651] text-justify font-[IranSans]" dir='rtl'>
          <p className='mb-6 md:mb-0 md:h-[100px] md:w-[70%] md:text-right md:m-auto md:text-[15px] '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است:</p>
          <p className=' md:h-[80px] md:w-[70%] md:text-right md:m-auto md:text-[15px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
          <p className=' md:h-[20px] md:w-[70%] md:text-right md:m-auto md:text-[15px]'>و برای شرایط فعلی تکنولوژی مورد نیاز
و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
<p className=' md:h-[100px] md:w-[70%] md:text-right md:m-auto md:text-[15px]'>کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
</p>
</div> 

     </div>

    </div>
     <div className="exp w-full h-[150px] md:h-[94px] rounded-[8px] flex items-center justify-center md:mt-24 mt-28">
      <div className="flex flex-col items-start p-0 gap-4 w-[342px] md:w-full h-[331px]">
        <div className="flex flex-row justify-end md:w-full md:justify-center items-center p-0 gap-4 w-[342px] h-[29px]">
          <h2 className="w-[214px] h-[29px] md:w-[70%]  text-right text-[#312651] text-[18px] leading-[32px] font-bold tracking-[-0.04em] font-[YekanBakh-Bold]">
ساختار دوره چگونه است؟
</h2>
<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5.5" r="5" fill="url(#paint0_linear_1_584)"/>
<defs>
<linearGradient id="paint0_linear_1_584" x1="9.66374" y1="1.00802" x2="-1.02632" y2="4.36608" gradientUnits="userSpaceOnUse">
<stop stop-color="#8061D9"/>
<stop offset="1" stop-color="#6A4BC4"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className='md:h-[100px] md:w-full md:text-[15px] '>
        <p className="w-[342px] h-[286px] md:h-[80px] md:w-[70%] md:text-right md:m-auto md:text-[15px] text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]" dir='rtl'>
  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد...
       </p>
       </div>
       
     </div>

    </div>
      <div className="exp w-full h-[194px] rounded-[8px] flex items-center justify-center md:mt-0 mt-2 mb-0 md:mb-4">
      <div className="flex flex-col items-start p-0 gap-4 w-[342px] md:w-full h-[200px]">
        <div className="flex flex-row justify-end items-center md:w-full md:justify-center p-0 gap-4 w-[342px] h-[29px]">
          <h2 className="w-[250px] h-[29px] text-right  md:w-[70%]  text-[#312651] text-[18px] leading-[32px] font-bold tracking-[-0.04em] font-[YekanBakh-Bold]">
  در این دوره چه یاد می گیری؟
</h2>
<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="5.5" r="5" fill="url(#paint0_linear_1_584)"/>
<defs>
<linearGradient id="paint0_linear_1_584" x1="9.66374" y1="1.00802" x2="-1.02632" y2="4.36608" gradientUnits="userSpaceOnUse">
<stop stop-color="#8061D9"/>
<stop offset="1" stop-color="#6A4BC4"/>
</linearGradient>
</defs>
</svg>

        </div>
        <div className=' md:h-[100px] md:w-full md:text-[15px] md:text-right'>
        <p className="w-[342px] h-[286px]  md:h-[80px] md:w-[70%] md:text-right md:m-auto md:text-[15px] text-justify text-[#312651] text-[13px] leading-[22px] font-light font-[IranSans]" dir='rtl'>
  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد...
       </p>
       
       </div>
     </div>

    </div>
    <Footer />
    </div>
  )
}

export default SingleIntro
