import React from 'react'
import { fetchIdeas } from '../apis/ideas'

fetchIdeas()
  .then((data) => console.log(data))

const Idea = () => {
  return (
    <div>
      Ideaaa
    </div>
  )
}
export default Idea
