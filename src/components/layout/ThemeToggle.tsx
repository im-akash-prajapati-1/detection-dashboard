import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border rounded px-3 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
