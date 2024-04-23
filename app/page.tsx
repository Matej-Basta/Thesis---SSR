import Header from "./components/Header";
import Products from "./components/Products";
import Payment from "./components/Payment";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Products />
        <Payment />
      </main>
    </>
  );
}
