import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import "./index.scss";
import router from './working-files/router/routes';

declare global {
    interface Window {
        _env_: {
            API_URL: string;
            SERVER_API_URL: string;
            REACT_APP_GOOGLE_ANALYTICS: string;
        };
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

if(navigator.serviceWorker){
    const  swUrl=  `${import.meta.env.VITE_FRONT_URL}/service-worker.js`
    console.log(swUrl);
    navigator.serviceWorker.register(swUrl)
    .then((response)=>{
        console.warn("response",response)
    })
}

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);