import React from "react";

const Kayıt = () => (
	<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
		<div className="w-full max-w-6xl mx-auto">
			{/* Header Section */}
			<div className="text-center mb-12">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
					Kayıt Bilgileri
				</h1>
				<p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto">
					UYMS 26 Sempozyumu'na katılım için gerekli tüm bilgiler
				</p>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Left Column - Important Notes */}
				<div className="lg:col-span-2 space-y-8">
					{/* Important Information Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							Önemli Bilgiler
						</h2>
						<ul className="space-y-4 text-lg text-gray-700">
							<li className="flex items-start">
								<span className="text-red-500 mr-3 mt-1">•</span>
								<span>Ücretlere <b className="text-blue-600">KDV</b> dahildir.</span>
							</li>
							<li className="flex items-start">
								<span className="text-red-500 mr-3 mt-1">•</span>
								<span>Kabul edilen her bildirinin sempozyumda sunulabilmesi ve yayımlanabilmesi için en az bir yazarın kayıt yaptırması gerekmektedir.</span>
							</li>
							<li className="flex items-start">
								<span className="text-red-500 mr-3 mt-1">•</span>
								<div>
									<span>Katılım ücretine dahil olan hizmetler: Katılım Belgesi, Öğle Yemekleri, Konferans Çantası, Gala Yemeği, Kahve Arası İkramları</span>
									<div className="text-sm text-red-600 mt-2 bg-red-50 p-3 rounded-lg">
										<b>Not:</b> Ücretsiz katılım sağlayan dinleyiciler bu hizmetlerden faydalanamaz
									</div>
								</div>
							</li>
						</ul>
					</div>

					{/* Bank Account Information Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l-2.5 1.5M6 7l3-1m-3 1l-3-1m3 1l3 1m0 0l3-1m-3 1l3 1" />
							</svg>
							Banka Hesap Bilgileri
						</h2>
						<p className="text-lg text-gray-700 mb-6 font-semibold">
							Katılım ücretlerinin aşağıda verilen banka hesabına yatırılması gerekmektedir:
						</p>
						<div className="bg-gray-50 rounded-xl p-6 space-y-3">
							<div className="flex justify-between items-center py-2 border-b border-gray-200">
								<span className="font-semibold text-gray-700">Banka Adı:</span>
								<span className="text-lg font-bold text-green-600">Ziraat Bankası</span>
							</div>
							<div className="flex justify-between items-center py-2 border-b border-gray-200">
								<span className="font-semibold text-gray-700">Banka Şubesi:</span>
								<span className="text-lg">112- Erzurum</span>
							</div>
							<div className="flex justify-between items-center py-2 border-b border-gray-200">
								<span className="font-semibold text-gray-700">Hesap Sahibi:</span>
								<span className="text-lg">Atatürk Üniversitesi Rektörlüğü Kurumsal İletişim Direktörlüğü</span>
							</div>
							<div className="flex justify-between items-center py-2">
								<span className="font-semibold text-gray-700">IBAN:</span>
								<span className="text-lg font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
									TR62 0001 0001 1289 3749 8150 01
								</span>
							</div>
						</div>
					</div>

					{/* Transfer Format Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<svg className="w-8 h-8 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m2 0h5m-1 4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v1" />
							</svg>
							Havale/EFT Formatı
						</h2>
						<p className="text-lg text-gray-700 mb-4">
							<b>NOT:</b> Havale/EFT açıklamasının aşağıdaki formatta yazılması gerekmektedir.
						</p>
						<div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
							<code className="text-lg font-mono font-bold text-purple-700 block text-center">
								UYMS22-BildiriID-Ad Soyad
							</code>
						</div>
					</div>

					{/* Invoice Information Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
							</svg>
							Fatura Bilgileri
						</h2>
						<p className="text-lg text-gray-700 mb-6">
							Katılım ücreti için fatura isteyen katılımcıların, Atatürk Üniversitesi Rektörlüğü Kurumsal İletişim Direktörlüğü'nden <b className="text-orange-600">Doç.Dr. Sinan Atılgan</b> ile iletişime geçmesi gerekmektedir.
						</p>
					</div>
				</div>

				{/* Right Column - Pricing and Contact */}
				<div className="space-y-8">
					{/* Pricing Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-indigo-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<span className="text-indigo-600 mr-3">💰</span>
							Katılım Ücreti
						</h2>
						<div className="space-y-4">
							<div className="flex justify-between items-center py-3 border-b border-gray-200">
								<span className="text-lg font-semibold text-gray-700">Standart</span>
								<span className="text-2xl font-bold text-indigo-600">1000 TL</span>
							</div>
							<div className="flex justify-between items-center py-3 border-b border-gray-200">
								<span className="text-lg font-semibold text-gray-700">Dinleyici</span>
								<span className="text-2xl font-bold text-green-600">Ücretsiz</span>
							</div>
							<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
								<p className="text-sm text-yellow-800">
									<b>⚠️ Gecikme Ücreti:</b> 15 Şubattan sonraki ödemeler için Katılım Ücreti <b>1200 TL</b> olarak tahsil edilecektir
								</p>
							</div>
						</div>
					</div>

					{/* Contact Information Card */}
					<div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-teal-500">
						<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 flex items-center">
							<span className="text-teal-600 mr-3">📞</span>
							İletişim Bilgileri
						</h2>
						<div className="space-y-4">
							<div className="flex items-center p-3 bg-teal-50 rounded-lg">
								<span className="text-teal-600 mr-3 text-xl">📱</span>
								<div>
									<span className="block text-sm text-gray-600">Telefon</span>
									<span className="text-lg font-semibold">+90 442 231 (6085)</span>
								</div>
							</div>
							<div className="flex items-center p-3 bg-teal-50 rounded-lg">
								<span className="text-teal-600 mr-3 text-xl">✉️</span>
								<div>
									<span className="block text-sm text-gray-600">E-mail</span>
									<a 
										href="mailto:sinan.atilgan@atauni.edu.tr" 
										className="text-lg font-semibold text-blue-600 hover:text-blue-800 underline transition-colors"
									>
										sinan.atilgan@atauni.edu.tr
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom CTA 
			<div className="text-center mt-16">
				<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl">
					<h3 className="text-2xl sm:text-3xl font-bold mb-4">
						UYMS 26 Sempozyumu'na Katılım
					</h3>
					<p className="text-xl opacity-90 mb-6">
						Bilimsel çalışmalarınızı paylaşmak ve alanında uzman akademisyenlerle buluşmak için hemen kayıt olun!
					</p>
					<button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
						Kayıt Ol
					</button>
				</div>
			</div>*/}
		</div>
	</div>
);

export default Kayıt;
