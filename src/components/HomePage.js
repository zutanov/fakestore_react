import React from "react";
import { useEffect, useState } from 'react';
import spinner from '../assets/images/spinner.svg'
import axios from "axios";

export const HomePage = () => {

    const [load, setLoad] = useState(true)
    // const [products, setProducts] = useState([])

      useEffect(() => {
      const start = async() => {
        const resp = await axios("https://fakestoreapi.com/products")
        const {data} = resp
        setLoad(false)
        console.log(data)
      }
      start()
    }, [])

    if (load) {
        return (
           <div className="spinner">
             <img src={spinner} alt=''/>  
           </div>  
        ) 
    } else {

        return (
            <section className="home">
                <div className="container home__container">
                    <h1 className="home__title">Fakestore Shop</h1>
                    <p className="home__subtitle">fake shop api</p>
                    <div className="home__grid">
                        <div className="card">
                            <p className="card__price">20$</p>
                            <h4 className="card__title">Lorem5</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }


}