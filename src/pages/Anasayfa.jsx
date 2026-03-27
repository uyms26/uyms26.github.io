
import { useState, useEffect } from 'react';



import LandingHero from '../assets/banner.png';
import { NavLink } from 'react-router-dom';
import AselsanLogo from '../assets/aselsan-png-logo.png';
import VirtusLogo from '../assets/virtusrndlogo.png';
import AkademikLogo from '../assets/akademik.png';

const Anasayfa = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Sempozyum tarihi: 14-16 Mayıs 2026
  const symposiumDate = new Date('2026-05-14T09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = symposiumDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!showPopup) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShowPopup(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showPopup]);

  const announcements = [
    {
      id: 1,
      title: "Bildiri Gönderimi Başladı",
      image: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zM11 16.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zM4.5 11a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zM16.5 11a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2z" />
        </svg>
      ),
      date: "15 Ocak 2026"
    },
    {
      id: 2,
      title: "Erken Kayıt İndirimi Son Gün",
      image: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      date: "20 Ocak 2026"
    },
    {
      id: 3,
      title: "Konaklama Rezervasyonları Açıldı",
      image: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      date: "25 Ocak 2026"
    },
    {
      id: 4,
      title: "Program Detayları Yayınlandı",
      image: (
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      date: "1 Şubat 2026"
    }
  ];

  const sponsors = {
    main: [
      {
        name: "Aselsan", 
        url: "https://www.aselsan.com/tr",
        logo: (
          <img src={AselsanLogo} alt="Aselsan Logo" className="w-auto h-16 object-contain" />
        )
      }
    ],
    others: [
      
      {
        name: "Virtus R&D", 
        url: "https://virtusrnd.com/",
        logo: (
          <img src={VirtusLogo} alt="Virtus R&D Logo" className="w-auto h-12 object-contain" />
        )
      },

      {
        name: "Akademik Sanal Ofis",
        url:"https://akademiksanalofis.com.tr",
        logo: (
           <img src={AkademikLogo} alt="Akademik Sanal Ofis Logo" className="w-auto h-16 object-contain" />
        )
      }
    ]
  };

  const importantDates = [

    { event: "Bildiri Gönderimi Son Günü", date: "8 Şubat 2026", status: "upcoming" },
    { event: "Bildiri Kabul Bildirimi", date: "20 Mart 2026", status: "active" },
    { event: "Kayıtların Son Günü", date: "3 Nisan 2026", status: "active" },
    // { event: "Program Yayınlanması", date: "1 Mart 2026", status: "upcoming" },
    { event: "Sempozyum", date: "14-16 Mayıs 2026", status: "main" }
  ];

  return (
    <div className="min-h-screen font-serif   bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Alert Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all duration-500">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full animate-in fade-in zoom-in duration-300 text-center border-t-8 border-blue-600 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">DUYURU</h3>
            <p className="text-xl text-blue-600 font-semibold mb-4">
              Kayıtlar Açıldı!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kayıtlar açılmıştır. <span className="font-bold text-blue-700">3 Nisan 2026</span> tarihine kadar  <NavLink to='/kayit' className="text-blue-600 underline"> buradan </NavLink>  erken kayıt olabilirsiniz.
            </p>
            <div className="mt-6 text-sm text-gray-400 italic">
              (Bu bildirim {countdown} saniye içinde kapanacaktır)
            </div>
          </div>
        </div>
      )}

      <div className="bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[800px]" style={{ backgroundImage: `url(${LandingHero})` }}>
        <div className="absolute  top-7/11 left-5/12">
          {/*Hero Section 
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <NavLink to="/kayit">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                  Hemen Kayıt Ol
                </button>
            </NavLink>
            <NavLink to="/bildiri-gonderimi">
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  Bildiri Gönder
                </button>
            </NavLink>
          </div>
          */}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                UYMS Hakkında
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed text-justify">
                  Ulusal Yazılım Mühendisliği Sempozyumu (UYMS), Türkiye yazılım sektörü ile yazılım alanında çalışmalar yapan akademisyenleri bir araya getirerek yazılım mühendisliğindeki son gelişmelerin ve araştırmaların paylaşılmasını sağlayan bir platformdur. 2003 yılından bu yana gerçekleştirilen UYMS, araştırma sonuçlarının paylaşıldığı bir ortam sağlamasının ötesinde, ulusal yazılım mühendisliği araştırmalarının geleceğinin şekillenmesinde etkin rol oynamaktadır. Sempozyumun bu sene de tüm katılımcıların yararlanacağı geniş bir içerik taşıması hedeflenmektedir.
                </p>
                <p className="text-lg leading-relaxed text-justify">
                  <span className='font-bold'>Muğla Sıtkı Koçman Üniversitesi</span> işbirliği ile düzenlenecek olan 17. UYMS, <span className='font-bold' >14-16 Mayıs 2026</span> tarihlerinde Muğla Sıtkı Koçman Üniversitesi Atatürk Kültür Merkezi'nde yüz yüze olarak gerçekleştirilecektir.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Destekleyenler
              </h2>
              <div className="space-y-12">
                
                {/* Ana Sponsor */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold text-center text-blue-800 mb-6 uppercase tracking-wider relative inline-block left-1/2 transform -translate-x-1/2">
                    Ana Sponsor
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full"></span>
                  </h3>
                  <div className="flex justify-center flex-wrap gap-8">
                    {sponsors.main.map((supporter, index) => (
                      supporter.url ? (
                        <a key={index} href={supporter.url} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-80">
                          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 w-full h-full cursor-pointer">
                            <div className="flex justify-center text-blue-600 mb-4">{supporter.logo}</div>
                            <h4 className="font-bold text-gray-800 text-lg">{supporter.name}</h4>
                          </div>
                        </a>
                      ) : (
                        <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 w-full sm:w-80">
                          <div className="flex justify-center text-blue-600 mb-4">{supporter.logo}</div>
                          <h4 className="font-bold text-gray-800 text-lg">{supporter.name}</h4>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Diğer Destekleyenler (Başlıksız) */}
                <div>
                   <h3 className="text-l font-bold text-center text-blue-800 mb-6 uppercase tracking-wider relative inline-block left-1/2 transform -translate-x-1/2">
                    Dİğer Sponsorlar
                    </h3>
                  <div className="flex justify-center flex-wrap gap-6">
                    {sponsors.others.map((supporter, index) => (
                      supporter.url ? (
                        <a key={index} href={supporter.url} target="_blank" rel="noopener noreferrer" className="block w-48 sm:w-56">
                          <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 w-full h-full cursor-pointer">
                            <div className="flex justify-center text-gray-600 mb-3">{supporter.logo}</div>
                            <h4 className="font-semibold text-gray-800 text-sm">{supporter.name}</h4>
                          </div>
                        </a>
                      ) : (
                        <div key={index} className="text-center p-5 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 w-48 sm:w-56">
                          <div className="flex justify-center text-gray-600 mb-3">{supporter.logo}</div>
                          <h4 className="font-semibold text-gray-800 text-sm">{supporter.name}</h4>
                        </div>
                      )
                    ))}
                  </div>
                </div>

              </div>
            </div>
            {/* Announcements Section 
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Duyurular
              </h2>
              <div className="relative">
                <div
                  className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
                  ref={el => (window.announcementsScroll = el)}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-200">
                      <div className="text-6xl mb-4 text-center">{announcement.image}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 text-center">{announcement.date}</p>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Sola kaydır"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 z-10"
                  onClick={() => {
                    if (window.announcementsScroll) {
                      window.announcementsScroll.scrollBy({ left: -320, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="text-2xl">←</span>
                </button>
                <button
                  type="button"
                  aria-label="Sağa kaydır"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 z-10"
                  onClick={() => {
                    if (window.announcementsScroll) {
                      window.announcementsScroll.scrollBy({ left: 320, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="text-2xl">→</span>
                </button>
              </div>
            </div>
*/}
            {/* Countdown Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-8">
                Sempozyuma Kalan Süre
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 text-black gap-6">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{timeLeft.days}</div>
                  <div className="text-lg opacity-90">Gün</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{timeLeft.hours}</div>
                  <div className="text-lg opacity-90">Saat</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{timeLeft.minutes}</div>
                  <div className="text-lg opacity-90">Dakika</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <div className="text-4xl font-bold mb-2">{timeLeft.seconds}</div>
                  <div className="text-lg opacity-90">Saniye</div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Sempozyum Konumu
              </h2>
              <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden mb-4">
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
              <div className="text-center text-lg text-gray-700 font-medium">
                Adres: Kötekli Mevkii, Kötekli, 48000 Menteşe/Muğla
              </div>
            </div>
            <div className="lg:col-span-2 text-2xl rounded text-justify ">

            </div>
          </div>

          {/* Right Column - Important Dates */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Önemli Tarihler
              </h2>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className={`p-4 rounded-xl border-l-4 ${date.status === 'main'
                    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-500'
                    : date.status === 'active'
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500'
                      : date.status === "passed"
                        ? 'bg-gradient-to-r from-red-50 to-pink-50 border-red-500'
                        : 'bg-gradient-to-r from-gray-50 to-slate-50 border-gray-400 line-through'
                    }`}>
                    <div className="text-sm text-gray-600 mb-1">{date.event}</div>
                    <div className={`font-bold ${date.status === 'main'
                      ? 'text-blue-700'
                      : date.status === 'active'
                        ? 'text-green-700'
                        : 'text-gray-700'
                      }`}>
                      {date.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;
