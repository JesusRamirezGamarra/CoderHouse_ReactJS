import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './index.css';
import { TrashIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeft } from "heroicons-react";

const Cart = () => {
    const { cart, removeFromCart, getTotalAmount, clearCart } =     useContext(CartContext);
const deleteElement = (id, name) => {
        removeFromCart(id, name);
    };

    return (
    <>
        {cart.length > 0 ? (
        <div className="flex flex-row justify-between flex-wrap px-[12%] lg:px-[17%]  pt-[5%] pb-[10%] w-full">
        <div className="w-full lg:w-[50%]">
            <ul className="-my-6 divide-y divide-gray-200  mt-8">
            <li className="text-3xl lg:text-5xl font-bold pb-6 text-black">
                    {" "} Mi carrito    </li>
                {cart.map((product) => (
                <li key={product.id} className="flex py-6 flex-wrap ">
                    <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={product.image}
                        alt={product.image}
                        className="h-full w-full object-cover object-center"
                    />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between sm:text-lg font-medium text-gray-500">
                        <h3>{product.title}</h3>
                        <p className="ml-4">${product.price * product.count}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-xs">
                        <p className="text-gray-500">
                        Cantidad: {product.count} x ${product.price}
                        </p>

                        <div className="flex">
                        <button
                            onClick={() =>
                            deleteElement(product.id, product.title)
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
            <div className="flex flex-row justify-between mt-6">
                <Link to="/store">
                <button className="py-2 px-4 flex flex-row text-red-rug-500 hover:text-red-rug-600 font-medium">
                    <ArrowNarrowLeft className="w-6 h-6 mr-2" />
                    Seguir comprando
                </button>
                </Link>
                <button
                onClick={clearCart}
                className="rounded py-2 px-4 flex flex-row text-white bg-red-rug-700 hover:bg-red-rug-500"
                >
                <TrashIcon className="w-6 h-6" />                    
                    Vaciar el carrito
                </button>
            </div>
            </div>

            <div className="w-full lg:w-[40%]  border border-gray-100 mt-[100px] rounded-lg shadow-lg">
            <div className="bg-red-rug-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-10 mx-auto shadow-lg flex justify-center items-center">
                <ShoppingCartIcon className="h-12 w-12" />
            </div>
            <div className="flex flex-col lg:px-8 md:px-7 px-4  md:py-10 py-6 justify-between">
                <div>
                <p className="lg:text-4xl text-3xl font-bold leading-9 text-gray-800 pb-4">
                    Resumen de compra
                </p>
                <div className="h-72  overflow-y-auto text-gray-800 pr-6 -mr-8 ">
                    {cart.map((product, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between py-4 border-b-2"
                    >
                        <p className="text-sm leading-none text-gray-800 ">
                            {product.title}
                        </p>
                        <p className="text-sm leading-none text-red-rug-700 font-medium ">
                        ${product.price * product.count}
                        </p>
                    </div>
                    ))}
                </div>
                </div>
                <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800 ">
                    ${getTotalAmount()}
                    </p>
                </div>
                <Link to={"/payment"}>
                <button className="rounded text-base font-semibold leading-none w-full py-5 bg-red-rug-700 hover:bg-red-rug-500  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    IR AL PAGO
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        ) : (
        <div className="bg-white w-full flex flex-col justify-center  content-center px-16 py-10">
            <div className=" hidden sm:flex mt-10 h-70  w-[35%] m-auto overflow-hidden flex flex-col content-center justify-center rounded-md ">
            <img 
                src="https://i.imgur.com/MuRfYwh.gif"
                alt=""
                className="object-fill w-full box-border"
            />
            </div>
            <h2 className="mt-10 text-4xl text-center">
                No tienes productos en el carrito
            </h2>
            <Link to="/store" className=" m-auto">
            <button className="mb-2 pt-6 text-red-700 text-2xl font-semibold text-center text-gray-800 md:text-3xl">
                Ir a tienda
            </button>
            </Link>
        </div>
        )}
    </>
    );
};


export { Cart }