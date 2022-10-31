import React from "react";
import { useEffect, useState } from 'react';
import spinner from '../assets/images/spinner.svg'
import axios from "axios";
import store from "../store/store";
import { addToCart } from "../store/actionCreators/cart";


export const HomePage = () => {

    const [load, setLoad] = useState(true)
    const [products, setProducts] = useState([])

      useEffect(() => {
      const start = async() => {
        const resp = await axios("https://fakestoreapi.com/products")
        const {data} = resp
        setLoad(false)
    
        setProducts(data)
        console.log(data)
      }
      start()
    
    }, [])

    const calcBoxShadow = (title) => {
      const count = title.length
      if (count > 80) {
        return "-1px -190px 18px -17px rgb(0 3 6/ 65%) inset"
      } else if (count > 60) {
        return "-1px -150px 18px -17px rgb(0 3 6/ 65%) inset"
      } else {
        return "-1px -124px 18px -17px rgb(0 3 6/ 65%) inset"
      }
    }

    const add = (product) => {
        store.dispatch(addToCart(product))
    }
    

    if (load) {
        return (
           <div className="spinner">
             <img src={spinner} alt=''/>  
           </div>  
        ) 
    } else { 
     
      return (
            <div className="home">
                <div className="container home__container">
                    <h1 className="home__title">Fakestore Shop</h1>
                    <p className="home__subtitle">fake shop api</p>
                    <div className="home__grid">
               
              { 
                     products.map((el,idx)=> (
                       <div onClick={() => {
                        add(el)
                       }}
                        className="card" key={idx} style={{background : `url(${el.image})center/contain no-repeat`, boxShadow: calcBoxShadow(el.title) }}>
                         <h4 className="card__title">{el.title}</h4>
                         <p className="card__price">{el.price}$</p>
                   </div> 
                     )) 
                   } 
                  </div>
                  
                </div>
            </div>
        )
    }


}