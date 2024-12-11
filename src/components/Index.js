import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Card from "./Card";
import styles from "./Search.module.css";
import FloatingButton from '../Interative/FavBut';

export default function Index() {
    const { products, loading, error } = useContext(Context);
    const searchInput = useRef(null);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Inicializa a lista de itens filtrados com todos os produtos quando os produtos mudam
        if (products) {
            setFilteredItems(products);
        }
    }, [products]);

    const handleSearch = () => {
        const term = searchInput.current.value.toLowerCase();
        // Filtra os produtos que contêm o termo de pesquisa no título
        setFilteredItems(
            products.filter((item) =>
                item.title.toLowerCase().includes(term)
            )
        );
    };

    const clearSearch = () => {
        searchInput.current.value = "";
        setFilteredItems(products);  // Restaura os itens completos
    };

    return (
        <>
            <FloatingButton />
            <div className="index">
                <div className={styles.search_container}>
                    <div className={styles.search_box}>
                        <input
                            ref={searchInput}
                            className={styles.search_input}
                            type="text"
                            placeholder="Type to search..."
                            onChange={handleSearch}
                        />
                        <button className={styles.search_clear} onClick={clearSearch}>CLEAR</button>
                    </div>
                </div>

                <div className="card-container">
                    <ul id="card-list">
                        {error && <p>{error}</p>}
                        {!loading && products ? (
                            filteredItems.map((product) => (
                                <li key={product.id}>
                                    <Card {...product} />
                                </li>
                            ))
                        ) : (
                            <div id="loading">
                                <CircularProgress size="10rem" color="inherit" />
                                <p>Loading products...</p>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
