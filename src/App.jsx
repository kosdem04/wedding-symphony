import { useState } from 'react'
import cake1 from './assets/cake1.jpg'
import cake2 from './assets/cake2.jpg'
import cake3 from './assets/cake3.jpg'
import telegramIcon from './assets/telegram.svg'
import whatsappIcon from './assets/whatsapp.svg'
import chef from './assets/chef.jpg' // Фото кондитера
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className="hero" id="hero">
                <div className="hero-content">
                    <h1>Сладкая Свадебная Симфония</h1>
                    <p>Добро пожаловать в мой мир изысканных тортов, в мир Сладкой Свадебной симфонии!</p>
                    <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}}>
                      <span className="header__round">
                        <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
                          <img  src={telegramIcon} alt="Telegram" style={{width: '64px', height: '64px'}}/>
                        </a>
                        </span>
                        <span className="header__round">
                        <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer">
                          <img  src={whatsappIcon} alt="WhatsApp" style={{width: '64px', height: '64px'}}/>
                        </a>
                      </span>
                    </div>
                </div>
            </header>

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


            <section className="gallery" id="gallery">
                <div className="container">
                    <h2>Выбери свой торт</h2>
                    <div className="gallery-grid">
                        <div className="product-card">
                            <img src={cake2} alt="Свадебный торт 2"/>
                            <h3>Белоснежная классика</h3>
                            <p className="price">12 000 ₽</p>
                            <p className="desc">Высокий торт с классическим оформлением, идеально подходит для
                                элегантной свадьбы.</p>
                        </div>
                        <div className="product-card">
                            <img src={cake3} alt="Свадебный торт 3"/>
                            <h3>Розовое вдохновение</h3>
                            <p className="price">14 500 ₽</p>
                            <p className="desc">Нежные оттенки роз и изысканный декор придадут вашему празднику
                                романтичности.</p>
                        </div>
                        <div className="product-card">
                            <img src={cake1} alt="Свадебный торт 1"/>
                            <h3>Симфония любви</h3>
                            <p className="price">13 200 ₽</p>
                            <p className="desc">Шикарный трёхъярусный торт с акцентами из живых цветов — эффектно и
                                стильно.</p>
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
                        <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
                          <img src={telegramIcon} alt="Telegram" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <span className="header__round">
                        <a href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer">
                          <img src={whatsappIcon} alt="WhatsApp" style={{width: '80px', height: '80px'}}/>
                        </a>
                    </span>
                        <span className="contact-phone">
                            <h3>+7 (495) 789-04-98</h3>
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
