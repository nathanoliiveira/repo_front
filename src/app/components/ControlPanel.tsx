import React, { useState } from "react";
import { sla } from "./teste";

const IP_ESP32 = "http://192.168.225.111"; // Substitua pelo IP do seu ESP32

const ControlPanel: React.FC = () => {
  const [lightOn, setLightOn] = useState(false);
  const [movementOn, setMovementOn] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);

  const handleLight = async () => {
    try {
      sla()
      await fetch(`${IP_ESP32}/olhos`);
      setLightOn(true);
      setTimeout(() => setLightOn(false), 1500);
    } catch (err) {
      console.error("Erro ao acender olhos:", err);
    }
  };

  const handleMovement = async () => {
    try {
      await fetch(`${IP_ESP32}/bracos`);
      setMovementOn(true);
      setTimeout(() => setMovementOn(false), 3000);
    } catch (err) {
      console.error("Erro ao mover braços:", err);
    }
  };

  const handleMouth = async () => {
    try {
      await fetch(`${IP_ESP32}/boca`);
      setMouthOpen(true);
      setTimeout(() => setMouthOpen(false), 1500);
    } catch (err) {
      console.error("Erro ao abrir boca:", err);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full max-w-md mx-auto">
      <div className="grid grid-cols-2 gap-6 w-full">
        {/* Mexer braços */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleMovement}
            className={`w-24 h-24 rounded-xl bg-gradient-to-b from-red-600 to-purple-800 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity ${movementOn ? "ring-4 ring-purple-500" : ""
              }`}
            aria-pressed={movementOn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 11v5a2 2 0 0 0 4 0v-2a2 2 0 1 0 4 0v-5" />
              <path d="M22 7s-2-1-4-1-4 1-6 1-4-1-6-1-4 1-4 1" />
            </svg>
          </button>
          <div className="mt-2 text-center">
            <div className="font-bold text-red-600">Mexer braços</div>
            <div className="text-xs text-gray-600">
              Faz o R.E.P.O. mexer os braços simultaneamente
            </div>
          </div>
        </div>

        {/* Abrir a boca */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleMouth}
            className={`w-24 h-24 rounded-xl bg-gradient-to-b from-red-600 to-purple-800 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity ${mouthOpen ? "ring-4 ring-purple-500" : ""
              }`}
            aria-pressed={mouthOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </button>
          <div className="mt-2 text-center">
            <div className="font-bold text-red-600">Abrir a boca</div>
            <div className="text-xs text-gray-600">
              Faz o R.E.P.O abrir e fechar a boca
            </div>
          </div>
        </div>
      </div>

      {/* Acender olho */}
      <div className="flex flex-col items-center mt-2">
        <button
          onClick={handleLight} 
          className={`w-24 h-24 rounded-xl bg-gradient-to-b from-red-600 to-purple-800 flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity ${lightOn ? "ring-4 ring-purple-500" : ""
            }`}
          aria-pressed={lightOn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>
        <div className="mt-2 text-center">
          <div className="font-bold text-red-600">Acender olho</div>
          <div className="text-xs text-gray-600">
            Faz os LEDs dos olhos do R.E.P.O. acenderem
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
