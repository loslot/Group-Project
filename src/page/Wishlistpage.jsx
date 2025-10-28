// WishlistPage.js
import React, { useContext } from 'react';
import { WishlistContext } from '../page/WishlistContext';

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {wishlist.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistPage;