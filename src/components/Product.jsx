// Product.js (example)
import React, { useContext } from 'react';
import { WishlistContext } from '../components/WishlistContext';

function Product({ product }) {
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h3>{product.title}</h3>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
}

export default Product;