import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import papersData from '../data/papers.json';

const renderPaper = (paper, pIdx, onClickPaper) => {
  if (!paper) return null;

  if (paper.isChair) {
    return (
      <div key={`chair-${pIdx}`} className="w-full text-center py-2.5 mb-1 bg-blue-50/80 text-blue-800 rounded-lg font-bold border border-blue-100 text-[14px] shadow-sm">
        {paper.title}
      </div>
    );
  }

  const { title, authors, time, abstract } = paper;

  return (
    <div
      key={pIdx}
      onClick={() => onClickPaper({ title, authorsList: authors, time, abstract })}
      className="bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden transition-all hover:shadow-md hover:border-blue-200 group cursor-pointer w-full text-justify"
    >
      {time && (
        <div className="bg-blue-600 w-full text-center text-white font-bold px-3 py-2 text-[13px] border-b border-blue-700/50 group-hover:bg-blue-700 transition-colors">
          {time}
        </div>
      )}
      <div className="flex-1 w-full flex flex-col p-4 pt-4">
        <h4 className="font-bold text-gray-800 text-[14px] sm:text-[15px] leading-snug mb-2 w-full">{title}</h4>
        {authors && authors.length > 0 && (
          <>
            <hr className="w-full border-t border-gray-600 mb-2" />
            <p className="text-gray-600 text-[13px] leading-relaxed w-full">
              {authors.join(', ')}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const Program = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPaper, setSelectedPaper] = useState(null);

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
            code: "Yazılım Sınama ve Doğrulama",
            color: "bg-gray-100",
            papers: papersData["Oturum 1"] || []
          },
          session2: {
            title: "Oturum 2 (Salon C)",
            code: "Yazılım Süreçleri",
            color: "bg-gray-100",
            papers: papersData["Oturum 2"] || []
          }
        },
        { time: "12:45 - 14:00", type: "single", content: "Öğle Yemeği", bg: "bg-yellow-300 font-semibold" },
        {
          time: "14:00 - 15:30",
          type: "split",
          session1: {
            title: "Oturum 3 (Salon B)",
            code: "Yenilikçi Yazılım Uygulamaları ve Çözümleri",
            color: "bg-gray-100",
            papers: papersData["Oturum 3"] || []
          },
          session2: {
            title: "Oturum 4 (Salon C)",
            code: "Yazılım Gereksinim Mühendisliği",
            color: "bg-gray-100",
            papers: papersData["Oturum 4"] || []
          }
        },
        { time: "15:30 - 15:45", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        {
          time: "15:45 - 17:15",
          type: "split",
          session1: {
            title: "Oturum 5 (Salon B)",
            code: "Dağıtık Sistemler için Yazılım Mühendisliği",
            color: "bg-gray-100",
            papers: papersData["Oturum 5"] || []
          },
          session2: {
            title: "Oturum 6 (Salon C)",
            code: "Yazılım Kalite Güvencesi ve Yönetimi",
            color: "bg-gray-100",
            papers: papersData["Oturum 6"] || []
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
            code: "Yenilikçi Yazılım Uygulamaları ve Çözümleri",
            color: "bg-gray-100",
            papers: papersData["Oturum 7"] || []
          },
          session2: {
            title: "Oturum 8 (Salon C)",
            code: "Deneysel Yazılım Mühendisliği",
            color: "bg-gray-100",
            papers: papersData["Oturum 8"] || []
          }
        },
        { time: "11:00 - 11:15", type: "single", content: "Çay / Kahve Arası", bg: "bg-yellow-300 font-semibold text-yellow-900" },
        {
          time: "11:15 - 12:45",
          type: "split",
          session1: {
            title: "Oturum 9 (Salon B)",
            code: "Yenilikçi Yazılım Uygulamaları ve Çözümleri",
            color: "bg-gray-100",
            papers: papersData["Oturum 9"] || []
          },
          session2: {
            title: "Oturum 10 (Salon C)",
            code: "Yazılım Sınama ve Doğrulama",
            color: "bg-gray-100",
            papers: papersData["Oturum 10"] || []
          }
        },
        { time: "12:45 - 14:00", type: "single", content: "Öğle Yemeği", bg: "bg-yellow-300 font-semibold" },
        {
          time: "14:00 - 15:30",
          type: "split",
          session1: {
            title: "Oturum 11 (Salon B)",
            code: "Yenilikçi Yazılım Uygulamaları ve Çözümleri",
            color: "bg-gray-100",
            papers: papersData["Oturum 11"] || []
          },
          session2: {
            title: "Oturum 12 (Salon C)",
            code: "Yazılım Kalite Güvencesi ve Yönetimi",
            color: "bg-gray-100",
            papers: papersData["Oturum 12"] || []
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
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Modal */}
      {selectedPaper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedPaper(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors p-2 rounded-full hover:bg-gray-100"
              onClick={() => setSelectedPaper(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-4 mt-2">
              {selectedPaper.time && (
                <span className="bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-md text-sm border border-blue-100/50">
                  {selectedPaper.time}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-tight">{selectedPaper.title}</h3>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 border-b pb-1">Yazarlar</h4>
              <p className="text-gray-700">
                {selectedPaper.authorsList.join(', ')}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 border-b pb-1">Özet</h4>
              <p className="text-gray-600 leading-relaxed italic text-justify bg-gray-50 p-4 rounded-xl border border-gray-100">
                {selectedPaper.abstract || "Bu bildiri için henüz bir özet metni sisteme girilmemiştir."}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm">
          Sempozyum Programı
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Sempozyum boyunca sunulacak bildiriler ve saatleri aşağıda yer almaktadır.
        </p>



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
            {scheduleData.map((dayData, tabIdx) => (
              <div
                key={tabIdx}
                className={`${activeTab === tabIdx ? 'block' : 'hidden print:block'} print:min-h-screen break-before-page first:break-before-auto`}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 pb-4 border-b text-center">
                  {dayData.date} - {dayData.dayName} Programı
                </h2>
                <div className="space-y-6">
                  {dayData.events.map((event, idx) => {
                    let header = null;
                    if (tabIdx !== 2) {
                      const isFirstSplit = event.type === 'split' && dayData.events.findIndex(e => e.type === 'split') === idx;

                      if (idx === 0) {
                        if (event.type === 'single') {
                          header = (
                            <div className="hidden md:flex flex-row gap-4 mb-6">
                              <div className="lg:w-40 flex-shrink-0"></div>
                              <div className="flex-1">
                                <div className="bg-slate-100 text-slate-700 font-bold text-xl py-3 rounded-xl border border-slate-200 shadow-sm text-center uppercase tracking-wide">
                                  Salon B
                                </div>
                              </div>
                            </div>
                          );
                        } else if (event.type === 'split') {
                          header = (
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
                          );
                        }
                      } else if (isFirstSplit) {
                        header = (
                          <div className="hidden md:flex flex-row gap-4 mb-6 mt-8">
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
                        );
                      }
                    }

                    return (
                      <React.Fragment key={idx}>
                        {header}
                        <div className="flex flex-col lg:flex-row gap-4">
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
                                  <div className="space-y-3 flex-1 mt-2">
                                    {event.session1.papers.map((paper, pIdx) => renderPaper(paper, pIdx, setSelectedPaper))}
                                  </div>
                                </div>

                                {/* Session 2 */}
                                <div className={`p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col ${event.session2.color}`}>
                                  <div className="flex justify-between items-center mb-4 pb-3 border-b border-black/10">
                                    <span className="md:hidden font-bold text-slate-500 bg-slate-200/60 px-2 py-1 rounded text-xs uppercase tracking-wider mr-auto">Salon C</span>
                                    <span className="font-extrabold text-gray-700 px-3 py-1.5 bg-black/5 rounded-lg text-sm inline-block md:mx-auto shadow-sm">{event.session2.code}</span>
                                  </div>
                                  <div className="space-y-3 flex-1 mt-2">
                                    {event.session2.papers.map((paper, pIdx) => renderPaper(paper, pIdx, setSelectedPaper))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Program;

