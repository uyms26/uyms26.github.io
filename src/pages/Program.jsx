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
            code: "Yazılım Sınama ve Doğrulama",
            color: "bg-gray-100",
            papers: [
              "11:15-11:45 | European Accessibility Act (Eaa) Uyumunun Test Edilebilirliği: Sürekli Teslim Süreçlerine Entegre Edilmiş Wcag Tabanlı Test Otomasyonu Üzerine Bir Vaka Çalışması\nMiraç Emektar (Virgosol); Fatih HARMANCI (VİRGOSOL BİLİŞİM VE YAZILIM ÇÖZÜMLERİ A.Ş.)*; Yasin Aktepe (Virgosol); İrem Yarar (Virgosol)",
              "11:45-12:15 | An Empirical Evaluation Of Using Large Language Models For Automated Model-Based Test Generation\nHafize Sanlı (Muğla Sıtkı Koçman Üniversitesi)*; Onur Kılınççeker (University of Antwerpen and Flanders Make vzw); Cihat Çetinkaya (Muğla Sıtkı Koçman Üniversitesi)",
              "12:15-12:45 | Structured Pruning Performance Evaluation İn Deep Learning: An Experimental Study With Cleanaı+\nOsman Çağlar (Eskişehir Osmangazi University)*; Uğur Yayan (Eskişehir Osmangazi University); Ahmet Yazıcı (Eskişehir Osmangazi University)"
            ]
          },
          session2: {
            title: "Oturum 2 (Salon C)",
            code: "Yazılım Süreçleri",
            color: "bg-gray-100",
            papers: [
              "11:15-11:45 | Beyond Practices: The Nature, Significance, And Possible Future Trajectory Of The Agile Mindset\nNecmettin Özkan (Gebze Teknik Üniversitesi)*; Mehmet Şahin Gök (Gebze Teknik Üniversitesi)",
              "11:45-12:15 | Birleştirme İsteği Süreç Otomasyonu Deneyimi: Çoklu Repo Mimarisinde Yeniden Temelleme Tabanlı Dal Birleştirme Verimliliğini Artıran Bir Yaklaşım\nAhsen İkbal Aytekin (HAVELSAN)*; Meral Özkaya Kıvcı (HAVELSAN); Ahmet Burak Çoştu (HAVELSAN)"
            ]
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
            papers: [
              "14:00-14:30 | Habokado Smart Automated Turkish News Summary Platform Software\nEmel Küpçü (Xtinge Teknoloji A.Ş.); Alptekin Küpçü (Koç University)*",
              "14:30-15:00 | Hybrid Entity Resolution İn Logistics: Llm-As-A-Judge For Offline Heuristic Improvement\nAhmet Cay (Hepsijet)*; Ali Çıltık (Hepsijet); Mücahit Kılınç (Hepsijet); İhsan Demirel (Hepsijet)",
              "15:00-15:30 | Gömülü Gerçek Zamanlı Sistemler İçin Düşük Maliyetli Ölçümleme Aracı Tasarımı Ve Uygulaması\nYiğit Arısoy (Aselsan)*"
            ]
          },
          session2: {
            title: "Oturum 4 (Salon C)",
            code: "Yazılım Gereksinim Mühendisliği",
            color: "bg-gray-100",
            papers: [
              "14:00-14:30 | Yazılım Gereksinimi Tanımlamada Akış Odaklı Yaklaşım: Aselsan’Da Kullanım Durumu Dönüşümü Deneyimi\nSüleyman Arıkan (ASELSAN)*; Adnan Kalay (ASELSAN); Ahmet Dikici (ASELSAN); Fehim Göler (ASELSAN); Yaşar Barış Ulu (ASELSAN); Levend Mehmet Mert (ASELSAN); Mustafa Kurt (ASELSAN); İbrahim Sıcakyüz (ASELSAN)",
              "14:30-15:00 | The Impact Of Stakeholder Participation On Software Requirements Elicitation Processes\nnebi yılmaz (Hacettepe University)*; Ezgi Ataker (Hacettepe university); Orçun Altındal (Hacettepe university); Metin Önder Cenk (Hacettepe university)",
              "15:00-15:30 | Analyzing Functional And Non-Functional Requirements: An Exploratory Literature Review\nnebi yilmaz (UYMS)*; yeliz yaylacı (uyms); selin kurucay (UYMS); ece omurtay (UYMS); elif aksoy (uyms)"
            ]
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
            papers: [
              "15:45-16:15 | Yayınla-Abone Ol Tabanlı Dağıtık Sistemlerde Yapısal Etkileşim Örüntülerinin Çizge Tabanlı Statik Analiz İle İncelenmesi\nMustafa Can Çalışkan (HAVELSAN A.Ş.)*; İbrahim Onuralp Yiğit (HAVELSAN A.Ş.); Feza Buzluca (İTÜ)",
              "16:15-16:45 | Cdc Based Event-Driven Architecture: State-Of-The-Practice And ”Zero-Touch” Extension\nAytunç Kurtoğlu (Hacettepe University)*; Ayça Kolukısa (Hacettepe University); Mehmet Söylemez (Ufuk University)",
              "16:45-17:15 | İletişim Ara Katmanında Modern Açık Adreslemeli Hash Tabloları İle Qos-Duyarlı Mesaj Teslimatının İyileştirilmesi\nCan Korkmaz (HAVELSAN)*; İbrahim Onuralp Yiğit (HAVELSAN A.Ş.); Selçuk Altınay (HAVELSAN A.Ş.)"
            ]
          },
          session2: {
            title: "Oturum 6 (Salon C)",
            code: "Yazılım Kalite Güvencesi ve Yönetimi",
            color: "bg-gray-100",
            papers: [
              "15:45-16:15 | A Root-Cause Analysis Approach On E-Commerce Customer Reviews Using Deep Learning\nAli Diriker (Bahçeşehir)*; Selami Bağrıyanık (Istanbul Health and Technology University)",
              "16:15-16:45 | Yapay Zeka İle Kaynak Verimli Sistem Günlüğü Analiz Sistemi\nEmre Ceyhan (GAZİ ÜNİVERSİTESİ)*; Kutlu Türkücü (GAZİ ÜNİVERSİTESİ); Murat Yılmaz (GAZİ ÜNİVERSİTESİ); Kürşat İnce (HAVELSAN A.Ş.)",
              "16:45-17:15 | Early Detection Of Executable-Quality Commits: An Empirical Study Using Lightweight And Semi-Supervised Learning\nEren İzgi (Hacettepe University); Tugba Gurgen Erdogan (Hacettepe University)*"
            ]
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
            papers: [
              "09:15-09:45 | Visualization Of Distributed Publish-Subscribe Systems Using Graph Models For Analysis\nOnurcan Erşen (HAVELSAN)*; Mustafa Can Çalışkan (HAVELSAN); İbrahim Onuralp Yiğit (HAVELSAN); Feza Buzluca (İTÜ)",
              "09:45-10:15 | Multi-Agent Large Language Model Architecture For Structural And Semantically Compatible Legal Contract Production (Akıtera)\nEmre Yiğit Öztürk (Architecht Bilişim Sistemleri ve Pazarlama Ticaret A.Ş)*; Mustafa Zeybek (Architecht Bilişim Sistemleri ve Pazarlama Ticaret A.Ş); Zehra Esgil (Architecht Bilişim Sistemleri ve Pazarlama Ticaret A.Ş); Ahmet Arslan (ENELSİS Endüstriyel Elektronik Sistemler Araştırma Geliştirme Bilişim ve Danışmanlık Sanayi ve Ticaret Limited Şirketi)",
              "10:15-11:00 | Local-First Multi-Agent Architecture For Industrial Edge Computing\nMehmet Uzunkonak (Siemens)*"
            ]
          },
          session2: {
            title: "Oturum 8 (Salon C)",
            code: "Deneysel Yazılım Mühendisliği",
            color: "bg-gray-100",
            papers: [
              "09:15-09:45 | Oltalama Tespiti İçin Salt Kodlayıcı Ve Üretici Büyük Dil Modellerinin Karşılaştırmalı Performans Analizi\nSoner Üzeyir Akar (Gebze Technical University)*; Mehmet Göktürk (Gebze Technical University)",
              "09:45-10:15 | Gnss Tabanlı Navigasyonda Çok Katmanlı Bütünlük İzleme: Klasik Raım, Araım Ve Makine Öğrenimi Yaklaşımlarının Simülasyon Ortamında Değerlendirilmesi\nBetul YENİTOPCU (Muğla Sıtkı Koçman Üniversitesi)*; Eda Taşkan (Muğla Sıtkı Koçman Üniversitesi); Mert Keleşoğlu (Muğla Sıtkı Koçman Üniversitesi); Mesut Erol (Türk Havacılık ve Uzay Sanayii A.Ş.); Cihat Çetinkaya (Muğla Sıtkı Koçman Üniversitesi)",
              "10:15-11:00 | Evaluating The Robustness Of Vulnerability Detection Models Under Semantic-Preserving Code Transformations\nİbrahim Tarakcı (Middle East Technical University)*; Selma Nazlıoğlu (Atılım University); Halit Oğuztüzün (Middle East Technical University)"
            ]
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
            papers: [
              "11:15-11:45 | Hibrit Zorluk Tabanlı Veri Seçimi İle Daha Az Veri Kullanarak Talimat Takip Yeteneğinin İyileştirilmesi\nAli Ünaldı (Gazi University)*; Murat Yılmaz (Gazi University)",
              "11:45-12:15 | Graph Neural Network-Augmented Retrieval For A Domain Expert Chatbot İn R&I Intelligence\nTolga Ayav (Izmir Yüksek Teknoloji Enstitüsü)*; Burak Korcuklu (İzmir Yüksek Teknoloji Enstitüsü)",
              "12:15-12:45 | Yüksek Yoğunluklu Finansal İşlemlerde İzolasyon Ormanlarıyla Düşük Gecikmeli Anomali Tespiti İçin Veri İşleme Başarımına Yönelik Ödünleşmeler\nBatuhan Can (İTÜ); Tolga Ovatman (İTÜ)*; Hikmet Mazmanoğlu (H3M); Utku Görkem Ketenci (H3M)"
            ]
          },
          session2: {
            title: "Oturum 10 (Salon C)",
            code: "Yazılım Sınama ve Doğrulama",
            color: "bg-gray-100",
            papers: [
              "11:15-11:45 | Siber-Fiziksel Sistemlerde Anomali Tespiti: Büyük Dil Modelleri Üzerine Karşılaştırmalı Bir Çalışma\nEşrefhan Kadıoğlu (ASELSAN); Mustafa Mert Sağlam (ASELSAN); Onur Göksel (ASELSAN)*; Bahadır Çeliktaş (ASELSAN)",
              "11:45-12:15 | Geminix Tabanlı Avrupa Hayati Bilgisayar (Evc) Sistemlerinde Hata Enjeksiyonu Yöntemi İle Emniyet-Kritik Yazılım Doğrulaması\nYUSUF ÇAĞLAYAN (ASELSAN)*",
              "12:15-12:45 | Open-Source Software Quality Comparison With Derived Quality Model\nM. Aslı Taşgetiren (Hacettepe University)*; Nebi Yılmaz (Hacettepe University); Ayça Kolukısa (Hacettepe University)"
            ]
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
            papers: [
              "14:00-14:30 | A Centralized And Scalable Software Architecture İn Satellite Integration And Egse Test Infrastructures\nTalha Sezer Cakir (Turkish Aerospace Industries Inc. )*; Mert İleri (Turkish Aerospace Industries Inc.); Necdet Engin Öztuna (Turkish Aerospace Industries Inc.)",
              "14:30-15:00 | Erişim Destekli Üretim Tabanlı Akıllı Asistan Yöntemi İle Savunma Sanayi Projelerinde Bilişsel Yükün Azaltılması İçin Bir Durum Çalışması: Bilge\nOnur Tekik (ASELSAN)*",
              "15:00-15:30 | Medimem: A Hybrid Conversational Personal Health Data Analysis Platform Based On Small Expert Models And Mcp\nCaner Tunç (Muğla Sıtkı Koçman University)*"
            ]
          },
          session2: {
            title: "Oturum 12 (Salon C)",
            code: "Yazılım Kalite Güvencesi ve Yönetimi",
            color: "bg-gray-100",
            papers: [
              "14:00-14:30 | Assessing Llms For Automated Test Reporting And Test Closure: A Controlled Multi-Model Evaluation\nCem Bağlum (Eskisehir Osmangazi University)*; Uğur Yayan (Eskisehir Osmangazi University); Ahmet Yazıcı ( Eskisehir Osmangazi University)",
              "14:30-15:00 | An Aı-Assisted Automated Testing Framework For Ring Redundancy Validation İn Industrial Networks\nMüjde CEYLAN (Siemens Türkiye)*; Selin GÜNDÜZ (Siemens Türkiye)",
              "15:00-15:30 | Do-178C Uyumlu Yazılım Yükleme Kontrolü\nYusuf Tıkman (TUSAŞ)*; İbrahim Seyfullah Babaarslan (TUSAŞ)"
            ]
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
                          <ul className="space-y-4 text-sm flex-1">
                            {event.session1.papers.map((paper, pIdx) => (
                              <li key={pIdx} className="flex items-start">
                                <span className={paper === '-' ? 'hidden' : 'mr-2 text-slate-400 font-bold mt-0.5'}>•</span>
                                <span className="font-medium text-gray-800 whitespace-pre-line">{paper}</span>
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
                          <ul className="space-y-4 text-sm flex-1">
                            {event.session2.papers.map((paper, pIdx) => (
                              <li key={pIdx} className="flex items-start">
                                <span className={paper === '-' ? 'hidden' : 'mr-2 text-slate-400 font-bold mt-0.5'}>•</span>
                                <span className="font-medium text-gray-800 whitespace-pre-line">{paper}</span>
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

