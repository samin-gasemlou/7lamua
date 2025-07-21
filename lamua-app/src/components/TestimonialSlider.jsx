import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialSlider.css";
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

export default function TestimonialSlider() {
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
    <div className="min-w-[390px] max-w-[639px] flex items-center justify-center py-4">
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
  );
}
