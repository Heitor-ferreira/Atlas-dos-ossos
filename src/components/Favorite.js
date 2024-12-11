import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useContext } from "react";
import Card from "./Card";

export default function Checkout() {

    const { items, total } = useContext(Context);

    const Quantity = items.length;

    return (
        <section className="checkout">
            <h2>Checkout</h2>

{/* id para css */}

            <div className="cart-checkout" >
                {Quantity > 0 ? (
                    items.map((product) => (
                        <div classNname="cart-item" key={product.id}>
                            <Card {...product} />
                        </div>
                    ))
                ) : (
                    <p> No items in cart!</p>
                )}
            </div>
            <h1 id="cart-total-price">Cart Total: R$ {total}</h1>

            <Link to="/" className="product-actions">
                <button>RETURN</button>
            </Link>
        </section>
    );
}