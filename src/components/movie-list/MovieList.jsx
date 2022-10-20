import './movie-list.scss';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { SwiperSlide, Swiper } from 'swiper/react';

import tmdbApi from '../../services/tmdbServices';

import MovieCard from '../movie-card/MovieCard';

export const MovieList = ({ category, type, id }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (type !== 'similar') {
                switch (category) {
                    case 'movie':
                        response = await tmdbApi.getMoviesList(type, { params });
                        console.log(response)
                        break;
                    default:
                        response = await tmdbApi.getTvList(type, { params });
                }
            } else {
                response = await tmdbApi.similar(category, id);
            }
            setItems(response.results);
        }
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard movie={item} categoryMovie={category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
