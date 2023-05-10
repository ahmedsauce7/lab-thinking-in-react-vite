import { useState } from "react";
import React from "react";
import ProductRow from './ProductRow'

function ProductTable (props) {
    return(
        <div> 
            <ProductRow products={props.products}/>
        </div>
    )
}

export default ProductTable;