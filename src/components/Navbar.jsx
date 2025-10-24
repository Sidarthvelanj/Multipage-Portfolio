import { Moon, Sun, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  return (
    <nav className="sticky top-0 z-50 bg-orange-700 text-white shadow transition">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <h1 className="text-xl sm:text-2xl font-bold">Sidarth's Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:underline underline-offset-4 hover:text-white transition duration-200"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 p-2 rounded-full border bg-white"
          >
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-black" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded bg-white text-black"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 bg-orange-700 text-white">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/projects' },
            { label: 'Contact', href: '/contact' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block hover:underline underline-offset-4 hover:text-white transition duration-200"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 p-2 rounded-full border bg-white"
          >
            {isDark ? <Sun className="text-yellow-400" /> : <Moon className="text-black" />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
