# BFFs - Best Friend Forever Store 

## Consigna:
Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
Aspectos a incluir en el entregable:

### Rutas a configurar
* ‘/’ navega a <ItemListContainer />
* ‘/category/:id’  <ItemListContainer />
* ‘/item/:id’ navega a <ItemDetailContainer />

### Links a configurar
* Clickear en el brand debe navegar a ‘/’
* Clickear un Item.js debe navegar a /item/:id
* Clickear en una categoría del navbar debe navegar a /category/:categoryId 

Para finalizar integra los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría

## Además:
Deberás corroborar que tu proyecto cuente con:
* Navbar con cart
* Catálogo
* Detalle de producto

### Incluir:
* Archivo readme.md

A tener en cuenta: en la Rúbrica de Evaluación (ubicada en la carpeta de la camada) encontrarás un mayor detalle respecto a qué se tendrá en cuenta para la corrección.
Importante: La entrega intermedia no supone la realización de un archivo aparte o extra; marca que en este momento se hará una revisión más integral

![alt text](https://github.com/JesusRamirezGamarra/CoderHouse_ReactJS/blob/Desafio-07/public/images/Desafio07.gif)

Notas: 
* No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
* Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
* Utilizar el id del item como URL param



 
## Entendiendo Atomic Design

* https://www.linkedin.com/pulse/entendiendo-atomic-design-luis-moncaris/
* https://www.linkedin.com/pulse/utilizando-atomic-design-con-react-luis-moncaris/


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
