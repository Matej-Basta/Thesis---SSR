"use client";
import styles from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useGenerationStore } from "../state/cart";

export default function Header() {
  const {cart} = useGenerationStore();
  const itemQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className={styles.cart}>
        <FaShoppingCart className={styles["cart-icon"]}/>
        <div>{itemQuantity}</div>
      </div>
    </header>
  );
}