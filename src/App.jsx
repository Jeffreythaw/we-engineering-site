import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import AppRoutes from "./AppRoutes";
import useTheme from "./hooks/useTheme";

function App() {
  const [isDark, setIsDark] = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.12),transparent_24%)]" />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main className="relative z-10 w-full">
          <AppRoutes />
        </main>
      </Router>
    </div>
  );
}

export default App;
