import DesktopHeader from "../sections/DesktopHeader";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { useRef } from "react";
import {  FiChevronLeft } from "react-icons/fi";
function SingleBlog() {
   const relatedNews = [
    { id: 1, title: "  دکتر زنان کجا برم؟", img: "/images/img1.png", desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است." },
    { id: 2, title: "کسب و کار خانگی", img: "/images/img1.png",desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است."},
    { id: 3, title: "مهمونی نیا ببرم؟", img: "/images/img1.png",desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است." },
    { id: 4, title: "فوتبال بانوان یا مردان؟", img: "/images/img1.png", desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است." },
  ];
  const sliderRef = useRef(null);

  

  const cards = [
    {
       cid: 1,
     cimg: "/images/img6.png",
     ctitle: "فوتبال بانوان، آره یا نه؟!",
     cdesc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت."
    },
    {
       cid: 2,
     cimg: "/images/img4.png",
     ctitle: "رنگ سبز چه حسی داره؟",
     cdesc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت."
    },
    {
      cid: 3,
    cimg: "/images/img3.png",
    ctitle: "خبر دیگر",
    cdesc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت."
    }
  ];
  return (
   <div>
    <DesktopHeader/>
    <Header/>

    <div className="md:max-w-6xl pt-[94px] text-center w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
     
      {/* ستون اخبار */}
      <aside className="md:col-span-1 space-y-4 hidden md:block">
        {relatedNews.map((news) => (
          <div key={news.id} className="bg-[#F2EEFC] w-[188px] rounded-xl overflow-hidden shadow hover:shadow-lg transition text-center font-[IranSans]">
            <img src={news.img} alt={news.title} className="w-full h-28 object-cover" />
            <div className="p-4 flex flex-col justify-center items-center gap-4">
              <h3 className="font-[700] text-[13px] text-[#312651]">{news.title}</h3>
              <p className="text-[#AEA3CC] text-[11px] font-[300] ">{news.desc}</p>
            </div>
          </div>
        ))}
      </aside>

      {/* محتوای مقاله */}
      <main className="md:col-span-3 space-y-8">
        {/* بخش اول مقاله */}
        <div className="relative">
          <img src="/images/b.png" alt="cover" className="rounded-xl w-full" />
          <h1 className="absolute bottom-20 right-0 px-7 font-extrabold text-[24px] leading-[37px] text-right font-[YekanBakh-Bold] text-white">برترین زنان معاصر</h1>
          <div className=" w-full flex items-center justify-between">
          <p className="text-[11px] leading-[17px] text-justify text-[#AEA3CC] mt-3 font-[IranSans]">
           4 اردیبهشت 1404
          </p>
            <p className="text-[11px] leading-[17px] text-justify text-[#AEA3CC] mt-3 font-[IranSans]">• نویسنده: سارا رحمانی</p>
          </div>
        </div>

        {/* بخش دوم مقاله */}
        <section className="w-full flex flex-col items-end justify-center gap-7">
          <p className="font-light text-[13px] leading-[22px] text-justify text-[#312651] font-[IranSans]" dir="rtl">اگر تو یکی از زنانی هستی که مسیر «7 مرحله شکوفایی زنانه» را تجربه کرده ای، می دانی که آن سفر ساده نبود؛ سفری بود به عمق وجود، به روبرو شدن با صدای خاموش شده، لایه های زخمی و دخترک درون که سال ها بی صدا مانده بود.
در آن مسیر، در آینه به خودت گفتی:
«من کامل هستم، همین طور که هستم.»</p>
 <div className="flex flex-row justify-end items-center p-0 gap-4">
            <h2 className="font-bold text-[18px] leading-[32px] text-right tracking-[-0.04em] text-[#312651] font-[YekanBakh-Bold]">زن معاصر تاریخ یعنی چی؟</h2>
             <span className="text-purple-600 text-3xl leading-none">•</span>
          </div>
          
          <p className="font-light text-[13px] leading-[22px] text-justify text-[#312651] font-[IranSans]" dir="rtl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد

تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </section>

        {/* بخش سوم مقاله */}
        <section>
          <img src="/images/b2.png" alt="img2" className="rounded-xl w-full object-contain" />
        </section>

        {/* بخش چهارم مقاله */}
         <section className="w-full flex flex-col items-end justify-center gap-7">
 <div className="flex flex-row justify-end items-center p-0 gap-4">
            <h2 className="font-bold text-[18px] leading-[32px] text-right tracking-[-0.04em] text-[#312651] font-[YekanBakh-Bold]">چگونه برترین زنان رو پیدا کردیم؟</h2>
             <span className="text-purple-600 text-3xl leading-none">•</span>
          </div>        
          <p className="font-light text-[13px] leading-[22px] text-justify text-[#312651] font-[IranSans]" dir="rtl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد

تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>

          <div className="flex flex-row justify-end items-center p-0 gap-4">
            <h2 className="font-bold text-[18px] leading-[32px] text-right tracking-[-0.04em] text-[#312651] font-[YekanBakh-Bold]">برترین زنان معاصر چه کسانی هستند؟</h2>
             <span className="text-purple-600 text-3xl leading-none">•</span>
          </div>        
          <p className="font-light text-[13px] leading-[22px] text-justify text-[#312651] font-[IranSans]" dir="rtl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
</p>
        </section>

      </main>
    </div>
    <div className="block md:hidden px-4 mt-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
         <div className="flex items-center gap-1 text-[#A59AC1]">
          <FiChevronLeft className="text-lg" />
          <span className="text-sm font-[IranSans]">بیشتر</span>
        </div>
        <h2 className="text-lg font-bold text-[#1F1B4D] font-[YekanBakh-Bold]">اخبار مرتبط</h2>
       
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Buttons */}
       

        {/* Cards */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth text-center"
        >
          {cards.map((card) => (
            <div
              key={card.cid}
              className="flex-none w-[250px] bg-white rounded-2xl font-[IranSans] overflow-hidden shadow"
            >
              <img
                src={card.cimg}
                alt={card.ctitle}
                className="w-full h-[160px] font-[IranSans] object-cover"
              />
              <div className="bg-[#F2EEFC] p-3  font-[IranSans]" dir="rtl">
                <h3 className="font-[700] leading-[20px] text-[#312651] mb-1 text-[15px]">
                  {card.ctitle}
                </h3>
                <p className="text-xs text-[#AEA3CC] leading-5">
                  {card.cdesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full bg-[#ffff]">
      <Footer/>
    </div>

   </div>
  )
}

export default SingleBlog
