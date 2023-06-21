import { Link } from 'react-router-dom'
import productsArray from './data/products'

interface IProduct {
  id: number
  name: string
  bio: string
  price: number
}

export default function Products() {
  const products = productsArray.map((product: IProduct) => (
    <Link key={product.id} to={`/products/${product.id}`}>
      <div
        className="box"
        style={{
          display: 'flex',
          gap: '1rem',
          margin: '1rem',
          background: 'orange',
        }}>
        <p>{product.name}</p>
        <p>{product.bio}</p>
        <p>{product.price}</p>
      </div>
    </Link>
  ))
  return (
    <>
      <div>I am products page</div>
      {products}
    </>
  )
}
