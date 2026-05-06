
import { useState, useEffect } from 'react';

import LandingHero from '../assets/banner.png';
import MskuPhoto from '../assets/msku.jpg';
import AselsanBanner from '../assets/aselsan_new_logo.png';
import BedirPhoto from '../assets/bedir_tekinerdogan.jpg';
import AkyakaPhoto from '../assets/akyaka_yeni.jpeg';
import KonaklamaBanner from '../assets/konaklama_banner.png';
import MenteseBanner from '../assets/gala.png';
import MenteseLogo from '../assets/20240916-mentese-belediyesi-kamuoyu-bilgilendirmesi-707825-d950fdc06ca88521a5e6.jpg';
import { NavLink } from 'react-router-dom';
import AselsanLogo from '../assets/aselsan_new_logo.png';
import VirtusLogo from '../assets/virtusrndlogo.png';
import AkademikLogo from '../assets/akademik.png';


const Anasayfa = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [showPopup, setShowPopup] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [showGalaPopup, setShowGalaPopup] = useState(false);
  const [galaCountdown, setGalaCountdown] = useState(8);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const heroSlides = [
    {
      id: 1,
      image: LandingHero,
      title: "",
      subtitle: ""
    },
    {
      id: 2,
      image: AselsanBanner,
      title: "Ana Sponsorumuz ASELSAN'a",
      subtitle: "Teşekkür Ederiz",
      bgClass: "bg-contain bg-center bg-no-repeat bg-white",
      layoutClass: "absolute inset-0 flex flex-col items-center justify-end px-4 sm:px-8 text-center pb-12 sm:pb-20"
    },
    {
      id: 3,
      image: MenteseBanner,
      title: "",
      subtitle: "",
      customContent: true
    },
    {
      id: 4,
      image: KonaklamaBanner,
      title: "Konaklama",
      subtitle: "UYMS 2026 Konaklama Seçenekleri",
      description: "Akyaka'nın turkuaz kıyılarında ve Muğla merkezdeki seçkin otellerde konaklama seçeneklerini keşfedin.",
      link: "/konaklama",
      linkLabel: "Konaklama Bilgileri →"
    },
    {
      id: 5,
      image: BedirPhoto,
      title: "Prof. Dr. Ir. Bedir Tekinerdogan",
      subtitle: "Sempozyumumuzun Ana Konuşmacısı",
      description: "Wageningen Üniversitesi Bilgi Teknolojileri Grubu Başkanı olan değerli hocamız; araştırma vizyonuyla yazılım mimarisi, sistem mühendisliği ve karmaşık sistemler alanlarında çığır açan tecrübelerini sempozyumumuzda bizlerle paylaşacak.",
      talkTitle: "Konuşma Başlığı:\n\"Yazılımdan Sistemlere: Karmaşık Bir Dünya İçin Mühendisliği Yeniden Düşünmek\"",
      bgClass: "bg-[length:auto_50%] sm:bg-[length:auto_60%] lg:bg-[length:auto_80%] bg-[position:center_10%] lg:bg-[position:10%_30%] bg-no-repeat bg-[rgb(14,235,255)]",
      layoutClass: "absolute inset-0 flex flex-col items-center lg:items-end justify-end lg:justify-center px-4 sm:px-8 lg:px-24 xl:px-32 text-center pb-10 sm:pb-16 lg:pb-0"
    },
    {
      id: 6,
      image: MskuPhoto,
      title: "Muğla Sıtkı Koçman Üniversitesi",
      subtitle: "Sizleri Muğla'nın eşsiz doğasında ağırlamaktan onur duyarız"
    },
    {
      id: 72,
      image: AkyakaPhoto,
      title: "Akyaka",
      subtitle: "Muğla Sıtkı Koçman Üniversitesi'ndeki bu akademik buluşmanın hemen yanı başında, doğanın teknolojiyle harmanlandığı özel bir durak sizi bekliyor: Akyaka.",
      description: "Gökova’nın turkuaz suları ve eşsiz doğasıyla Akyaka, zihninizi tazelemek için ideal bir durak. Sempozyum arasında bu masmavi manzaranın tadını çıkarmanız dileğiyle."
    }
  ];

  // sonsuz kayma için orijinal slaytlara ilk slaytı ekliyoruz
  const extendedSlides = [...heroSlides, heroSlides[0]];

  // Hero Slider otomatik geçiş
  useEffect(() => {
    const slideTimer = setInterval(() => {
      if (isTransitioning) {
        setCurrentSlide((prev) => prev + 1);
      }
    }, 4000); // Kullanıcı isteğiyle 4 saniyeye çekildi
    return () => clearInterval(slideTimer);
  }, [isTransitioning]);

  useEffect(() => {
    if (currentSlide === heroSlides.length) {
      // Sona geldiğimizde (kopya slayta), transition bitmesini bekleyip 0'a atla
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500); // 1000ms transition süresi
      return () => clearTimeout(resetTimer);
    } else if (!isTransitioning && currentSlide === 0) {
      // 0'a atladıktan sonra tekrar transition'ı açabilmek için küçük bir bekleme
      const enableTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(enableTimer);
    }
  }, [currentSlide, isTransitioning, heroSlides.length]);

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
          // İlk popup kapanınca Gala popup'ını göster
          setTimeout(() => setShowGalaPopup(true), 400);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showPopup]);

  useEffect(() => {
    if (!showGalaPopup) return;

    const interval = setInterval(() => {
      setGalaCountdown((prev) => {
        if (prev <= 1) {
          setShowGalaPopup(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showGalaPopup]);

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

  const allSponsors = [
    {
      name: "Aselsan",
      url: "https://www.aselsan.com/tr",
      isMain: true,
      logo: (
        <div className="flex flex-col items-center justify-center gap-3">
          <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-300 shadow-sm whitespace-nowrap">
            🌟 ANA SPONSOR
          </span>
          <img src={AselsanLogo} alt="Aselsan Teknoloji" className="w-auto h-20 sm:h-28 object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-500" />
        </div>
      )
    },
    {
      name: "Virtus R&D",
      url: "https://virtusrnd.com/",
      isMain: false,
      logo: <img src={VirtusLogo} alt="Virtus R&D Logo" className="w-auto h-12 sm:h-16 object-contain hover:scale-105 transition-transform duration-300" />
    },
    {
      name: "Akademik Sanal Ofis",
      url: "https://akademiksanalofis.com.tr",
      isMain: false,
      logo: <img src={AkademikLogo} alt="Akademik Sanal Ofis Logo" className="w-auto h-16 sm:h-20 object-contain hover:scale-105 transition-transform duration-300" />
    }
  ];

  const importantDates = [

    { event: "Bildiri Gönderimi Son Günü", date: "8 Şubat 2026", status: "past" },
    { event: "Bildiri Kabul Bildirimi", date: "20 Mart 2026", status: "past" },
    { event: "Kayıtların Son Günü", date: "3 Nisan 2026", status: "past" },
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
              onClick={() => { setShowPopup(false); setTimeout(() => setShowGalaPopup(true), 400); }}
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
              Sempozyum Programı Yayınlandı!
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sempozyum programı yayınlanmıştır. <NavLink to='/sempozyum-programi' className="text-blue-600 underline"> Buradan </NavLink>  inceleyebilirsiniz.
            </p>
            <div className="mt-6 text-sm text-gray-400 italic">
              (Bu bildirim {countdown} saniye içinde kapanacaktır)
            </div>
          </div>
        </div>
      )}

      {/* Gala Yemeği Popup */}
      {showGalaPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-500">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border-t-8 border-amber-500 overflow-hidden">
            {/* Dekoratif arka plan parıltıları */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>

            <button
              onClick={() => setShowGalaPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-300/30 rounded-full blur-md"></div>
                <img
                  src={MenteseLogo}
                  alt="Menteşe Belediyesi"
                  className="relative w-20 h-20 rounded-full object-cover border-4 border-amber-400 shadow-lg"
                />
              </div>
            </div>

            {/* Rozet */}
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full border border-amber-300 mb-4 tracking-widest uppercase">
              🍽️ Gala Yemeği Duyurusu
            </span>

            <h3 className="text-2xl font-extrabold text-gray-800 mb-3 leading-tight">
              Gala Yemeği
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              UYMS 2026 Gala Yemeği,{' '}
              <span className="font-bold text-amber-600">kayıtlı tüm katılımcılara</span>{' '}
              <span className="font-bold text-gray-800">Menteşe Belediyesi</span>{' '}
              tarafından ücretsiz olarak ikram edilecektir.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bu özel geceyi sizinle paylaşmaktan mutluluk duyuyoruz. Menteşe Belediyesi'ne destekleri için teşekkür ederiz.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px flex-1 bg-amber-200"></div>
              <span className="text-xs text-gray-400 italic">{galaCountdown} saniye içinde kapanacaktır</span>
              <div className="h-px flex-1 bg-amber-200"></div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Slider — overflow-hidden hem dışta hem içte */}
      <div className="w-full overflow-hidden">
        <div className="relative overflow-hidden h-[260px] sm:h-[380px] md:h-[480px] lg:h-[560px] xl:h-[700px] max-h-screen bg-slate-900 group">

          {/* Sliding Track */}
          <div
            className={`flex h-full ease-in-out absolute inset-0 ${isTransitioning ? 'transition-transform duration-1000' : 'transition-none duration-0'}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {extendedSlides.map((slide, index) => {
              const isActive = index === currentSlide || (currentSlide === heroSlides.length && index === 0);
              return (
                <div
                  key={`${slide.id}-${index}`}
                  className="min-w-full h-full relative flex-shrink-0"
                >
                  {/* Image Sub-layer */}
                  <div
                    className={`absolute inset-0 ${slide.bgClass || 'bg-cover bg-center bg-no-repeat'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>

                  {/* Gradient Overlay for Text Readability (Sadece içerik varsa göster) */}
                  {(slide.title || slide.subtitle) && (
                    <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  )}

                  {/* Slide Content (Sadece içerik varsa göster) */}
                  {(slide.title || slide.subtitle || slide.talkTitle) && (
                    <div className={slide.layoutClass || `absolute inset-0 flex flex-col items-center ${slide.textPos || 'justify-center'} px-4 sm:px-8 text-center pt-10 sm:pt-0`}>
                      <div className={`transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-300 w-full max-w-4xl ${slide.layoutClass && slide.layoutClass.includes('items-end') ? 'ml-auto' : 'mx-auto'}`}>
                        {slide.title && (
                          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] font-sans tracking-tight">
                            {slide.title}
                          </h1>
                        )}
                        {slide.subtitle && (
                          <p className={`text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium ${slide.layoutClass && slide.layoutClass.includes('text-right') ? 'ml-auto' : 'mx-auto'}`}>
                            {slide.subtitle}
                          </p>
                        )}
                        {slide.description && (
                          <p className={`mt-4 text-sm sm:text-base md:text-lg text-gray-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl leading-relaxed ${slide.layoutClass && slide.layoutClass.includes('text-right') ? 'ml-auto' : 'mx-auto'}`}>
                            {slide.description}
                          </p>
                        )}
                        {slide.talkTitle && (
                          <div className={`mt-6 inline-block bg-black/30 px-5 py-4 rounded-xl border border-white/10 backdrop-blur-md shadow-2xl ${slide.layoutClass && slide.layoutClass.includes('text-right') ? 'text-right' : 'text-center'}`}>
                            <p className={`text-sm sm:text-base md:text-lg text-blue-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-semibold whitespace-pre-line inline-block ${slide.layoutClass && slide.layoutClass.includes('text-right') ? 'text-right' : 'text-center'}`}>
                              {slide.talkTitle}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Menteşe Belediyesi — Gala Yemeği Teşekkür İçeriği */}
                  {slide.customContent && (
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-4 sm:px-8">
                      <div className={`transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} delay-300 w-full max-w-2xl mx-auto`}>
                        <div className="relative bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 sm:px-10 sm:py-7 shadow-2xl text-center overflow-hidden">
                          {/* Dekoratif parıltı */}
                          <div className="absolute -top-6 -left-6 w-28 h-28 bg-amber-400/20 rounded-full blur-2xl pointer-events-none"></div>
                          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-orange-400/20 rounded-full blur-2xl pointer-events-none"></div>

                          {/* Logo + başlık */}
                          <div className="flex items-center justify-center gap-3 mb-3">
                            <img
                              src={MenteseLogo}
                              alt="Menteşe Belediyesi"
                              className="h-10 sm:h-12 w-auto object-contain rounded-full drop-shadow-lg"
                            />
                            <span className="text-amber-300 text-xs sm:text-sm font-semibold tracking-widest uppercase drop-shadow">
                              Gala Yemeği Sponsoru
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] leading-tight">
                            Menteşe Belediyesi'ne
                            <br />
                            <span className="text-amber-300">Teşekkürlerimizi Sunarız</span>
                          </h2>

                          <p className="mt-3 text-sm sm:text-base text-gray-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed max-w-lg mx-auto">
                            UYMS 2026 Gala Yemeği'ne verdiği değerli destek için<br />
                            <span className="font-semibold text-white">Menteşe Belediyesi</span>'ne içtenlikle teşekkür ederiz.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation Arrows */}
          <button
            onClick={() => {
              if (currentSlide === 0) {
                setIsTransitioning(false);
                setCurrentSlide(heroSlides.length);
                setTimeout(() => {
                  setIsTransitioning(true);
                  setCurrentSlide(heroSlides.length - 1);
                }, 50);
              } else {
                setCurrentSlide((prev) => prev - 1);
              }
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            aria-label="Önceki Slayt"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => prev + 1)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 text-white/50 hover:text-white bg-black/20 hover:bg-black/50 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
            aria-label="Sonraki Slayt"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
            {heroSlides.map((_, index) => {
              const isActive = index === currentSlide || (currentSlide === heroSlides.length && index === 0);
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) return; // Geçiş sırasında tıklamayı engelle
                    setCurrentSlide(index);
                  }}
                  className={`transition-all duration-300 rounded-full shadow-lg ${isActive ? 'w-8 sm:w-12 h-2 sm:h-2 bg-white' : 'w-2 sm:w-3 h-2 sm:h-2 bg-white/50 hover:bg-white/80'}`}
                  aria-label={`${index + 1}. Slayta Git`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Infinite Marquee Sponsorship Banner */}
      <div className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50 border-y border-blue-200/60 shadow-inner">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .fade-mask {
             -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
             mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}</style>

        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-blue-300/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative w-full text-center mb-12 flex justify-center">
          <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-white/80 border border-blue-200 text-blue-800 shadow-sm text-sm sm:text-base font-medium backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            DESTEKLEYENLER VE SPONSORLAR
          </div>
        </div>

        <div className="relative w-full overflow-hidden fade-mask py-4">
          <div className="flex w-max animate-marquee space-x-16 sm:space-x-24 items-center hover:cursor-pointer">
            {/* Array is duplicated to create a seamless loop (we slide by 50% so 2 groups needed for infinite effect, but we put more to fill screen) */}
            {[...allSponsors, ...allSponsors, ...allSponsors, ...allSponsors, ...allSponsors, ...allSponsors].map((sponsor, index) => (
              <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className={`flex-shrink-0 flex items-center justify-center p-6 sm:p-8 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 ${sponsor.isMain ? 'bg-white hover:bg-blue-50/50 border-blue-100' : 'bg-gradient-to-br from-indigo-50/60 to-purple-50/60 hover:from-indigo-100/60 hover:to-purple-100/60 border-indigo-200/50 backdrop-blur-sm'}`}>
                {sponsor.logo}
              </a>
            ))}
          </div>
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
