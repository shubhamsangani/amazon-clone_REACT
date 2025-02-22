import React from 'react'
import { useStateValue } from '../../Context/StateProvider';
import "./index.css";
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';

const Checkout = () => {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://digitalsathi.com/wp-content/uploads/2017/08/amazon-todays-deal-banner-expand-4.jpg" alt="ad" className="checkout__ad" />
                {basket.length === 0 ? (
                    <div>
                        <h2>Empty Basket</h2>
                    </div>
                ) : (
                    basket.map((item, index) => {
                        const { id, title, image, price, rating } = item;
                        return (
                            <CheckoutProduct className="checkout__product" id={id} title={title} image={image} price={price} rating={rating} />
                        )
                    })
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout