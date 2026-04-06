import React, { useState } from "react";
import useHookCustom from "../../CustomHooks/useHookCustom";

const ProductForm = ({ handleSetProducts }) => {
  //hooks for error management
  const [error, setError] = useState("");

  //using custom hook to fetct datas
  const [productName, setOnChangeProductName] = useHookCustom("");
  const [productPrice, setOnChangeProductPrice] = useHookCustom("");
  const [productQuantity, setOnChangeProductQuantity] = useHookCustom("");

  // prevent default to stop reload page
  const handleForm = (e) => {
    e.preventDefault();
    // console.log(productName, productPrice, productQuantity);
    const newProducts = {
      productName,
      productPrice,
      productQuantity,
    };

    // form validation
    if (productName.length === 0) {
      setError("please provide a valid product");
      return;
    } else if (productPrice === "" || isNaN(productPrice) || productPrice < 0) {
      setError("products price cannot be a negative value");
      return;
    } else if (
      productQuantity === "" ||
      isNaN(productQuantity) ||
      productQuantity < 0
    ) {
      setError("please provide quantity");
      return;
    } else {
      setError("");
    }

    // setProducts(newProducts); // wrong logic
    // right logic is here
    handleSetProducts(newProducts);
  };
  return (
    <div className="mx-auto container">
      <h1 className="text-3xl font-bold text-center mb-4">Add Products</h1>
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-4 items-center w-full max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          onChange={setOnChangeProductName}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          name="price"
          onChange={setOnChangeProductPrice}
          placeholder="Product Price"
        />

        <input
          className="w-full px-4 py-2 border border-gray-300 rounded"
          type="text"
          name="quantity"
          placeholder="Quantity"
          onChange={setOnChangeProductQuantity}
        />

        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      <p className="text-red-700">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
