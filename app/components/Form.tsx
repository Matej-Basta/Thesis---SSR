import styles from "./form.module.css";

export default function Form() {
    return (
        <form className={styles.form}>
            <div>
                <label htmlFor="card-number">Card number</label>
                <input className={styles.input} type="text" name="card-number"></input>
            </div>
            <div className={styles.doubleField}>
                <div className={styles["doubleField-field"]}>
                    <label htmlFor="expiration-date">Expiration date</label>
                    <input className={styles.input} type="text" name="expiration-date"></input>
                </div>
                <div className={styles["doubleField-field"]}>
                    <label htmlFor="cvc">CVC</label>
                    <input className={styles.input} type="text" name="cvc"></input>
                </div>
            </div>
            <div>
                <label htmlFor="owner">Owner</label>
                <input className={styles.input} type="text" name="owner"></input>
            </div>
        </form>
    )
}