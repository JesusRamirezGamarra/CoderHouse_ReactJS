import { TrashIcon } from "@heroicons/react/outline";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const SideBarCart = () => {
    const { cart, removeFromCart, clearCart, getTotalAmount } = useContext(CartContext);
    const deleteElement = (id, name) => { removeFromCart(id, name);};

    return (
    <div className="flex h-full w-full flex-col bg-white shadow-xl mt-10 pb-10">
        <div className="flex-1 overflow-y-auto pb-6 px-4 sm:px-6">
        <div className="flex items-start justify-between">
            <button
            onClick={clearCart}
            type="button"
            className="-m-2 p-2 text-gray-400 hover:text-gray-500 text-xs absolute bg-white w-full flex"
            >
            <TrashIcon className="h-6 w-6" aria-hidden="true" />
            <h3 className="pl-1 pt-1">Vaciar carrito</h3>
            </button>
        </div>

        <div className="mt-8">
            <div className="flow-root">
            <ul className="-my-6 divide-y divide-gray-200">
                {cart.map((product) => (
                <li key={product.id} className="flex py-6 flex-wrap ">
                    <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={product.img}
                        alt=""
                        className="h-full w-full object-cover object-center"
                    />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-xs font-medium text-gray-900">
                        <h3>{product.name}</h3>
                        <p className="ml-4">${product.price * product.count}</p>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                        {product.style}
                        </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-xs">
                        <p className="text-gray-500">Cantidad: {product.count}</p>

                        <div className="flex">
                        <button
                            onClick={() =>
                            deleteElement(product.id, product.name)
                            }
                            type="button"
                            className="font-medium text-red-rug-600 hover:text-red-rug-400"
                        >
                            Eliminar
                        </button>
                        </div>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900 flex-wrap">
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
            Descuentos con tarjetas y códigos de descuento se harán al finalizar
            la compra.
        </p>
        <div className="mt-6">
            <Link to={"/cart"}>
            <button
                href="#"
                className="flex mx-auto items-center justify-center rounded-md border border-transparent bg-white border-2 border-red-rug-600 px-6 py-3 text-base font-medium text-red-rug-600 shadow-sm hover:bg-gray-100"
            >
                Finalizar compra
            </button>
            </Link>
        </div>
        </div>
    </div>
    );
};
