import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CakeCard from './CakeCard'; // Компонент карточки
import './CakeCardSlider.css'; // Добавьте стили

const CakeCardSlider = ({ cakes }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="cake-slider-section">
            {isMobile ? (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="cake-swiper"
                >
                    {cakes.map((cake, index) => (
                        <SwiperSlide key={index}>
                            <CakeCard {...cake} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="cake-grid">
                    {cakes.map((cake, index) => (
                        <CakeCard key={index} {...cake} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CakeCardSlider;
