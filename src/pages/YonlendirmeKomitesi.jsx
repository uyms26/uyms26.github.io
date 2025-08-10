import React from 'react';

const ProgramKomitesi = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
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
              {/* Eş Başkanlar */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  Program Komitesi Eş Başkanları
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
                  Program Komitesi
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

          

            

           


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgramKomitesi;
