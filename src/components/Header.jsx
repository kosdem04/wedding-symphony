import React, {useEffect, useState} from 'react';
import telegramIcon from '../assets/telegram.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import './Header.css';
import logo from '../assets/logo.png';
import mobileLogo from '../assets/mobile-logo.png';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import CakeCard from "./CakeCard.jsx";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <header className="custom-header">
            {isMobile ? (
                <div className="header-left">
                    <img src={mobileLogo} alt="Cake de Luxe" className="site-logo"/>
                </div>
            ) : (
                <div className="header-left">
                    <img src={logo} alt="Cake de Luxe" className="site-logo"/>
                    <p className="header-usp">Кондитерская<br/> премиум-класса</p>
                </div>
            )}
            {isMobile ? (
                <div className="header-center">
                    <p className="header-usp">Кондитерская<br/> премиум-класса</p>
                </div>
                ) : (
                <div className="header-center">
                </div>
            )}
            < div className="header-right">
                < span className="header__round">
                <a href="https://t.me/cake_de_luxe54" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className="header-icon"/>
                </a>
                </span>
                <span className="header__round">
                <a href="https://wa.me/79963820386" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" className="header-icon"/>
                </a>
                    </span>
                <div className="header-contact-text">
                    <div>+7 (996) 382-03-86</div>
                    <div>09:00 - 20:00</div>
                    <div>г. Новосибирск</div>
                </div>
            </div>
        </header>
);
};

export default Header;