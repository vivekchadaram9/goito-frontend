'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const {theme,setTheme} = useTheme()
  const [isDark, setIsDark] = useState(theme==="dark");

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(isDark?"light":"dark")
  };

  return (
    <div className="flex items-center justify-center bg-transparent">
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full transition-colors duration-500 shadow-inner overflow-hidden ${
          isDark ? 'bg-zinc-800' : 'bg-sky-500'
        } cursor-pointer`}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className="absolute top-0 left-0 w-6 h-6 rounded-full bg-white/10 shadow-lg flex items-center justify-center z-10"
          style={{
            left: isDark ? 'calc(100% - 50%)' : '0px',
          }}
        >
          <motion.div
            key={isDark ? 'moon' : 'sun'}
            initial={{ rotate: -90, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-yellow-400 dark:text-zinc-300"
          >
            {isDark ? <Moon size={10} /> : <Sun size={15} />}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/40"
        >
          <Sun size={7} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: !isDark ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute right-2 bottom-1/2 transform translate-y-1/2 text-white/60"
        >
          <Moon size={7} />
        </motion.div>
      </button>
    </div>
  );
}
