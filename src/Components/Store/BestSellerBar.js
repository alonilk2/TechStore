import React,{ useEffect, useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {fetchBestSellers} from '../../Actions/generalActions';
import '../../CSS/Store.css';
import dell from '../../images/bestseller-dell.webp';
import iphone from '../../images/bestseller-iphone.jpg';
import casio from '../../images/bestseller-casio.png';
import nintendo from '../../images/bestseller-nintendo.png';
import siemens from '../../images/bestseller-siemens.png';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'

function BestSellerBar(props)
{
    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBestSellers())
    });

    if(width >= 768)
        return (
            <div>
                <h2 className="bestseller-title" >Best Sellers </h2>
                <div className="row best-seller-container">
                    <a href={"/store/product/1"} className="col best-seller-col">
                        <img src={dell} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Dell XPS 17" </h4>
                        <h5 className="bestseller-price"> 3190$ </h5>
                    </a>
                    <a href={"/store/product/8"} className="col best-seller-col">
                        <img src={iphone} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> iPhone 12 Pro Max </h4>
                        <h5 className="bestseller-price"> 1199$ </h5>
                    </a>
                    <div className="col best-seller-col">
                        <img src={casio} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Casio G-Shock </h4>
                        <h5 className="bestseller-price"> 320$ </h5>

                    </div>
                    <div className="col best-seller-col">
                        <img src={nintendo} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Nintendo Switch </h4>
                        <h5 className="bestseller-price"> 759$ </h5>

                    </div>
                    <div className="col best-seller-col">
                        <img src={siemens} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Siemens iQ900 </h4>
                        <h5 className="bestseller-price"> 1999$ </h5>
                    </div>
                </div>
            </div>
        );
    else {
        return (
        <div>
            <h2 className="bestseller-title">Best Sellers</h2>
            <Swiper
            spaceBetween={15}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            centeredSlides={true} 
            pagination={{
                "clickable": true
            }}
            >
                <SwiperSlide >
                    <img src={dell} className="bestseller-img" />
                    <h4 className="bestseller-title-product"> Dell XPS 17" </h4>
                    <h5 className="bestseller-price"> 3190$ </h5>

                </SwiperSlide>
                <SwiperSlide >
                    <img src={iphone} className="bestseller-img" />
                    <h4 className="bestseller-title-product"> iPhone 12 Pro Max </h4>
                    <h5 className="bestseller-price"> 1199$ </h5>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={casio} className="bestseller-img" />
                    <h4 className="bestseller-title-product"> Casio G-Shock </h4>
                    <h5 className="bestseller-price"> 320$ </h5>

                </SwiperSlide>
                <SwiperSlide >
                    <img src={nintendo} className="bestseller-img" />
                    <h4 className="bestseller-title-product"> Nintendo Switch </h4>
                    <h5 className="bestseller-price"> 759$ </h5>
                </SwiperSlide>
                <SwiperSlide >
                    <img src={siemens} className="bestseller-img" />
                    <h4 className="bestseller-title-product"> Siemens iQ900 </h4>
                    <h5 className="bestseller-price"> 1999$ </h5>
                </SwiperSlide>
            </Swiper>
        </div>
    )}
}
export default BestSellerBar;