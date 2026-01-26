import React from "react";
import UYMSLogo from "../assets/UYMS-logo-150x150.png";
import { NavLink } from "react-router-dom";
const Footer = () => (
  <footer className="bg-gradient-to-r font-serif from-gray-900 via-blue-900 to-gray-900 text-gray-200">
    {/* Main Footer Content */}
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* UYMS 26 Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src={UYMSLogo}
              alt="UYMS Logo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-white">UYMS 26</h3>
              <p className="text-sm text-blue-300">Ulusal Yazılım Mühendisliği Sempozyumu</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            17. Ulusal Yazılım Mühendisliği Sempozyumu
          </p>

        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white border-b border-blue-600 pb-2">Hızlı Erişim</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Ana Sayfa
              </NavLink>
            </li>
            <li>

              <NavLink to="/kayit" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Kayıt
              </NavLink>
            </li>
            <li>
              <NavLink to="/organizasyon-komitesi" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Organizasyon
              </NavLink>
            </li>
            <li>
              <NavLink to="/bildiri-cagrisi" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Bildiri Çağrısı
              </NavLink>
            </li>
            <li>
              <NavLink to="/ulasim" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                Ulaşım
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white border-b border-blue-600 pb-2">İletişim</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-300">
                Muğla Sıtkı Koçman Üniversitesi<br />
                Kötekli Kampüsü, Muğla
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm text-gray-300">+90 252 211 11 11</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-300">uyms26@mu.edu.tr</span>
            </div>
          </div>
        </div>
        {/* Important Dates */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white border-b border-blue-600 pb-2">Önemli Tarihler</h3>
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-xs text-blue-400 font-semibold">Bildiri Gönderimi Son Tarihi</p>
              <p className="text-sm text-gray-300">8 Şubat 2026</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-xs text-blue-400 font-semibold">Kayıt</p>
              <p className="text-sm text-gray-300">1 Nisan 2026</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-3">
              <p className="text-xs text-blue-400 font-semibold">Sempozyum</p>
              <p className="text-sm text-gray-300">14-16 Mayıs 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Footer */}
    <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Virtus Arge Yazılım A.Ş. Tüm hakları saklıdır.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Muğla Sıtkı Koçman Üniversitesi Yazılım Mühendisliği Bölümü tarafından düzenlenmektedir.
            </p>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;