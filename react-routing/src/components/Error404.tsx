import { Link } from 'react-router-dom'
export default function Error404() {
  return (
    <h1>
      This page does not exist. Wanna return home?
      <Link to="/">Click HERE!</Link>
    </h1>
  )
}
