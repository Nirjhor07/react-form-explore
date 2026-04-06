import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  // using hook state to store neProducts arrray
  const [products, setProducts] = useState([]);
  //   console.log(products);
  // function to handle set products array
  const handleSetProducts = (newProducts) => {
    const product = [...products, newProducts];
    setProducts(product);
  };

  return (
    <div>
      <ProductForm handleSetProducts={handleSetProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
