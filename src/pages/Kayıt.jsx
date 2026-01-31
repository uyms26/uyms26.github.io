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
										<span className="block text-xs font-normal text-gray-500 mt-1">(01.04.2026 öncesi)</span>
									</th>
									<th className="px-6 py-6 text-sm font-bold text-indigo-700 uppercase tracking-wider">
										Normal Kayıt
										<span className="block text-xs font-normal text-gray-500 mt-1">(01.04.2026 sonrası)</span>
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
			</div>
		</div>
	);
};

export default Kayıt;
