'use client'
import  { useState } from 'react'

const Service = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
    <h1 >Welcome to my website!</h1>
    <p>This is a sample website for the development course.</p>
   < p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
   </div>
  )
}

export default Service