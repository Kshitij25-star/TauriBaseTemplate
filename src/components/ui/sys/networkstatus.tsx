import { listen } from '@tauri-apps/api/event';
import { useEffect, useState } from 'react';

interface NetworkStatus {
  is_connected: boolean;
}

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Listen for 'network-status' events from the backend
    const unlisten = listen<NetworkStatus>('network-status', (event) => {
      setIsOnline(event.payload.is_connected);
    });

    // Cleanup listener on component unmount
    return () => {
      unlisten.then((fn) => fn());
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-8 h-8 rounded-full border-2 ${
          isOnline ? 'bg-green-500 border-green-700' : 'bg-red-500 border-red-700'
        }`}
      />
    </div>
  );
}
