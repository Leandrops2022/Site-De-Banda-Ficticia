import 'normalize.css';
import style from './App.module.scss';
import Topo from '../components/Topo';
import Corpo from '../components/Corpo';
import '@fontsource/metal-mania';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import estiloTopo from '../components/Topo/Topo.module.scss';

library.add(faBars);

function App() {
  const [ativado, setAtivado] = useState(false);
  const [classe, setClasse] = useState(estiloTopo.topo);

  useEffect(()=>{
    if(ativado){
      setClasse(estiloTopo.topoCompleto);
    }else {
      setClasse(estiloTopo.topo);
    }
  },[ativado]);

  return (
    <div className={style.App}>
      <Topo 
        ativado={ativado}
        setAtivado={setAtivado}
        classe={classe}
      />
      <Corpo />
    </div>
  );
}

export default App;
