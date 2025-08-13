
import React from 'react';
import RoadIcon from '../assets/road-svgrepo-com.svg';
import ClockIcon from '../assets/clock-square-svgrepo-com.svg';

const Ulasim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br font-serif from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ulaşım Bilgileri
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
            UYMS 26 Sempozyumu'na ulaşım için gerekli tüm bilgiler ve seçenekler
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Genel Ulaşım Bilgileri */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                
                Genel Ulaşım Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Sempozyum Yeri
                </h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Muğla Sıtkı Koçman Üniversitesi</strong><br />
                    Kötekli Mahallesi, 48000 Menteşe/Muğla
                  </p>
                  <p className="text-gray-600 text-sm">
                    Sempozyum, Muğla Sıtkı Koçman Üniversitesi'nin ana kampüsünde gerçekleştirilecektir.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                  <img src={ClockIcon} alt="Saat" className="w-6 h-6" />
                    Sempozyum Saatleri</h3>
                  <p className="text-gray-700">
                    <strong>Başlangıç:</strong> 09:00<br />
                    <strong>Bitiş:</strong> 18:00<br />
                    <strong>Tarih:</strong> 14-16 Mayıs 2026
                  </p>
                </div>
              </div>
            </div>

            {/* Ulaşım Seçenekleri */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Ulaşım Seçenekleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Havayolu */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Havayolu</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Muğla-Bodrum Havalimanı (BJV)</h4>
                      <p className="text-sm text-gray-700 mb-2">Muğla'ya ~80 km uzaklıkta"</p>
                      <p className="text-sm text-gray-600">Transfer süresi: ~1 saat</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Dalaman Havalimanı (DLM)</h4>
                      <p className="text-sm text-gray-700 mb-2">Muğla'ya ~90 km uzaklıkta</p>
                      <p className="text-sm text-gray-600">Transfer süresi: ~1.5 saat</p>
                    </div>
                  </div>
                </div>

                {/* Karayolu */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                      <img src={RoadIcon} alt="Road" className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Karayolu</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Otobüs Terminali</h4>
                      <p className="text-sm text-gray-700 mb-2">Muğla Şehirlerarası Otobüs Terminali</p>
                      <p className="text-sm text-gray-600">Üniversiteye: 15 dakika</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Özel Araç</h4>
                      <p className="text-sm text-gray-700 mb-2">İstanbul: ~8 saat</p>
                      <p className="text-sm text-gray-600">Ankara: ~7 saat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Harita ve Konum */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-red-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                Harita ve Konum
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-4 text-center">
                    <strong>Muğla Sıtkı Koçman Üniversitesi</strong><br />
                    Kötekli Kampüsü, 48000 Menteşe/Muğla
                  </p>
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.630505536423!2d28.37114523945248!3d37.16445394173606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bf73c9263b4757%3A0x3a1020fa0911b7a4!2zTXXEn2xhIFPEsXRrxLEgS2_Dp21hbiDDnG5pdmVyc2l0ZXNp!5e0!3m2!1str!2str!4v1754826432196!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Muğla Sıtkı Koçman Üniversitesi Konumu"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom CTA 
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ulaşım Desteği
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Ulaşım konusunda yardıma ihtiyacınız varsa veya özel transfer talebiniz bulunuyorsa bizimle iletişime geçin
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              Ulaşım Desteği Al
            </button>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Ulasim;
