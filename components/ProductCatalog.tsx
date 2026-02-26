import React, { useState, useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ProductCatalog: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pdfBaseUrl = "https://charmylingerie.com.br/wp-content/uploads/2026/02/Catalogo-Fitness-Charmy.pdf";
  const pdfUrl = "https://corsproxy.io/?" + encodeURIComponent(pdfBaseUrl);
  const extraImages = [
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/5-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/6-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/7-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/8-1.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/9.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/10.png",
    "https://charmylingerie.com.br/wp-content/uploads/2026/02/11.png"
  ];

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section id="catálogo" className="py-24 bg-[#f5f2ed] overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4 block">Nossa Coleção</span>
          <h2 className="text-5xl serif mb-6">Modelos do Catálogo</h2>
          <div className="w-20 h-[1px] bg-[#E6B7B2] mx-auto mb-6"></div>
          <p className="text-gray-500 italic">Role para ver todos os modelos.</p>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 hover:bg-[#E6B7B2] hover:text-white transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 hover:bg-[#E6B7B2] hover:text-white transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-8 snap-x snap-mandatory items-center w-max mx-auto px-4">
              <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={null}
                error={null}
                className="flex gap-8 shrink-0"
              >
                {numPages > 0 && Array.from(new Array(numPages), (el, index) => (
                  <div key={`page_${index + 1}`} className="min-w-[300px] md:min-w-[350px] bg-white shadow-xl rounded-lg overflow-hidden snap-center flex-shrink-0">
                    <Page 
                      pageNumber={index + 1} 
                      width={350} 
                      renderAnnotationLayer={false} 
                      renderTextLayer={false}
                      className="w-full h-auto"
                    />
                    <div className="p-4 text-center border-t border-gray-100">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">Página {index + 1}</span>
                    </div>
                  </div>
                ))}
              </Document>
              
              {/* Extra Images */}
              {extraImages.map((imgUrl, index) => (
                <div key={`extra_img_${index}`} className="min-w-[300px] md:min-w-[800px] bg-white shadow-xl rounded-lg overflow-hidden snap-center flex-shrink-0 flex flex-col">
                  <div className="relative w-full md:w-[800px] md:h-[565px] bg-gray-50 flex items-center justify-center">
                    <img 
                      src={imgUrl} 
                      alt={`Modelo ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
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
    </section>
  );
};

export default ProductCatalog;
