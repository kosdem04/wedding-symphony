import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './FillingCardSlider.css';
import FillingCard from "./FillingCard.jsx"; // Добавьте стили

const FillingCardSlider = ({ fillings }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="filling-slider-section">
            {isMobile ? (
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="filling-swiper"
                >
                    {fillings.map((filling, index) => (
                        <SwiperSlide key={index}>
                            <FillingCard {...filling} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="filling-grid">
                    {fillings.map((filling, index) => (
                        <FillingCard key={index} {...filling} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default FillingCardSlider;
