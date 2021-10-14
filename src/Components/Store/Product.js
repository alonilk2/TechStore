import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { history } from '../../history';
import '../../CSS/Store/Product.css';
import '../../CSS/Store.css';
import Computer from '../../images/computer.jpg';
import {fetchProduct} from '../../Actions/generalActions';
import { Base64 } from 'js-base64';

function Product(props) 
{
    const productInstance = useSelector((state) => state.general)
    const dispatch = useDispatch();
    const [imgString, setImage] = useState('');

    useEffect(() => {
        async function dispatchFetchAction(){
            await dispatch(fetchProduct(props.productId));
        }
        dispatchFetchAction();
    }, [])
    useEffect(() => {
        if(productInstance.product){
            console.log(productInstance.product.data)
        let u8s = new Uint8Array(productInstance.product.data.productImg.image.data);
        setImage("data:"+productInstance.product.data.productImg.contentType+";base64,"+Base64.fromUint8Array(u8s));
        }

    }, [productInstance])
    if(productInstance.product){
        return (   
            <div className="row product product-container">
                <div className="col product product-img-container">
                    <img src={imgString} className="product product-img" alt="" />
                </div>
                <div className="col product product-info-container">
                    <h2 className="product product-info-row product-title">{productInstance.product.data.product.producttitle}</h2>
                    <h4 className="product product-info-row product-price">Price: {productInstance.product.data.product.price}$</h4>
                    <p className="product product-info-row product-title title">About this item:</p>
                    <p className="product product-info-row product-about">
Proin euismod enim non nibh suscipit lacinia eu nec lacus. Nulla facilisi. Quisque accumsan risus ut lacus varius, nec laoreet nunc ornare. Vestibulum venenatis porta risus sit amet dapibus. Phasellus cursus pretium condimentum. Nullam felis dolor, lacinia eu pretium id, semper et metus. Donec vitae nisi mi. Phasellus placerat ac elit sed condimentum. Fusce fringilla turpis sed velit ornare elementum. Cras urna velit, feugiat in dapibus sed, fringilla a ante. Sed pellentesque leo vel malesuada dapibus. Vivamus quis pulvinar lacus, vitae laoreet nibh. Donec ultricies ex pharetra malesuada sagittis. Mauris rhoncus odio sit amet felis pharetra, vitae vehicula elit consectetur.
                    </p>
                    <div className="product-info-bottom">
                        <div className="dropdown add-to-cart">
                            <button onClick={()=>{}} id="dropdown-categories" className="add-cart-btn">
                                Add to cart
                                <span className="dropdown-mask"></span>
                            </button>
                        </div>
                        <div className="dropdown add-to-cart">
                            <button onClick={()=>{}} id="dropdown-categories" className="add-cart-btn">
                                Buy Now
                                <span className="dropdown-mask"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        </>
    )

}
export default Product;