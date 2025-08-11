import React from 'react';

// Example data, update as needed
const historyData = [
    { year: 'UYMS 2022', website: 'https://uyms22.atauni.edu.tr/', proceedings: 'https://ekitap.atauni.edu.tr/index.php/product/16-ulusal-yazilim-muhendisligi-sempozyumu-bildiri-kitabi/' },
	{ year: 'UYMS 2021', website: 'https://uyms21.ege.edu.tr/', proceedings: 'https://ieeexplore.ieee.org/xpl/conhome/9659489/proceeding' },
	{ year: 'UYMS 2020', website: 'https://www.okan.edu.tr/uyms2020/', proceedings: 'https://ieeexplore.ieee.org/xpl/conhome/9247008/proceeding' },
	{ year: 'UYMS 2019', website: 'https://uyms19.iyte.edu.tr/', proceedings: 'https://openaccess.iyte.edu.tr/handle/11147/7537' },
	{ year: 'UYMS 2018', website: 'https://uyms18.sabanciuniv.edu/', proceedings: 'https://ceur-ws.org/Vol-2201/' },
	{ year: 'UYMS 2017', website: 'https://uyms.github.io/', proceedings: 'https://ceur-ws.org/Vol-1980/' },
	{ year: 'UYMS 2016', website: 'https://uyms.comu.edu.tr/', proceedings: 'https://ceur-ws.org/Vol-1721/' },
	{ year: 'UYMS 2015', website: '', proceedings: 'https://ceur-ws.org/Vol-1483/' },
	{ year: 'UYMS 2014', website: '', proceedings: 'https://uyms.comu.edu.tr/foto/dosya_156a4ccbe1df43.pdf' },
	{ year: 'UYMS 2013', website: '', proceedings: 'https://ceur-ws.org/Vol-1072/' },
	{ year: 'UYMS 2012', website: '', proceedings: 'https://uyms.comu.edu.tr/foto/dosya_156a4cce60e027.pdf' },
	{ year: 'UYMS 2011', website: '', proceedings: 'https://uyms.comu.edu.tr/foto/dosya_156a4ccfa273d6.pdf' },
];

const Tarihce = () => {
	return (
		<div className="min-h-screen font-serif bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-6xl mx-auto">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-12 text-center">Tarihçe</h1>
				<div className="overflow-x-auto rounded-2xl shadow-xl bg-white">
					<table className="min-w-full divide-y divide-blue-200">
						<thead className="bg-gradient-to-r from-blue-600 to-indigo-600">
						</thead>
						<tbody className="bg-white divide-y divide-blue-100">
							{historyData.map((row, idx) => (
								<tr key={row.year} className="hover:bg-blue-50 transition">
									<td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-800">{row.year}</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{row.website ? (
											<a href={row.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Web Sitesi</a>
										) : (
											<span className="text-gray-400">-</span>
										)}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										{row.proceedings ? (
											<a href={row.proceedings} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">Bildiri Kitabı</a>
										) : (
											<span className="text-gray-400">-</span>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Tarihce;
