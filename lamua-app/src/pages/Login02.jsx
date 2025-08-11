import React, { useState, useEffect } from "react";

export default function Login02({ isOpen, onClose, mobile, onVerify }) {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(150);

  useEffect(() => {
    if (!isOpen) return;
    setTimer(150);
    const interval = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[1000] flex items-center justify-center">
      <div className="relative bg-white rounded-[32px] h-[550px] w-[420px] max-w-[95%] px-8 pb-8 text-center shadow-lg">
       {/* Pink Header with Arrow Icon */}
<div className="bg-[#f8d3df] h-36 rounded-b-[120px] relative flex items-center justify-center">
  {/* Arrow Images */}
  <span className="w-full relative flex items-center justify-center">
    <img className="absolute" src="/images/login.svg" alt="Login Icon" />
    <img className="absolute" src="/images/logB.svg" alt="Background Icon" />
  </span>
</div>

        {/* Title */}
        <h2 className="mt-9 mb-3 text-center text-[32px] font-bold font-[YekanBakh-Bold] text-[#251b43]">
          تایید شماره
        </h2>

        {/* Description */}
        <div className="text-[13px] text-[#AEA3CC] mb-2">
          کد تاییدی که به شماره زیر ارسال شد را وارد کنید
          <br />
          <span className="text-gray-500 tracking-wider ltr">{mobile}</span>
        </div>

        {/* Input code */}
        <input
          type="text"
          value={code}
          placeholder="کد تایید"
          onChange={(e) => setCode(e.target.value)}
          dir="ltr"
          maxLength={5}
          className="mt-8 mb-2 w-full h-[45px] text-[#D5CFE6]  rounded-[16px] border border-gray-300 text-[13px] font-[IranSans] text-right outline-none px-2"
        />

        {/* Timer */}
        <div className="text-[#b1b3be] text-[15px] mb-6">
          ارسال مجدد کد در{" "}
          {timer > 0 ? (
            <>
              {timer} ثانیه دیگر
            </>
          ) : (
            <button
              className="bg-none border-none text-[#6c63ff] cursor-pointer"
              onClick={() => setTimer(150)}
            >
              ارسال مجدد
            </button>
          )}
        </div>

        {/* Privacy / Terms */}
        <div className="text-[15px] text-[#b1b3be] mb-6">
          <a
            href="/terms"
            className="text-[#2ad2fa] underline decoration-solid"
          >
            قوانین
          </a>{" "}
          و{" "}
          <a
            href="/privacy"
            className="text-[#2ad2fa] underline decoration-solid"
          >
            حریم خصوصی
          </a>{" "}
          سایت را می‌پذیرم
        </div>

        {/* Confirm button */}
        <button
          onClick={() => onVerify(code)}
          disabled={code.length < 4}
          className={`w-full rounded-[12px] text-white text-center text-[13px] py-3 font-[IranSans] shadow-md mt-1 transition-all ${
            code.length < 4
              ? "bg-[#8061D9] cursor-not-allowed"
              : "bg-[#8a70d6] hover:bg-[#7a60c6] cursor-pointer"
          }`}
        >
          تایید و ادامه
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[22px] text-[#b1b3be] hover:text-gray-500 bg-white flex items-center justify-center  rounded-full w-8 h-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1621 2.32619C13.0301 2.32931 12.9046 2.38454 12.8132 2.47984L8.00002 7.29299L3.18687 2.47984C3.14026 2.43184 3.0845 2.39368 3.02288 2.36763C2.96126 2.34157 2.89504 2.32815 2.82814 2.32814C2.72863 2.32817 2.6314 2.35788 2.54887 2.41348C2.46634 2.46907 2.40228 2.54803 2.36488 2.64024C2.32748 2.73245 2.31844 2.83372 2.33892 2.9311C2.3594 3.02848 2.40846 3.11753 2.47983 3.18687L7.29299 8.00002L2.47983 12.8132C2.43185 12.8592 2.39354 12.9144 2.36715 12.9755C2.34076 13.0366 2.32681 13.1023 2.32614 13.1688C2.32546 13.2353 2.33806 13.3013 2.36321 13.3629C2.38835 13.4245 2.42553 13.4804 2.47257 13.5275C2.51961 13.5745 2.57556 13.6117 2.63715 13.6368C2.69874 13.662 2.76472 13.6746 2.83124 13.6739C2.89776 13.6732 2.96348 13.6593 3.02454 13.6329C3.08561 13.6065 3.14079 13.5682 3.18687 13.5202L8.00002 8.70705L12.8132 13.5202C12.8592 13.5682 12.9144 13.6065 12.9755 13.6329C13.0366 13.6593 13.1023 13.6732 13.1688 13.6739C13.2353 13.6746 13.3013 13.662 13.3629 13.6368C13.4245 13.6117 13.4804 13.5745 13.5275 13.5275C13.5745 13.4804 13.6117 13.4245 13.6368 13.3629C13.662 13.3013 13.6746 13.2353 13.6739 13.1688C13.6732 13.1023 13.6593 13.0366 13.6329 12.9755C13.6065 12.9144 13.5682 12.8592 13.5202 12.8132L8.70705 8.00002L13.5202 3.18687C13.5929 3.11708 13.6428 3.02695 13.6634 2.9283C13.684 2.82965 13.6743 2.72707 13.6356 2.63402C13.5969 2.54097 13.531 2.46179 13.4465 2.40686C13.362 2.35193 13.2629 2.32381 13.1621 2.32619Z" fill="#312651"/>
              </svg>
        </button>
      </div>
    </div>
  );
}
