import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './TestimonialsSlider.css';

import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';
import review4 from '../assets/review4.jpg';
import review5 from '../assets/review5.jpg';

const reviewImages = [review1, review2, review3, review4, review5];

const TestimonialsSlider = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);

        // Очистка события при анмаунте
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <h2 className="section-title">Отзывы</h2>

                {isMobile ? (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="testimonials-swiper"
                    >
                        {reviewImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Отзыв ${index + 1}`}
                                    className="testimonial-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        className="testimonials-swiper-desktop"
                    >
                        {reviewImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Отзыв ${index + 1}`}
                                    className="testimonial-image"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                <div className="contact-button-wrapper-card">
                    <a
                        href="#contact"
                        className="btn contact-link"
                    >
                        Забронировать
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
