import { useState } from 'react'
import { Post } from './Post'

export function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Post 
        author = "Macio Lima"
        content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione error fugit et velit numquam nostrum sequi? Vel placeat, amet praesentium nam ullam et. Ad ducimus accusantium eius ea aliquid eos."
      />
      <Post 
        author = "Thiago Andrade"
        content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae natus culpa distinctio, vero maiores quam quaerat accusamus totam animi asperiores vel magni iusto aliquid repellat laboriosam deserunt accusantium. Eum, a?"
      />
    </div>
  )
}