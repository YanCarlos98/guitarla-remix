import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
} from "@remix-run/react";
import styles from './styles/index.css'
import Header from './components/header'
import Footer from "./components/footer";

export function meta({ error }) {
 
    if (error?.status === 404) {
 
       return [
 
           {
             title: 'Guitarra no encontrada',
             description: 'Guitarras, venta de Guitarras, guitarra no encontrada'
           }
        ]
    }
   
    return (
        [
            { charset: 'utf-8' },
            { title: 'GuitarLA - remix' },
            { viewport: 'width=device-width,initial-scale=1' }
        ]
    )
} 

export function links(){
    return[
        {
            rel: "stylesheets",
            href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
        },
        {
            rel: 'preconnet',
            href: "https://fonts.googleapis.com"
        },
        {
            rel: 'preconnect',
            href: "https://fonts.gstatic.com",
            crossOrigin : " true"
        },
        {
            rel: 'stylesheet',
            href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap"
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export default function App() {

    return(
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

