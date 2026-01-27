import React from 'react';
import BedirTekinerdogan from '../assets/bedir_tekinerdogan.jpg';

const DavetliKonusmacilar = () => {
    return (
        <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Davetli Konuşmacı
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Content Container */}
                <div className="space-y-8">
                    {/* Row 1: Photo and Biography Side-by-Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-5     gap-8 items-stretch">
                        {/* Photo Section */}
                        <div className="bg-white rounded-3xl shadow-xl lg:col-span-2 overflow-hidden border border-gray-100 p-2">
                            <div className="relative h-full">
                                <img
                                    src={BedirTekinerdogan}
                                    alt="Prof. Bedir Tekinerdoğan"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 rounded-b-2xl">
                                    <h2 className="text-2xl font-bold text-white mb-1">Prof. Bedir Tekinerdoğan</h2>
                                    <p className="text-blue-300 font-medium">Wageningen Üniversitesi</p>
                                </div>
                            </div>
                        </div>

                        {/* Biography Section */}
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 flex flex-col justify-center lg:col-span-3">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                Biyografi
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-md">
                                <p>
                                    Profesör Bedir Tekinerdoğan, yazılım mühendisliği, sistem mühendisliği ve bilgi teknolojisi alanlarında 30 yılı aşkın deneyime sahip bir bilgisayar bilimcisidir. Yüksek lisans ve doktora derecelerini Hollanda'daki Twente Üniversitesi'nden Bilgisayar Bilimleri alanında almıştır. Şu anda Wageningen Üniversitesi ve Araştırma Merkezi'nde tam profesör ve Bilgi Teknolojisi Grubu Başkanı olarak görev yapmaktadır.                                </p>
                                <p>
                                    Profesör Tekinerdoğan, Stanford Üniversitesi'nin Dünyanın En İyi %2 Bilim İnsanı listesinde yer almakta olup, hem kariyer boyu hem de yıllık sıralamalarda yer almakta ve 2025 yılında küresel olarak en iyi %0,2'lik dilimde yer almaktadır. 500'den fazla bilimsel yayına imza atmış ve 15 akademik kitabı editörlüğünü yapmıştır. Baş araştırmacı ve baş mimar olarak, tüketici elektroniği, otomotiv sistemleri, kritik altyapılar, siber-fiziksel ve savunma sistemleri, hassas tarım ve enerji sistemleri de dahil olmak üzere birçok alanda çok sayıda büyük ölçekli endüstriyel ve araştırma projesine katkıda bulunmuştur. Çalışmaları, yazılım ve sistem mimarisi, ürün hattı mühendisliği, model tabanlı sistem mühendisliği, veri bilimi ve yapay zeka destekli sistemlere güçlü bir şekilde odaklanarak teori ve pratiği bir araya getiriyor.                                </p>
                                <p>
                                    Araştırmalarının yanı sıra, kendini eğitimciliğe ve mentorluğa adamış bir isimdir. 30'dan fazla akademik ders tasarlayıp vermiş, dünya çapında 50'den fazla şirkete profesyonel eğitim sağlamış, 40'tan fazla doktora öğrencisine danışmanlık yapmış ve 100'den fazla yüksek lisans öğrencisinin mezun olmasına yardımcı olmuştur. Çalışmaları, bileşenlerin ve kodun ötesinde düşünebilen ve karmaşık yazılım yoğun sistemleri tasarlama, entegre etme ve yönetme konusunda donanımlı mühendislerin geliştirilmesine sürekli olarak vurgu yapmaktadır.                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Abstract Section (Full Width) */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="mb-8 border-b border-gray-100 pb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </span>
                                Konuşma Başlığı
                            </h3>
                            <p className="text-xl font-semibold text-blue-600 italic leading-relaxed">
                                "Yazılımdan Sistemlere: Karmaşık Bir Dünya İçin Mühendisliği Yeniden Düşünmek"
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            Özet
                        </h3>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-md">
                            <p>
                                Modern dijital çözümler artık bağımsız yazılım ürünleri değildir. Yazılım, yapay zeka, veri, donanım, insan, organizasyonlar ve düzenleyici kısıtlamaları entegre eden karmaşık, yazılım yoğun sistemlerdir. Bu sistemler ölçek olarak büyüdükçe ve daha bağımlı hale geldikçe, kırılgan mimariler, entegrasyon karmaşıklığı, uzun vadeli evrim için sınırlı destek, yaşam döngüsü yönetimindeki zorluklar ve artan yönetim ve uyumluluk gereksinimleri gibi tekrarlayan zorluklar ortaya çıkmaktadır. Bu sorunların ele alınması, geleneksel yazılım mühendisliği uygulamalarının kapsamının ötesine geçmektedir.                            </p>
                            <p>
                                Bu açılış konuşması, bu zorlukların temelde sistem sorunları olduğunu ve sistem mühendisliği düşüncesine ve uygulamasına doğru net bir geçiş gerektirdiğini savunmaktadır. Konuşma, mevcut yaklaşımların sınırlamalarını eleştirel bir şekilde inceler, bütünsel sistem düşüncesinin gerekliliğinin altını çizer ve temel sistem mühendisliği ilkelerini sunar.                            </p>
                            <p>
                                Açılış konuşması, stratejik bir zorunluluk olarak özel Sistem Mühendisliği departmanlarının kurulması için güçlü bir gerekçe sunarak ve bunları sürdürmek için gereken kurumsal yapıları özetleyerek sona ermektedir. Bu çalışma aynı zamanda, Türkiye'yi örnek vaka olarak kullanarak sistem mühendisliği eğitimi ve araştırmasının mevcut durumunu, eksiklikleri, fırsatları ve iyileştirme yönlerini ortaya koymaktadır. Güçlü sistem düşünme yeteneklerine sahip mühendisler yetiştirmek artık isteğe bağlı değil, dayanıklı, güvenilir ve sürdürülebilir sistemler oluşturmak ve hem kurumsal hem de ulusal düzeyde uzun vadeli dijital dönüşümü sağlamak için elzemdir.                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DavetliKonusmacilar;
