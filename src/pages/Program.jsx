import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Program = () => {
  const [activeTab, setActiveTab] = useState(0);

  const legend = [
    { code: "YSvD", name: "Yazılım Sınama ve Doğrulama", color: "bg-gray-100" },
    { code: "YS", name: "Yazılım Süreçleri", color: "bg-gray-100" },
    { code: "YYUvÇ", name: "Yenilikçi Yazılım Uygulamaları ve Çözümleri", color: "bg-gray-100" },
    { code: "YGM", name: "Yazılım Gereksinim Mühendisliği", color: "bg-gray-100" },
    { code: "DSİYM", name: "Dağıtık Sistemler için Yazılım Mühendisliği", color: "bg-gray-100" },
    { code: "YKGvY", name: "Yazılım Kalite Güvencesi ve Yönetimi", color: "bg-gray-100" },
    { code: "DYM", name: "Deneysel Yazılım Mühendisliği", color: "bg-gray-100" }
  ];

  const scheduleData = [
    {
      date: "14 Mayıs 2026",
      dayName: "Perşembe",
      events: [
        { time: "08:45 - 09:00", type: "single", content: "Kayıt", bg: "bg-slate-200 text-slate-800" },
        { time: "09:00 - 09:45", type: "single", content: "Saygı Duruşu & İstiklal Marşı & Açılış Konuşmaları", bg: "bg-slate-200 text-slate-800" },
        { 
          time: "09:45 - 11:00", 
          type: "single", 
          content: (
            <Link to="/davetli-konusmacilar" className="block w-full h-full hover:opacity-80 hover:scale-[1.01] transition-all">
              Yazılımdan Sistemlere: Karmaşık Bir Dünya İçin Mühendisliği Yeniden Düşünmek{"\n\n"}Prof. Dr. Bedir Tekinerdoğan
              <span className="block mt-2 text-sm opacity-80 font-normal">(Detaylar için tıklayınız)</span>
            </Link>
          ), 
          bg: "bg-orange-300 font-semibold cursor-pointer hover:bg-orange-400 border-none !p-4" 
        },
        { time: "11:00 - 11:15", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        {
          time: "11:15 - 12:45",
          type: "split",
          session1: {
            title: "Oturum 1 (Salon B)",
            code: "YSvD",
            color: "bg-gray-100",
            papers: ["71 numaralı bildiri (11:15-11:45)", "109 numaralı bildiri (11:45-12:15)", "50 numaralı bildiri (12:15-12:45)"]
          },
          session2: {
            title: "Oturum 2 (Salon C)",
            code: "YS",
            color: "bg-gray-100",
            papers: ["77 numaralı bildiri (11:15-11:45)", "105 numaralı bildiri (11:45-12:15)"]
          }
        },
        { time: "12:45 - 14:00", type: "single", content: "Öğle Yemeği", bg: "bg-yellow-300 font-semibold" },
        {
          time: "14:00 - 15:30",
          type: "split",
          session1: {
            title: "Oturum 3 (Salon B)",
            code: "YYUvÇ",
            color: "bg-gray-100",
            papers: ["69 numaralı bildiri (14:00-14:30)", "80 numaralı bildiri (14:30-15:00)", "83 numaralı bildiri (15:00-15:30)"]
          },
          session2: {
            title: "Oturum 4 (Salon C)",
            code: "YGM",
            color: "bg-gray-100",
            papers: ["38 numaralı bildiri (14:00-14:30)", "68 numaralı bildiri (14:30-15:00)", "87 numaralı bildiri (15:00-15:30)"]
          }
        },
        { time: "15:30 - 15:45", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        {
          time: "15:45 - 17:15",
          type: "split",
          session1: {
            title: "Oturum 5 (Salon B)",
            code: "DSİYM",
            color: "bg-gray-100",
            papers: ["85 numaralı bildiri (15:45-16:15)", "89 numaralı bildiri (16:15-16:45)", "98 numaralı bildiri (16:45-17:15)"]
          },
          session2: {
            title: "Oturum 6 (Salon C)",
            code: "YKGvY",
            color: "bg-gray-100",
            papers: ["10 numaralı bildiri (15:45-16:15)", "107 numaralı bildiri (16:15-16:45)", "110 numaralı bildiri (16:45-17:15)"]
          }
        },
        { time: "18:00", type: "single", content: "Açılış Kokteyli", bg: "bg-purple-200 font-semibold" }
      ]
    },
    {
      date: "15 Mayıs 2026",
      dayName: "Cuma",
      events: [
        {
          time: "09:15 - 11:00",
          type: "split",
          session1: {
            title: "Oturum 7 (Salon B)",
            code: "YYUvÇ",
            color: "bg-gray-100",
            papers: ["72 numaralı bildiri (09:15-09:45)", "73 numaralı bildiri (09:45-10:15)", "76 numaralı bildiri (10:15-11:00)"]
          },
          session2: {
            title: "Oturum 8 (Salon C)",
            code: "DYM",
            color: "bg-gray-100",
            papers: ["40 numaralı bildiri (09:15-09:45)", "102 numaralı bildiri (09:45-10:15)", "111 numaralı bildiri (10:15-11:00)"]
          }
        },
        { time: "11:00 - 11:15", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        {
          time: "11:15 - 12:45",
          type: "split",
          session1: {
            title: "Oturum 9 (Salon B)",
            code: "YYUvÇ",
            color: "bg-gray-100",
            papers: ["41 numaralı bildiri (11:15-11:45)", "47 numaralı bildiri (11:45-12:15)", "48 numaralı bildiri (12:15-12:45)"]
          },
          session2: {
            title: "Oturum 10 (Salon C)",
            code: "YSvD",
            color: "bg-gray-100",
            papers: ["13 numaralı bildiri (11:15-11:45)", "28 numaralı bildiri (11:45-12:15)", "106 numaralı bildiri (12:15-12:45)"]
          }
        },
        { time: "12:45 - 14:00", type: "single", content: "Öğle Yemeği", bg: "bg-yellow-300 font-semibold" },
        {
          time: "14:00 - 15:30",
          type: "split",
          session1: {
            title: "Oturum 11 (Salon B)",
            code: "YYUvÇ",
            color: "bg-gray-100",
            papers: ["29 numaralı bildiri (14:00-14:30)", "74 numaralı bildiri (14:30-15:00)", "79 numaralı bildiri (15:00-15:30)"]
          },
          session2: {
            title: "Oturum 12 (Salon C)",
            code: "YKGvY",
            color: "bg-gray-100",
            papers: ["25 numaralı bildiri (14:00-14:30)", "35 numaralı bildiri (14:30-15:00)", "75 numaralı bildiri (15:00-15:30)"]
          }
        },
        { time: "15:30 - 15:45", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        { 
          time: "15:45 - 17:15", 
          type: "single", 
          content: (
            <Link to="/panel" className="block w-full h-full hover:opacity-80 hover:scale-[1.01] transition-all">
              Panel Oturumu: Üretken Yapay Zeka Çağında Yazılım Mühendisliği{"\n\n"}Prof. Dr. Onur Demirörs & Dr. Görkem Giray
              <span className="block mt-2 text-sm opacity-80 font-normal">(Detaylar için tıklayınız)</span>
            </Link>
          ), 
          bg: "bg-orange-300 font-semibold cursor-pointer hover:bg-orange-400 border-none !p-4" 
        },
        { time: "18:00 - 19:00", type: "single", content: "Sosyal Program Tarihi Arasta Gezisi", bg: "bg-purple-200" },
        { time: "19:00", type: "single", content: "Gala Yemeği & En İyi Bildiri Ödülü", bg: "bg-purple-300 font-semibold" }
      ]
    },
    {
      date: "16 Mayıs 2026",
      dayName: "Cumartesi",
      events: [
        { time: "09:00 - 11:00", type: "single", content: "Kısa Toplantılar & İşbirlikleri\n\n* Önceden planlanan ve aniden gelişebilecek toplantılar için Organizasyon Komitesi ile iletişime geçebilirsiniz.", bg: "bg-slate-100" },
        { time: "11:15 - 12:00", type: "single", content: "Öz Değerlendirme & Geri bildirim\nKapanış", bg: "bg-slate-200" }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm">
          Sempozyum Programı
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Bildirilerin isimleri ve yazar bilgileri yakında paylaşılacaktır.
        </p>

        {/* Legend */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center border-b pb-2">Oturum Konuları</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-sm">
            {legend.map((item, idx) => (
              <div key={idx} className={`flex items-center p-3 rounded-lg shadow-sm border border-gray-100 ${item.color.includes('bg-') ? item.color : 'bg-gray-100'}`}>
                <span className="font-bold mr-2 whitespace-nowrap">{item.code}:</span>
                <span className={item.color.includes('text-white') ? 'text-white/90' : 'text-gray-800'}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {scheduleData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-xl font-bold text-lg transition-all shadow-sm ${activeTab === idx
                ? 'bg-blue-600 text-white shadow-blue-500/30 scale-105'
                : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
            >
              <div className="flex flex-col items-center">
                <span>{day.date}</span>
                <span className={`text-sm ${activeTab === idx ? 'text-blue-200' : 'text-gray-400'}`}>{day.dayName}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Schedule Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>

          <div className="p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b text-center">
              {scheduleData[activeTab].date} - {scheduleData[activeTab].dayName} Programı
            </h2>

            {/* Desktop Column Headers for Split Track */}
            {activeTab !== 2 && (
              <div className="hidden md:flex flex-row gap-4 mb-6">
                <div className="lg:w-40 flex-shrink-0"></div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="bg-slate-100 text-slate-700 font-bold text-xl py-3 rounded-xl border border-slate-200 shadow-sm text-center uppercase tracking-wide">
                    Salon B
                  </div>
                  <div className="bg-slate-100 text-slate-700 font-bold text-xl py-3 rounded-xl border border-slate-200 shadow-sm text-center uppercase tracking-wide">
                    Salon C
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-6">
              {scheduleData[activeTab].events.map((event, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row gap-4">
                  {/* Time Block */}
                  <div className="lg:w-40 flex-shrink-0 flex items-center lg:justify-end">
                    <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-lg border border-blue-100 shadow-sm w-full lg:w-auto text-center">
                      {event.time}
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1">
                    {event.type === 'single' ? (
                      <div className={`p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center min-h-[4rem] text-center whitespace-pre-line ${event.bg}`}>
                        <span>{event.content}</span>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Session 1 */}
                        <div className={`p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col ${event.session1.color}`}>
                          <div className="flex justify-between items-center mb-4 pb-3 border-b border-black/10">
                            <span className="md:hidden font-bold text-slate-500 bg-slate-200/60 px-2 py-1 rounded text-xs uppercase tracking-wider mr-auto">Salon B</span>
                            <span className="font-extrabold text-gray-700 px-3 py-1.5 bg-black/5 rounded-lg text-sm inline-block md:mx-auto shadow-sm">{event.session1.code}</span>
                          </div>
                          <ul className="space-y-3 text-sm flex-1">
                            {event.session1.papers.map((paper, pIdx) => (
                              <li key={pIdx} className="flex items-start">
                                <span className={paper === '-' ? 'hidden' : 'mr-2 text-slate-400 font-bold'}>•</span>
                                <span className="font-medium text-gray-800">{paper}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Session 2 */}
                        <div className={`p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col ${event.session2.color}`}>
                          <div className="flex justify-between items-center mb-4 pb-3 border-b border-black/10">
                            <span className="md:hidden font-bold text-slate-500 bg-slate-200/60 px-2 py-1 rounded text-xs uppercase tracking-wider mr-auto">Salon C</span>
                            <span className="font-extrabold text-gray-700 px-3 py-1.5 bg-black/5 rounded-lg text-sm inline-block md:mx-auto shadow-sm">{event.session2.code}</span>
                          </div>
                          <ul className="space-y-3 text-sm flex-1">
                            {event.session2.papers.map((paper, pIdx) => (
                              <li key={pIdx} className="flex items-start">
                                <span className={paper === '-' ? 'hidden' : 'mr-2 text-slate-400 font-bold'}>•</span>
                                <span className="font-medium text-gray-800">{paper}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Program;

