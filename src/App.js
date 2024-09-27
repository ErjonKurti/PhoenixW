import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import BatmanW from './pages/BatmanW';
import BerserkW from './pages/BerserkW';
import BorutoW from './pages/BorutoW';
import ChosoW from './pages/ChosoW';
import CosmicDreams from './pages/CosmicDreams';
import Frieza from './pages/Frieza';
import GokuVegetaW from './pages/GokuVegetaW';
import GokuW from './pages/GokuW';
import KorraW from './pages/KorraW';
import KratosW from './pages/KratosW';
import NissanGTRW from './pages/NissanGTRW';
import ObitoW from './pages/ObitoW';
import SatoruW from './pages/SatoruW';
import SpidermanW from './pages/SpidermanW';
import SpacePortalW from './pages/SpacePortalW';
import ToyotaSupra from './pages/ToyotaSupra';
import WukongW from './pages/WukongW';

function App() {
  return (
    <div className="app">
      <ToastContainer />
      
      <div className='app-content'>  
        <Routes>
          <Route path='/' element={<BatmanW />} />
          <Route path='/berserk' element={<BerserkW />} />
          <Route path="boruto" element={<BorutoW />} />
          <Route path="/choso" element={<ChosoW />} />
          <Route path='/cosmic-dreams' element={<CosmicDreams />} />
          <Route path='/frieza' element={<Frieza />} />
          <Route path='/goku-vegeta' element={<GokuVegetaW />} />
          <Route path='/goku' element={<GokuW />} />
          <Route path='/korra' element={<KorraW />} />
          <Route path='/kratos' element={<KratosW />} />
          <Route path="/nissan-gtr" element={<NissanGTRW />} />
          <Route path="/obito" element={<ObitoW />} />
          <Route path='/satoru' element={<SatoruW />} />
          <Route path='/spiderman' element={<SpidermanW />} />
          <Route path='/space-portal' element={<SpacePortalW />} />
          <Route path='/toyota-supra' element={<ToyotaSupra />} />
          <Route path='/wukong' element={<WukongW />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
