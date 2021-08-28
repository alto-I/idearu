import React, { Fragment, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
    return count
  }

  const decrement = () => {
    setCount(count - 1)
    return count
  }

  return (
    <>
      <p>{count}回</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
}

export default Counter
