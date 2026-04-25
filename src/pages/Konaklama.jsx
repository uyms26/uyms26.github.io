import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
});

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41],
});

const hotelData = [
  {
    id: 1,
    name: "Muğla Sıtkı Koçman Üniversitesi Akyaka Uygulama Oteli",
    location: "Akyaka, Muğla",
    badge: "🏖️ Akyaka",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    cardBorder: "border-cyan-400",
    headerGradient: "from-cyan-500 to-teal-600",
    url: "https://sksd.mu.edu.tr/tr/msku-akyaka-uygulama-oteli-9696",
    specialNote: "UYMS katılımcılarına özel indirim! Rezervasyon sırasında sempozyum katılımcısı olduğunuzu belirtin.",
    note: "Kahvaltı dahil fiyatlardır.",
    description: "MSKÜ bünyesindeki uygulama oteli, Akyaka'nın eşsiz doğasında konforlu bir konaklama imkânı sunmaktadır.",
    features: ["Kahvaltı dahil", "Denize yakın konum", "Üniversite işletmesi", "Huzurlu ortam"],
    pricing: [
      { type: "1 Kişilik Oda", price: "2.100 ₺" },
      { type: "2 Kişilik Oda", price: "2.880 ₺" },
      { type: "3 Kişilik Oda", price: "3.600 ₺" },
      { type: "4 Kişilik Suit Oda", price: "4.400 ₺" },
    ],
  },
  {
    id: 2,
    name: "Muğla Sıtkı Koçman Üniversitesi Konukevi",
    location: "Muğla Merkez",
    badge: "🏛️ Muğla Merkez",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    cardBorder: "border-indigo-400",
    headerGradient: "from-indigo-500 to-purple-600",
    url: "https://sksd.mu.edu.tr/tr/konukevi-1892",
    specialNote: "UYMS katılımcılarına özel indirim! Rezervasyon sırasında sempozyum katılımcısı olduğunuzu belirtin.",
    note: "Kahvaltı dahil fiyatlardır.",
    description: "MSKÜ Konukevi, sempozyum katılımcılarına özel indirimli fiyatlarla üniversite kampüsünde konaklama imkânı sunmaktadır.",
    features: ["Kahvaltı dahil", "Isıtma & Soğutma", "LCD TV", "Buzdolabı"],
    pricing: [
      { type: "Tek Kişilik Oda", price: "1.600 ₺" },
      { type: "İki Kişilik Oda", price: "2.600 ₺" },
      { type: "Üç Kişilik Oda", price: "3.300 ₺" },
      { type: "Dört Kişilik Oda", price: "4.100 ₺" },
      { type: "Ek Yatak", price: "+800 ₺" },
    ],
    email: "konukevi@mu.edu.tr",
  },
  {
    id: 3,
    name: "Kerme Ottoman Konak",
    location: "Akyaka — Azmak Nehri Kenarı",
    badge: "🏖️ Akyaka",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBorder: "border-amber-400",
    headerGradient: "from-amber-500 to-orange-600",
    url: "https://www.kermeottomankonak.com/",
    discount: "%20 İndirim",
    discountNote: "UYMS katılımcılarına özel %20 indirim uygulanmaktadır.",
    specialNote: "Rezervasyon sırasında sempozyum katılımcısı olduğunuzu belirtiniz.",
    description: "Azmak nehri üzerinde bir koyda konumlanan 40 odalı butik otelde nehir ve dağ manzaralı odalar ve büyük yüzme havuzu.",
    features: ["Nehir & dağ manzarası", "Yüzme havuzu", "Butik hizmet",],
    phone: "+90 530 697 57 79",
  },
  {
    id: 4,
    name: "Muğla Yücelen Otel",
    location: "Kötekli Mah., Menteşe, Muğla",
    badge: "🏙️ Muğla Merkez",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    cardBorder: "border-emerald-400",
    headerGradient: "from-emerald-500 to-green-600",
    url: "https://muglayucelenotel.com/",
    description: "Merkezi konumda yıl boyunca açık butik otel. Toplantı salonları, restoran & bistro, spor salonu, otopark ve ücretsiz WiFi ile tam donanımlı.",
    features: ["Standardort: 26 m²", "Suit: 51 m²", "Aile Odası: 42 m²", "Toplantı salonları", "Restoran & Bistro", "WiFi & Otopark"],
    phone: "0252 223 01 00",
    email: "info@muglayucelenotel.com",
  },
  {
    id: 5,
    name: "Tuna Otel Rezidans",
    location: "Muğla Merkez",
    badge: "🏙️ Muğla Merkez",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    cardBorder: "border-rose-400",
    headerGradient: "from-rose-500 to-pink-600",
    url: "http://www.tunaotelrezidans.com/",
    description: "Standart odalar, suit odalar, aile odaları ve tam donanımlı rezidans daireler sunan modern otel. Restoran ve kahvaltı salonu mevcut.",
    features: ["Standart Oda: 30 m²", "Suit Oda: 32 m²", "Aile Odası: 32 m²", "Rezidans: 37 m²"],
  },
  {
    id: 6,
    name: "Egehan Otel",
    location: "Muğla Merkez",
    badge: "🏙️ Muğla Merkez",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-300",
    cardBorder: "border-violet-400",
    headerGradient: "from-violet-500 to-indigo-600",
    url: "http://www.egehanotel.net/",
    description: "2005 yılında hizmete giren 50 odalı (4 suit) otel. Dağ ve şehir manzaralı tüm odalarında internet, klima, TV, minibar ve saç kurutma makinesi bulunmaktadır.",
    features: ["Dağ & Şehir Manzarası", "Restoran & Bar", "Kafeterya", "WiFi"],
    phone: "+90 252 223 80 02",
    email: "info@egehanotel.net",
  },
];

const Konaklama = () => {
  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-cyan-700 to-indigo-800 py-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        <div className="relative max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/30 backdrop-blur-sm">
            🛏️ UYMS 2026 Konaklama
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow">
            Konaklama Bilgileri
          </h1>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto">
            UYMS 2026 Sempozyumu için konaklama seçenekleri
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 mb-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-5 flex items-start gap-4">
          <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-blue-800 mb-1">Rezervasyon Hakkında Önemli Not</p>
            <p className="text-sm text-gray-600">
              Bazı otellerde UYMS katılımcısı olduğunuzu belirtmeniz indirim için zorunludur.
            </p>
          </div>
        </div>
      </div>

      {/* Hotel Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hotelData.map((hotel) => (
            <div
              key={hotel.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 ${hotel.cardBorder} flex flex-col hover:shadow-2xl transition-shadow duration-300`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${hotel.headerGradient} px-6 py-5`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border bg-white/20 text-white border-white/30 mb-2`}>
                      {hotel.badge}
                    </span>
                    <h2 className="text-xl font-bold text-white leading-tight">{hotel.name}</h2>
                    <p className="text-white/80 text-sm mt-1 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {hotel.location}
                    </p>
                  </div>
                  {hotel.discount && (
                    <span className="flex-shrink-0 bg-white text-orange-600 font-bold text-sm px-3 py-1.5 rounded-xl shadow-md">
                      {hotel.discount}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Special notes */}
                {hotel.specialNote && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mb-4 flex items-start gap-2">
                    <span className="text-yellow-600 flex-shrink-0 mt-0.5">⭐</span>
                    <p className="text-yellow-800 text-sm font-medium">{hotel.specialNote}</p>
                  </div>
                )}
                {hotel.discountNote && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 mb-4 flex items-start gap-2">
                    <span className="text-orange-600 flex-shrink-0 mt-0.5">🎉</span>
                    <p className="text-orange-800 text-sm font-medium">{hotel.discountNote}</p>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{hotel.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {hotel.features.map((feat, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200">
                      ✓ {feat}
                    </span>
                  ))}
                </div>

                {/* Pricing Table */}
                {hotel.pricing?.length > 0 && (
                  <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 mb-5 flex-1">
                    <div className="px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Fiyat Listesi</p>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {hotel.pricing.map((item, i) => (
                        <div key={i} className="flex items-center justify-between px-4 py-2.5">
                          <span className="text-sm text-gray-700">{item.type}</span>
                          <span className="text-sm font-bold text-gray-900">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    {hotel.note && (
                      <div className="px-4 py-2 bg-green-50 border-t border-gray-200">
                        <p className="text-xs text-green-700 font-medium">☕ {hotel.note}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Contact & CTA */}
                <div className="flex flex-col gap-2">
                  {hotel.phone && (
                    <a href={`tel:${hotel.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {hotel.phone}
                    </a>
                  )}
                  {hotel.email && (
                    <a href={`mailto:${hotel.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {hotel.email}
                    </a>
                  )}
                  <a
                    href={hotel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-2 w-full text-center text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 bg-gradient-to-r ${hotel.headerGradient} text-white hover:opacity-90 hover:shadow-md`}
                  >
                    Otelin Web Sitesini Ziyaret Et →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Harita */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
            <span className="text-2xl">🗺️</span>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Konaklama & Sempozyum Haritası</h2>
              <p className="text-sm text-gray-500">🔴 Konaklama otel konumları &nbsp;·&nbsp; 🔵 MSKÜ AKM (Sempozyum Yeri)</p>
            </div>
          </div>
          <div style={{ height: '500px', width: '100%' }}>
            <MapContainer
              center={[37.155, 28.365]}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Sempozyum Yeri - Mavi */}
              <Marker position={[37.1624, 28.3720]} icon={blueIcon}>
                <Popup>
                  <strong>🎓 MSKÜ AKM</strong><br />
                  Muğla Sıtkı Koçman Üniversitesi<br />
                  Atatürk Kültür Merkezi<br />
                  <em>Sempozyum Yeri</em>
                </Popup>
              </Marker>

              {/* MSKÜ Akyaka Uygulama Oteli - Kırmızı */}
              <Marker position={[37.0520, 28.3247]} icon={redIcon}>
                <Popup>
                  <strong>🏖️ MSKÜ Akyaka Uygulama Oteli</strong><br />
                  Akyaka, Muğla
                </Popup>
              </Marker>

              {/* MSKÜ Konukevi - Kırmızı */}
              <Marker position={[37.2171, 28.3654]} icon={redIcon}>
                <Popup>
                  <strong>🏛️ MSKÜ Konukevi</strong><br />
                  Muğla Merkez
                </Popup>
              </Marker>

              {/* Kerme Ottoman Konak - Kırmızı */}
              <Marker position={[37.0508, 28.3219]} icon={redIcon}>
                <Popup>
                  <strong>🏖️ Kerme Ottoman Konak</strong><br />
                  Azmak Nehri Kenarı, Akyaka<br />
                  📞 +90 530 697 57 79
                </Popup>
              </Marker>

              {/* Muğla Yücelen Otel - Kırmızı */}
              <Marker position={[37.2158, 28.3621]} icon={redIcon}>
                <Popup>
                  <strong>🏙️ Muğla Yücelen Otel</strong><br />
                  Kötekli Mah., Menteşe, Muğla<br />
                  📞 0252 223 01 00
                </Popup>
              </Marker>

              {/* Tuna Otel Rezidans - Kırmızı */}
              <Marker position={[37.2143, 28.3641]} icon={redIcon}>
                <Popup>
                  <strong>🏙️ Tuna Otel Rezidans</strong><br />
                  Muğla Merkez
                </Popup>
              </Marker>

              {/* Egehan Otel - Kırmızı */}
              <Marker position={[37.2175, 28.3669]} icon={redIcon}>
                <Popup>
                  <strong>🏙️ Egehan Otel</strong><br />
                  Muğla Merkez<br />
                  📞 +90 252 223 80 02
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span> Konaklama otelleri</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span> MSKÜ AKM — Sempozyum yeri</span>
            <span className="text-gray-400 ml-auto">İşaretçilere tıklayarak detay görüntüleyebilirsiniz</span>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            Konaklama ile ilgili sorularınız için sempozyum organizasyon komitesiyle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Konaklama;
