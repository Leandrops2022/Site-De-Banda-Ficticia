import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from 'components/Topo';
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
import Footer from 'components/Footer';

library.add(faBars);

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Topo />
        <Routes>
          <Route path={'/'} element={<Corpo />}>
            <Route index element={<Home />} />
            <Route path={'contato'} element={<Contato />} />
            <Route path={'turnes'} element={<Turnes />} />
            <Route path={'datas'} element={<Datas />} />
            <Route path={'galeria'} element={<Galeria />} />
            <Route path={'sobre'} element={<Sobre />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}