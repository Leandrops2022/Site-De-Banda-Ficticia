import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';
import Topo from 'components/Topo';
import estiloTopo from 'components/Topo/Topo.module.scss';
import '@fontsource/metal-mania';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Corpo from 'components/Corpo';
import Home from 'pages/Home';
import Sobre from 'pages/Sobre';
import Datas from 'pages/Datas';

library.add(faBars);

export default function AppRouter() {
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
    <main>
      <Router>
        <Topo 
          ativado={ativado}
          setAtivado={setAtivado}
          classe={classe}
        />
        <Routes>
          <Route path={'/'} element={<Corpo />}>
            <Route index element={<Home />} />
            <Route path={'sobre'} element={<Sobre />} />
            <Route path={'datas'} element={<Datas />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}