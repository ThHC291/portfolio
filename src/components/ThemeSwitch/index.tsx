import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';

const themes = [
  { name: 'Light' },
  { name: 'Dark', },
]

const ThemeSwitch: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className="flex items-center">

      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-1 rounded"
        onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <MdOutlineLightMode size={25} />
          ) : (
            <MdLightMode size={25}/>
          )}
      </button>

    </section>
  );
};

export default ThemeSwitch;