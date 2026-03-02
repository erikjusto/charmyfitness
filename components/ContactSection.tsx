import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Globe, MessageCircle, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#1a1a1a] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-20 text-white">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#E6B7B2] mb-6 block">Vamos Conversar</span>
            <h2 className="text-5xl serif mb-10 leading-tight">Pronta para elevar <br />sua marca?</h2>
            
            <div className="space-y-8 mb-12">
              <a 
                href="https://charmylingerie.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all">
                  <Globe size={20} className="group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Website</p>
                  <p className="text-lg">charmylingerie.com.br</p>
                </div>
              </a>

              <a 
                href="https://instagram.com/charmy_lingerieprivatelabel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all">
                  <Instagram size={20} className="group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Instagram</p>
                  <p className="text-lg">@charmy_lingerieprivatelabel</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5535997301868?text=Ol%C3%A1!%20entrei%20em%20seu%20site%20Charmy%20Lingerie,%20quero%20saber%20mais%20sobre%20private%20label%20Fitness"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E6B7B2] group-hover:border-[#E6B7B2] transition-all">
                  <MessageCircle size={20} className="group-hover:text-black transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">WhatsApp - Alessandra</p>
                  <p className="text-lg">(35) 99730-1868</p>
                </div>
              </a>
            </div>

            <a 
              href="https://wa.me/5535997301868?text=Ol%C3%A1!%20entrei%20em%20seu%20site%20Charmy%20Lingerie,%20quero%20saber%20mais%20sobre%20private%20label%20Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#E6B7B2] text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-all group"
            >
              Entre em contato agora
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right group-hover:translate-x-2 transition-transform" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://charmylingerie.com.br/wp-content/uploads/2026/03/Black-and-White-Modern-Gym-Presentation.webp" 
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover object-right"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
