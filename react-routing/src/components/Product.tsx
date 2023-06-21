import { useParams } from 'react-router-dom'
import productsArray from './data/products'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const productId = id as unknown as number // use type assertion to specify that id is a number
  const product = productsArray[productId]

  return (
    <>
      <h1>{product?.name}</h1>
      <p>{product?.bio}</p>
      <p>{product?.price}</p>
    </>
  )
}
