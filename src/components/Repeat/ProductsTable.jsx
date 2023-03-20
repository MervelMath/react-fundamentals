import React from 'react'
import './ProductsTable.css'
import products from '../../data/products'

export default props => {

const productsTable = products.map((product, index) => {
  return (
    <tr key={product.id} className={index % 2 == 0 ? "Even" : ""}>
      <td>{product.id}</td> <td> {product.name}</td> <td>{product.price}</td>
    </tr>
  );
});

    return (
      <div className="ProductsTable">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody> {productsTable}</tbody>
        </table>
      </div>
    );
}