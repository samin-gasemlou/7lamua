import Header from "../sections/Header"
import DesktopHeader from "../sections/DesktopHeader"
import Footer from "../sections/Footer"

function Support() {

  return (
    <div className="pt-[95px] md:pt-0 bg-gradient-to-b from-[#FED2D7] to-[#FCD2D6]">
    <Header />
    <DesktopHeader/>
      <div className="pinkSec w-full md:h-[300px] h-[100px] flex items-center justify-center bg-gradient-to-b">
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
       <img src="/images/S.svg" alt="" />

      </div>
      </div>
      <div className="whiteSec w-full flex items-center justify-center">
      <h2 className=" w-full h-[70px] rounded-t-[100%] bg-[#ffff] text-center flex items-center justify-center leading-[50px]  text-[#312651] font-[YekanBakh-bold] font-[800] text-[28px]">پشتیبانی</h2>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-11 bg-[#ffff]">
        <div className="md:w-[35%] w-[90%] flex flex-row justify-between items-center p-4 gap-4 bg-[#F2EEFC] rounded-[16px]">
            <div class="mx-auto text-right text-[#312651] font-[YekanBakh-Bold] font-extrabold text-[28px] leading-[43px] flex items-center">
            021-123445567
           </div>
           <div class="mx-auto text-right text-[#8061D9] font-[IranSans] text-[15px] leading-[25px]">
            شماره پشتیبانی
           </div>
        </div>
        <div className="text-center text-[#AEA3CC] font-[IranSans] font-normal text-[13px] leading-[20px] flex items-center">
 برای ارسال پیام به پشتیبانی ایمیل و نام خود را وارد کنید.
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <div className=" md:w-[35%] w-[90%] text-right text-[#312651] font-[IranSans] font-normal text-[15px] leading-[25px] flex items-center justify-end">
            ایمیل شما
           </div>
           <div className="md:w-[35%] w-[90%] flex flex-row justify-end items-center p-[16px] gap-[8px] border-[#AEA3CC] border-[0.5px] rounded-[12px] box-border">
            <input className="font-[IranSans] text-[13px] leading-[20px] text-right text-[#D5CFE6] " type="text" placeholder="متن خود را وارد کنید" dir="rtl" />
           </div>
            <div className=" md:w-[35%] w-[90%] text-right text-[#312651] font-[IranSans] font-normal text-[15px] leading-[25px] flex items-center justify-end">
            نام شما
           </div>
           <div className="md:w-[35%] w-[90%] flex flex-row justify-end items-center p-[16px] gap-[8px] border-[#AEA3CC] border-[0.5px] rounded-[12px] box-border">
            <input className="font-[IranSans] text-[13px] leading-[20px] text-right text-[#D5CFE6] " type="text" placeholder="نام خود را وارد کنید" dir="rtl" />
           </div>
           <div className="box-border flex md:w-[35%] w-[95%] h-[200px] flex-row justify-end items-start p-4 gap-2 border border-[#AEA3CC] rounded-[12px]">
           <input type="text" placeholder="پیام خود را وارد کنید" dir="rtl" className="text-right text-[#D5CFE6] text-sm leading-5 font-[IranSans]" />
          </div>
          <button  className="flex flex-row justify-center items-center p-2.5 gap-1.5 md:w-[35%] w-[95%] text-white font-[IranSans] font-semibold text-[13px] leading-[20px] bg-[#8061D9] shadow-md md:mb-1 mb-7 rounded-lg">
          ارسال پیام
         </button>


        </div>
      </div>
     
      <div className="w-full bg-[#ffff] hidden md:block">
      <Footer/>
      </div>
    </div>
  )
}

export default Support
