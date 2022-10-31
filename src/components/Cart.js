import React from "react";
import { useSelector } from "react-redux";
import { CartCard } from "./CartCard";

export const Cart = () => {
    const cart = useSelector(store => store?.cartReducer?.cart)

    const handleTest = () => {
        console.log(cart)
    }

    return (
        <section className="cart">
            <div className="container">
            {
                cart.map((el, idx) => (
                    <CartCard product={el} key={idx}                    
                    />
                ))
            }
            {cart.length ? <button className="cart__buy">Buy</button> : false}
            </div>
        </section>
    )
}