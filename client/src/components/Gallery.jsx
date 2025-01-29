import React from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from './ProductCard'

export default function Gallery({products}) {
  return (
    <Container>
        <h1>Gallery</h1>
        <div className="row">
            {products.map((product, i)=> (
                <ProductCard product={product} key={i} />
            ))}
        </div>        
    </Container>
  )
}
