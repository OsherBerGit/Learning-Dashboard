import { useAppContext } from '../context/AppContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <button onClick={toggleTheme} className="theme-toggle" title="Toggle theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};