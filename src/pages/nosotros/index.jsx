import React from 'react'
import AboutUS_Image from './images/AboutUS.png'

const AboutUS = () => {
    return (
        <div className="flex flex-col px-[10%] mx-auto py-8">
        <img src={AboutUS_Image} alt="" className="w-[540px] m-auto" />
        <h2 className="text-4xl mx-auto text-center font-semibold font-boldtext-center leading-normal text-gray-900 md:text-6xl">
            Best Friend Forever - Tu mejor opcion
        </h2>
            <div className="flex-col flex md:flex-row self-start justify-center pt-8">
                <div className="flex justify-center items-center self-start rounded-lg  mx-4 flex flex-col  md:items-start px-0">
                <h3 className="font-light text-4xl leading-9 text-center text-red-rug-700  mt-2">
                    Sobre el proyecto
                </h3>
                <p className="text-l text-center font-semilight mt-4 text-gray-900 md:max-w-[400px] md:text-left">
                    El proyecto fué realizado a lo largo del curso de React en
                    CoderHouse.
                </p>
                <p className="text-l text-center font-semilight mt-2  text-gray-900 md:max-w-[400px] md:text-left ">
                    Se utilizó React JS, Firebase, Boostrap y TailwindCSS en su realización.
                </p>
                </div>

                <div className="flex justify-center items-center mx-4 mt-2 rounded-lg  self-start flex flex-col  md:items-start px-0">
                <h4 className="font-light text-4xl leading-9 text-center text-red-rug-700 ">
                    Objetivos
                </h4>
                <p className="text-l text-center font-semilight mt-4 text-gray-900 md:max-w-[400px] md:text-left">
                    Aprender a programar por componentes, mediante Javascript, JS, ES6,
                    conocer las ventajas de la utilización del flujos de datos.
                </p>
                <p className="text-l text-center font-semilight mt-2  text-gray-900 md:max-w-[400px] md:text-left ">
                    Aplicar el manejo de rutas utilizando Firebase, y comprender la
                    utilización del virtual DOM mediante los desarrollos de React JS.
                </p>
                </div>
            </div>

        </div>
    );
}

export { AboutUS }