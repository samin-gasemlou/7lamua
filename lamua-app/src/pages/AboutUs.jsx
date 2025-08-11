import Header from "../sections/Header"
import DesktopHeader from "../sections/DesktopHeader"
import CourseInfo from "../components/CourseInfo"
import Testimonials from "../components/Testimonials"
import Footer from "../sections/Footer"
import "../components/TestimonialSlider.css";
import React, { useState, useRef } from "react";
const testimonials = [
  {
    id: 1,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment:
      "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
    image: "./images/FeedBackImg.png",
  },
  {id: 2,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment:
      "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
    image: "./images/FeedBackImg.png",
  },
  {id: 3,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment:
      "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
    image: "./images/FeedBackImg.png",
  },
   {id: 4,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment:
      "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
    image: "./images/FeedBackImg.png",
  },
   {id: 5,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment:
      "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
    image: "./images/FeedBackImg.png",
  },
];

function AboutUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
  
    const handleTouchStart = (e) => {
      touchStartX.current = e.targetTouches[0].clientX;
    };
  
    const handleTouchMove = (e) => {
      touchEndX.current = e.targetTouches[0].clientX;
    };
  
    const handleTouchEnd = () => {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50 && activeIndex < testimonials.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (diff < -50 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };
  
  return (
   <div className="pt-[95px] md:pt-0 bg-gradient-to-b from-[#FED2D7] to-[#FCD2D6] w-full">
    <Header />
    <DesktopHeader/>


    <div className="pinkSec w-full h-[300px] flex items-center justify-center bg-gradient-to-b">
      <div className="svg-container w-[20%] relative flex items-center justify-center">
        <svg className="absolute" width="169" height="201" viewBox="0 0 169 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M165.551 59.5021C162.009 45.9102 152.526 30.829 141.789 21.4402C96.8513 -17.869 24.3329 -0.905564 5.06728 54.2104C-0.936478 71.3855 -0.542013 110.082 0.901728 128.822C2.41647 148.447 13.0039 167.013 27.3466 180.597L34.0052 174.164C47.0225 159.461 49.6102 145.241 46.6439 126.192C28.7036 128.981 24.0095 93.3382 38.723 90.201C47.1882 88.3943 50.4544 98.8793 51.3774 98.2065C54.7619 88.3565 60.8367 80.4644 69.2704 74.1447C83.1871 63.7202 106.524 58.3908 98.3109 36.2341C96.9933 32.6811 94.5082 29.5288 92.4097 26.3992C106.681 31.1012 113.348 47.9361 129.182 49.7428C132.251 50.0905 135.367 49.5236 138.436 49.9469C142.467 51.2698 148.282 77.7355 146.893 82.6264C133.6 86.1492 126.278 92.9527 132.03 106.734C133.939 111.299 142.207 120.318 138.515 124.627C135.485 128.157 131.004 128.074 132.574 135.172L126.152 134.628L107.407 143.193C115.115 146.421 123.785 146.3 131.856 144.327C133.387 155.878 124.543 155.235 116.093 151.879L115.304 158.682C131.651 153.496 130.247 170.074 116.48 171.533C100.417 173.234 79.0373 157.813 66.7694 148.855C66.1699 148.734 66.2645 149.581 66.3908 149.974C68.1501 155.371 75.8737 166.62 79.8183 171.133C83.195 174.995 94.8317 183.432 95.3129 187.136C95.4234 187.967 94.7765 189.018 94.8869 189.963C95.3208 193.63 95.9677 197.334 96.3859 201C131.754 197.001 161.906 168.464 167.248 134.756C169.867 118.186 169.741 75.4979 165.567 59.5021H165.551Z" fill="url(#paint0_linear_65_2515)"/>
<path d="M87.6919 97.8361C102.437 107.905 120.669 103.944 124.701 86.1794C111.802 79.1567 98.516 78.8165 84.5283 83.1027L101.254 85.5822L112.133 90.2766C103.131 88.9688 93.7903 91.0326 87.6919 97.8361Z" fill="url(#paint1_linear_65_2515)"/>
<defs>
<linearGradient id="paint0_linear_65_2515" x1="84.5" y1="0" x2="84.5" y2="201" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.4"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint1_linear_65_2515" x1="84.5" y1="0" x2="84.5" y2="201" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.4"/>
<stop offset="1" stop-color="white" stop-opacity="0.1"/>
</linearGradient>
</defs>
        </svg>
        <svg className="absolute" width="96" height="115" viewBox="0 0 96 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M94.041 34.0435C92.0288 26.267 86.642 17.6385 80.5427 12.2668C55.0161 -10.2235 13.8223 -0.518109 2.87845 31.0159C-0.531964 40.8425 -0.307889 62.9825 0.512224 73.7043C1.37267 84.9322 7.38683 95.5545 15.5342 103.327L19.3166 99.646C26.711 91.2338 28.181 83.0983 26.4959 72.1992C16.305 73.7951 13.6385 53.4025 21.9965 51.6076C26.8051 50.5739 28.6605 56.5727 29.1848 56.1878C31.1074 50.5522 34.5581 46.0369 39.3488 42.4211C47.2542 36.4569 60.5105 33.4077 55.8452 20.7309C55.0968 18.6981 53.6851 16.8946 52.4931 15.104C60.6001 17.7942 64.3869 27.4261 73.3813 28.4598C75.1246 28.6588 76.8948 28.3344 78.6381 28.5766C80.9281 29.3335 84.231 44.4755 83.4423 47.2738C75.8909 49.2893 71.7321 53.1819 74.9991 61.0665C76.0836 63.6788 80.7803 68.8386 78.6829 71.3039C76.962 73.3237 74.4165 73.2761 75.3083 77.3374L71.6604 77.0259L61.0124 81.9262C65.3908 83.773 70.316 83.7038 74.9005 82.575C75.7699 89.1837 70.7462 88.8161 65.9465 86.8957L65.4984 90.7883C74.784 87.8213 73.9863 97.3062 66.1661 98.1409C57.0418 99.114 44.8969 90.2909 37.9282 85.1657C37.5876 85.0965 37.6414 85.5809 37.7131 85.8058C38.7125 88.8939 43.0998 95.3296 45.3406 97.9117C47.2587 100.122 53.8689 104.949 54.1423 107.068C54.205 107.544 53.8375 108.145 53.9002 108.685C54.1467 110.783 54.5142 112.902 54.7517 115C74.8423 112.712 91.9705 96.3849 95.0045 77.0995C96.4924 67.6189 96.4207 43.1953 94.0499 34.0435H94.041Z" fill="#312651"/>
<path d="M49.8131 55.9759C58.189 61.7368 68.5458 59.4705 70.8358 49.3066C63.5086 45.2886 55.9617 45.094 48.016 47.5463L57.5168 48.9649L63.6968 51.6508C58.5834 50.9026 53.2773 52.0833 49.8131 55.9759Z" fill="#312651"/>
        </svg>
      </div>
    </div>


    <div className="whiteSec w-full flex items-center justify-center">
      <h2 className=" w-full h-[50px] rounded-t-[100%] bg-[#ffff] text-center flex items-center justify-center font-[900] text-[40px] leading-[50px] text-[#312651]">7Lamua</h2>
      </div>


      <div className="w-full bg-[#ffff] flex flex-col md:flex-row md:w-auto items-center justify-between">
        <div className=" w-[100%]  flex-col justify-between items-center mt-48 hidden md:flex">
          
           <div className='flex-col items-center justify-center pt-11 relative mx-4 w-[80%] lg:w-[55%] xl:w-[35%]' >
        
         <div className='flex flex-col items-center justify-end px-4 w-full h-[330px] gap-4 bg-[#F2EEFC] rounded-[16px]'>
           <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-xl font-bold text-[#312651] font-[YekanBakh-ExtraBold]'>مارو دنبال کن</h1>
          <h2 className='text-sm text-[#8061D9] font-[YekanBakh-Regular]'>(:خوشحال میشیم</h2>
         </div>
          <div>
            <p className="text-[#312651] text-sm flex items-center justify-center leading-5 w-[90%] font-[IranSans]" dir="rtl">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
          </div>
          <button  className=" w-[90%] font-[IranSans] h-8 flex justify-center items-center py-2 text-[#312651] px-[11px] gap-1 bg-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] rounded-[8px] mb-7">مشاهده بیشتر

          </button>
         </div>
         <img className='absolute bottom-60 right-16 xl:right-24' src="./images/Media.png" alt="Media" />
          </div>
          <Testimonials widthClass="w-[80%] lg:w-[55%] xl:w-[35%]"/>
        </div>
        <CourseInfo/>
         <div className='w-full md:hidden flex flex-col items-center justify-center pt-11 relative' >
         <div className='w-full flex flex-col items-end justify-center px-10 pb-4'>
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
         <img className='absolute top-[43px] left-[10%]' src="./images/Media.png" alt="Media" />
    </div>
     <div className="w-full flex items-center justify-center py-4 md:hidden">
      <section className="relative w-[342px] bg-[#FED2D7] rounded-[24px] px-4 pt-6 pb-20 h-[270px]">
        <h2 className="text-right font-[YekanBakh-Bold] text-[#312651] mb-4">
          به ما اعتماد کرده‌اند
        </h2>

        {/* اسلاید‌ها */}
        <div
          className="w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full bg-white p-4 h-[162px] rounded-tr-[16px] rounded-tl-[16px] rounded-br-[8px] rounded-bl-[24px] font-[IranSans]"
              >
                <div className="flex items-center justify-end gap-4 mb-2">
                  <div className="text-right">
                    <h3 className="text-[#312651] text-base">{item.name}</h3>
                    <p className="text-[13px] text-gray-400">{item.title}</p>
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-[#312651] text-right leading-6 text-sm">
                  {item.comment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* دایره‌های پایین */}
        <div className="flex justify-center gap-2 mt-4 absolute bottom-4 left-1/2 -translate-x-1/2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[8px] h-[8px] rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "bg-white opacity-100"
                  : "bg-white opacity-40"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </div>
      </div>
       

       <div className="w-full bg-[#ffff]">
      <Footer/>
      </div>


   </div>
  )
}

export default AboutUs
