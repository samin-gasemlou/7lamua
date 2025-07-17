import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialSlider.css';

const testimonials = [
  {
    id: 1,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment: "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید. از همه دست‌اندرکاران این مجموعه با تمام وجود تشکر می‌کنم.",
  },
  {
    id: 2,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment: "غیرممکنه از خرید بسته‌های 7Lamua پشیمون بشید.",
  },
  {
    id: 3,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment: "تجربه‌ای عالی بود.",
  },
  {
    id: 4,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment: "ممنون از تیم حرفه‌ای.",
  },
  {
    id: 5,
    name: "زهرا رهنورد",
    title: "آرایشگر، جامعه‌شناس",
    comment: "حتماً باز هم سفارش می‌دم.",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="min-w-[390px] max-w-[639px] flex justify-center pt-4">
      <section className="bg-[#FED2D7] rounded-[24px] w-[342px] px-4 pt-6 pb-12 relative">
        <h2 className="text-right font-bold text-[#312651] mb-4">به ما اعتماد کرده‌اند</h2>

        <Swiper
        spaceBetween={16}
  slidesPerView={1}
  pagination={{
    el: '.custom-swiper-pagination',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active'
  }}
  modules={[Pagination]}
  className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-4 h-[162px] rounded-tl-[16px] rounded-tr-[16px] rounded-br-[8px] rounded-bl-[24px]">
                <div className="flex items-center justify-end gap-4 mb-2">
                  <div className="text-right">
                    <h3 className="font-bold text-[#312651] text-base">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
                    <img src="./images/FeedBackImg.png" alt="user" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-[#312651] text-right leading-6 text-sm">{item.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2" />
   
      </section>
    </div>
  );
}
