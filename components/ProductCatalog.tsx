import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

const ProductCatalog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState(350);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  
  const pdfBaseUrl = "https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy.pdf";
  
  const catalogImages = [
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/5-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/6-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/7-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/8-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/9.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/10.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/11.png"
  ];

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 48, 800));
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const totalItems = catalogImages.length;

  const nextSlide = () => {
    if (totalItems > 0) {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }
  };

  const prevSlide = () => {
    if (totalItems > 0) {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }
  };

  return (
    <section id="catálogo" className="py-24 bg-[#f5f2ed] overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4 block">Nossa Coleção</span>
          <h2 className="text-5xl serif mb-6">Modelos do Catálogo</h2>
          <div className="w-20 h-[1px] bg-[#E6B7B2] mx-auto mb-6"></div>
        </div>

        <div className="relative group max-w-5xl mx-auto flex flex-col items-center">
          
          <div className="relative w-full flex justify-center items-center min-h-[600px]">
            {/* Navigation Buttons */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 hover:bg-[#E6B7B2] hover:text-white transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            
            <button 
                onClick={nextSlide}
                className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 hover:bg-[#E6B7B2] hover:text-white transition-all"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Content */}
            <div className="bg-white p-2 rounded-lg shadow-xl transition-all duration-300">
                 <div className="overflow-hidden rounded flex flex-col items-center relative group">
                    <div className="relative">
                      <img 
                          src={catalogImages[currentIndex]} 
                          alt={`Modelo ${currentIndex + 1}`}
                          style={{ width: pageWidth }}
                          className="object-cover h-auto cursor-zoom-in"
                          referrerPolicy="no-referrer"
                          onClick={() => setIsZoomOpen(true)}
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsZoomOpen(true);
                        }}
                        className="absolute top-4 right-4 bg-white/90 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-[#E6B7B2] hover:text-white shadow-lg"
                        aria-label="Zoom image"
                      >
                        <ZoomIn size={20} />
                      </button>
                    </div>
                    <div className="p-4 text-center border-t border-gray-100 w-full">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Imagem {currentIndex + 1} de {totalItems}</span>
                    </div>
                 </div>
            </div>
          </div>
          
        </div>

        <div className="mt-16 text-center">
          <a 
            href={pdfBaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-12 py-5 text-[11px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-lg"
          >
            Baixar Catálogo Completo
          </a>
        </div>
      </div>

      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsZoomOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsZoomOpen(false)}
          >
            <X size={40} />
          </button>
          <img 
            src={catalogImages[currentIndex]} 
            alt={`Zoomed Modelo ${currentIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};

export default ProductCatalog;
