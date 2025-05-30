import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import useTheme from "./hooks/useTheme";

function App() {
  const [isDark, setIsDark] = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500 min-h-screen">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main className="max-w-screen-lg mx-auto px-4">
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;