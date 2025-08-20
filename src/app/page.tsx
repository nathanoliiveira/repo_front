"use client";
import useWebSocket from "react-use-websocket";
import ControlPanel from "./components/ControlPanel";
import Visualizer from "./components/Vizualizer"; // opcional, se quiser manter efeito visual

export default function Home() {
  const { sendMessage, readyState } = useWebSocket("ws://192.168.225.246:8888", {
    onOpen: () => console.log("WebSocket conectado", readyState),
    onClose: () => console.log("WebSocket desconectado"),
    onError: (event) => console.error("Erro no WebSocket:", event),
    shouldReconnect: () => true,
  });

  // Apenas envia comandos, não mantém estado
  const sendCommand = (command: string) => {
    sendMessage(JSON.stringify({ command }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-lg bg-black rounded-xl shadow-xl p-6 space-y-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white">R.E.P.O. Control</h1>

        {/* Você pode manter o visualizer, mas sem status real */}
        <Visualizer lightOn={false} movementOn={false} mouthOpen={false} />

        <ControlPanel
          lightOn={false}
          movementOn={false}
          mouthOpen={false}
          toggleLight={() => sendCommand("toggleLight")}
          toggleMovement={() => sendCommand("toggleMovement")}
          toggleMouth={() => sendCommand("toggleMouth")}
        />

        <div className="mt-8 text-center text-sm text-gray-400">
          {/* <p>Comandos enviados diretamente. Nenhum estado é mantido.</p> */}
        </div>
      </div>
    </div>
  );
}