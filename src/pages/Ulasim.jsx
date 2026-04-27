
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
                    <strong>Muğla Sıtkı Koçman Üniversitesi Atatürk Kültür Merkezi</strong><br />
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


            {/* MUTTAŞ Havalimanı Servisi */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <span className="text-3xl">🚌</span>
                MUTTAŞ Havalimanı Servisi
              </h2>
              <p className="text-sm text-gray-500 mb-6">Hat 48-22 · Milas/Bodrum Havalimanı → Menteşe Otogar · 85 km</p>

              {/* Uyarı */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-start gap-3">
                <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">⚠️</span>
                <p className="text-amber-800 text-sm leading-relaxed">
                  Hava koşulları, trafik yoğunluğu, arıza ve uçak saatlerindeki değişiklikler nedeniyle saatler değişebilir.
                  Güncel bilgi için <a href="https://ulasim.muttas.com.tr/hat/48-22-mentese-otogar-milasbodrum-havalimani-360" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-amber-900">resmi MUTTAŞ sayfasını</a> ziyaret edin.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-5">
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-wide mb-2">Bilet Ücreti</p>
                  <p className="text-4xl font-extrabold text-orange-700">300 <span className="text-2xl">₺</span></p>
                  <p className="text-xs text-gray-500 mt-1">Kişi başı (tek yön)</p>
                </div>

                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3">
                  <p className="text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">Önemli Notlar</p>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span>Tüm araçlarda <strong>kredi kartı</strong> ile ödeme yapılabilir</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    <span><strong>Muğla Kart</strong> ile ödeme geçerlidir</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 flex-shrink-0">✗</span>
                    <span>Rezervasyon ve ön bilet satışı <strong>yapılmamaktadır</strong></span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-500 flex-shrink-0">📞</span>
                    <span>Çağrı Merkezi: <a href="tel:4444801" className="font-semibold text-blue-600 hover:underline">444 48 01</a></span>
                  </div>
                </div>

                <a
                  href="https://ulasim.muttas.com.tr/hat/48-22-mentese-otogar-milasbodrum-havalimani-360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-semibold py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:opacity-90 hover:shadow-md transition-all duration-200"
                >
                  Güncel Saatler için MUTTAŞ →
                </a>
              </div>
            </div>

            {/* Şehir İçi Ulaşım */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <span className="text-3xl">🚍</span>
                Şehir İçi Ulaşım
              </h2>
              <p className="text-sm text-gray-500 mb-6">Muğla şehir içinden kampüse toplu taşıma ile ulaşım seçenekleri</p>

              <div className="space-y-4">

                {/* Merkezden Kampüse */}
                <div className="bg-teal-50 rounded-xl border border-teal-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-800">Şehir Merkezinden Kampüse</h3>
                      <p className="text-xs text-teal-600">Muğla merkez → MSKÜ Kampüsü</p>
                    </div>
                    <span className="ml-auto flex-shrink-0 bg-teal-600 text-white text-sm font-extrabold px-3 py-1.5 rounded-xl shadow">
                      1-63
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Muğla şehir merkezinden kampüse ulaşmak için <strong>1-63 numaralı otobüsü</strong> kullanabilirsiniz.
                  </p>
                </div>

                {/* Otogardan Kampüse */}
                <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-indigo-800">Otogardan Kampüse</h3>
                      <p className="text-xs text-indigo-600">Muğla Otogarı → MSKÜ Kampüsü</p>
                    </div>
                    <span className="ml-auto flex-shrink-0 bg-indigo-600 text-white text-sm font-extrabold px-3 py-1.5 rounded-xl shadow">
                      12-5
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">
                    Muğla Otogarı'ndan kampüse ulaşmak için <strong>12-5 numaralı otobüsü</strong> kullanabilirsiniz.
                  </p>
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2.5 mt-2">
                    <span className="text-lg flex-shrink-0">🚶</span>
                    <div>
                      <p className="text-xs font-bold text-amber-800 mb-0.5">İniş Noktası — Tıp Fakültesi Üst Geçit Durağı</p>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        <strong>Tıp Fakültesi Üst Geçit</strong> durağında inerek üst geçitten kampüse giriş yapabilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Katılımcı Servisi Bilgilendirmesi */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                <span className="text-3xl">🚐</span>
                Katılımcı Servisi
              </h2>
              <p className="text-sm text-gray-500 mb-6">Muğla Sıtkı Koçman Üniversitesi Konukevi → Muğla Sıtkı Koçman Üniversitesi AKM · Konaklama yerine göre düzenlenecektir</p>

              {/* Duyuru Kartı */}
              <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 p-6 overflow-hidden">
                {/* Dekoratif arka plan */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl pointer-events-none"></div>

                {/* Rota */}
                <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs font-bold text-purple-800 text-center leading-tight max-w-[110px]">Muğla Sıtkı Koçman Üniversitesi Konukevi</span>
                  </div>

                  <div className="flex items-center gap-1 text-purple-400 flex-col sm:flex-row">
                    <div className="hidden sm:flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex sm:hidden flex-col items-center gap-1">
                      <div className="w-0.5 h-4 bg-purple-300"></div>
                      <svg className="w-5 h-5 text-purple-500 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs font-bold text-indigo-800 text-center leading-tight max-w-[110px]">Muğla Sıtkı Koçman Üniversitesi AKM</span>
                  </div>
                </div>

                {/* Açıklama */}
                <p className="relative text-sm text-gray-700 leading-relaxed text-center mb-5">
                  Sempozyum süresince konuklarımızın konakladığı yerlere göre düzenlenecek bir servis planlanmaktadır.
                  Servis güzergâhı ve saatleri <span className="font-semibold text-purple-700">Muğla Sıtkı Koçman Üniversitesi Konukevi</span>'nden başlayarak
                  <span className="font-semibold text-indigo-700"> Muğla Sıtkı Koçman Üniversitesi AKM</span>'ya kadar tüm konaklama noktalarını kapsayacak şekilde oluşturulacaktır.
                </p>

                {/* Yakında duyurulacak rozeti */}
                <div className="relative flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-white border border-purple-300 rounded-full px-5 py-2.5 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-purple-700">Sempozyuma yakın tarihte duyurulacaktır</span>
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
                    <strong>Muğla Sıtkı Koçman Üniversitesi AKM</strong><br />
                    Kötekli Kampüsü, 48000 Menteşe/Muğla
                  </p>
                  <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://maps.google.com/maps?q=Mu%C4%9Fla+S%C4%B1tk%C4%B1+Ko%C3%A7man+%C3%9Cniversitesi+Atat%C3%BCrk+K%C3%BClt%C3%BCr+Merkezi&output=embed&z=17"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Muğla Sıtkı Koçman Üniversitesi AKM Konumu"
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
