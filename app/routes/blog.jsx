import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"
import ListadoPosts from "../components/listado-post"
import styles from '../styles/blog.css'


export function meta() {
  return [
      {
      title: 'GuitarLA - Nuestro Blog',
      description: 'Venta de guitarras, blog de música'
      }
  ]
}


export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()
  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />
    </main>
  )
}

export default Blog
