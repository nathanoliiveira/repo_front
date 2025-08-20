import React from "react";
import { cn } from "../lib/utils";

interface VisualizerProps {
  lightOn: boolean;
  movementOn: boolean;
  mouthOpen: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({
  lightOn,
  movementOn,
  mouthOpen,
}) => {
  return (
    <div className="relative w-full max-w-md h-64 mx-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden flex items-center justify-center mb-8">
      <div className="robot-face flex flex-col items-center justify-center">
        {/* Robot eyes */}
        <div className="eyes flex space-x-8 mb-4">
          <div
            className={cn(
              "w-5 h-5 rounded-full",
              lightOn ? "bg-yellow-400 animate-glow-pulse" : "bg-gray-600"
            )}
          ></div>
          <div
            className={cn(
              "w-5 h-5 rounded-full",
              lightOn ? "bg-yellow-400 animate-glow-pulse" : "bg-gray-600"
            )}
          ></div>
        </div>

        {/* Robot mouth */}
        <div
          className={cn(
            "w-16 h-4 bg-gray-600 rounded-lg transition-all duration-300",
            mouthOpen ? "h-8 rounded-full" : "h-2"
          )}
        ></div>

        {/* Robot arms */}
        <div className="arms flex space-x-20 mt-12">
          <div
            className={cn(
              "w-4 h-16 bg-gray-500 rounded-full origin-top transform transition-transform duration-500",
              // movementOn ? "animate-wave-arm-left" : ""
            )}
            style={{
              transformOrigin: 'top',
              background: movementOn ? 'red' : '',
              animation: movementOn ? 'native-wave-left 1.5s ease-in-out infinite' : 'none'
            }}
          ></div>
          <div
            className={cn(
              "w-4 h-16 bg-gray-500 rounded-full origin-top transform transition-transform duration-500",
              movementOn ? "animate-wave-arm-right" : ""
            )}
            style={{
              transformOrigin: 'top',
              background: movementOn ? 'red' : '',
              animation: movementOn ? 'native-wave-right 1.5s ease-in-out infinite' : 'none'
            }}
          ></div>
        </div>
      </div>

      {lightOn && (
        <div className="absolute inset-0 bg-yellow-500/10 pointer-events-none" />
      )}
    </div>
  );
};

export default Visualizer;
