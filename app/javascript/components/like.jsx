import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import fetchLike from '../apis/like'

axios.defaults.headers['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content')

const Like = (props) => {
  const { ideaId } = props
  const [like, setLike] = useState([])
  const [totalLike, setTotalLike] = useState(0)

  useEffect(() => {
    fetchLike(ideaId).then((data) => {
      setLike(data.like)
      setTotalLike(data.totalLike)
    })
  }, [])

  const postLike = () => {
    axios.post('/api/v1/likes', { idea_id: ideaId }).then((response) => {
      setLike([response.data.like])
      setTotalLike([response.data.totalLike])
    })
  }

  const deleteLike = () => {
    axios.delete(`/api/v1/likes/${like[0].id}`)
    setLike([])
    setTotalLike(totalLike - 1)
  }

  return (
    <>
      {totalLike}
      {like.length ? (
        <span className="likeButton" onClick={deleteLike}>
          <AiFillHeart />
        </span>
      ) : (
        <span className="likeButton" onClick={postLike}>
          <AiOutlineHeart />
        </span>
      )}
    </>
  )
}

export default Like
