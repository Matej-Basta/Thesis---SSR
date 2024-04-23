import ProductType from '../types/ProductInterface';
import styles from './product.module.css';

export default function Product({ product }: { product: ProductType }) {
    return (
        <div className={styles["product-container"]}>
            <img src={product.image} alt={product.name} width={200} height={200} className={styles["product-image"]}/>
            <div className={styles["product-text"]}>
                <div className={styles["product-header"]}>
                    <h2 className={styles["product-heading"]}>{product.name}</h2>
                    <p className={styles["product-price"]}>{product.price} DKK</p>
                </div>
                <p>{product.description}</p>
                <button className={styles["product-button"]}>Add to Cart</button>
            </div>
        </div>
    )
}