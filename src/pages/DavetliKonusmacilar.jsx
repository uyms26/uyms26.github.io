import React from 'react';
import BedirTekinerdogan from '../assets/bedir_tekinerdogan.jpg';

const DavetliKonusmacilar = () => {
    return (
        <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Photo Section */}
                        <div className="lg:col-span-4 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2 h-full">
                            <div className="relative h-full">
                                <img
                                    src={BedirTekinerdogan}
                                    alt="Prof. Bedir Tekinerdoğan"
                                    className="w-full h-full object-cover rounded-2xl min-h-[400px]"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 rounded-b-2xl">
                                    <h2 className="text-2xl font-bold text-white mb-1">Prof. Bedir Tekinerdoğan</h2>
                                    <p className="text-blue-300 font-medium">Wageningen Üniversitesi</p>
                                </div>
                            </div>
                        </div>

                        {/* Biography Section */}
                        <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                Biyografi
                            </h3>
                            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                                <p>
                                    Profesör Bedir Tekinerdoğan, yazılım mühendisliği, sistem mühendisliği og bilgi teknolojileri alanlarında 30 yılı aşkın deneyime sahip bir bilgisayar bilimcisidir. Hollanda'daki Twente Üniversitesi'nden mezun olup Wageningen Üniversitesi ve Araştırma Merkezi'nde profesör ve Bilgi Teknolojileri Grubu başkanıdır.
                                </p>
                                <p>
                                    Stanford Üniversitesi'nin "Dünyanın En İyi %2 Bilim İnsanı" listesinde yer alan Tekinerdoğan, 500'den fazla bilimsel yayın ve 15 akademik kitabın sahibidir. Birçok büyük ölçekli ve endüstriyel projede baş mimar ve araştırmacı olarak rol almıştır.
                                </p>
                                <p>
                                    Ayrıca dünya çapında 50'den fazla şirkete eğitim vermiş, çok sayıda doktora ve yüksek lisans öğrencisi yetiştirmiştir. Çalışmaları karmaşık yazılım yoğunluklu sistemlerin tasarım ve yönetimine odaklanmaktadır.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Abstract Section (Full Width) */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="mb-8 border-b border-gray-100 pb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </span>
                                Konuşma Başlığı
                            </h3>
                            <p className="text-2xl font-semibold text-blue-600 italic leading-relaxed">
                                "Yazılımdan Sistemlere: Karmaşık Bir Dünya İçin Mühendisliği Yeniden Düşünmek"
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            Özet
                        </h3>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p>
                                Modern dijital çözümler artık tek başına çalışan yazılım ürünleri değildir. Bunlar; yazılım, yapay zeka, veri, donanım, insanlar, organizasyonlar ve düzenleyici kısıtlamaları birleştiren karmaşık, yazılım yoğunluklu sistemlerdir. Bu sistemlerin ölçeği büyüdükçe ve birbirlerine daha bağımlı hale geldikçe; kırılgan mimariler, entegrasyon karmaşıklığı, uzun vadeli evrim için sınırlı destek, yaşam döngüsü yönetimindeki zorluklar ve artan yönetişim ile uyumluluk gereksinimleri gibi tekrarlayan zorluklar ortaya çıkmaktadır.
                            </p>
                            <p>
                                Bu açılış konuşması, bu zorlukların temelinde sistem problemleri olduğunu ve sistem mühendisliği düşüncesine ve pratiğine doğru net bir geçiş gerektirdiğini savunmaktadır. Konuşma, mevcut yaklaşımların sınırlamalarını eleştirel bir şekilde incelemekte, bütünsel sistem düşüncesinin gerekliliğini vurgulamakta ve temel sistem mühendisliği ilkelerini sunmaktadır.
                            </p>
                            <p>
                                Özel Sistem Mühendisliği departmanlarının kurulmasını stratejik bir zorunluluk olarak savunan Tekinerdoğan, Türkiye vaka analizleri ile eğitim ve araştırmanın mevcut durumunu yansıtmaktadır. Güçlü sistem düşüncesine sahip mühendisler yetiştirmek artık isteğe bağlı değil, sürdürülebilir bir dijital dönüşüm için esastır.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DavetliKonusmacilar;
