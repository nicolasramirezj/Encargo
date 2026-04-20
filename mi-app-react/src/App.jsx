import { useState } from 'react';
import './App.css';

function App() {
  const [temaOscuro, setTemaOscuro] = useState(false);

  const cambiarTema = () => {
    setTemaOscuro(!temaOscuro);
  };

  return (

    <div className={`contenedor-principal ${temaOscuro ? 'modo-oscuro' : 'modo-claro'}`}>
      
      <div className="tarjeta">
        
         <div className="contenido-tarjeta">
         
          <p>
            Apretar el botón
          </p>
          
          <button className="boton-tema" onClick={cambiarTema}>
       
            {temaOscuro ? ' Cambiar a modo claro' : ' Cambiar a modo oscuro'}
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;