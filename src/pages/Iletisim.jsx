import React, { useState } from "react";

const Iletisim = () => {
  const [form, setForm] = useState({ 
    ad: "", 
    email: "", 
    konu: "", 
    mesaj: "" 
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setIsSubmitting(true);

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mailto = `mailto:uymsempozyumu@gmail.com?subject=${encodeURIComponent(form.konu)}&body=${encodeURIComponent(
        `Ad: ${form.ad}\nE-mail: ${form.email}\n\nMesaj: ${form.mesaj}`
      )}`;
      window.location.href = mailto;
      setSent(true);
      setForm({ ad: "", email: "", konu: "", mesaj: "" });
    } catch (err) {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adres",
      content: "Muğla Sıtkı Koçman Üniversitesi Kötekli Kampüsü, 48000 Menteşe/Muğla",
      color: "blue"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-posta",
      content: "uymsempozyumu@gmail.com",
      color: "green"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      content: "+90 252 211 11 11",
      color: "purple"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl  font-bold text-gray-800 mb-6">
            İletişim
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            UYMS 26 Sempozyumu ile ilgili sorularınız için bizimle iletişime geçin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Mesaj Gönderin
                </h2>
                <p className="text-gray-600">
                  Formu doldurun, size en kısa sürede dönüş yapalım
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      name="ad"
                      value={form.ad}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="Adınızı girin"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg"
                      placeholder="E-posta adresinizi girin"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Konu *
                  </label>
                  <input
                    type="text"
                    name="konu"
                    value={form.konu}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg"
                    placeholder="Mesaj konusunu girin"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Mesajınız *
                  </label>
                  <textarea
                    name="mesaj"
                    value={form.mesaj}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-lg resize-none"
                    placeholder="Mesajınızı detaylı bir şekilde yazın..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg text-white transition-all duration-200 transform ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Gönderiliyor...
                    </div>
                  ) : (
                    'Mesajı Gönder'
                  )}
                </button>

                {/* Success/Error Messages */}
                {sent && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center text-green-600 mb-2">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold">Mesajınız Başarıyla Gönderildi!</span>
                    </div>
                    <p className="text-green-700">
                      E-posta uygulamanız açıldı. Mesajınız gönderilmeye hazır!
                    </p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center text-red-600 mb-2">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="font-semibold">Hata Oluştu</span>
                    </div>
                    <p className="text-red-700">{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(info.color)} rounded-2xl flex items-center justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {info.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - FAQ */}
        <div className="mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Sık Sorulan Sorular
              </h2>
              <p className="text-gray-600 text-lg">
                En çok merak edilen konular hakkında bilgi alın
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Sempozyuma nasıl katılabilirim?
                  </h3>
                  <p className="text-gray-600">
                    Kayıt sayfasından online olarak kayıt olabilir veya bildiri gönderebilirsiniz.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Konaklama seçenekleri nelerdir?
                  </h3>
                  <p className="text-gray-600">
                    Konaklama sayfasından detaylı bilgi alabilir ve rezervasyon yapabilirsiniz.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Bildiri gönderimi için son tarih nedir?
                  </h3>
                  <p className="text-gray-600">
                    Bildiri gönderimi için son tarih 15 Ocak 2025'tir.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Ulaşım bilgileri nerede bulunur?
                  </h3>
                  <p className="text-gray-600">
                    Ulaşım sayfasından detaylı ulaşım bilgilerine ulaşabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
