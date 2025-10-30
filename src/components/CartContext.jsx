// src/components/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage on mount
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
      return [];
    }
  });

  // Load orders from localStorage on mount
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem("orders");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load orders from localStorage", e);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Save to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Add item or increase quantity
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id
            ? { ...i, quantity: (i.quantity || 0) + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // Update quantity directly
  const updateQuantity = (id, quantity) => {
    if (quantity < 1 || isNaN(quantity)) return;
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Clear entire cart
  const clearCart = () => setCart([]);

  // Get current quantity of a specific item
  const getItemQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item?.quantity || 0;
  };

  // Total items in cart (for badge)
  const cartCount = cart.reduce((sum, i) => sum + (i.quantity || 0), 0);

  // Total price as string with 2 decimals
  const totalPrice = cart
    .reduce((sum, i) => {
      const price = parseFloat(i.price.replace("$", "")) || 0;
      return sum + price * (i.quantity || 0);
    }, 0)
    .toFixed(2);

  // Create order from cart items
  const createOrder = (orderDetails) => {
    const order = {
      id: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      items: [...cart],
      total: totalPrice,
      status: 'paid',
      deliveryStatus: 'waiting_for_delivery',
      orderDate: new Date().toISOString(),
      ...orderDetails,
    };
    setOrders(prev => [...prev, order]);
    clearCart(); // Clear cart after creating order
    return order;
  };

  // Get all orders
  const getOrders = () => orders;

  // Update delivery status
  const updateDeliveryStatus = (orderId, status) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId ? { ...order, deliveryStatus: status } : order
    ));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity,   // Now available!
        cartCount,
        totalPrice,
        orders,
        createOrder,
        getOrders,
        updateDeliveryStatus,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Safe hook to use cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


