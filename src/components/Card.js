import { useContext } from "react";
import { Context } from "../context/Context";

export default function Card({
    id,
    thumbnail,
    title,
    price,
    description
}) {

    const { addItemToCart } = useContext(Context);

    return (
        <article className="card-body">
            <img src={thumbnail} alt={title} id="img-card" />
            <div className="card-content">
                <div>
                    <h3>{title}</h3>
                </div>
                <p className="card-actions">
                    <button onClick={() => addItemToCart(id)}>Saiba Mais</button>
                    <button onClick={() => addItemToCart(id)}>Favoritar</button>

                </p>
            </div>
        </article>
    );
}