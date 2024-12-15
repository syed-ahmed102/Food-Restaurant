import React from 'react';

interface FreshFoodIconProps {
  className?: string;
  iconSize?: number;
  textClassName?: string;
}

const FreshFoodIcon: React.FC<FreshFoodIconProps> = ({
  className = '',
  iconSize = 24,
  textClassName = ''
}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M3 12h18" />
        <path d="M3 18h18" />
        <path d="M3 6h18" />
        <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
        <path d="M3 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2" />
      </svg>
      <span className={`text-base font-medium ${textClassName}`}>
        Fresh food
      </span>
    </div>
  );
};

export default FreshFoodIcon;