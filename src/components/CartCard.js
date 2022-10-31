import React from "react";
import { deleteFromCart } from "../store/actionCreators/cart";
import { DELETE_FROM_CART } from "../store/actions/cart";
import store from "../store/store";

export const CartCard = ({product}) => {
    
    const {id, title, price, count, image} = product
    const totalCounter = (price,count) => {
        return price*count
    }

    const handleDelete = () => {
        store.dispatch(deleteFromCart(id))
    }

    return (
        <div className="cart-card">
            <div className="cart-card__img">
                <img src={image} alt={title}/>
            </div>
            <div className="cart-card__info">
                <h4 className="cart-card__title">{title}</h4>
                <p className="cart-card__price">{price}$</p>
            </div>
            <p className="cart-card__count">count {count}</p>
            <p className="cart-card__total">{totalCounter(price, count)}$</p>

            <button onClick={handleDelete} className="cart-card__delete">X</button>
            
        </div>
    )
}