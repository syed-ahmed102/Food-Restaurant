import React from 'react';

interface QualityMaintainProps {
  className?: string;
  iconSize?: number;
  textClassName?: string;
}

const QualityMaintain: React.FC<QualityMaintainProps> = ({
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
        <path d="M2 20h20" />
        <path d="M5 20V8h3v12" />
        <path d="M10 20V4h4v16" />
        <path d="M16 20v-4h3v4" />
        <path d="M3 20l9-12" />
      </svg>
      <span className={`text-base font-medium ${textClassName}`}>
        Quality maintain
      </span>
    </div>
  );
};

export default QualityMaintain;