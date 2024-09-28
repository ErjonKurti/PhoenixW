import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
import AangW from './pages/AangW';
import DarkBatmanW from './pages/DarkBatmanW';
import SSRoseW from './pages/SSRoseW';
import ToriW from './pages/ToriW';
import TrunksW from './pages/TrunksW';
import VinlandSagaW from './pages/VinlandSagaW';
import WarriorAngelW from './pages/WarriorAngelW';
import NarutoW from './pages/NarutoW';
import NarutoPurpleW from './pages/NarutoPurpleW';
import NarutoFury from './pages/NarutoFuryW';
import AmegaW from './pages/AmegaW';
import BmwM3W from './pages/BmwM3W';
import BmwM4W from './pages/BmwM4W';
import BmwNfsW from './pages/BmwNfsW';
import ErenW from './pages/ErenW';
import GwenW from './pages/GwenW';
import HondaW from './pages/HondaW';
import HyundaiW from './pages/HyundaiW';
import IronManW from './pages/IronManW';
import ItachiAloneW from './pages/ItachiAloneW';
import ItachiW from './pages/ItachiW';
import ItachiSharinganW from './pages/ItachiSharinganW';
import SasukeW from './pages/SasukeW';
import SasukeBladeW from './pages/SasukeBladeW';
import SasukeLightW from './pages/SasukeLightW';
import CozyCampW from './pages/CozyCampW';
import DabiW from './pages/DabiW';
import DarkNezukoW from './pages/DarkNezukoW';
import DarkSeeleW from './pages/DarkSeeleW';
import EldenRingW from './pages/EldenRingW';
import ErdTreeW from './pages/ErdTreeW';
import FrostArcherW from './pages/FrostArcherW';
import EldenRing2W from './pages/EldenRing2W';
import Gojo2W from './pages/Gojo2W';
import GojoSatoru2W from './pages/GojoSatoru2W';
import JinArcaneW from './pages/JinArcaneW';
import KaisaW from './pages/KaisaW';
import CodMwW from './pages/CodMwW';
import CodW from './pages/CodW';
import SakuraW from './pages/SakuraW';
import SamuraiW from './pages/SamuraiW';
import TheLastOfUsW from './pages/TheLastOfUsW';
import ValorantW from './pages/ValorantW';
import Preloader from './components/Preloader/Preloader';

function App() {

  const [loading, setLoading] = useState(true); 

  const calculateLoadTime = () => {
    let loadTime = 2200; 

    if (navigator.connection) {
      const connection = navigator.connection;

      if (connection.downlink) {
        const downlink = connection.downlink;
        if (downlink > 5) {
          loadTime = 2200;
        } else if (downlink > 3) {
          loadTime = 3500;
        } else if (downlink > 1) {
          loadTime = 5000;
        } else {
          loadTime = 6000;
        }
      } else if (connection.effectiveType) {
        switch (connection.effectiveType) {
          case '4g':
            loadTime = 2200;
            break;
          case '3g':
            loadTime = 5000;
            break;
          case '2g':
            loadTime = 7000;
            break;
          default:
            loadTime = 6000;
            break;
        }
      }
    }

    return loadTime;
  };

  useEffect(() => {
    const loadTime = calculateLoadTime();

    const timer = setTimeout(() => {
      setLoading(false);
    }, loadTime);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

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
          <Route path='/aang' element={<AangW />} />
          <Route path='/dark-batman' element={<DarkBatmanW />} />
          <Route path="/ss-rose" element={<SSRoseW />} />
          <Route path="/trunks" element={<TrunksW />} />
          <Route path='/vinland-saga' element={<VinlandSagaW />} />
          <Route path='/warrior-angel' element={<WarriorAngelW />} />
          <Route path='/tori' element={<ToriW />} />
          <Route path='/naruto' element={<NarutoW />} />
          <Route path='/naruto-purple' element={<NarutoPurpleW />} />
          <Route path='/naruto-fury' element={<NarutoFury />} />
          <Route path='/bmw-nfs' element={<BmwNfsW />} />
          <Route path="/bmw-m3" element={<BmwM3W />} />
          <Route path="/bmw-m4" element={<BmwM4W />} />
          <Route path='/amega' element={<AmegaW />} />
          <Route path='/eren' element={<ErenW />} />
          <Route path='/gwen' element={<GwenW />} />
          <Route path='/honda' element={<HondaW />} />
          <Route path='/hyundai' element={<HyundaiW />} />
          <Route path='/iron-man' element={<IronManW />} />
          <Route path='/itachi' element={<ItachiW />} />
          <Route path="/itachi-alone" element={<ItachiAloneW />} />
          <Route path="/itachi-sharingan" element={<ItachiSharinganW />} />
          <Route path='/sasuke' element={<SasukeW />} />
          <Route path='/sasuke-blade' element={<SasukeBladeW />} />
          <Route path='/sasuke-light' element={<SasukeLightW />} />
          <Route path="/cozy-camp" element={<CozyCampW />} />
          <Route path="/dabi" element={<DabiW />} />
          <Route path='/dark-nezuko' element={<DarkNezukoW />} />
          <Route path='/dark-seele' element={<DarkSeeleW />} />
          <Route path='/elden-ring' element={<EldenRingW />} />
          <Route path="/elden-ring2" element={<EldenRing2W />} />
          <Route path="/erd-tree" element={<ErdTreeW />} />
          <Route path='/frost-archer' element={<FrostArcherW />} />
          <Route path='/gojo2' element={<Gojo2W />} />
          <Route path='/gojo-satoru2' element={<GojoSatoru2W />} />
          <Route path="/jin-arcane" element={<JinArcaneW />} />
          <Route path="/kaisa" element={<KaisaW />} />
          <Route path='/cod' element={<CodW />} />
          <Route path='/cod-mw' element={<CodMwW />} />
          <Route path='/sakura' element={<SakuraW />} />
          <Route path='/samurai' element={<SamuraiW />} />
          <Route path='/the-last-of-us' element={<TheLastOfUsW />} />
          <Route path='/valorant' element={<ValorantW />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
