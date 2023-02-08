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
import Contato from 'pages/Contato';
import Turnes from 'pages/Turnes';
import Galeria from 'pages/Galeria';

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
          <Route path={'/'} element={<Corpo  setAtivado={setAtivado} />}>
            <Route index element={<Home />} />
            <Route path={'contato'} element={<Contato />} />
            <Route path={'turnes'} element={<Turnes />} />
            <Route path={'datas'} element={<Datas />} />
            <Route path={'galeria'} element={<Galeria />} />
            <Route path={'sobre'} element={<Sobre />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}