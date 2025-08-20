import React from 'react';
import informationIcon from '../assets/information.svg';

const BildiriGonderimi = () => {
  return (
    <div className="min-h-screen font-serif bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content and right sidebar */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Main area: main card + 3 cards */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Bildiri Gönderimi card on top */}
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
              <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                Bildiri Gönderimi
              </h2>
             
              <p className='text-base'>
                  Bildiri gönderimi <a href="https://cmt3.research.microsoft.com/UYMS2026" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">CMT (Conference Management Toolkit)</a> sistemi üzerinden gerçekleştirilecektir. Bildiri gönderebilmek için öncelikle CMT sistemine <a href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">hesap oluşturmanız</a> gerekmektedir. Hesap oluşturma ve başvuru süreciyle ilgili detaylı bilgiye <a href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">buradan</a> ulaşabilirsiniz. Bildiriler Türkçe veya İngilizce olarak, bildiri kitabı şablonuna uygun şekilde hazırlanmalıdır. Her bildiride hem Türkçe hem de İngilizce başlık, özet ve anahtar kelimeler bulunmalıdır. Bildirilere üstbilgi (header), altbilgi (footer) ve sayfa numarası eklenmemelidir. Bildiriler MS-Word formatında sisteme yüklenmelidir. Kabul edilen bildirilerin yazarlarından en az birinin konferansa kayıt olması ve bildiriyi sunması zorunludur. Kabul edilen ve sunulan tüm bildiriler sempozyum bildiri kitabında yayımlanacaktır.
              </p>
              <p className="mb-2 text-base text-blue-900 font-semibold">
                  Bildirinizi göndermek için <a href="https://cmt3.research.microsoft.com/UYMS2026" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline hover:text-blue-900">UYMS 2026 CMT başvuru sayfasını</a> kullanabilirsiniz.
                </p>
            </div>
            {/* 3 cards in a row below */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Teknik ve Bilimsel Bildiriler
                </h2>
                <p className='text-base'>
                  Teknik bildiriler, konular bölümünde listelenenlerle sınırlı olmadan, yazılım mühendisliği konularında yapılan araştırma ve uygulama çalışmalarını içermektedir. Teknik bildiriler tam metin üzerinden değerlendirilecektir. Teknik bildiriler en fazla 12 sayfa olmalıdır.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Deneyim Bildirileri
                </h2>
                <p className='text-base'>
                  Deneyim bildirileri, yazılım mühendisliği teknikleri, araçları ve/veya süreçlerinin belli alanlara uygulanması veya özgün bir yazılım geliştirilmesi sonucunda elde edilen deneyim ve bulguları içermelidir. Deneyim bildirilerinde deneyimin elde edildiği çalışmaya veya ürün geliştirmeye başlamanın temelindeki motivasyonun belirtilmesine, elde edilen sonuçların değerlendirilmesine ve olumlu ya da olumsuz gözlemlerin paylaşılmasına önem verilmelidir. Deneyim bildirileri tam metin üzerinden değerlendirilecektir. Deneyim bildirileri en fazla 6 sayfa olmalıdır.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
                <h2 className="text-xl font-bold text-black mb-2 flex items-center">
                  Eğitim Seminerleri
                </h2>
                <p className='text-base'>
                  Eğitim seminerleri yazılım mühendisliği alanının pratik uygulama tekniklerini, standartları ve uygulamaya dönük teorik konuları içeren sunumlar olarak planlanmaktadır. Seminerler yazılım mühendisliği ile ilgili konuları bilimsel ve bağımsız bir tarzda ele almalıdır. Bu bağlamda, ticari ürün tanıtımları ve pazarlama temelli öneriler eğitim semineri olarak değerlendirilmemektedir. Seminer önerileri, önerenin isim ve iletişim bilgilerini, seminerin amaç ve hedefini, kapsamını ve içeriğini net olarak belirtmelidir.
                </p>
              </div>
            </div>
          </div>
          {/* ACKNOWLEDGMENT: right sidebar */}
          <div className="mt-8 lg:mt-0 lg:col-span-1 flex flex-col items-center lg:items-end">
            <div className="bg-blue-50 rounded-xl p-6 w-full max-w-xs lg:max-w-xs h-full flex flex-col">
              <h3 className="text-l font-bold text-blue-800 mb-3 flex items-center">
                <img src={informationIcon} alt="Bilgi" className="w-6 h-6 mr-2" />
                ACKNOWLEDGMENT
              </h3>
              <p className="text-gray-700 mb-8">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
              <h3 className="text-l font-bold text-blue-800 mb-3 flex items-center">
                <img src={informationIcon} alt="Bilgi" className="w-6 h-6 mr-2" />
                TEŞEKKÜR
              </h3>
              <p className="text-gray-700">
                Konferansın hakem değerlendirme sürecinin yönetimi için Microsoft CMT hizmeti kullanılmıştır. Bu hizmet Microsoft tarafından ücretsiz olarak sağlanmıştır ve Azure bulut hizmetleri ile yazılım geliştirme ve destek masrafları da dahil olmak üzere tüm giderler Microsoft tarafından karşılanmıştır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BildiriGonderimi;
