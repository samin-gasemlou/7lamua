export default function CourseInfo() {
  const sections = [
    {
      title: "چرا باید ما را انتخاب کنید؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است..."
    },
    {
      title: "دوره های هفت مرحله ای چیست؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است..."
    },
    {
      title: "ساختار دوره چگونه است؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است..."
    },
    {
      title: "در این دوره چه یاد می‌گیرید؟",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است..."
    }
  ];

  return (
    <div dir="rtl" className="w-[95%] mx-auto p-6 space-y-6 leading-8">
      <p className="text-[#312651] IranSans text-[13px]">
        اگر یکی از زنان هستید که مسیر ۷ مرحله شکوفایی زنانه را تجربه کرده اید...
      </p>

      {sections.map((section, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-purple-600 text-3xl leading-none">•</span>
            <h2 className=" text-[#312651] font-[700] text-[18px] font-[YekanBakh-Regular]">{section.title}</h2>
          </div>
          <p className="text-[#312651] IranSans text-[13px]">{section.text}</p>
        </div>
      ))}
    </div>
  );
}
