import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import axios from "axios";
import { ProductComponent } from './ProductComponent';
import "./ProductList.css";

export const ProductList = () => {
  //const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log("Err", err);
    });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log("Products: ", products);
  return (
    <div className="grid-container">
      <ProductComponent />
    </div>
  );
};
