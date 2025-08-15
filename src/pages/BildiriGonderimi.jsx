import React from 'react';
import informationIcon from '../assets/information.svg';

const BildiriGonderimi = () => {
  return (
    <div className="min-h-screen font-serif bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="lg:col-span-2 text-center mb-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bildiri Gönderimi
            </h1>
            <p> 
              UYMS 26 Sempozyumu'na bildiri göndermek için gerekli bilgiler ve yönergeler yakında paylaşılacaktır.
            </p>

  
                
          </div>


    <div className="lg:col-span-2 text-2xl rounded text-justify ">
      
                  <p>
                  The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.                    
                  </p>
                  <p>
                Konferansın hakem değerlendirme sürecinin yönetimi için Microsoft CMT hizmeti kullanılmıştır. Bu hizmet Microsoft tarafından ücretsiz olarak sağlanmıştır ve Azure bulut hizmetleri ile yazılım geliştirme ve destek masrafları da dahil olmak üzere tüm giderler Microsoft tarafından karşılanmıştır.
                  </p>
                
    </div>


          {/*
          <div className="space-y-8 flex flex-col lg:flex-row mb-16 lg:space-y-0 lg:space-x-8 col-span-1 lg:col-span-2">
            <div className="flex-1 space-y-8">
                <div className="bg-white  rounded-2xl shadow-lg p-2 h-3/4">
                  <h2 className="text-xl  font-bold text-black mb-2 flex items-center">
                    Bildiri Gönderimi
                  </h2>
                  <p className='text-base'>
                  Bildiri gönderimi easychair.org etkinlik yönetim sistemi üzerinden yapılmaktadır. Bildiri göndermek için buraya tıklayınız. Bildiriler Türkçe ya da İngilizce olarak bildiri kitabı şablonuna uygun şekilde hazırlanmalıdır. Bildirilerde hem Türkçe hem İngilizce başlık, özet ve anahtar kelimeler bulunmalıdır. Bildirilere üstbilgi (İng. header), altbilgi (İng. footer) ve sayfa numarası eklenmemelidir. Bildiriler sisteme MS-Word biçiminde yüklenmelidir. Kabul edilen bildirilerin yazarlarından en az birinin konferansa kayıt olması ve bildiriyi sunması zorunludur. Kabul edilen ve sunulan tüm bildiriler sempozyum bildiri kitabında yayımlanacaktır.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-4 h-3/4">
                  <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Teknik ve Bilimsel Bildiriler
                </h2>
                  <p className='text-base'>
                  Teknik bildiriler, konular bölümünde listelenenlerle sınırlı olmadan, yazılım mühendisliği konularında yapılan araştırma ve uygulama çalışmalarını içermektedir. Teknik bildiriler tam metin üzerinden değerlendirilecektir. Teknik bildiriler en fazla 12 sayfa olmalıdır.
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-4 h-3/4">
                  <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Deneyim Bildirileri
                </h2>
                  <p className='text-base'>
                  Deneyim bildirileri, yazılım mühendisliği teknikleri, araçları ve/veya süreçlerinin belli alanlara uygulanması veya özgün bir yazılım geliştirilmesi sonucunda elde edilen deneyim ve bulguları içermelidir. Deneyim bildirilerinde deneyimin elde edildiği çalışmaya veya ürün geliştirmeye başlamanın temelindeki motivasyonun belirtilmesine, elde edilen sonuçların değerlendirilmesine ve olumlu ya da olumsuz gözlemlerin paylaşılmasına önem verilmelidir. Deneyim bildirileri tam metin üzerinden değerlendirilecektir. Deneyim bildirileri en fazla 6 sayfa olmalıdır.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-4 h-3/4">
                  <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Eğitim Seminerleri
                </h2>
                  <p className='text-base'>
                  Eğitim seminerleri yazılım mühendisliği alanının pratik uygulama tekniklerini, standartları ve uygulamaya dönük teorik konuları içeren sunumlar olarak planlanmaktadır. Seminerler yazılım mühendisliği ile ilgili konuları bilimsel ve bağımsız bir tarzda ele almalıdır. Bu bağlamda, ticari ürün tanıtımları ve pazarlama temelli öneriler eğitim semineri olarak değerlendirilmemektedir. Seminer önerileri, önerenin isim ve iletişim bilgilerini, seminerin amaç ve hedefini, kapsamını ve içeriğini net olarak belirtmelidir.
                </p>
              </div>
            </div>
          </div>*/}

          
        </div>
      </div>
    </div>
  );
};

export default BildiriGonderimi;
