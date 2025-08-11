import React from "react";

export default function LoginWarningModal({ show, onClose, onLogin }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div
        className="bg-[#322154] rounded-2xl p-8 w-full max-w-xl mx-4 shadow-lg text-center"
        style={{ borderRadius: "32px" }}
      >
        <div className="flex items-center justify-center gap-2 mb-4 font-[YekanBakh-Bold]">
          <img src="/images/info.svg" alt="" />
          <span className="text-white font-bold text-[24px]">اخطار ورود</span>
        </div>
        <p className="text-[#AEA3CC] mb-8 text-[13px] font-[IranSans]">
          برای خرید دوره ابتدا باید وارد حساب کاربری خود شوید
        </p>
        <div className="w-full flex flex-row-reverse gap-4 justify-center text-[#F2EEFC]">
          <button
            className="border border-[#C6B8F7]  rounded-xl px-8 py-3 w-[25%] font-[IranSans] text-[13px] hover:bg-[#493687]"
            onClick={onClose}
          >
            لغو
          </button>
            <button
            className="bg-[#8252EF]  rounded-xl px-8 py-3 font-[IranSans] text-[13px] w-[70%] hover:bg-[#a884ff] transition-colors"
            onClick={onLogin}
          >
            ورود به حساب
          </button>
        </div>
      </div>
    </div>
  );
}
