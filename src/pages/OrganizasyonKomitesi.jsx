import React from 'react';

const OrganizasyonKomitesi = () => {
  return (
    <div className="min-h-screen font-serif bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Organizasyon Komitesi
          </h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UYMS 26 Sempozyumu'nun başarıyla gerçekleştirilmesi için çalışan değerli komite üyelerimiz
          </p>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Content - Committee Structure */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Eş Başkanlar */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Organizasyon Komitesi Eş Başkanları
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Ahmet Coşkunçay, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Barış Özyer, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Organizasyon Komitesi */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Organizasyon Komitesi
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Bilal Usanmaz, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Bülent Çavuşoğlu, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Duygu Fındık Coşkunçay, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Faruk Baturalp Günay, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Ferhat Bozkurt, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Gülşah Tümüklü Özyer, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Mete Yağanoğlu, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Yayınlama Sorumlusu */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  Yayınlama Sorumlusu
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Duygu Fındık Coşkunçay, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Gülşah Tümüklü Özyer, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Web Yönetimi */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Web Yönetimi
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Ferhat Bozkurt, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-indigo-50 rounded-lg">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Satuk Buğrahan Öztürk, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Tanıtım - İletişim */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 2.004a2 2 0 00-.591 1.61v10.782a2 2 0 00.591 1.61l7.893 7.893a2 2 0 002.828 0l7.893-7.893a2 2 0 00.591-1.61V3.614a2 2 0 00-.591-1.61L12.724.111a2 2 0 00-2.828 0L2.003 2.004z" />
                    <path d="M7 6a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h6a1 1 0 100-2H7z" />
                  </svg>
                  Tanıtım - İletişim
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Mete Yağanoğlu, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Bütçe - Sponsorluk Sorumlusu */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-yellow-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Bütçe - Sponsorluk Sorumlusu
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Bilal Usanmaz, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Bülent Çavuşoğlu, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Faruk Baturalp Günay, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>

              {/* Yerel Düzenleme Ekibi */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Yerel Düzenleme Ekibi
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Buket Dinç, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Ebru Erdem, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Esra Çelik, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Mustafa Furkan Keskenler, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Özge Albayrak Ünal, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Rabiya Kılıç, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Raziye Kılıç, Atatürk Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Satuk Buğrahan Öztürk, Atatürk Üniversitesi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Contact Information */}
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
                    <p className="text-gray-600">uymsempozyumu@gmail.com</p>
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
                    <p className="text-gray-600">14-16 Mayıs 2026</p>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizasyonKomitesi;
