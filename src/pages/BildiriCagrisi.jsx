import React from 'react';

const BildiriCagrisi = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bildiri Çağrısı
          </h1>
          
        </div>

        <div>
          {/* Main Content - Committee Structure */}
          <div className="lg:col-span-2 text-2xl roounde">
           
           <div className='bg-white rounded-2xl shadow-lg p-8 mb-32'>
             <p className="mb-6">
              Ulusal Yazılım Mühendisliği Sempozyumu (UYMS), Türkiye yazılım sektörü ile yazılım alanında çalışmalar yapan akademisyenleri bir araya getirerek yazılım mühendisliğindeki son gelişmelerin ve araştırmaların paylaşılmasını sağlayan bir platformdur. 2003 yılından bu yana gerçekleştirilen UYMS, araştırma sonuçlarının paylaşıldığı bir ortam sağlamasının ötesinde, ulusal yazılım mühendisliği araştırmalarının geleceğinin şekillenmesinde etkin rol oynamaktadır. Sempozyumun bu sene de tüm katılımcıların yararlanacağı geniş bir içerik taşıması hedeflenmektedir. 17. UYMS, 14-16 Mayıs 2026 tarihleri arasında Muğla Sıtkı Koçman Üniversitesi merkez yerleşkesinde gerçekleştirilecektir.
              <br /><br />
              Sempozyuma Yazılım Mühendisliği alanına ilişkin, özgün sonuçlar içeren tüm kavramsal, kuramsal ve uygulamalı çalışmalar davetlidir. Bu kapsamda teknik-bilimsel ve deneyim kategorilerinde bildirilerinizi bekliyoruz. Sempozyumun bildiri ve sunum dili Türkçe ya da İngilizce olup bildirilerin başına İngilizce ve Türkçe özetlerin eklenmesi beklenmektedir.
            </p>
           </div>
            <h2 className="text-2xl font-semibold mb-4 text-center">UYMS 2026’nın ana ilgi alanları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl mt-16">
              <div className='bg-white rounded-2xl shadow-lg p-8'>
                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                <li>Yazılım Evrimi ve Bakımı</li>
                <li>Çevik Yaklaşımlar ve Çevik Yazılım</li>
                <li>Yazılım Ölçümü Geliştirme</li>
                <li>Yazılım Analitiği</li>
                <li>Yazılım Geliştirme Araçları</li>
                <li>Deneysel Yazılım Mühendisliği</li>
                <li>Yazılım Proje Yönetimi</li>
                <li>Yazılım Mühendisliği Eğitimi</li>
                <li>Yazılım Süreçleri, Süreç İyileştirme</li>
                <li>Yazılım Politikaları ve Yazılım Etiği</li>
                <li>Yazılım Mühendisliğinde Yapay Zekâ Uygulamaları</li>
                <li>Yazılım Mühendisliği ve Blokzincir</li>
                <li>Yenilikçi Yazılım Uygulamaları ve Çözümleri</li>
                <li>Yazılım Mühendisliğinde Disiplinler Arası Yaklaşımlar</li>
                <li>Yazılım Gereksinim Mühendisliği</li>
                
              </ul>
              </div>
              <div className='bg-white rounded-2xl shadow-lg p-8'>
              <ul className="list-disc pl-6 space-y-1 text-gray-800">
                
                <li>Yazılım Risk Yönetimi</li>
                <li>Yazılım Mimarisi</li>
                <li>Mikro-servis Mimarileri</li>
                <li>Yazılım Konfigürasyon Yönetimi</li>
                <li>Gömülü ve Gerçek Zamanlı Yazılım</li>
                <li>Yazılım Kalite Güvencesi ve Yönetimi Sistemleri Mühendisliği</li>
                <li>Yazılım Sınama ve Doğrulama</li>
                <li>Dağıtık Yazılım Mühendisliği</li>
                <li>Yazılım Kalite Özellikleri</li>
                <li>Mobil Yazılım Mühendisliği</li>
                <li>Yazılım Güvenliği</li>
                <li>Model Güdümlü Yazılım Geliştirme</li>
                <li>İnsan-Bilgisayar Etkileşimi</li>
                <li>Yazılım Üretim Hatları</li>
                <li>Açık Kaynak Yazılım Teknolojileri</li>
              </ul>
              </div>
            </div>
          </div>
        </div>

          
      </div>
    </div>
  );
};

export default BildiriCagrisi;
