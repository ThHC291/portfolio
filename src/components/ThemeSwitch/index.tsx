import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const themes = [
  { name: 'Light' },
  { name: 'Dark', },
]

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      <select
        name="theme"
        id="theme-select"
        // className="px-3 py-1 text-gray-800 bg-white border border-gray-800 rounded-full"
        onChange={(e) => setTheme(e.currentTarget.value)}
        value={theme}
      >
        {themes.map((t) => (
          <option key={t.name.toLowerCase()} value={t.name.toLowerCase()}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitch;