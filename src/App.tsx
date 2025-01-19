import "./App.css";
import "./index.css"
import { NetworkStatus } from "./components/sys/networkstatus";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from "./context/AuthContext";
import { LoginForm } from "./components/login-form";

function App() {

  return (
    <main className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      {/* <NetworkStatus /> */}
      <LoginForm />
     
    </main>
  );
}

export default App;
