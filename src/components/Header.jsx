import React from 'react';
import telegramIcon from '../assets/telegram.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="custom-header">
            <div className="header-left">
                <h1 className="site-title">Сладкая Симфония</h1>
            </div>
            <div className="header-center">
                <p className="header-usp">Многоярусные свадебные торты <br />
                    от 3х килограмм в Новосибирске</p>
            </div>
            <div className="header-right">
                <span className="header__round">
                <a href="https://t.me/SvadebnaySymphony" target="_blank" rel="noopener noreferrer">
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