import React from "react";

function ProductRow(props) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {props.products.map((product) => {
          if (product.inStock) {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          } else {
            return (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
}

export default ProductRow