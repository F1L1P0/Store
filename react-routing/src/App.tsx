import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Products from './components/Products'
import Product from './components/Product'
import Error404 from './components/Error404'
import { resetCount } from './redux/countSlice'

export default function App() {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <span>
          Cart: {count}{' '}
          <button
            onClick={() => dispatch(resetCount())}
            type="button"
            style={{ marginLeft: '1rem' }}>
            empty cart
          </button>
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
