import React from 'react';

const Konaklama = () => {
  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Konaklama Bilgileri
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mt-32 max-w-4xl mx-auto">
            UYMS 26 Sempozyumu için  konaklama seçenekleri duyurulacaktır.
          </p>
        </div>
     {/**  <div className="w-full max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Konaklama Bilgileri
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
            UYMS 26 Sempozyumu için özel fiyatlarla anlaşmalı oteller ve konaklama seçenekleri
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <div className="lg:col-span-2 space-y-8">
        
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                                <svg className="w-8 h-8 text-blue-600 mr-3" viewBox="0 0 512 512" fill="currentColor">
                  <g>
                    <path d="M407.788,190.202h-92.16V82.62c-0.01-45.642-36.978-82.61-82.62-82.62H104.212 C58.57,0.01,21.602,36.978,21.591,82.62V512H58.6V82.62c0.01-12.65,5.08-23.936,13.363-32.249 c8.314-8.284,19.599-13.353,32.249-13.364h128.796c12.65,0.01,23.936,5.08,32.249,13.364c8.283,8.313,13.353,19.599,13.363,32.249 V512h37.008V227.21h92.16c12.65,0.01,23.936,5.08,32.249,13.364c8.284,8.313,13.353,19.599,13.364,32.249V512h37.008V272.822 C490.398,227.18,453.43,190.212,407.788,190.202z"></path>
                    <rect x="111.321" y="131.597" width="31.808" height="53.976"></rect>
                    <rect x="189.975" y="131.597" width="31.808" height="53.976"></rect>
                    <rect x="111.321" y="254.971" width="31.808" height="53.976"></rect>
                    <rect x="189.975" y="254.971" width="31.808" height="53.976"></rect>
                    <rect x="111.321" y="378.345" width="31.808" height="53.976"></rect>
                    <rect x="189.975" y="378.345" width="31.808" height="53.976"></rect>
                    <rect x="363.47" y="289.67" width="31.808" height="53.976"></rect>
                    <rect x="363.47" y="407.903" width="31.808" height="53.976"></rect>
                  </g>
                </svg>
                Anlaşmalı Oteller
              </h2>
              <div className="space-y-6">
        
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Muğla Grand Hotel</h3>
                          
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        <strong>Adres:</strong> Atatürk Bulvarı No:123, Muğla Merkez<br />
                        <strong>Telefon:</strong> +90 252 123 45 67
                      </p>
                      
                      
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-3xl font-bold text-blue-600 mb-2">₺450</div>
                      <div className="text-sm text-gray-600 mb-3">gecelik kişi başı</div>
                    </div>
                  </div>
                </div>

                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Kötekli Resort Hotel</h3>
                        
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        <strong>Adres:</strong> Kötekli Mahallesi, Muğla Sıtkı Koçman Üniversitesi Yanı<br />
                        <strong>Telefon:</strong> +90 252 234 56 78
                      </p>
                      
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-3xl font-bold text-green-600 mb-2">₺380</div>
                      <div className="text-sm text-gray-600 mb-3">gecelik kişi başı</div>
                      
                    </div>
                  </div>
                </div>

                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">Menteşe Business Hotel</h3>
                          
                        </div>
                      </div>
                      <p className="text-gray-700 mb-3">
                        <strong>Adres:</strong> Menteşe Mahallesi, İş Merkezi No:45<br />
                        <strong>Telefon:</strong> +90 252 345 67 89
                      </p>
                     
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-3xl font-bold text-purple-600 mb-2">₺320</div>
                      <div className="text-sm text-gray-600 mb-3">gecelik kişi başı</div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                Konaklama Paketleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 text-center">
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Üç Kişilik Oda</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-3">₺1,200</div>
                  <p className="text-gray-600 mb-4">2 gece konaklama</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Standart oda</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Kahvaltı dahil</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Ücretsiz WiFi</span>
                    </li>
                  </ul>
                  
                </div>

                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-400 text-center relative">
                  
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">İki Kişilik Oda</h3>
                  <div className="text-3xl font-bold text-yellow-600 mb-3">₺1,800</div>
                  <p className="text-gray-600 mb-4">2 gece konaklama</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Standart oda</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Kahvaltı dahil</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Ücretsiz WiFi</span>
                    </li>
            
                  </ul>
                  
                </div>

                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-300 text-center">
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Tek Kişilik Oda</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-3">₺1,500</div>
                  <p className="text-gray-600 mb-4">2 gece konaklama</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Standart oda</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Kahvaltı dahil</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-sm">Ücretsiz WiFi</span>
                    </li>
                    
                  </ul>
                  
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                Rezervasyon Bilgileri
              </h2>
              <div className="space-y-6">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-indigo-800 mb-3">🔑 Rezervasyon Koşulları</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Rezervasyonlar en az 30 gün önceden yapılmalıdır</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Ödeme rezervasyon sırasında yapılmalıdır</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>İptal işlemleri 7 gün önceden bildirilmelidir</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Erken geliş ve geç çıkış talepleri otel ile koordine edilir</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-3">📅 Önemli Tarihler</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-teal-700 mb-2">Son Rezervasyon Tarihi</h4>
                  <p className="text-sm text-gray-700">15 Şubat 2025</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-teal-700 mb-2">Check-in</h4>
                      <p className="text-sm text-gray-700">14 Mart 2025 - 14:00</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-teal-700 mb-2">Check-out</h4>
                      <p className="text-sm text-gray-700">17 Mart 2025 - 11:00</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-teal-700 mb-2">İptal Son Tarihi</h4>
                      <p className="text-sm text-gray-700">8 Mart 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-8">
           

            
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-yellow-600 mr-3">📞</span>
                İletişim
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-600 mr-3 text-xl">📱</span>
                  <div>
                    <span className="block text-sm text-gray-600">Telefon</span>
                    <span className="text-lg font-semibold">+90 252 123 45 67</span>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-600 mr-3 text-xl">✉️</span>
                  <div>
                    <span className="block text-sm text-gray-600">E-mail</span>
                    <a
                      href="mailto:konaklama@uyms26.org"
                      className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
                    >
                      konaklama@uyms26.org
                    </a>
                  </div>
                </div>
             
              </div>
            </div>

            
          </div>
        </div>

        
      </div>*/}
    </div>
  );
};

export default Konaklama;
