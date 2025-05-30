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
import chef from './assets/chef.jpg' // Фото кондитера
import './App.css'
import CakeCard from "./components/CakeCard.jsx";
import FillingCard from "./components/FillingCard.jsx";

function App() {

    const cakes = [
        {
            label: "Новинка",
            image: cake2,
            title: "Белоснежная классика",
            size: "90 см | 20-40 гостей",
            price: "15 000 ₽",
            desc: "Белоснежная классика высотой 90 см на 20 – 40 гостей, который " +
                "станет не только украшением вашего праздника, но и гастрономическим " +
                "наслаждением для вас и ваших гостей.",
        },
        {
            label: "Классика",
            image: cake3,
            title: "Торжество нежности",
            size: "80 см | 20-40 гостей",
            price: "13 500 ₽",
            desc: "Белый цвет и классические линии — это символ элегантности и утонченности. " +
                "Наш торт на 20 - 40 гостей высотой 80 см станет великолепным дополнением к " +
                "любому свадебному стилю, от традиционного до современного.",
        },
        {
            label: "Хит",
            image: cake1,
            title: "Симфония любви",
            size: "60 см | 15-20 гостей",
            price: "10 500 ₽",
            desc: "Шикарный трёхъярусный торт для 15 – 20 гостей высотой 60 см классического " +
                "дизайна — идеальное решение, которое станет не только сладким акцентом " +
                "вашего праздника, но и великолепным фоном для ваших свадебных фотографий.",
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
                "Сливочный мусс",
                "Ягодное пюре на выбор (клубника, смородина, облепиха)"
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
            <header className="hero" id="hero">
                <div className="hero-content">
                    <h1>Сладкая Свадебная Симфония</h1>
                    <div className="hero-banner">
                        <img src={banner} alt="Banner" className="hero-banner-img"/>
                    </div>

                    {/*<p>Добро пожаловать в мой мир изысканных тортов, в мир*/}
                    {/*    Сладкой Свадебной симфонии!</p>*/}
                    <div className="contact-button-wrapper">
                        <a
                            href="#contact"
                            className="btn contact-link"
                        >
                            Связаться с нами
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
                            <h3>Выбери торт</h3>
                            <div className="gallery-grid">
                                {cakes.map((cake, index) => (
                                    <CakeCard
                                        key={index}
                                        {...cake}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Блок с начинками */}
                        <div className="gallery-subblock">
                            <h3>Выбери начинку</h3>
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
                    <h2>Почему Свадебная СИМФОНИЯ?</h2>
                    <div className="feature-list">
                        <div className="feature">
                            <h3>📸 Эффектные фотографии</h3>
                            <p>Наши торты станут ярким акцентом на ваших свадебных фотографиях,
                                подчеркнут особенность события и оставят приятные воспоминания на долгие годы.</p>
                        </div>
                        <div className="feature">
                            <h3>🤩 Торт на 3 кг — это 60 см в высоту!</h3>
                            <p>Это не просто десерт — это центральный элемент
                                свадьбы,
                                который украсит кадры, произведёт впечатление на гостей и подчеркнёт масштаб
                                события.</p>
                        </div>
                        <div className="feature">
                            <h3>🎂 Вкус без компромиссов</h3>
                            <p>Наши сбалансированные начинки из натуральных ингредиентов порадуют каждого вашего
                                гостя.</p>
                        </div>
                        <div className="feature">
                            <h3>🎨 Дизайн</h3>
                            <p>Наши шикарные дизайнерские торты — это воплощение изящества и креативности,
                                специально созданные, чтобы подчеркнуть уникальность вашего праздника.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about" id="about">
                <div className="container about-chef">
                    <div className="about-text">
                        <h2>Наш идейный вдохновитель</h2>
                        <p>Меня зовут Юлия. Более пяти лет я специализируюсь на создании классических
                            белых высоких свадебных тортов, которые станут настоящим украшением вашего
                            торжества. Каждый торт — это не просто десерт, а настоящее произведение
                            искусства, которое придаст вашему свадебному дню особую магию.</p>
                    </div>
                    <div className="about-photo">
                        <img src={chef} alt="Кондитер Юлия"/>
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container" style={{textAlign: 'center'}}>
                    <h2>Свяжитесь с нами</h2>
                    <p style={{marginBottom: '20px'}}>Мы с радостью ответим на все ваши вопросы!</p>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
                    <span className="header__round">
                        <a href="https://t.me/79963820386" target="_blank" rel="noopener noreferrer">
                          <img src={telegramIcon} alt="Telegram" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <span className="header__round">
                        <a href="https://wa.me/79963820386" target="_blank" rel="noopener noreferrer">
                          <img src={whatsappIcon} alt="WhatsApp" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <span className="contact-phone">
                            <h3>+7 (996) 382-03-86</h3>
                        <p>с 09.00 до 20.00</p>
                      </span>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2025 Сладкая Свадебная Симфония. Все права защищены.</p>
                </div>
            </footer>
        </>
    )
}

export default App
