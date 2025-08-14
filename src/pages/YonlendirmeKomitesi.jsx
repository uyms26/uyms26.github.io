import React from 'react';

const ProgramKomitesi = () => {
  return (
    <div className="min-h-screen font-serif bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Yönlendirme Komitesi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            UYMS 26 Sempozyumu'nun başarıyla gerçekleştirilmesi için çalışan değerli komite üyelerimiz
          </p>
        </div>

        <div >
        
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
        
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Yönlendirme Komitesi
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Ali Doğru, ODTÜ & University of Texas at San Antonia</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">⁠Ayça Kolukısa Tarhan, Hacettepe Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">⁠Cemal Yılmaz, Sabancı Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">⁠Geylani Kardaş, Ege Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">⁠Murat Yılmaz, Gazi Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Oğuz Dikenelli, Ege Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Onur Demirörs, İzmir Yüksek Teknoloji Enstitüsü</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Oya Kalıpsız, Yıldız Teknik Üniversitesi</span>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">Yasemin Topaloğlu, Ege Üniversitesi</span>
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
