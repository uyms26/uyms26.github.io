import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Kayıt from "./pages/Kayıt";
import BildiriCagrisi from "./pages/BildiriCagrisi";
import BildiriGonderimi from "./pages/BildiriGonderimi";
import OrganizasyonKomitesi from "./pages/OrganizasyonKomitesi";
import ProgramKomitesi from "./pages/ProgramKomitesi";
import YonlendirmeKomitesi from "./pages/YonlendirmeKomitesi";
import Ulasim from "./pages/Ulasim";
import Konaklama from "./pages/Konaklama";
import MuglaHakkinda from "./pages/MuglaHakkinda";
import Program from "./pages/Program";
import DavetliKonusmacilar from "./pages/DavetliKonusmacilar";
import Anasayfa from "./pages/Anasayfa";
import Iletisim from "./pages/Iletisim";
import Tarihce from "./pages/Tarihce";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/kayit" element={<Kayıt />} />
        <Route path="/bildiri-cagrisi" element={<BildiriCagrisi />} />
        <Route path="/bildiri-gonderimi" element={<BildiriGonderimi />} />
        <Route path="/sempozyum-programi" element={<Program />} />
        <Route path="/davetli-konusmacilar" element={<DavetliKonusmacilar />} />
        <Route path="/organizasyon-komitesi" element={<OrganizasyonKomitesi />} />
        <Route path="/program-komitesi" element={<ProgramKomitesi />} />
        <Route path="/yonlendirme-komitesi" element={<YonlendirmeKomitesi />} />
        <Route path="/ulasim" element={<Ulasim />} />
        <Route path="/konaklama" element={<Konaklama />} />
        <Route path="/mugla-hakkinda" element={<MuglaHakkinda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/tarihce" element={<Tarihce />} />
        {/* Diğer sayfalar için Route ekleyebilirsiniz */}
        <Route path="/" element={<Anasayfa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
