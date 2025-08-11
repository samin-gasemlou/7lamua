import Header from "../sections/Header"
import DesktopHeader from "../sections/DesktopHeader"
import Footer from "../sections/Footer"
import BlogCard from '../components/BlogCard'
import { useState } from "react";
function Blog() {
 const news = [
    {id:1, image: "/images/img1.png", title: "لباس مناسب پیدا کن!", description: "لورم ایپسوم متن ساختگی..." },
    {id:2, image: "/images/img2.png", title: "برترین زنان معاصر", description: "لورم ایپسوم متن ساختگی..." },
    {id:3, image: "/images/img3.png", title: "دکتر زنان کجا بریم؟", description: "لورم ایپسوم متن ساختگی..." },
    {id:4, image: "/images/img4.png", title: "کسب و کار خودم!", description: "لورم ایپسوم متن ساختگی..." },
    {id:5, image: "/images/img5.png", title: "بهترین راه حل های زنانه", description: "لورم ایپسوم متن ساختگی..." },
    {id:6, image: "/images/img6.png", title: "عروسی چی بپوشم؟", description: "لورم ایپسوم متن ساختگی..." },
    {id:7, image: "/images/img7.png", title: "مهمونی زیاد بریم؟", description: "لورم ایپسوم متن ساختگی..." },
    {id:8, image: "/images/img8.png", title: "فوتبال بانوان آره یا نه؟!", description: "لورم ایپسوم متن ساختگی..." },
    {id:9, image: "/images/img9.png", title: "رنگ سبز چه حسی داره؟", description: "لورم ایپسوم متن ساختگی..." },
    {id:10, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:11, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:12, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:13, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:14, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:15, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:16, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:17, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:18, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:19, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:20, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },
    {id:21, image: "/images/img10.png", title: "ورزش بانوان در جهان", description: "لورم ایپسوم متن ساختگی..." },

  ];
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // محاسبه آیتم‌های نمایش داده شده
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = news.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  return (
    <div className="pt-[95px] md:pt-0 bg-gradient-to-b from-[#FED2D7] to-[#FCD2D6]">
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
       <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="64" height="64" rx="32" fill="#312651"/>
<path d="M31.8616 18.1458C30.798 18.1458 29.7779 18.5684 29.0258 19.3205C28.2737 20.0726 27.8512 21.0926 27.8512 22.1562C27.8512 23.2199 28.2737 24.2399 29.0258 24.992C29.7779 25.7441 30.798 26.1667 31.8616 26.1667C32.9253 26.1667 33.9453 25.7441 34.6974 24.992C35.4495 24.2399 35.872 23.2199 35.872 22.1562C35.872 21.0926 35.4495 20.0726 34.6974 19.3205C33.9453 18.5684 32.9253 18.1458 31.8616 18.1458ZM30.3805 27.625C29.1662 27.625 28.1196 28.2964 27.5593 29.2813C27.5465 29.3005 27.5341 29.3199 27.5222 29.3397L23.8579 35.3396L19.7506 38.0783C19.588 38.1831 19.4478 38.3191 19.3383 38.4786C19.2288 38.6381 19.1521 38.8177 19.1126 39.0071C19.0732 39.1965 19.0719 39.3919 19.1087 39.5818C19.1455 39.7717 19.2197 39.9524 19.327 40.1134C19.4343 40.2743 19.5726 40.4123 19.7337 40.5194C19.8949 40.6264 20.0757 40.7003 20.2657 40.7367C20.4557 40.7732 20.651 40.7715 20.8404 40.7317C21.0297 40.6919 21.2092 40.6149 21.3685 40.505L25.7435 37.5884C25.9199 37.4709 26.0686 37.3163 26.1793 37.1355L26.7689 36.1685C26.6877 37.1197 26.8907 38.0221 27.5108 38.8544L23.7568 42.073C23.1384 42.6031 22.8727 43.4367 23.0703 44.2264C23.3095 45.183 24.1695 45.8542 25.1553 45.8542H28.9378C28.7176 45.4546 28.5804 45.0033 28.5804 44.5155C28.5804 43.0418 29.7336 41.8153 31.2051 41.7241L35.0987 41.4806C35.4932 41.4507 35.8458 41.7603 35.872 42.1628C35.8968 42.5653 35.5916 42.9106 35.1899 42.9361L31.2948 43.1796C30.5904 43.2226 30.0387 43.8096 30.0387 44.5155C30.0387 45.2541 30.6388 45.8542 31.3774 45.8542H38.5694C39.556 45.8542 40.4159 45.1838 40.6558 44.2264C40.8534 43.4367 40.5869 42.6031 39.9693 42.073L36.2153 38.8544C36.8368 37.9652 37.0198 37.0595 36.943 36.1443L37.544 37.1326C37.6543 37.3145 37.803 37.4701 37.9798 37.5884L42.3548 40.505C42.5141 40.6149 42.6936 40.6919 42.8829 40.7317C43.0722 40.7715 43.2676 40.7732 43.4576 40.7367C43.6475 40.7003 43.8284 40.6264 43.9895 40.5194C44.1507 40.4123 44.289 40.2743 44.3963 40.1134C44.5036 39.9524 44.5778 39.7717 44.6146 39.5818C44.6514 39.3919 44.65 39.1965 44.6106 39.0071C44.5712 38.8177 44.4945 38.6381 44.385 38.4786C44.2754 38.3191 44.1353 38.1831 43.9726 38.0783L39.8668 35.3411L36.2324 29.3653C36.2014 29.3129 36.1671 29.2625 36.1298 29.2144C35.5604 28.2656 34.5315 27.625 33.3442 27.625H30.3805ZM30.6582 33.4626C31.0304 33.4342 31.4126 33.5476 31.7178 33.8101L31.8616 33.934L32.0055 33.8101C32.6158 33.2844 33.5377 33.355 34.0619 33.9668C34.5877 34.5771 34.5178 35.4982 33.9067 36.0232L31.8616 37.7778L29.818 36.0232C29.2069 35.4982 29.1363 34.5778 29.6613 33.9668C29.9238 33.6612 30.2861 33.491 30.6582 33.4626Z" fill="#D5CFE6"/>
</svg>

      </div>
      </div>
      <div className="whiteSec w-full flex items-center justify-center">
      <h2 className=" w-full h-[70px] rounded-t-[100%] bg-[#ffff] text-center flex items-center justify-center leading-[50px]  text-[#312651] font-[YekanBakh-bold] font-[800] text-[28px]">اخبار دنیای زنان</h2>
      </div>
      <div className="min-h- flex flex-col items-center justify-center gap-4 bg-[#ffff] w-full p-6">

      {/* کارت‌ها */}
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {currentItems.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-10 font-sans">
        <button
          className="px-3 py-1 rounded-full hover:bg-purple-100"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === index + 1
                ? "bg-purple-800 text-white"
                : "hover:bg-purple-100"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 rounded-full hover:bg-purple-100"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
      </div>
      <div className="w-full bg-[#ffff]">
      <Footer/>
      </div>
    </div>
  )
}

export default Blog
