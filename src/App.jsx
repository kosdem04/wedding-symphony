import { useState } from 'react'
import cake1 from './assets/cake1.jpg'
import cake2 from './assets/cake2.jpg'
import cake3 from './assets/cake3.jpg'
import filling1 from './assets/filling1.jpg'
import filling2 from './assets/filling2.jpg'
import filling3 from './assets/filling3.jpg'
import telegramIcon from './assets/telegram.svg'
import whatsappIcon from './assets/whatsapp.svg'
import banner from './assets/banner.png'
import mobileBanner from './assets/mobile-banner.png'
import chef from './assets/chef.jpg' // Фото кондитера
import './App.css'
import CakeCard from "./components/CakeCard.jsx";
import FillingCard from "./components/FillingCard.jsx";
import Header from "./components/Header.jsx";
import TestimonialsSlider from "./components/TestimonialsSlider.jsx";

function App() {

    const cakes = [
        {
            label: "Новинка",
            image: cake2,
            title: "Белоснежная классика",
            size: "7 ярусов 90 см",
            price: "от 15 000 ₽",
            desc: [
                "На 25-30 гостей - \n" +
                "17 899 ₽",
                    "На 35-40 гостей-\n" +
                    "22 499 ₽",
                    "На 45-50 гостей-\n" +
                    "29 999 ₽"
                ],
        },
        {
            label: "Классика",
            image: cake3,
            title: "Торжество нежности",
            size: "7 ярусов 90 см",
            price: "от 13 500 ₽",
            desc: [
                "На 25-30 гостей - \n" +
                "16 599 ₽",
                "На 35-40 гостей-\n" +
                "21 699 ₽",
                "На 45-50 гостей-\n" +
                "28 700 ₽"
            ],
        },
        {
            label: "Хит",
            image: cake1,
            title: "Симфония любви",
            size: "3 яруса 60 см",
            price: "от 10 500 ₽",
            desc: [
                "На 15-20 гостей - \n" +
                "12 699 ₽",
                "На 25-30 гостей-\n" +
                "17 899 ₽",
                "На 35-40 гостей-\n" +
                "22 499 ₽"
            ],
        },
    ];

    const fillings = [
        {
            image: filling1,
            title: "Ягодная Мелодия Любви",
            desc: "Погрузитесь в мир романтики и нежности с нашей эксклюзивной начинкой" +
                " \"Ягодная Мелодия Любви\". Этот изысканный торт станет идеальным " +
                "украшением вашего свадебного стола и подарит незабываемые моменты радости.",
            composition: [
                "Ванильный бисквит",
                "Крем чиз",
                "Ягодная начинка на выбор (клубника, смородина, облепиха)"
            ]
        },
        {
            image: filling2,
            title: "Шоколадная Симфония с Вишневыми Аккордами",
            desc: "Откройте для себя волшебство сладкого наслаждения с нашей начинкой " +
                "\"Шоколадная Симфония с Вишневыми Аккордами\". Эта начинка — идеальный выбор " +
                "для тех, кто хочет добавить в свой свадебный день нотку страсти и изысканности.",
            composition: [
                "Шоколадный бисквит",
                "Крем чиз",
                "Натуральная вишня"
            ]
        },
        {
            image: filling3,
            title: "Персиковый Вальс Счастья",
            desc: "Погрузитесь в атмосферу нежности и счастья с нашей начинкой " +
                "\"Персиковый Вальс Счастья\". Эта начинка станет идеальным акцентом вашего " +
                "свадебного торжества, наполняя его светом, радостью и изысканным вкусом.",
            composition: [
                "Ванильный бисквит",
                "Крем чиз",
                "Кусочки персика"
            ]
        },
    ];

    return (
        <>
            <Header/>
            <header className="hero" id="hero">
                <div className="hero-content">
                    {/*<h1>Сладкая Симфония</h1>*/}
                    {/*<h3 className="hero-subtitle">Свадебные торты Новосибирск</h3>*/}
                    <div className="hero-banner">
                        <picture>
                            <source srcSet={mobileBanner} media="(max-width: 768px)"/>
                            <source srcSet={banner} media="(min-width: 769px)"/>
                            <img src={banner} alt="Banner" className="hero-banner-img"/>
                        </picture>
                    </div>

                    {/*<p>Добро пожаловать в мой мир изысканных тортов, в мир*/}
                    {/*    Сладкой Свадебной симфонии!</p>*/}
                    <div className="contact-button-wrapper">
                        <a
                            href="#gallery"
                            className="btn contact-link"
                        >
                            Хочу торт
                        </a>
                    </div>
                </div>
            </header>


            <section className="gallery-section" id="gallery">
                <div className="container">
                    <h2 className="section-title">Выбери свой идеальный торт</h2>
                    <div className="gallery-blocks">

                        {/* Блок с тортами */}
                        <div className="gallery-subblock">
                            {/*<h3>Выбери дизайн</h3>*/}
                            <div className="gallery-grid">
                                {cakes.map((cake, index) => (
                                    <CakeCard
                                        key={index}
                                        {...cake}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Промо-блок со скидкой */}
                        <div className="promo-banner">
                            <p className="promo-text">🎉 Забронируй до 30.06.2025 —<br/> получи торт своей мечты со
                                скидкой <strong>20%</strong>!</p>
                            <a href="#contact" className="btn promo-btn">Хочу скидку</a>
                        </div>

                        {/* Блок с начинками */}
                        <div className="gallery-subblock">
                            <h3>Начинки</h3>
                            <div className="gallery-grid">
                                {fillings.map((cake, index) => (
                                    <FillingCard
                                        key={index}
                                        {...cake}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="features" id="features">
                <div className="container">
                    <h2>Почему выбирают <br/>
                        «Сладкую Симфонию»</h2>
                    <div className="feature-list">
                        <div className="feature">
                            <h3>💎 Высота, которая впечатляет</h3>
                            <p>Даже торт от 3,5 кг — многоярусный, изящный и
                                «вау» на фотографиях.</p>
                        </div>
                        <div className="feature">
                            <h3>🧁 Минимум веса — максимум эффекта</h3>
                            <p>Идеально для небольших свадеб: красиво, масштабно, но не переплачивая за лишние
                                килограммы.</p>
                        </div>
                        <div className="feature">
                            <h3>🚛 Бережная доставка — бесплатно*</h3>
                            <p>Привозим торт вовремя, в сборке и полной готовности. Заботимся о вашем спокойствии.</p>
                        </div>
                        <div className="feature">
                            <h3>📸 Фотогеничный с любого ракурса</h3>
                            <p>Ваш торт — герой кадров и аплодисментов. Не просто десерт, а часть истории.</p>
                        </div>
                    </div>
                    <div className="contact-button-wrapper">
                        <a
                            href="#contact"
                            className="btn contact-link"
                        >
                            Связаться с нами
                        </a>
                    </div>
                </div>
            </section>
            <TestimonialsSlider/>


            <section className="about" id="about">
                <div className="container about-chef">
                    <div className="about-text">
                        <h2>О нас</h2>
                        <p>Сладкая Симфония — это команда единомышленников, влюбленных в своё дело!<br/>
                            Наше вдохновение рождается из простого желания — исполнить мечту многих пар о большом
                            многоярусном торте, достойном настоящей свадебной фотосессии.<br/><br/>
                            Для этого мы разработали уникальные дизайны и начинки многоярусных тортов, идеально
                            подходящих для небольших торжеств и скромных бюджетов.<br/>
                            Мы верим, что каждый торт должен быть не только вкусным, но и отражать атмосферу вашего
                            праздника, подчёркивать стиль жениха и невесты.<br/><br/>
                            К каждому торту мы подходим с любовью и вниманием к деталям — ведь именно эти мелочи
                            делают ВАШ день по-настоящему уникальным.<br/>
                            Для нас каждый торт — не просто десерт, а символ любви и счастья, который останется в ВАШИХ
                            сердцах и воспоминаниях на всю жизнь! 🥂💕<br/><br/>
                            Давайте сделаем ВАШ свадебный день по-настоящему сладким и незабываемым! ✨
                        </p>
                    </div>
                    <div className="about-photo">
                        <img src={chef} alt="Кондитер Юлия"/>
                    </div>
                </div>
            </section>

            {/* Промо-блок со скидкой */}
            <div className="promo-banner">
                <p className="promo-text">🎉 Забронируй до 30.06.2025 —<br/> получи торт своей мечты со
                    скидкой <strong>20%</strong>!</p>
                <a href="#contact" className="btn promo-btn">Хочу скидку</a>
            </div>

            <section className="contact" id="contact">
                <div className="container" style={{textAlign: 'center'}}>
                    <h2>Свяжитесь с нами</h2>
                    <p style={{marginBottom: '20px'}}>Мы с радостью ответим на все ваши вопросы!</p>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
                    <span className="header__round">
                        <a href="https://t.me/sweet_symphony54" target="_blank" rel="noopener noreferrer">
                          <img src={telegramIcon} alt="Telegram" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <span className="header__round">
                        <a href="https://wa.me/79963820386" target="_blank" rel="noopener noreferrer">
                          <img src={whatsappIcon} alt="WhatsApp" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <address>
                            <strong>+7 (996) 382-03-86</strong><br/>
                            <span>с 09.00 до 20.00</span><br/>
                            <span>г. Новосибирск</span>
                        </address>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer-container">
                    <p className="footer-note">
                        *Бесплатная доставка по Центральному и Октябрьскому району.
                    </p>
                    <p className="footer-note">
                        *Скидки не суммируются.
                    </p>
                    <div className="footer-main">
                        <p>&copy; 2025 Сладкая Симфония. Все права защищены.</p>
                        <a href="https://webmaster.yandex.ru/siteinfo/?site=https://sweet-symphony54.ru">
                            <img width="88" height="31" alt="" border="0" border-radius="8"
                                 src="https://yandex.ru/cycounter?https://sweet-symphony54.ru&theme=light&lang=ru"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
