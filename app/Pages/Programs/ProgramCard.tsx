import React from "react";
import IconButton from "../../components/IconButton";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  logo: string;
  company?: string;
  title: string;
  description: string;
  discountPrice: number;
  oldPrice: number;
  buttonText?: string;
  onApply?: () => void;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  logo,
  title,
  description,
  discountPrice,
  oldPrice,
  buttonText = "Apply Now",
  onApply,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center 
      bg-white/30 backdrop-blur-md border border-gray-200 
      rounded-2xl shadow-md p-4 transition-all duration-300
      hover:shadow-lg hover:bg-white/40 max-w-3xl mx-auto">
      
      {/* Left Section */}
      <div className="flex flex-col items-center sm:items-start justify-between 
        w-full sm:w-[40%] px-4 sm:px-6 py-4 border-b sm:border-b-0 border-gray-200 text-center sm:text-left">
        <img src={logo} alt="Program Logo" className="w-36 " />
        <div className="text-2xl mt-2">
          <span className="text-orange-500 font-bold">${discountPrice}</span>
          <span className="text-gray-400 line-through ml-2 text-base">${oldPrice}</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full sm:w-[60%] gap-3 px-4 sm:px-6 py-4">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {description}
          </p>
        </div>
        <IconButton
          label={buttonText}
          icon={<ArrowRight size={18} />}
          iconPosition="right"
          className="max-w-fit mt-1"
          onClick={onApply}
        />
      </div>
    </div>
  );
};

export default ProgramCard;