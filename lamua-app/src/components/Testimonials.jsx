import React from "react";

const Testimonials = ({ widthClass }) => {
  const testimonials = Array(5).fill({
    name: "زهرا رهنورد",
    job: "آرایشگر، جامعه شناس",
    text: "غیرممکنه از خرید بسته های 7Lamua پشیمون بشید. از همه دست اندر کاران این مجموعه با تمام وجود تشکر می کنم.",
    image: "/images/boxImg.png",
  });

  return (
    <div className={`mr-4 mt-7 ${widthClass}`}>
      <h2 className="font-[YekanBakh-Bold] mb-4b p-2 font-bold text-[18px] leading-[32px] text-right tracking-[-0.04em] text-[#312651]">
        
        
        به ما اعتماد کرده اند
        <span className="inline-block w-3 h-3 rounded-full ml-2 bg-gradient-to-r from-[#8061D9] to-[#6A4BC4]"></span>
      </h2>

      <div className="bg-gradient-to-b from-[#FED2D7] to-[#FCD2D6]  w-full p-4 rounded-[16px] h-96 overflow-y-scroll space-y-4 scrollbar-hide flex flex-col items-center justify-start gap-2">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-end p-4 gap-4 md:gap-1 w-64 md:w-52 md:p-3 md:justify-center md:h-24 h-32 bg-white rounded-[8px_32px_8px_8px]"
          >
            <div className="w-full flex flex-row justify-center items-center p-0 md:gap-2 gap-4">
               <img src="/images/bIcon.svg" alt="" />
              <div className="flex flex-col items-end justify-start font-[IranSans]">
                <h3 className="font-bold text-[13px] text-[#312651]">{item.name}</h3>
                <p className="text-[11px] text-[#AEA3CC]">{item.job}</p>
              </div>
              <img
                src={item.image}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              
            </div>
           
            <p className=" text-[11px] leading-[15px] md:leading-4 md:text-[10px] text-justify text-[#312651] font-[IranSans]" dir="rtl">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
