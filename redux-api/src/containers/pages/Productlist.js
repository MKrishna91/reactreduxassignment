import React from 'react';
import "./Productlist.css";
import fetch_product from "../../store/actions/productAction";
 import { useSelector, useDispatch } from 'react-redux';
function Productlist() {
  const products = useSelector(state => state.products);
    const dispatch = useDispatch();
  return (
    
    <div className="container">

      <div className="product-content">

     
      <div class="aem-Grid aem-Grid--12">
            <div class="aem-GridColumn aem-GridColumn--default--4 one">qqww</div>
            <div class="aem-GridColumn aem-GridColumn--default--4 one">dafgds</div>
            <div class="aem-GridColumn aem-GridColumn--default--4 one">ggfggf</div>
        </div>
      
      </div>
      </div>
  )
}

export default Productlist;