import React from "react";
import { useState, useEffect } from "react";
import './product.scss'


const Product = () => {

    const [products, setProducts] = useState(null)
    useEffect(() => {
        async function fetchData() {
            fetch('https://per4mmedia.com/wp-json/wc/v3/products?consumer_key=ck_4fd9dc37e0a74ed8e7d82967922e3129d0d2292d&consumer_secret=cs_4e7e99dc689f144921e3c731a2d05894d597e5f2&category=50')
                .then(res => res.json())
                .then((res) => setProducts(res))
        }
        fetchData()
    }, [])




    return (
        <div className="products">
            {
                products ? (
                    products.map((product, index) => {
                        return (
                            <div className="product" key={index}>

                                <img src={product.images[0].src} alt="img" />
                                <div className="product-description">
                                    <p className="category">{product.categories[0].name}</p>
                                    <a href="#"><p>{product.name}</p></a>
                                    <p>stars</p>
                                    <p>{product.price}€</p>
                                </div>


                            </div>

                        );
                    })) : (
                    <p>Loading...</p>
                )
            }
        </div>

    );
}

export default Product