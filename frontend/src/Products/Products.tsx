import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Slim Shirt",
      brand: "Nike",
      price: 60,
      rating: 4.5,
      numReviews: 10,
      image: "/images/d1.jpg",
    },
    {
      id: 2,
      name: "Fit Shirt",
      brand: "Adidas",
      price: 50,
      rating: 4.0,
      numReviews: 8,
      image: "/images/d1.jpg",
    },
  ];

  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product.id}>
          <div className="product">
            <img
              className="product-image"
              src={product.image}
              alt="product"
            />
            <div className="product-name">
              {product.name}
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;