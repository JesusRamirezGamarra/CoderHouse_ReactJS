// import React from 'react';
// import ReactDOM from 'react-dom';
// import {App} from './App';

// ReactDOM.render(    
//     // https://es.reactjs.org/docs/strict-mode.html#gatsby-focus-wrapper
//     // <App/>,
//     <React.StrictMode> 
//         <App />
//     </React.StrictMode>,    
//     document.getElementById('root')    
// );

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// // // // // // // Before
// // import { render } from 'react-dom';
// // const container = document.getElementById('app');
// // render(<App tab="home" />, container);

// // // // // // // After
// // import { createRoot } from 'react-dom/client';
// // const container = document.getElementById('app');
// // const root = createRoot(container); // createRoot(container!) if you use TypeScript
// // root.render(<App tab="home" />);

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
ReactDOM.render(    
    <App/>,document.getElementById('root')    
    // App(),document.getElementById('root')    
);


// import { createRoot } from 'react-dom/client';
// import {App} from './App';

// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);