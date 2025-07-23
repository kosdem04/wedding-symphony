import telegramIcon from './assets/telegram.svg'
import whatsappIcon from './assets/whatsapp.svg'
import banner from './assets/banner.png'
import mobileBanner from './assets/mobile-banner.png'
import chef from './assets/chef.jpg' // Фото кондитера
import cakes from './utils/cakesData.js'
import fillings from './utils/fillingsData.js'
import './App.css'
import CakeCardSlider from './components/CakeCardSlider';
import FillingCard from "./components/FillingCard.jsx";
import Header from "./components/Header.jsx";
import TestimonialsSlider from "./components/TestimonialsSlider.jsx";
import FillingCardSlider from "./components/FillingCardSlider.jsx";
import FAQSection from './components/FAQSection';

function App() {
    return (
        <>
            <Header/>
            {/*<div className="promo-banner2">*/}
            {/*    <p className="promo-text">🎉 <strong>Скидка 20%!</strong><br/> при бронировании до 30.06.2025</p>*/}
            {/*    <a href="#contact" className="btn promo-btn">Получить скидку</a>*/}
            {/*</div>*/}
            <main>
                <section className="hero" id="hero">
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
                    <div className="promo-banner">
                        <p className="promo-text">
                            Наша Миссия: <br/>
                            Создавать торты, которые становятся частью великих событий,<br/>
                            отражают эстетику клиентов и
                            остаются в их воспоминаниях —<br/> как нечто большее, чем просто торт.
                        </p>
                    </div>
                </section>


                <section className="gallery-section" id="gallery">
                    <div className="container">
                        <h2 className="section-title">Наши работы</h2>
                        <div className="gallery-blocks">

                            {/* Блок с тортами */}
                            <div className="gallery-subblock">
                                {/*<h3>Выбери дизайн</h3>*/}
                                <CakeCardSlider cakes={cakes}/>
                            </div>

                            {/* Промо-блок со скидкой */}
                            <div className="promo-banner">
                                <p className="promo-text">
                                    Безупречность — это наша внутренняя планка. <br/> Мы не стремимся работать со всеми.
                                    Мы работаем с теми, кто ценит безукоризненное исполнение и уважение к личному
                                    пространству.
                                </p>
                            </div>

                            {/* Блок с начинками */}
                            <div className="gallery-subblock">
                                <h3>Начинки</h3>
                                {/*<div className="gallery-grid">*/}
                                {/*    {fillings.map((cake, index) => (*/}
                                {/*        <FillingCard*/}
                                {/*            key={index}*/}
                                {/*            {...cake}*/}
                                {/*        />*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                                <div className="gallery-grid">
                                    {/*<h3>Выбери дизайн</h3>*/}
                                    <FillingCardSlider fillings={fillings}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="features" id="features">
                    <div className="container">
                        <h2>Почему выбирают <br/>
                            «Cake de Luxe»</h2>
                        <div className="feature-list">
                            <div className="feature">
                                <h3>💥 Впечатляющие размеры</h3>
                                <p>Мы создаём не десерт, а сладкий триумф вашего праздника</p>
                            </div>
                            <div className="feature">
                                <h3>💎 Эффектные элементы</h3>
                                <p>Дым, искры, вращение, иллюминация</p>
                            </div>
                            <div className="feature">
                                <h3>📸 Уникальные концепции</h3>
                                <p>Ваш торт — герой кадров и аплодисментов. Не просто десерт, а часть истории</p>
                            </div>
                            <div className="feature">
                                <h3>🚛 Бережная доставка — бесплатно*</h3>
                                <p>Привозим торт вовремя, в сборке и полной готовности.
                                    Заботимся о вашем спокойствии</p>
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


                <FAQSection/>


                {/*<section className="about" id="about">*/}
                {/*    <div className="container about-chef">*/}
                {/*        <div className="about-text">*/}
                {/*            <h2>О нас</h2>*/}
                {/*            <p>Сладкая Симфония — это команда единомышленников, влюблённых в искусство создания*/}
                {/*                праздника!<br/><br/>*/}
                {/*                Наше вдохновение рождается из желания исполнять мечты — будь то*/}
                {/*                роскошный свадебный торт для фотосессии или грандиозный десерт для*/}
                {/*                корпоратива, который запомнится всем.<br/><br/>*/}
                {/*                Мы создаём не просто торты, а центральные элементы праздника:<br/>*/}
                {/*                🎂 Уникальные многоярусные конструкции с эффектными элементами: дымом, вращением, искрами и*/}
                {/*                нестандартными формами<br/>*/}
                {/*                💫 Авторские дизайны и начинки, отражающие стиль и атмосферу вашего события<br/>*/}
                {/*                ✨ Концепции, создающие настоящий ВАУ-эффект и незабываемые эмоции<br/><br/>*/}
                {/*                Для нас масштаб — это не про размеры, а про умение превратить торт в главное впечатление*/}
                {/*                вечера. Мы тщательно прорабатываем каждую деталь, потому что знаем: именно эти мелочи делают*/}
                {/*                ваш праздник по-настоящему уникальным.<br/><br/>*/}
                {/*                Пусть ваш торт станет:<br/>*/}
                {/*                ✔️ Символом любви и счастья на свадьбе<br/>*/}
                {/*                ✔️ Ярким акцентом юбилея<br/>*/}
                {/*                ✔️ Запоминающимся финалом корпоратива<br/><br/>*/}
                {/*                Давайте создадим сладкий шедевр, который останется в сердцах и на*/}
                {/*                фотографиях навсегда! 🎂💖<br/><br/>*/}
                {/*                Готовы удивлять гостей?<br/>*/}
                {/*                Ваш праздник заслуживает настоящей <b>Сладкой Симфонии!</b> ✨*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className="about-photo">*/}
                {/*            <img src={chef} alt="Кондитер Юлия"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* Промо-блок со скидкой */}
                {/*<div className="promo-banner">*/}
                {/*    <p className="promo-text">🎉 <strong>Скидка 20%!</strong><br/> при бронировании до 30.06.2025</p>*/}
                {/*    <a href="#contact" className="btn promo-btn">Получить скидку</a>*/}
                {/*</div>*/}

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
            </main>

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
