import styles from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <div className={styles.cart}>
        <FaShoppingCart className={styles["cart-icon"]}/>
        <div>3</div>
      </div>
    </header>
  );
}