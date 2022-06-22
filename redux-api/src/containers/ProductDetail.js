import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import "./ProductDetail.css";


export const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product;

    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = () => {
        const response = axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        };
    }, [productId]);
    return (
        <div className="grid-container">

            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <div className="card-content">
                <div className="card-category">
                    {category}
                </div>
                <div className="card-title">
                    {title}
                </div>
                <div className="card-price">
                    ${price}

                </div>

                <div className="card-description">
                    {description}

                </div>
            </div>
        </div>
    )
};
