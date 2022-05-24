import React from 'react'
import { Link } from "react-router-dom";
import Home_Image from './images/Home.png'



const Home = () => {
    return (
        <div className="relative bg-white overflow-hidden z-0">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon points="50,0 100,0 50,100 0,100" />
                </svg>

                <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                    <h2 className="text-4xl">
                            <span className="block text-red-rug-600 xl:inline">
                            Best Friend Forever - Tu mejor opcion
                            </span>
                        </h2>                           
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block xl:inline">Ecommerce de Pokemon</span>{" "}
                            <span className="block text-red-rug-600 xl:inline">
                            online 
                            </span>                       
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        ecommerce de Pokemon, en el mundo ficticio de Pokémon, para el coleccionista buscarlos y comparlos ya .
                        </p>
                    <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex sm:justify-center lg:justify-start">
                        <div>
                            <Link
                                to="/store"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-rug-700 hover:bg-red-rug-600 md:py-4 md:text-lg md:px-10"
                            >
                                Ir a tienda
                            </Link>
                        </div>
                        <div >
                            <Link
                                to="/AboutUS"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-rug-900 bg-red-rug-500 hover:bg-red-rug-400 md:py-4 md:text-lg md:px-10"
                            >
                                Nosotros
                            </Link>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </div>
            <div className="hidden lg:flex lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src={Home_Image}
                alt="Poke Home"
                />
            </div>
        </div>
    )
}

export { Home }