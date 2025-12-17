import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-14 flex items-center px-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b">
      <div className="font-bold text-indigo-600 mr-8">VoiceGuard</div>

      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-3 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition
             ${
               isActive
                 ? "bg-indigo-600 text-white"
                 : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
             }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `px-3 py-1 rounded-md transition
             ${
               isActive
                 ? "bg-indigo-600 text-white"
                 : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
             }`
          }
        >
          History
        </NavLink>
      </nav>

      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
