import React, { useEffect, useState } from 'react';
import "./ProductComponent.css";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export const ProductComponent = () => {
    const [showlist, setshowlist] = useState(false);
    const products = useSelector((state) => state.allproducts?.products);
    const renderList = () => products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="grid-layout" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="layout-cards">
                            <div className="card-images">
                                <img src={image} alt={title} />
                                <div className="card-content">
                                    <div className="card-header">{title}</div>
                                    <div className="meta price">${price}</div>
                                    <div className="meta">{category}</div>
                                </div>
                            </div>
                    </div>
                </Link>
            </div>

        );
    });
    console.log(products);
    useEffect(() => {
        setshowlist(products?.length)
    }, [products])
    return (

        <>{showlist ? renderList() : null}</>

    );
}
