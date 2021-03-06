import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import fetchLike from '../apis/like'
import '../stylesheets/likes.scss'

const Like = (props) => {
  axios.defaults.headers['X-CSRF-TOKEN'] = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute('content')

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
    <div className="like">
      {like.length ? (
        <IconContext.Provider value={{ size: '22px', color: 'orange' }}>
          <span
            className="un-like-button"
            onClick={deleteLike}
            role="button"
            tabIndex="0"
          >
            <AiFillLike />
          </span>
        </IconContext.Provider>
      ) : (
        <IconContext.Provider value={{ size: '22px' }}>
          <span
            className="like-button"
            onClick={postLike}
            role="button"
            tabIndex="0"
          >
            <AiOutlineLike />
          </span>
        </IconContext.Provider>
      )}
      <span
        className={
          like.length ? 'total-like-length liked' : 'total-like-length'
        }
      >
        {totalLike}
      </span>
    </div>
  )
}

export default Like
