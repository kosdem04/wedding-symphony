import React from 'react';
import telegramIcon from '../assets/telegram.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="custom-header">
            <div className="header-left">
                <img src={logo} alt="Сладкая Симфония" className="site-logo"/>
            </div>
            <div className="header-center">
                <p className="header-usp">Масштабные многоярусные торты <br />
                    от 3х килограмм в Новосибирске</p>
            </div>
            <div className="header-right">
                <span className="header__round">
                <a href="https://t.me/sweet_symphony54" target="_blank" rel="noopener noreferrer">
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
        </div>
);
};

export default Header;