import { useContext } from 'react'
import { ProductsContext } from '../context/ProductContext'
import Gallery from '../components/Gallery'

export default function Home() {
    const {products} = useContext(ProductsContext)
  return (
    <div>
        <Gallery products={products} />
    </div>
  )
}
