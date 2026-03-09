import type { ReactNode } from "react";
import { cn } from "../../lib/utils"; // optional if you're using clsx/classnames

interface IconButtonProps {
  label: string;
  icon?: ReactNode | null;
  onClick?: () => void;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "submit" | "reset"; // ✅ added button type
}

const IconButton = ({
  label,
  icon,
  onClick,
  iconPosition = "left",
  className = "",
  type = "button", // ✅ default to "button"
}: IconButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 bg-[#FA773A] justify-center cursor-pointer text-white px-4 py-2 rounded-md hover:bg-[#FA773A]/80 transition-colors",
        className
      )}
    >
      {iconPosition === "left" && icon}
      <span>{label}</span>
      {iconPosition === "right" && icon}
    </button>
  );
};

export default IconButton;
