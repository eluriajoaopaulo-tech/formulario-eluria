import React from "react";
import { cn } from "../lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

import logo from "../assets/logo.png";

export const Logo: React.FC<LogoProps> = ({ className, showText = true }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-4", className)}>
      <img 
        src={logo} 
        alt="Eluria Logo" 
        className="w-20 h-20 object-contain"
      />
      {showText && (
        <span className="text-3xl font-bold tracking-[0.2em] text-white uppercase font-sans">
          ELURIA
        </span>
      )}
    </div>
  );
};
