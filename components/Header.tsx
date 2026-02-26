import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#cd392b] backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="https://charmylingerie.com.br/wp-content/uploads/2026/01/logo-charmy.png#1938" 
            alt="Charmy Logo" 
            className="h-10 object-contain brightness-0 invert"
            referrerPolicy="no-referrer"
          />
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 mt-1">Fitness</span>
        </div>

        <nav className="hidden md:flex space-x-12">
          {['Início', 'Propósito', 'Private Label', 'Catálogo', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#cd392b] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {['Início', 'Propósito', 'Private Label', 'Catálogo', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                  className="text-[11px] uppercase tracking-[0.2em] hover:text-white/70 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
