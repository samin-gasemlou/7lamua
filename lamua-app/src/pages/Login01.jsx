import React, { useRef, useEffect, useState } from "react";
import Login02 from "./Login02";
export default function Login01({ isOpen, onClose }) {
  const inputRef = useRef(null);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("09012346578");
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  function handlePhoneSubmit() {
    // ارسال کد به موبایل (API)
    setShowVerifyModal(true);
  }

  function handleVerify(code) {
    // ارسال کد به سرور برای چک کردن تایید
    alert("کد واردشده: " + code);
    setShowVerifyModal(false);
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-[400px] max-w-[90vw] rounded-3xl shadow-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
        dir="rtl"
      >
        {/* Pink Header with Arrow Icon */}
        <div className="bg-[#f8d3df] h-36 rounded-b-[120px] relative flex items-center justify-center">
          <div className="absolute top-4 right-4 ">
            <button onClick={onClose} className="text-2xl text-gray-700 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-100">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1621 2.32619C13.0301 2.32931 12.9046 2.38454 12.8132 2.47984L8.00002 7.29299L3.18687 2.47984C3.14026 2.43184 3.0845 2.39368 3.02288 2.36763C2.96126 2.34157 2.89504 2.32815 2.82814 2.32814C2.72863 2.32817 2.6314 2.35788 2.54887 2.41348C2.46634 2.46907 2.40228 2.54803 2.36488 2.64024C2.32748 2.73245 2.31844 2.83372 2.33892 2.9311C2.3594 3.02848 2.40846 3.11753 2.47983 3.18687L7.29299 8.00002L2.47983 12.8132C2.43185 12.8592 2.39354 12.9144 2.36715 12.9755C2.34076 13.0366 2.32681 13.1023 2.32614 13.1688C2.32546 13.2353 2.33806 13.3013 2.36321 13.3629C2.38835 13.4245 2.42553 13.4804 2.47257 13.5275C2.51961 13.5745 2.57556 13.6117 2.63715 13.6368C2.69874 13.662 2.76472 13.6746 2.83124 13.6739C2.89776 13.6732 2.96348 13.6593 3.02454 13.6329C3.08561 13.6065 3.14079 13.5682 3.18687 13.5202L8.00002 8.70705L12.8132 13.5202C12.8592 13.5682 12.9144 13.6065 12.9755 13.6329C13.0366 13.6593 13.1023 13.6732 13.1688 13.6739C13.2353 13.6746 13.3013 13.662 13.3629 13.6368C13.4245 13.6117 13.4804 13.5745 13.5275 13.5275C13.5745 13.4804 13.6117 13.4245 13.6368 13.3629C13.662 13.3013 13.6746 13.2353 13.6739 13.1688C13.6732 13.1023 13.6593 13.0366 13.6329 12.9755C13.6065 12.9144 13.5682 12.8592 13.5202 12.8132L8.70705 8.00002L13.5202 3.18687C13.5929 3.11708 13.6428 3.02695 13.6634 2.9283C13.684 2.82965 13.6743 2.72707 13.6356 2.63402C13.5969 2.54097 13.531 2.46179 13.4465 2.40686C13.362 2.35193 13.2629 2.32381 13.1621 2.32619Z" fill="#312651"/>
              </svg>
            </button>
          </div>
          <span className="w-full relative flex items-center justify-center">
            {/* Arrow Icon */}
            <img className="absolute" src="/images/login.svg" alt="" />
            <img className="absolute" src="/images/logB.svg" alt="" />

          </span>
        </div>

        {/* Body */}
        <div className="p-8 pt-6 flex flex-col">
          <h2 className="text-2xl font-bold font-[YekanBakh-Bold] text-[#31204d] mb-7 text-center">تایید شماره</h2>

          <label className="block mb-2 text-right font-[IranSans] text-[#31204d]">شماره همراه</label>
          <div className=" border rounded-lg px-3 py-2 mb-6 text-[#AEA3CC] flex flex-row justify-between items-center 
p-4 gap-2 ">
    <input
              ref={inputRef}
              type="tel"
              dir="ltr"
              placeholder="شماره خود را وارد کنید"
              className="flex-1 outline-none bg-transparent text-right pr-2 placeholder:text-gray-300"
              maxLength="11"
              pattern="[0-9]*"
            />
            <span className="mr-2 w-8 flex-shrink-0 flex items-center justify-center">
              {/* Iran Flag emoji */}
              
            </span>
            <span className=" font-bold font-[IranSans] text-[#AEA3CC]">98+</span>
              <img src="/images/iran.svg" alt="" />
          
          </div>

          <p className="text-center text-[13px] text-[#AEA3CC] mb-4 mt-2 font-[IranSans]">
            <span className="text-sky-500 underline">قوانین  </span>
            <span>و</span>
            <a href="#" className="text-sky-500 underline">حریم خصوصی</a>
            <span> سایت را می پذیرم</span>
          </p>
<div>
          <button onClick={handlePhoneSubmit} className="bg-[#8061D9] w-full text-center font-[IranSans] text-[13px] hover:bg-[#6840c7] text-white py-3 rounded-[8px] font-bold shadow-md transition mt-2">
            تایید و ادامه
          </button>
          
      <Login02
        isOpen={showVerifyModal}
        onClose={() => setShowVerifyModal(false)}
        mobile={mobile}
        onVerify={handleVerify}
      />
      </div>
        </div>
      </div>
    </div>
  );
}
