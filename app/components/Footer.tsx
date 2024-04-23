import styles from "./footer.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
      <div className={styles.info}>
        <p>Address</p>
        <p>Contact information</p>
        <p>Right and conditions</p>
      </div>
    </footer>
  );
}