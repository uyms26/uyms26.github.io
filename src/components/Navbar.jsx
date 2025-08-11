import React, { useState } from "react";
import { Link } from "react-router-dom";
import UniLogo from "../assets/logo1.png";
import UYMSLogo from "../assets/UYMS-logo-150x150.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    return (
        <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                       <a href="https://www.mu.edu.tr" className="flex items-center">
                        <img 
                            src={UniLogo} 
                            alt="University Logo" 
                            className="h-10 md:h-12 lg:h-14 w-auto transition-transform hover:scale-105" 
                        /></a>
                        <div className="hidden md:block">
                            <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        <NavLink to="/" onClick={closeMenu}>
                            Anasayfa
                        </NavLink>
                        
                        {/* Bildiri Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => toggleDropdown('bildiri')}
                                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center space-x-1"
                            >
                                <span>Bildiri</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'bildiri' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${activeDropdown === 'bildiri' ? 'opacity-100 visible' : ''}`}>
                                <div className="py-2">
                                    <DropdownLink to="/bildiri-cagrisi" onClick={closeMenu}>
                                        Bildiri Çağrısı
                                    </DropdownLink>
                                    <DropdownLink to="/bildiri-gonderimi" onClick={closeMenu}>
                                        Bildiri Gönderimi
                                    </DropdownLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/program" onClick={closeMenu}>
                            Program
                        </NavLink>
                        
                        {/* Organizasyon Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => toggleDropdown('organizasyon')}
                                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center space-x-1"
                            >
                                <span>Organizasyon</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'organizasyon' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${activeDropdown === 'organizasyon' ? 'opacity-100 visible' : ''}`}>
                                <div className="py-2">
                                    <DropdownLink to="/organizasyon-komitesi" onClick={closeMenu}>
                                        Organizasyon Komitesi
                                    </DropdownLink>
                                    <DropdownLink to="/program-komitesi" onClick={closeMenu}>
                                        Program Komitesi
                                    </DropdownLink>
                                    <DropdownLink to="/yonlendirme-komitesi" onClick={closeMenu}>
                                        Yönlendirme Komitesi
                                    </DropdownLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/kayit" onClick={closeMenu}>
                            Kayıt
                        </NavLink>
                        
                        {/* Ulaşım & Konaklama Dropdown */}
                        <div className="relative group">
                            <button
                                onClick={() => toggleDropdown('ulasim')}
                                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center space-x-1"
                            >
                                <span>Ulaşım & Konaklama</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ulasim' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${activeDropdown === 'ulasim' ? 'opacity-100 visible' : ''}`}>
                                <div className="py-2">
                                    <DropdownLink to="/ulasim" onClick={closeMenu}>
                                        Ulaşım
                                    </DropdownLink>
                                    <DropdownLink to="/konaklama" onClick={closeMenu}>
                                        Konaklama
                                    </DropdownLink>
                                    <DropdownLink to="/mugla-hakkinda" onClick={closeMenu}>
                                        Muğla Hakkında
                                    </DropdownLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to="/tarihce" onClick={closeMenu}>
                            Tarihçe
                        </NavLink>
                        <NavLink to="/iletisim" onClick={closeMenu}>
                            İletişim
                        </NavLink>
                    </div>

                    {/* Right Logo */}
                    <div className="flex items-center space-x-3">
                        <img 
                            src={UYMSLogo} 
                            alt="UYMS Logo" 
                            className="h-10 md:h-12 lg:h-14 w-auto transition-transform hover:scale-105" 
                        />
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Ana menüyü aç</span>
                            {!isMenuOpen ? (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-100">
                        <MobileNavLink to="/" onClick={closeMenu}>
                            Anasayfa
                        </MobileNavLink>
                        
                        {/* Mobile Bildiri Section */}
                        <div className="space-y-1">
                            <button
                                onClick={() => toggleDropdown('bildiri-mobile')}
                                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
                            >
                                <span>Bildiri</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'bildiri-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'bildiri-mobile' && (
                                <div className="ml-4 space-y-1">
                                    <MobileNavLink to="/bildiri-cagrisi" onClick={closeMenu}>
                                        Bildiri Çağrısı
                                    </MobileNavLink>
                                    <MobileNavLink to="/bildiri-gonderimi" onClick={closeMenu}>
                                        Bildiri Gönderimi
                                    </MobileNavLink>
                                </div>
                            )}
                        </div>

                        <MobileNavLink to="/program" onClick={closeMenu}>
                            Program
                        </MobileNavLink>
                        
                        {/* Mobile Organizasyon Section */}
                        <div className="space-y-1">
                            <button
                                onClick={() => toggleDropdown('organizasyon-mobile')}
                                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
                            >
                                <span>Organizasyon</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'organizasyon-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'organizasyon-mobile' && (
                                <div className="ml-4 space-y-1">
                                    <MobileNavLink to="/organizasyon-komitesi" onClick={closeMenu}>
                                        Organizasyon Komitesi
                                    </MobileNavLink>
                                    <MobileNavLink to="/program-komitesi" onClick={closeMenu}>
                                        Program Komitesi
                                    </MobileNavLink>
                                    <MobileNavLink to="/yonlendirme-komitesi" onClick={closeMenu}>
                                        Yönlendirme Komitesi
                                    </MobileNavLink>
                                </div>
                            )}
                        </div>

                        <MobileNavLink to="/kayit" onClick={closeMenu}>
                            Kayıt
                        </MobileNavLink>
                        
                        {/* Mobile Ulaşım & Konaklama Section */}
                        <div className="space-y-1">
                            <button
                                onClick={() => toggleDropdown('ulasim-mobile')}
                                className="w-full text-left px-4 py-3 rounded-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center justify-between"
                            >
                                <span>Ulaşım & Konaklama</span>
                                <svg className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'ulasim-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeDropdown === 'ulasim-mobile' && (
                                <div className="ml-4 space-y-1">
                                    <MobileNavLink to="/ulasim" onClick={closeMenu}>
                                        Ulaşım
                                    </MobileNavLink>
                                    <MobileNavLink to="/konaklama" onClick={closeMenu}>
                                        Konaklama
                                    </MobileNavLink>
                                    <MobileNavLink to="/mugla-hakkinda" onClick={closeMenu}>
                                        Muğla Hakkında
                                    </MobileNavLink>
                                </div>
                            )}
                        </div>

                        <MobileNavLink to="#" onClick={closeMenu}>
                            Tarihçe
                        </MobileNavLink>
                        <MobileNavLink to="#" onClick={closeMenu}>
                            İletişim
                        </MobileNavLink>
                    </div>
                </div>
            </div>
        
        </nav>
        
    );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children, onClick, isActive = false }) => {
    if (to === "#") {
        return (
            <button
                onClick={onClick}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                    isActive 
                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
                {children}
                {!isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                )}
            </button>
        );
    }

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                isActive 
                    ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
        >
            {children}
            {!isActive && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            )}
        </Link>
    );
};

// Dropdown Link Component
const DropdownLink = ({ to, children, onClick }) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
        >
            {children}
        </Link>
    );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ to, children, onClick, isActive = false }) => {
    if (to === "#") {
        return (
            <button
                onClick={onClick}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive 
                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
            >
                {children}
            </button>
        );
    }

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive 
                    ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
        >
            {children}
        </Link>
    );
};

export default Navbar;