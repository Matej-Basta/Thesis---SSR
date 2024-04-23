import  ProductType  from '../types/ProductInterface';
import Product from './Product';
import styles from './products.module.css';

async function getData() {
  const response = await fetch('http://localhost:8080/api/products');
  return response.json();
}

export default async function Products() {
  const {products} = await getData();
  return (
    <div className={styles.products}>
      {products.map((product: ProductType) => (
        <Product key={product.id} product={product}/>
      ))} 
    </div>
  );
}