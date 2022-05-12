import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { TrashIcon, ShoppingCartIcon } from "@heroicons/react/outline";
// import { ArrowNarrowLeft } from "heroicons-react";

const Cart = () => {
    const { cart, removeFromCart, getTotalAmount, clearCart } =
    useContext(CartContext);
    const deleteElement = (id, name) => {
    removeFromCart(id, name);
    };

    return (
    <>
        {cart.length > 0 ? (
        <div >
            <div >
            <ul >
                <li >
                {" "}
                Mi carrito
                </li>
                {cart.map((product) => (
                <li key={product.id} >
                    <div >
                    <img
                        src={product.image}
                        alt={product.image}
                    />
                    </div>

                    <div >
                    <div>
                        <div >
                        <h3>{product.title}</h3>
                        <p >${product.price * product.count}</p>
                        </div>
                    </div>
                    <div >
                        <p >
                        Cantidad: {product.count} x ${product.price}
                        </p>

                        <div >
                        <button
                            onClick={() =>
                            deleteElement(product.id, product.title)
                            }
                            // type="button"
                        >
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
            <div >
                <Link to="/store">
                <button >
                    {/* <ArrowNarrowLeft className="w-6 h-6 mr-2" /> */}
                    Seguir comprando
                </button>
                </Link>
                <button
                onClick={clearCart}>
                {/* <TrashIcon className="w-6 h-6" /> */}
                Vaciar el carrito
                </button>
            </div>
            </div>

            <div >
            <div >
                {/* <ShoppingCartIcon className="h-12 w-12" /> */}
            </div>
            <div >
                <div>
                <p >
                    Resumen de compra
                </p>
                <div >
                    {cart.map((product, index) => (
                    <div
                        key={index}
                    >
                        <p >
                        {product.name}
                        </p>
                        <p >
                        ${product.price * product.count}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
                <div>
                <div >
                    <p >Total</p>
                    <p >
                    ${getTotalAmount()}
                    </p>
                </div>
                <Link to={"/payment"}>
                    <button >
                    IR AL PAGO
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        ) : (
        <div >
            <div >
            <img
                src="https://i.imgur.com/MuRfYwh.gif"
                alt=""
            />
            </div>
            <h2 >
                No tienes productos en el carrito
            </h2>
            <Link to="/store" className=" m-auto">
            <button >
                Ir a tienda
            </button>
            </Link>
        </div>
        )}
    </>
    );
};


export { Cart }