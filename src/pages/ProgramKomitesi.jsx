import React from 'react';

const ProgramKomitesi = () => {
  const members = [
    "Mehmet Aksit, University of Twente (Emeritus) & Waddem",
    "Mehmet Aktaş, Yıldız Teknik Üniversitesi & Finnet",
    "Baris Aktemur, Intel",
    "Onur Aktuğ, ASELSAN",
    "Haluk Altunel, Dgpays",
    "Merve Astekin, SINTEF",
    "Tolga Ayav, İzmir Yüksek Teknoloji Enstitüsü",
    "Fatma Basak Aydemir, Utrecht University",
    "Önder Babur, Wageningen University & Research",
    "Selami Bağrıyanık, İstanbul Sağlık ve Teknoloji Üniversitesi",
    "Tuna Başıbüyük, ASELSAN",
    "Fevzi Belli, İzmir Yüksek Teknoloji Enstitüsü",
    "Aysu Betin Can, Colorado School of Mines",
    "Feza Buzluca, İstanbul Teknik Üniversitesi",
    "Çağatay Çatal, Qatar University",
    "Moharram Challenger, University of Antwerp",
    "Ahmet Coşkunçay, Atatürk Üniversitesi",
    "Cihat Çetinkaya, Muğla Sıtkı Koçman Üniversitesi",
    "Onur Demirors, İzmir Yüksek Teknoloji Enstitüsü",
    "Ali Dogru, Orta Doğu Teknik Üniversitesi & UT San Antonio",
    "Mustafa Dursun, ASELSAN",
    "Ferhat Erata, Yale University",
    "R. Cenk Erdur, Ege Üniversitesi",
    "Ersin Ersoy, Paycell & Alanya Üniversitesi",
    "Yusuf Erten, İzmir Ekonomi Üniversitesi",
    "Vahid Garousi, Queen's University Belfast",
    "Cagdas Gerede, Ankara Yıldırım Beyazıt Üniversitesi",
    "Sinem Getir Yaman, Ege Üniversitesi, University of York",
    "Bahar Gezici Geçer, Osmaniye Korkut Ata Üniversitesi",
    "Görkem Giray, Independent Researcher",
    "Arda Goknil, SINTEF",
    "Mehmet Göktürk, Gebze Teknik Üniversitesi",
    "Tugba Gurgen Erdogan, Hacettepe Üniversitesi",
    "Selçuk Güceğlioğlu, T.C. Başbakanlık",
    "Önder Gürcan, NORCE",
    "Tuna Hacaloglu, ETS",
    "Emrah Inan, İzmir Yüksek Teknoloji Enstitüsü",
    "Oya Kalıpsız, Yıldız Teknik Üniversitesi",
    "Pinar Karagoz, Orta Doğu Teknik Üniversitesi",
    "Geylani Kardas, Ege Üniversitesi",
    "Karani Kardaş, Udemy",
    "Kamer Kaya, Sabancı Üniversitesi",
    "Onur Kilincceker, University of Antwerp",
    "Altan Kocyigit, Orta Doğu Teknik Üniversitesi",
    "Ayça Kolukısa, Hacettepe Üniversitesi",
    "Hasan Konya, ASELSAN",
    "Yavuz Köroğlu, İstanbul Teknik Üniversitesi",
    "Neslihan Küçükateş Ömüral, Borgwarner",
    "Alptekin Küpçü, Koç Üniversitesi",
    "Emel Küpçü, Istanbul Bilgi Üniversitesi",
    "Tolga Ovatman, İstanbul Teknik Üniversitesi",
    "Mert Özkaya, Yeditepe Üniversitesi",
    "Rana Özakıncı, HAVELSAN",
    "Bilge Say, Independent Researcher",
    "Alper Şen, Boğaziçi Üniversitesi",
    "Bedir Tekinerdogan, Wageningen University and Research",
    "Barış Tezel, Dokuz Eylül Üniversitesi",
    "Yasemin Topaloglu, Ege Üniversitesi",
    "Ayse Tosun, İstanbul Teknik Üniversitesi",
    "Tugkan Tuglular, İzmir Yüksek Teknoloji Enstitüsü",
    "Eray Tuzun, Bilkent Üniversitesi",
    "Murat Osman Ünalır, Ege Üniversitesi",
    "Hüseyin Ünlü, İzmir Yüksek Teknoloji Enstitüsü",
    "Ali Yazıcı, Atılım Üniversitesi",
    "Filiz Yeşildoruk, DefineX",
    "Cemal Yılmaz, Sabancı Üniversitesi",
    "Murat Yılmaz, Gazi Üniversitesi",
    "Gokcen Yilmaz, University of Exeter",
    "Celal Ziftci, Google",
  ];
  return (
    <div className="min-h-screen font-serif bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Program Komitesi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UYMS 26 Sempozyumu'nun başarıyla gerçekleştirilmesi için çalışan değerli komite üyelerimiz
          </p>
        </div>

        <div >
          {/* Main Content - Committee Structure */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Program Komitesi Başkanları
                </h2>
                 <div className="space-y-2">
                  <div className="flex items-center p-3 bg-blue-50 rounded-l-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Deniz Akdur, Aselsan</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-r-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Hasan Sözer, Özyeğin Üniversitesi</span>
                  </div>
                </div>
                
              </div>

              
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Program Komitesi
                </h2>
                <div className="space-y-2 grid grid-cols-2">
    {members.map((member, index) => (
        <div
          key={index}
          className={`flex items-center p-3 bg-green-50 ${
            index % 2 === 0 ? "rounded-l-lg" : "rounded-r-lg"
          }`}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
          <span className="text-gray-800">{member}</span>
        </div>
      ))}





                </div>
              </div>

          

            


             
            </div>
          </div>

          {/* Right Sidebar - Contact Information 
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.562a4.004 4.004 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.006 4.006 0 00-2.39.033z" clipRule="evenodd" />
                </svg>
                İletişim
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">E-posta</h3>
                    <p className="text-gray-600">uyms26@mu.edu.tr</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Adres</h3>
                    <p className="text-gray-600">Muğla Sıtkı Koçman Üniversitesi<br />Muğla, Türkiye</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Tarih</h3>
                    <p className="text-gray-600">26-28 Haziran 2024</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Hızlı İletişim</h3>
                <p className="text-blue-700 text-sm">
                  Sempozyum hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin.
                </p>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default ProgramKomitesi;
