import React from "react";

const ProductTable = ({ products = [] }) => {
  return (
    <div className="overflow-x-auto p-5">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price ($)</th>
            <th>Quantity</th>
          </tr>
        </thead>

        {/* body */}
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>${product.productPrice}</td>
              <td>{product.productQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
