import React from 'react';

const MuglaHakkinda = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Muğla Hakkında
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
            Ege'nin incisi Muğla şehrini keşfedin - Tarih, kültür ve doğal güzelliklerin buluştuğu yer
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Şehir Tanıtımı */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Şehir Tanıtımı
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Genel Bilgiler
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>Nüfus:</strong> 1,000,000+ (2024)
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Yüzölçümü:</strong> 12,654 km²
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Rakım:</strong> 660 metre
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700 mb-2">
                        <strong>İklim:</strong> Akdeniz iklimi
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>En Yüksek:</strong> 37°C (Yaz)
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>En Düşük:</strong> -5°C (Kış)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Coğrafi Konum
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Muğla, Türkiye'nin güneybatısında, Ege Bölgesi'nde yer almaktadır. 
                    Kuzeyde Aydın, doğuda Denizli ve Burdur, güneydoğuda Antalya, 
                    güneyde Akdeniz ile çevrilidir.
                  </p>
                  <p className="text-gray-700">
                    Şehir, dağlarla çevrili bir vadi içinde kurulmuş olup, 
                    doğal güzellikleri ve tarihi dokusuyla dikkat çekmektedir.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarihi ve Kültürel Miras */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-green-600 mr-3" viewBox="0 0 31.289 31.288" fill="currentColor">
                  <g>
                    <path d="M28.327,13.357v-1.735l-0.25-0.099c-0.079-0.031-1.804-0.698-4.188-0.808v0.792c1.729,0.085,3.104,0.483,3.646,0.663 v16.084c-1.117-0.449-2.403-0.676-3.827-0.676c-3.489,0-6.812,1.338-7.812,1.777v-6.39l0.465,0.513v-4.58h-1.191v4.58l0.465-0.513 v6.398c-1.013-0.419-4.5-1.745-7.993-1.745c-1.381,0-2.603,0.212-3.645,0.63v-16.08c0.608-0.203,2.264-0.682,4.305-0.682 c0.146,0,0.288,0.012,0.434,0.017v-0.789c-0.146-0.004-0.288-0.017-0.434-0.017c-2.721,0-4.76,0.792-4.844,0.825l-0.25,0.099 v1.607c-0.823,0.154-1.335,0.431-1.335,0.88c0,2.342,0,16.562,0,16.562h12.196c0.422,0.376,1.038,0.617,1.729,0.617 c0.691,0,1.308-0.24,1.729-0.617h11.889c0,0,0-15.739,0-16.562C29.416,13.742,29.001,13.504,28.327,13.357z"></path>
                    <polygon points="24.505,5.806 7.774,5.806 7.774,6.861 9.411,6.861 9.411,15.41 11.047,15.41 11.047,6.861 13.159,6.861 13.159,15.41 14.794,15.41 14.794,6.861 17.539,6.861 17.539,15.41 19.175,15.41 19.175,6.861 21.286,6.861 21.286,15.41 22.921,15.41 22.921,6.861 24.505,6.861"></polygon>
                    <polygon points="16.273,0 6.932,5.317 25.455,5.317"></polygon>
                    <polygon points="24.505,15.727 23.845,15.727 8.702,15.727 7.934,15.727 7.934,16.939 7.353,16.939 7.353,18.155 25.193,18.155 25.193,16.939 24.505,16.939 24.505,16.333"></polygon>
                  </g>
                </svg>
                Tarihi ve Kültürel Miras
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tarihi Yerler */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Tarihi Yerler</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Muğla Saat Kulesi (1895)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Kurşunlu Cami (1493)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Konakaltı Hanı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span>Arasta Çarşısı</span>
                    </li>
                  </ul>
                </div>

                {/* Müzeler */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Müzeler</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Muğla Müzesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Zeki Müren Sanat Müzesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Etnografya Müzesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>Arkeoloji Müzesi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Doğal Güzellikler */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Doğal Güzellikler
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-purple-600 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M13 14L17 9L22 18H2.84444C2.46441 18 2.2233 17.5928 2.40603 17.2596L10.0509 3.31896C10.2429 2.96885 10.7476 2.97394 10.9325 3.32786L15.122 11.3476" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    Dağlar ve Yaylalar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Bozdağ</h4>
                      <p className="text-sm text-gray-700 mb-3">2,157 metre yüksekliğinde, yürüyüş ve kamp için ideal</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 mb-2">Gökbel Yaylası</h4>
                      <p className="text-sm text-gray-700 mb-3">Doğal güzellikleri ve temiz havasıyla ünlü</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-3 flex items-center">
                    <svg className="w-6 h-6 text-teal-600 mr-2" viewBox="0 -3.18 20.402 20.402" fill="currentColor">
                      <g>
                        <path d="M3,17.5c1.5,0,1.5.5,3,.5s1.51-.5,3-.5,1.5.5,3,.5,1.5-.5,3-.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        <path d="M3,14a4.93,4.93,0,0,0,2.41-1.21c2.8-2,4.59.57,6.59-.18S13.38,8.3,10.06,7.5c4.76-3.58,8.31,0,8.68,2.68C19,12,19.18,13.49,21,14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </g>
                    </svg>
                    Sahiller ve Koylar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Gökova Körfezi</h4>
                      <p className="text-sm text-gray-700 mb-3">Masmavi suları ve bakir koyları</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">Datça Yarımadası</h4>
                      <p className="text-sm text-gray-700 mb-3">Ege ve Akdeniz'in buluştuğu nokta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yerel Mutfak */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-orange-600 mr-3" viewBox="0 -10.35 122.88 122.88" fill="currentColor">
                  <g>
                    <path d="M0,0h119.01c0.47,0,0.92,0.09,1.33,0.27c0.58,0.25,1.67,1.34,1.9,1.91c0.17,0.41,0.27,0.86,0.27,1.33v23.72 c0,0.47-0.09,0.92-0.27,1.34c-0.18,0.43-0.44,0.81-0.76,1.14l-0.04,0.03c-0.32,0.31-0.69,0.56-1.1,0.73 c-0.41,0.17-0.86,0.27-1.33,0.27H70.58c-0.15,0-0.26-0.12-0.26-0.26V4.13H32.58v6.89L44.87,25c0.35,0.4,0.51,0.9,0.48,1.4 c-0.03,0.49-0.25,0.97-0.65,1.33l-0.02,0.01c-0.18,0.15-0.37,0.27-0.58,0.34c-0.21,0.08-0.44,0.12-0.66,0.12H6.52 c-0.53,0-1.02-0.22-1.36-0.57c-0.35-0.35-0.57-0.83-0.57-1.36c0-0.28,0.06-0.54,0.17-0.78c0.11-0.25,0.27-0.47,0.47-0.65 l12.65-13.83V4.13H0V0L0,0z M31.55,58.58c1.14,0,2.07,0.93,2.07,2.07s-0.93,2.07-2.07,2.07c-1.14,0-2.07-0.93-2.07-2.07 S30.41,58.58,31.55,58.58L31.55,58.58z M18.35,58.58c1.14,0,2.07,0.93,2.07,2.07s-0.93,2.07-2.07,2.07s-2.07-0.93-2.07-2.07 S17.21,58.58,18.35,58.58L18.35,58.58z M32.62,47.47v2.19h0v2.9h86.77c1.92,0,3.5,1.58,3.5,3.5v42.62c0,1.92-1.57,3.5-3.49,3.5 c-38.6,0-77.18,0-115.79,0c-1.91,0-3.5-1.59-3.5-3.5V56.06c0-1.93,1.57-3.5,3.5-3.5h13.68c0-1.7,0-3.39,0-5.09h4.55v2.19h-2.08v2.9 h10.4v-2.9h-2.08v-2.19H32.62L32.62,47.47z M119.02,56.42H89.4v41.9h29.63V56.42L119.02,56.42L119.02,56.42z M85.54,56.42H46.77 v9.33h38.77V56.42L85.54,56.42L85.54,56.42z M42.91,56.42H3.96v41.9h38.95V56.42L42.91,56.42L42.91,56.42z M46.77,98.31h38.77 v-28.7H46.77V98.31L46.77,98.31L46.77,98.31z M94,58.58c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44 c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79s-0.06,0.54-0.16,0.79c-0.11,0.25-0.26,0.48-0.45,0.67l-0.02,0.01 c-0.19,0.18-0.41,0.33-0.66,0.43c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.24-0.1-0.46-0.25-0.65-0.43 l-0.03-0.02c-0.19-0.19-0.34-0.42-0.44-0.67l-0.01-0.01c-0.1-0.24-0.15-0.5-0.15-0.78c0-0.28,0.06-0.55,0.16-0.79 c0.1-0.25,0.26-0.48,0.45-0.67s0.42-0.34,0.67-0.45l0.01-0.01C93.47,58.63,93.73,58.58,94,58.58L94,58.58L94,58.58z M74.31,4.13 h-0.13v22.73h44.49V4.13H74.31L74.31,4.13L74.31,4.13z M78.11,6.66c0.19-0.18,0.41-0.33,0.66-0.43c0.24-0.1,0.51-0.16,0.79-0.16 c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79 s-0.06,0.55-0.16,0.79l-0.01,0.01c-0.1,0.24-0.25,0.46-0.43,0.64l-0.03,0.03c-0.19,0.18-0.41,0.33-0.65,0.43 c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.25-0.1-0.48-0.26-0.67-0.45l0,0c-0.19-0.19-0.34-0.42-0.45-0.67 c-0.1-0.24-0.16-0.51-0.16-0.79s0.06-0.54,0.16-0.79c0.11-0.25,0.26-0.48,0.45-0.67L78.11,6.66L78.11,6.66L78.11,6.66z"></path>
                  </g>
                </svg>
                Yerel Mutfak
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meşhur Yemekler */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg viewBox="-90 -90 700 700" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M445.588 56l-.026 384.352c6.881 11.323 14 15.677 19.97 15.648 5.924-.028 12.967-4.434 19.714-15.418L466.82 244.27l-.215-2.391 1.475-1.906c21.174-27.169 28.573-74.108 22.533-113.81-3.02-19.852-9.342-37.82-18.195-50.522-7.424-10.652-16.28-17.447-26.828-19.641h-.002zm-372.375.004l-.016 67.127-12.56-.016V56.008H46.332l.002 67.11H33.756v-67.11h-14.57v103.228c-.001 11.417 6.23 17.748 16.04 21.662l4.06 1.622-.09 4.37c-2 84.57-3.977 169.139-5.962 253.708C40.074 451.79 47.1 456.028 52.95 456c5.85-.028 12.87-4.377 19.623-15.432-2.315-84.547-4.63-169.096-6.941-253.644l-.12-4.4 4.073-1.606c10.324-4.106 17.039-11.074 17.039-21.676V56.004h-13.41zM256 95A161 161 0 0 0 95 256a161 161 0 0 0 161 161 161 161 0 0 0 161-161A161 161 0 0 0 256 95z"></path></g></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Meşhur Yemekler</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Muğla Köfte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Çökertme Kebabı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Börülce Salatası</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span>Zeytinyağlı Yemekler</span>
                    </li>
                  </ul>
                </div>

                {/* Tatlılar */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white mr-3">
                    <svg viewBox="0 0 1024 1024" class="icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M128 416v-48a144 144 0 01168.64-141.888 224.128 224.128 0 01430.72 0A144 144 0 01896 368v48a384 384 0 01-352 382.72V896h-64v-97.28A384 384 0 01128 416zm287.104-32.064h193.792a143.808 143.808 0 0158.88-132.736 160.064 160.064 0 00-311.552 0 143.808 143.808 0 0158.88 132.8zm-72.896 0a72 72 0 10-140.48 0h140.48zm339.584 0h140.416a72 72 0 10-140.48 0zM512 736a320 320 0 00318.4-288.064H193.6A320 320 0 00512 736zM384 896.064h256a32 32 0 110 64H384a32 32 0 110-64z"></path></g></svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Tatlılar</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <span>Muğla Baklavası</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <span>Badem Ezmesi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <span>Zeytinyağlı Tatlılar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <span>Bal ve Kaymak</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Etkinlik Takvimi */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-yellow-500">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-8 h-8 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Etkinlik Takvimi
              </h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-bold text-yellow-800 mb-2">Mart 2025</h3>
                  <p className="text-sm text-gray-700 mb-2">15-17: UYMS 26 Sempozyumu</p>
                  <p className="text-xs text-gray-600">Muğla Sıtkı Koçman Üniversitesi</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA 
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Muğla'yı Keşfedin
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Sempozyum sırasında şehrin tarihi ve doğal güzelliklerini keşfetmek için rehberlik hizmeti alın
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              Tur Rezervasyonu
            </button>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default MuglaHakkinda;
