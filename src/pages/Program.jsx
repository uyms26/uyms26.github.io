
import React from 'react';
import { Link } from 'react-router-dom';
import UYMSLogo from '../assets/UYMS-logo-150x150.png';
import LandingHero from '../assets/landinghero.png';

const Program = () => {
  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      
      
      <div
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${LandingHero})` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-opacity-30 shadow-lg p-8 ">
          <div className="flex justify-center mb-8">
            <img 
              src={UYMSLogo} 
              alt="UYMS 26 Logo" 
              className="w-24 h-24 lg:w-32 lg:h-48 rounded-lg  bg-white shadow-2xl"
            />
          </div>
          <div className='backdrop-blur-md w-full max-w-2xl mx-auto p-6 rounded-lg'>
            <h1 className="text-4xl md:text-6xl text-white lg:text-7xl font-bold mb-6 leading-tight">
            UYMS 26
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto">
            17. Ulusal Yazılım Mühendisliği Sempozyumu
          </p>
            <p className="text-2xl md:text-3xl font-bold mb-2 text-white">14-16 Mayıs 2026</p>
            <p className="text-lg md:text-xl text-blue-600">Muğla Sıtkı Koçman Üniversitesi, Kötekli Kampüsü</p>

          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kayit" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Hemen Kayıt Ol
            </Link>
            <Link
              to="/bildiri-cagrisi"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Bildiri Gönder
            </Link>
          </div>
          </div>
        </div>
      </div>
      <p className='text-center text-3xl mt-100'>UMYS 26 Sempozyumunun programı yakında duyurulacaktır </p>
{/**
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Önemli Tarihler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border-l-4 border-blue-500">
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bildiri Gönderimi</h3>
              <p className="text-2xl font-bold text-blue-600">15 Şubat 2026</p>
              <p className="text-gray-600 mt-2">Son bildiri gönderim tarihi</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl border-l-4 border-green-500">
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kayıt</h3>
              <p className="text-2xl font-bold text-green-600">1 Mart 2026</p>
              <p className="text-gray-600 mt-2">Son kayıt tarihi</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl border-l-4 border-purple-500">
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sempozyum</h3>
              <p className="text-2xl font-bold text-purple-600">14-16 Mayıs 2026</p>
              <p className="text-gray-600 mt-2">Ana etkinlik tarihleri</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                UYMS 26 Hakkında
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ulusal Yazılım Mühendisliği Sempozyumu (UYMS), Türkiye yazılım sektörü ile yazılım alanında çalışmalar yapan akademisyenleri bir araya getirerek yazılım mühendisliğindeki son gelişmelerin ve araştırmaların paylaşılmasını sağlayan bir platformdur. 2003 yılından bu yana gerçekleştirilen UYMS, araştırma sonuçlarının paylaşıldığı bir ortam sağlamasının ötesinde, ulusal yazılım mühendisliği araştırmalarının geleceğinin şekillenmesinde etkin rol oynamaktadır. Sempozyumun bu sene de tüm katılımcıların yararlanacağı geniş bir içerik taşıması hedeflenmektedir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Bu yıl 26. kez düzenlenen sempozyum, Muğla Sıtkı Koçman Üniversitesi ev sahipliğinde, 
                güzel Muğla şehrinde gerçekleştirilecektir.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Katılımcı</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-md">
                  <div className="text-2xl font-bold text-green-600">100+</div>
                  <div className="text-sm text-gray-600">Bildiri</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Muğla Sıtkı Koçman Üniversitesi</h3>
              <p className="text-blue-100 mb-6">
                Kötekli Kampüsü, Muğla'nın kalbinde yer alan modern eğitim kurumu
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  <span>Modern konferans salonları</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  <span>Teknolojik altyapı</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  <span>Ulaşım kolaylığı</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-300 mr-3">✓</span>
                  <span>Konaklama seçenekleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



   
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            İletişim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">
                    <div className="flex justify-center text-4xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        </div>  
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">E-posta</h3>
              <p className="text-blue-600">uymsempozyumu@gmail.com</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">
                  <div className="flex justify-center text-4xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        </div>  
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Telefon</h3>
              <p className="text-green-600">+90 252 211 11 11</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="flex justify-center text-4xl mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Adres</h3>
              <p className="text-purple-600">Muğla Sıtkı Koçman Üniversitesi</p>
            </div>
          </div>
        </div>
      </section>

       */}
    </div>
  );
};

export default Program;
