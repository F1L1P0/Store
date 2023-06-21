import { useSelector, useDispatch } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../redux/countSlice'
import { RootState } from '../redux/store'

export default function About() {
  const count = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()
  return (
    <>
      <p>count is {count}</p>
      <button onClick={() => dispatch(incrementCount())}>add 1</button>
      <button onClick={() => dispatch(decrementCount())}>remove 1</button>
      <button onClick={() => dispatch(resetCount())}>reset count</button>
    </>
  )
}
