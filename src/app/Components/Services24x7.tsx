import React from 'react';

interface Services24x7Props {
  className?: string;
  iconSize?: number;
  textClassName?: string;
}

const Services24x7: React.FC<Services24x7Props> = ({
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M4 12h2" />
        <path d="M18 12h2" />
      </svg>
      <span className={`text-base font-medium ${textClassName}`}>
        24/7 services
      </span>
    </div>
  );
};

export default Services24x7;