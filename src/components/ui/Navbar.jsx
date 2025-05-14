
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillHome,AiFillQuestionCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from './ThemeTogggle';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ height: 80 }}
      animate={{ width: isScrolled ? "30%" : "100%" }}
      transition={{ type: 'spring', stiffness: 200, damping: 30, }}
      className="fixed top-5 left-0 md:right-0 mx-auto w-full drop-shadow-xl z-50 px-6 flex items-center justify-between bg-rgba(0,0,0,0.5) rounded-sm transform-none backdrop-blur-xs shadow-sm shadow-black-500/50"
    >
      <motion.div
        animate={{ scale: isScrolled ? 0.8 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="text-xl font-bold"
      >
        <p>Goito</p>
      </motion.div>
      <motion.div className="space-x-7 flex-row flex justify-center items-center" animate={{ scale: isScrolled ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 50 }}>
        <Link href="/">{isScrolled ? <AiFillHome /> : "Home"}</Link>
        <Link href="/about">{isScrolled ? <AiFillQuestionCircle /> : "About"}</Link>
        <Link href="/cart">{isScrolled ? <FaShoppingCart />: "Cart"}</Link>
        
      </motion.div>
      <ThemeToggle />
    </motion.nav>
  );
};

export default Navbar;
