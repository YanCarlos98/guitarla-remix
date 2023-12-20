import { useLoaderData } from '@remix-run/react'
import {getPost} from '../models/posts.server'
import { formaterFecha } from '../utils/helpers'
import styles from '../styles/blog.css'

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export const meta = function ({ data }) {
  if(!data) {
    return[
      {
        title: 'Entrada No Encontrada'
      },
      {
        description:'Guitarra, venta de guitarras, entrada no Encontrada'
      }
    ]
  }
  return [
    { title:`GuitarLA - ${data.data[0].attributes.titulo}`},
    {description: `Guitarra, venta de guitarras, guitarra ${data.data[0].attributes.titulo}` }
  ];
};



export async function loader({params}) {
  const {postUrl} = params
  const post = await getPost(postUrl)
  if(post.data.length ===0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no Encontrada'
    })
  }
  return post
}


export default function Post() {

  const post = useLoaderData()
  const {titulo, contenido, imagen, publishedAt} = post.data[0].attributes
  return (
    <article className="contenedor post mt-3">
    <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`}/>
    <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formaterFecha(publishedAt)}</p>
        <p className="texto">{contenido[0].children[0].text}</p>
       
    </div>
</article>
  )
}
