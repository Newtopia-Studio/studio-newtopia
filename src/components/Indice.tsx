import { useState } from 'react';

export function Indice() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        type="button"
        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-md flex items-center gap-2 border border-slate-700 transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        Índice 
        <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <nav className="indice-menu">
          <ul className="indice-nivel-1">
            
            {/* SECCIÓN ESTUDIO */}
            <li>
              <a 
                href="#estudio" 
                onClick={handleLinkClick}
                className="indice-link indice-link-main"
              >
                Estudio
              </a>
              <ul className="indice-nivel-2">
                <li>
                  <a href="#integrantes" onClick={handleLinkClick} className="indice-link">
                    Integrantes
                  </a>
                </li>
                <li>
                  <a href="#redes" onClick={handleLinkClick} className="indice-link">
                    Redes Sociales
                  </a>
                </li>
              </ul>
            </li>

            {/* SECCIÓN PROYECTOS */}
            <li>
              <a 
                href="#proyectos" 
                onClick={handleLinkClick}
                className="indice-link indice-link-main"
              >
                Proyectos
              </a>
              <ul className="indice-nivel-2">
                <li>
                  <a href="#medievalock" onClick={handleLinkClick} className="indice-link" style={{ fontWeight: 600 }}>
                    Medievalock
                  </a>
                  <ul className="indice-nivel-3">
                    <li>
                      <a href="#medievalock-desc" onClick={handleLinkClick} className="indice-link indice-link-sub">
                        Descripción
                      </a>
                    </li>
                    <li>
                      <a href="#medievalock-img" onClick={handleLinkClick} className="indice-link indice-link-sub">
                        Imágenes
                      </a>
                    </li>
                    <li>
                      <a href="#medievalock-dnlds" onClick={handleLinkClick} className="indice-link indice-link-sub">
                        Descargar
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      )}
    </div>
  );
}
