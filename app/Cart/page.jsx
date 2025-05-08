"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

const SHIPPING_COST = 16;

export default function Cart() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const changeQuantitiy = (id, diff) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + diff) }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const remove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const total = subtotal + (cart.length > 0 ? SHIPPING_COST : 0);

  return (
    <div className="max-w-[90%] m-auto">
      <Navbar />
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          {cart.length > 0 ? (
            <div>
              <div className="grid grid-cols-4 font-semibold border-b pb-2 mb-4">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-4 items-center bg-[#fafafa] rounded mb-4 p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <span>${item.price}</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-8 h-8 rounded-full bg-green-500 text-white text-lg"
                      onClick={() => changeQuantitiy(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="font-semibold text-lg">
                      {item.quantity}
                    </span>
                    <button
                      className="w-8 h-8 rounded-full bg-green-500 text-white text-lg"
                      onClick={() => changeQuantitiy(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => remove(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <MdDelete size={22} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <button
                onClick={() => router.push("/Products")}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
        <div className="w-full md:w-[350px] bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="font-bold text-lg mb-4 border-b pb-2">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>${cart.length > 0 ? SHIPPING_COST : 0}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span className="text-green-600">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
          <button
            onClick={() => router.push("/Products")}
            className="w-full mt-3 text-green-600 hover:underline"
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
