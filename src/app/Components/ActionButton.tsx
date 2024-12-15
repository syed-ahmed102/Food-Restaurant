import React from 'react';
import { Play } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const ShowMoreButton: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-2.5 
        bg-orange-400 
        text-white 
        font-medium 
        rounded-lg 
        hover:bg-orange-500 
        transition-colors 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      Show more
    </button>
  );
};

export const WatchVideoButton: React.FC<ButtonProps> = ({
  onClick,
  className = '',
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-3
        bg-orange-400 
        text-white 
        rounded-full
        hover:bg-orange-500 
        transition-colors
        flex 
        items-center 
        justify-center
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      <Play className="w-5 h-5" />
      <span className="sr-only">Watch video</span>
    </button>
  );
};