import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Card from "./Card";

export default function Index() {

    const { products, loading, error } = useContext(Context);


    return (
        <div className="index">
            <div className="bone-list">
            <ul id="bones">
                {error && <p>{error}</p>}
                {!loading && products ? (
                    products.map((product) => (
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
    );
}