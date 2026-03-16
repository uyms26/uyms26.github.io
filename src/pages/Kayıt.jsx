import React from "react";

const Kayıt = () => {
	const pricingData = [
		{
			type: "Bireysel Kayıt",
			early: "6.000₺",
			normal: "7.200₺",

		},
		{
			type: "Öğrenci Kayıt (1)",
			early: "5.000₺",
			normal: "6.000₺",

		},
		{
			type: "Ek Bildiri Kaydı (2)",
			early: "3.000₺ , 1.500₺",
			normal: "3.000₺ , 1.500₺",

		}
	];

	return (
		<div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
						Kayıt Bilgileri
					</h1>
					<div className="h-1 w-24 bg-blue-600 mx-auto rounded-full"></div>
				</div>

				{/* Pricing Table Section */}
				<div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100">
					<div className="overflow-x-auto">
						<table className="w-full text-left">
							<thead>
								<tr className="bg-gray-50 border-b border-gray-200">
									<th className="px-6 py-6 text-sm font-bold text-gray-900 uppercase tracking-wider">Kayıt Türü</th>
									<th className="px-6 py-6 text-sm font-bold text-blue-700 uppercase tracking-wider">
										İndirimli Erken Kayıt
										<span className="block text-xs font-normal text-gray-500 mt-1">(03.04.2026 öncesi)</span>
									</th>
									<th className="px-6 py-6 text-sm font-bold text-indigo-700 uppercase tracking-wider">
										Normal Kayıt
										<span className="block text-xs font-normal text-gray-500 mt-1">(03.04.2026 sonrası)</span>
									</th>

								</tr>
							</thead>
							<tbody className="divide-y divide-gray-100">
								{pricingData.map((item, index) => (
									<tr key={index} className="hover:bg-blue-50/50 transition-colors">
										<td className="px-6 py-5">
											<span className="font-semibold text-gray-800">{item.type}</span>
										</td>
										<td className="px-6 py-5 font-bold text-blue-600 italic">
											{item.early}
										</td>
										<td className="px-6 py-5 font-bold text-indigo-600 italic">
											{item.normal}
										</td>

									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Services Included Section */}
					<div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
						<div className="flex items-center mb-6">
							<div className="bg-green-100 p-3 rounded-2xl mr-4">
								<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-gray-800">Kayıt Ücretine Dahil Olan Hizmetler</h2>
						</div>
						<ul className="space-y-4">
							{[
								"Hoş geldin resepsiyonu",
								"Tüm bilimsel oturumlara erişim",
								"Kahve molaları ve öğle yemekleri",
								"Konferans çantası/materyalleri ve katılım sertifikası"
							].map((service, i) => (
								<li key={i} className="flex items-center text-gray-700">
									<span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Important Info Section */}
					<div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
						<div className="flex items-center mb-6">
							<div className="bg-blue-100 p-3 rounded-2xl mr-4">
								<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h2 className="text-2xl font-bold text-gray-800">Önemli Bilgiler</h2>
						</div>
						<div className="space-y-6">
							<div>
								<p className="text-gray-700 leading-relaxed italic">
									<span className="font-bold text-blue-600 mr-2">1)</span>
									<span className="font-bold">Öğrenci Yazarlar:</span> Sunumu yapacak yazarın öğrenci olması halinde, öğrenci statüsündeki kayıt ücreti geçerlidir.
								</p>
							</div>
							<div>
								<p className="text-gray-700 leading-relaxed italic">
									<span className="font-bold text-blue-600 mr-2">2)</span>
									<span className="font-bold"> Çoklu Bildiri:</span> 2. Bildiri için 3.000₺, 3. Bildiri için 1.500₺ ödemesi gerekmektedir. En fazla 3 bildiri sunulabilir.
								</p>
							</div>
							<div className="pt-4 border-t border-gray-100">
								<p className="text-sm text-gray-500 italic mb-2">
									<span className="font-bold"> * Dahil Olmayanlar:</span> Konaklama ve Gala Yemeği, katılım ücretine dahil değildir.
								</p>
								<p className="text-sm  text-gray-800">
									<span className="font-bold"> Vergi:</span> Tüm ücretlere KDV dahildir.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Payment & Registration Form Section */}
				<div className="mt-8 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
					<div className="flex items-center mb-6">
						<div className="bg-purple-100 p-3 rounded-2xl mr-4">
							<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-gray-800">Hesap ve Kayıt Bilgileri</h2>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<p className="text-gray-700 leading-relaxed">
								Kayıt işleminizi tamamlamak için kayıt ücretini aşağıdaki hesaba yatırmanız ve ödeme dekontunuzla birlikte yandaki formu doldurmanız gerekmektedir.
							</p>
							
							<div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
								<div className="space-y-3">
									<div>
										<p className="text-sm text-gray-500 font-semibold mb-1">Hesap Sahibi</p>
										<p className="text-gray-900 font-medium">Yakında eklenecektir</p>
									</div>
									<div>
										<p className="text-sm text-gray-500 font-semibold mb-1">Banka Adı</p>
										<p className="text-gray-900 font-medium">Yakında eklenecektir</p>
									</div>
									<div>
										<p className="text-sm text-gray-500 font-semibold mb-1">IBAN</p>
										<p className="text-gray-900 font-mono text-lg font-medium tracking-wider">TR00 0000 0000 0000 0000 0000 00</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex flex-col items-center justify-center space-y-4 bg-blue-50/50 p-8 rounded-2xl border border-blue-100 h-full">
							<div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
								<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-800 text-center">Kayıt Formu</h3>
							<p className="text-gray-600 text-center text-sm px-4">
								Ödemenizi yaptıktan sonra dekontunuzu hazırlayıp lütfen aşağıdaki kayıt formunu doldurunuz.
							</p>
							<a 
								href="https://forms.gle/6vX4Dd53ZerpWj9K8" 
								target="_blank" 
								rel="noopener noreferrer"
								className="mt-4 inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
							>
								Forma Git
								<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Kayıt;
