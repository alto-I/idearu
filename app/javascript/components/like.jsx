import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import fetchLike from '../apis/like'

axios.defaults.headers['X-CSRF-TOKEN'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content')

const Like = (props) => {
  const [like, setLike] = useState([])

  useEffect(() => {
    fetchLike(props.ideaId).then((data) => {
      setLike(data.like)
    })
  }, [props])

  const postLike = () => {
    axios.post('/api/v1/likes', { idea_id: props.ideaId }).then((response) => {
      setLike([response.data])
    })
  }

  const deleteLike = () => {
    axios.delete(`/api/v1/likes/${like[0].id}`)
    setLike([])
  }

  return (
    <>
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
