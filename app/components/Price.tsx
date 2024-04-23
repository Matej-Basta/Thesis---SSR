import styles from "./price.module.css";

export default function Price() {
    return (
        <div className={styles.price}>
            <div className={styles.unit}>
                <p>Amount</p>
                <p>6.000 DKK</p>
            </div>
            <div className={styles.unit}>
                <p>Delivery</p>
                <p>250 DKK</p>
            </div>
            <div className={styles.unit}>
                <p>Tax</p>
                <p>80 DKK</p>
            </div>
            <hr />
            <div className={`${styles.unit} ${styles.total}`}>
                <p>Total</p>
                <p>6.330 DKK</p>
            </div>
            <div className={`${styles.unit} ${styles.terms}`}>
                <input type="checkbox" name="terms" />
                <p className={styles["terms-text"]}>I have read and agreed to the terms.</p>
            </div>
            <button className={styles["price-button"]}>Submit order</button>
        </div>
    );
}