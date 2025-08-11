import { Link } from "react-router-dom";
export default function BlogCard({id, image, title, description }) {
  return (
     <Link to={`/SingleBlog/${id}`}>
    <div className="bg-[#F2EEFC] md:w-[221px] w-[170px] h-[281px] text-center shadow rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-[#F2EEFC]">
        <h3 className="text-[#312651] font-[IranSans] font-bold leading-[20px] text-[13px] mb-2">{title}</h3>
        <p className="text-[11px] text-[#AEA3CC] leading-relaxed font-[IranSans]">{description}</p>
      </div>
    </div>
    </Link>
  );
}