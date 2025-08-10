import React from 'react';

const BildiriGonderimi = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bildiri Gönderimi
          </h1>
          
        </div>

        <div >
          {/* Main Content - Committee Structure */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Eş Başkanlar */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-black mb-10 flex items-center">
                  Bildiri Gönderimi
                </h2>
                Bildiri gönderimi easychair.org etkinlik yönetim sistemi üzerinden yapılmaktadır. Bildiri göndermek için buraya tıklayınız. Bildiriler Türkçe ya da İngilizce olarak bildiri kitabı şablonuna uygun şekilde hazırlanmalıdır. Bildirilerde hem Türkçe hem İngilizce başlık, özet ve anahtar kelimeler bulunmalıdır. Bildirilere üstbilgi (İng. header), altbilgi (İng. footer) ve sayfa numarası eklenmemelidir. Bildiriler sisteme MS-Word biçiminde yüklenmelidir. Kabul edilen bildirilerin yazarlarından en az birinin konferansa kayıt olması ve bildiriyi sunması zorunludur. Kabul edilen ve sunulan tüm bildiriler sempozyum bildiri kitabında yayımlanacaktır.
              </div>

              {/* Organizasyon Komitesi */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-black mb-10 flex items-center">
                  Teknik ve Bilimsel Bildiriler
                </h2>
                Teknik bildiriler, konular bölümünde listelenenlerle sınırlı olmadan, yazılım mühendisliği konularında yapılan araştırma ve uygulama çalışmalarını içermektedir. Teknik bildiriler tam metin üzerinden değerlendirilecektir. Teknik bildiriler en fazla 12 sayfa olmalıdır.
              </div>

              {/* Yayınlama Sorumlusu */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-black mb-10 flex items-center">
                  
                  Deneyim Bildirileri
                </h2>
                Deneyim bildirileri, yazılım mühendisliği teknikleri, araçları ve/veya süreçlerinin belli alanlara uygulanması veya özgün bir yazılım geliştirilmesi sonucunda elde edilen deneyim ve bulguları içermelidir. Deneyim bildirilerinde deneyimin elde edildiği çalışmaya veya ürün geliştirmeye başlamanın temelindeki motivasyonun belirtilmesine, elde edilen sonuçların değerlendirilmesine ve olumlu ya da olumsuz gözlemlerin paylaşılmasına önem verilmelidir. Deneyim bildirileri tam metin üzerinden değerlendirilecektir. Deneyim bildirileri en fazla 6 sayfa olmalıdır.
              </div>

              {/* Web Yönetimi */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold text-black mb-10 flex items-center">
                  
                  Eğitim Seminerleri

                </h2>
                Eğitim seminerleri yazılım mühendisliği alanının pratik uygulama tekniklerini, standartları ve uygulamaya dönük teorik konuları içeren sunumlar olarak planlanmaktadır. Seminerler yazılım mühendisliği ile ilgili konuları bilimsel ve bağımsız bir tarzda ele almalıdır. Bu bağlamda, ticari ürün tanıtımları ve pazarlama temelli öneriler eğitim semineri olarak değerlendirilmemektedir. Seminer önerileri, önerenin isim ve iletişim bilgilerini, seminerin amaç ve hedefini, kapsamını ve içeriğini net olarak belirtmelidir.
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default BildiriGonderimi;
