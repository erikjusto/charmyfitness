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

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">WhatsApp - Alessandra</p>
                  <p className="text-lg">(35) 99730-1868</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#E6B7B2] text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-white transition-all group">
              Fazer Pedido Agora
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="md:w-1/2 relative min-h-[400px]">
            <img 
              src="https://charmylingerie.com.br/wp-content/uploads/2026/02/AQN5yUQkpLOQV7znvQXxg13SUCNxB4BLF6aHteJ46ZPyVLPAtIGdZw8gEM60I7qm7XwBGUnDEFPK_LMGpFJ-oiQhk3zA8_g7WgRcSq06npj8i5hwtteAkdOJALQF_iLQn-AUW1RHJ0p8EtttgVTvV33PkBYGiQ.jpeg" 
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-12 right-12 text-right">
              <div className="serif text-white text-4xl mb-2">Charmy</div>
              <div className="text-white/50 text-[10px] uppercase tracking-[0.4em]">Indústria de Moda Íntima</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
