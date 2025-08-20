
import React from 'react';
import { cn } from "../lib/utils";

interface CircularButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  activeColor: string;
  inactiveColor: string;
  className?: string;
}

const CircularButton: React.FC<CircularButtonProps> = ({
  active,
  onClick,
  icon,
  label,
  activeColor,
  inactiveColor,
  className,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={onClick}
        className={cn(
          "w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out",
          active ? `${activeColor} animate-glow-pulse` : `${inactiveColor} hover:bg-opacity-80`,
          className
        )}
        aria-label={label}
        role="switch"
        aria-checked={active}
      >
        <div className="text-white">{icon}</div>
      </button>
      <span className={cn(
        "text-sm font-medium transition-colors",
        active ? "text-primary" : "text-muted-foreground"
      )}>
        {label}
      </span>
    </div>
  );
};

export default CircularButton;
