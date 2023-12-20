import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'

export function meta() {
    return [
        {
        title: 'GuitarLA - Sobre Nosotros',
        description: 'Venta de guitarras, blog de música'
        }
    ]
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}
function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
            <img src= {imagen} alt="Imagen sobre nosotros"/>
            <div>
                    <p>Proin nisi felis, luctus id odio in, tincidunt commodo massa. Cras quis enim a odio auctor ultricies. Pellentesque id commodo libero, 
                    eget porta tortor. Mauris elementum non ipsum non pellentesque. Praesent suscipit pretium erat id posuere. Sed et lobortis urna.
                    Aliquam cursus ex turpis. Nam rutrum, lectus et ornare rhoncus, lacus nisl ultricies orci, eu maximus quam dui commodo metus.</p>

                    <p>Proin nisi felis, luctus id odio in, tincidunt commodo massa. Cras quis enim a odio auctor ultricies. Pellentesque id commodo libero, 
                    eget porta tortor. Mauris elementum non ipsum non pellentesque. Praesent suscipit pretium erat id posuere. Sed et lobortis urna.
                    Aliquam cursus ex turpis. Nam rutrum, lectus et ornare rhoncus, lacus nisl ultricies orci, eu maximus quam dui commodo metus.</p>    
            </div>
        </div>
    </main>

  )
}

export default Nosotros
