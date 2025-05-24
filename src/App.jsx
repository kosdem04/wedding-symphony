import { useState } from 'react'
import cake1 from './assets/cake1.jpg'
import cake2 from './assets/cake2.jpg'
import cake3 from './assets/cake3.jpg'
import cake5 from './assets/cake5.jpg'
import chef from './assets/chef.jpg' // Фото кондитера
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <header className="hero" id="hero">
                <div className="hero-content">
                    <h1>Свадебная феерия тортов</h1>
                    <p>Выбирая наши торты, вы выбираете красивое,
                        яркое начало вашей семейной истории, запечатленное на снимках.</p>
                    <a href="#contact" className="btn">Оставить заявку</a>
                </div>
            </header>

            <section className="features" id="features">
                <div className="container">
                    <h2>Почему выбирают нас?</h2>
                    <div className="feature-list">
                        <div className="feature">
                            <h3>📸 Эффектные фотографии</h3>
                            <p>Наши торты станут ярким акцентом на ваших свадебных фотографиях,
                                подчеркнут особенность события и оставят приятные воспоминания на долгие годы.</p>
                        </div>
                        <div className="feature">
                            <h3>Размер имеет значение</h3>
                            <p>Наш торт на 3 кг — это 60 см в высоту! Это не просто десерт — это центральный элемент
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
                        <img src={cake2} alt="Свадебный торт 2"/>
                        <img src={cake3} alt="Свадебный торт 3"/>
                        <img src={cake1} alt="Свадебный торт 1"/>

                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container about-chef">
                    <div className="about-text">
                        <h2>Обо мне</h2>
                        <p>Приветствую вас на моей территории свадебных тортов! Меня зовут Юлия,
                            и я уже более пяти лет создаю невероятную атмосферу праздника своими
                            красивыми высокими тортами. Моя мечта — чтобы даже маленькая свадьба украшалась
                            эффектным тортом не ниже 60 см! Такой торт позволяет реализовать креативные идеи
                            для фотографий, помогая создавать изумительные кадры, которые останутся в памяти и
                            семейном альбоме навсегда.</p>
                    </div>
                    <div className="about-photo">
                        <img src={chef} alt="Кондитер Юлия" />
                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="container">
                    <h2>Оставьте заявку</h2>
                    <form action="#" method="post" className="contact-form">
                        <input type="text" name="name" placeholder="Ваше имя" required />
                        <input type="tel" name="phone" placeholder="Телефон" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Кратко опишите ваш торт мечты" rows="4"></textarea>
                        <button type="submit" className="btn">Отправить заявку</button>
                    </form>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2025 Свадебные торты от Юлии. Все права защищены.</p>
                </div>
            </footer>
        </>
    )
}

export default App
