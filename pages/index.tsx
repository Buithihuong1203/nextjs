import Link from "next/link";
import { updateItem } from "../api/product";
import useProducts from "../hooks/use-product";
import styles from "../styles/Home.module.css";

const Home = () => {
    const { data: products, error, create, remove, update } = useProducts();
    if (!products) return <div>Loading...</div>;
    if (error) return <div>error</div>;

    return (
        <div className={styles.container}>
            {products.map((product :any, index:any) => (
                <div key={index}>
                    {product.name} <button onClick={() => remove(product.id)}>Delete</button>
                    <button onClick={() => update({id: 45, name: "product update"})}>Updateee</button>
                </div>
            ))}
            <button onClick={() => create({ id: 122224413, name: "Product 6544đfdxx" })}>Create</button>
            
        </div>
    );
};
export default Home;
