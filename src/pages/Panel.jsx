import React from 'react';

const Panel = () => {
    return (
        <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Panel
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Content Container */}
                <div className="space-y-8">
                    {/* Row 1: Photos and Info of Panelists */}

                    {/* Row 2: Abstract Section (Full Width) */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <div className="mb-8 border-b border-gray-100 pb-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </span>
                                Panel Başlığı
                            </h3>
                            <p className="text-xl font-semibold text-blue-600 italic leading-relaxed">
                                "Üretken Yapay Zeka Çağında Yazılım Mühendisliği"
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
                        <div className="space-y-6 leading-relaxed bg-white border border-gray-100 shadow-sm p-8 md:p-10 rounded-2xl">
                            <p className="font-medium text-black text-lg md:text-xl text-justify">
                                Üretken yapay zeka (ÜYZ), yazılım mühendisliğini hızla dönüştürmektedir. ÜYZ araçları, sadece kod üretimi, test otomasyonu, çeşitli bakım etkinleri gibi yazılım mühendisliğine özgü etkinlikler için değil dokümantasyon, bilgi arama, öğrenme, beyin fırtınası ve problem çözme gibi etkinlikler için de kullanıcılarına ciddi kazanımlar sağlamaktadır. Diğer taraftan bu araçlar, yanlış ya da düşük kaliteli çıktıların oluşturduğu riskler, güvenlik açıkları ve gizlilik endişeleri, etik sorumluluk ve fikri mülkiyet gibi sorunları da beraberinde getirmektedir. ÜYZ araçlarının sunduğu fırsatların ve tehditlerin gerçekçi bir değerlendirmesinin yapılması ve ÜYZ araçlarıyla insan uzmanlığı arasındaki dengeli işbirliğinin nasıl kurulabileceğinin tartışılması yazılım mühendisliğinin geleceğini şekillendirmek açısından büyük önem taşımaktadır. Aynı zamanda, yazılım mühendisliği eğitiminin de bu dönüşüme ayak uydurması bir zorunluluktur. Eğitmenlerin rolünün nasıl evrileceği, öğrenenlerin hangi yetkinlikleri kazanmaları gerektiği gibi soruların yanında sorgulayıcı, sorumluluk sahibi ve etik değerlere sahip mühendislerin nasıl yetiştirileceği de yeniden tanımlanmalıdır. Prof Dr. Onur Demirörs ve Dr. Görkem Giray başkanlığındaki panel Üretken Yapay Zeka Çağında Yazılım Mühendisliği endüstrisi ve eğitiminin nasıl şekilleneceğini tartışmaya olanak sağlayacaktır. Panelistler ile ilgili duyuru kısa süre içinde ilan edilecektir.
                            </p>
                        </div>
                    </div>


                    {/* Moderator Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Moderatör</h3>
                        <div className="flex justify-center">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-8 flex flex-col items-center w-full max-w-md text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Onur Demirörs</h2>
                                <p className="text-blue-600 font-medium">İYTE</p>
                            </div>
                        </div>
                    </div>

                    {/* Panelists Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Panelistler</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 flex flex-col items-center text-center">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Dr. Görkem Giray</h2>
                                <p className="text-blue-600 font-medium">JTİ & İYTE</p>
                            </div>
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 flex flex-col items-center text-center">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Dr. Cemal Yılmaz</h2>
                                <p className="text-blue-600 font-medium">Sabancı Üniversitesi</p>
                            </div>
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 flex flex-col items-center text-center">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Dr. Ersin Ersoy</h2>
                                <p className="text-blue-600 font-medium">Turkcell Şirketler Grubu</p>
                            </div>
                            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 flex flex-col items-center text-center">
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Fahri Kaan Toker</h2>
                                <p className="text-blue-600 font-medium">Allianz</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Panel;
