import React,{ useEffect, useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {fetchBestSellers} from '../../Actions/generalActions';
import '../../CSS/Store.css';
import dell from '../../images/bestseller-dell.webp';
import iphone from '../../images/bestseller-iphone.jpg';
import casio from '../../images/bestseller-casio.png';
import nintendo from '../../images/bestseller-nintendo.png';
import siemens from '../../images/bestseller-siemens.png';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import { Swiper, SwiperSlide } from 'swiper/react';
import Axios from 'axios';
import 'swiper/swiper.min.css'

const fetchImageFromAWS = async (productId, ext) => {
    try {
        const response = await fetch("https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/products/"+productId+ext);
        if(response.status === 200)
            return "https://cloud-cube-us2.s3.amazonaws.com/t09vuh9fptce/public/products/"+productId+ext;
        else if(ext === ".png") return fetchImageFromAWS(productId, ".jpg");
        return response;
    } catch(err) {
        console.log(err)
        return fetchImageFromAWS(productId, ".jpg");
    }
}
function BestSellerBar(props)
{
    const [ProductList, setProductList] = useState([''])
    const { height, width } = useWindowDimensions();
    async function fetchBestSellerList(){
        return await Axios.get("https://techstore1.herokuapp.com/products/getbestsellers")
        .then(async function(response) { 
            if(response.data){
                for(const element of response.data){
                    let ImgUrl = await fetchImageFromAWS(element.productid, ".png");
                    element.imgurl = ImgUrl;
                }
                setProductList(response.data)
            }
            else {
            }
        })
        .catch(function(error) {
        });

    }
    useEffect(() => {
        if(ProductList.length <= 1)
            fetchBestSellerList();
    });
    function renderProductList(){
        console.log(ProductList)
        if(ProductList.length > 1) {
            return ProductList.map(function(product) {
                console.log(product)
                return (
                    <a href={"/store/product/"+product.productid} className="col best-seller-col">
                        <img src={product.imgurl} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> {product.product.producttitle} </h4>
                        <h5 className="bestseller-price"> {product.product.price} </h5>
                    </a>
                )
            })
        }
        return;
    }
    if(width >= 768)
        return (
            <div>
                <h2 className="bestseller-title" >Best Sellers </h2>
                <div className="row best-seller-container">
                    {renderProductList()}
                    {/* <a href={"/store/product/66"} className="col best-seller-col">
                        <img src={dell} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Dell XPS 17" </h4>
                        <h5 className="bestseller-price"> 3190$ </h5>
                    </a>
                    <a href={"/store/product/64"} className="col best-seller-col">
                        <img src={iphone} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> iPhone 12 Pro Max </h4>
                        <h5 className="bestseller-price"> 1199$ </h5>
                    </a>
                    <a href={"/store/product/63"} className="col best-seller-col">
                        <img src={casio} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Casio G-Shock </h4>
                        <h5 className="bestseller-price"> 320$ </h5>

                    </a>
                    <div className="col best-seller-col">
                        <img src={nintendo} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Nintendo Switch </h4>
                        <h5 className="bestseller-price"> 759$ </h5>

                    </div>
                    <div className="col best-seller-col">
                        <img src={siemens} className="bestseller-img" />
                        <h4 className="bestseller-title-product"> Siemens iQ900 </h4>
                        <h5 className="bestseller-price"> 1999$ </h5>
                    </div> */}
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