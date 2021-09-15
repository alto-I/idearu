import React, { useEffect, useReducer, useState } from 'react'
import '../stylesheets/ideas.css'

import { FaRegHeart, FaComment, FaUserCircle, FaPlus } from 'react-icons/fa'
import fetchIdeas from '../apis/ideas'
import { REQUEST_STATE } from '../constants'

import { initialState, ideasActionTypes, ideasReducer } from '../reducers/ideas'

const Ideas = () => {
  const [state, dispatch] = useReducer(ideasReducer, initialState)
  const [solved, setSolved] = useState(false)
  const [sort, setSort] = useState('created')

  useEffect(() => {
    dispatch({ type: ideasActionTypes.FETCHING })
    fetchIdeas(solved).then((data) =>
      dispatch({
        type: ideasActionTypes.FETCH_SUCCESS,
        payload: {
          ideas: data.ideas,
        },
      })
    )
  }, [])

  const ideaSortCreated = () => {
    const createdIdeaList = state.ideasList.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1
      }
      return 1
    })
    dispatch({
      type: ideasActionTypes.FETCH_SUCCESS,
      payload: {
        ideas: createdIdeaList,
      },
    })
    setSort('created')
  }

  const ideaSortLikes = () => {
    const likesIdeaList = state.ideasList.sort((a, b) => {
      if (a.likes > b.likes) {
        return -1
      }
      return 1
    })
    dispatch({
      type: ideasActionTypes.FETCH_SUCCESS,
      payload: {
        ideas: likesIdeaList,
      },
    })
    setSort('likes')
  }

  const ideaSortLatestComments = () => {
    const latestCommentIdeaList = state.ideasList.sort((a, b) => {
      if (a.latestCommentDate > b.latestCommentDate) {
        return -1
      }
      return 1
    })
    dispatch({
      type: ideasActionTypes.FETCH_SUCCESS,
      payload: {
        ideas: latestCommentIdeaList,
      },
    })
    setSort('comments')
  }

  const fetchIdeaSolved = () => {
    dispatch({ type: ideasActionTypes.FETCHING })
    fetchIdeas(true).then((data) =>
      dispatch({
        type: ideasActionTypes.FETCH_SUCCESS,
        payload: {
          ideas: data.ideas,
        },
      })
    )
    setSolved(true)
    setSort('created')
  }

  const fetchIdeaNotSolved = () => {
    dispatch({ type: ideasActionTypes.FETCHING })
    fetchIdeas(false).then((data) =>
      dispatch({
        type: ideasActionTypes.FETCH_SUCCESS,
        payload: {
          ideas: data.ideas,
        },
      })
    )
    setSolved(false)
    setSort('created')
  }

  return (
    <div className="ideas-container container">
      <div className="button-container">
        <div className="buttons has-addons m-1">
          <button
            className={
              sort === 'created' ? 'button is-success is-selected' : 'button'
            }
            type="button"
            onClick={ideaSortCreated}
          >
            新着順
          </button>
          <button
            className={
              sort === 'likes' ? 'button is-success is-selected' : 'button'
            }
            type="button"
            onClick={ideaSortLikes}
          >
            欲しい！順
          </button>
          <button
            className={
              sort === 'comments' ? 'button is-success is-selected' : 'button'
            }
            type="button"
            onClick={ideaSortLatestComments}
          >
            最新コメント順
          </button>
        </div>
        <div className="buttons has-addons">
          <button
            className={solved ? 'button' : 'button is-success is-selected'}
            type="button"
            onClick={fetchIdeaNotSolved}
          >
            未解決
          </button>
          <button
            className={solved ? 'button is-danger is-selected' : 'button'}
            type="button"
            onClick={fetchIdeaSolved}
          >
            解決済
          </button>
        </div>
      </div>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <>ロード中</>
      ) : (
        state.ideasList.map((idea) => (
          <div className="box m-1" key={idea.id}>
            <div className="idea-container columns">
              <div className="icons column is-1">
                <div className="icons-item is-size-5">
                  {idea.likes} <FaRegHeart />
                </div>
                <div className="icons-item is-size-5">
                  {idea.comments} <FaComment />
                </div>
              </div>
              <div className="idea column is-narrow">
                <div className="is-size-5">
                  <a href={`ideas/${idea.id}`}>{idea.title}</a>
                  という問題を解決したい
                </div>
                <div className="user-container columns is-size-5">
                  <div className="idea column is-1 mr-1">
                    <FaUserCircle />
                  </div>
                  <div className="column is-size-5">{idea.userName}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <a
        href="/ideas/new"
        className="new-idea-button-container is-hidden-desktop"
      >
        <div className="new-idea-button">
          <FaPlus />
        </div>
        <div className="new-idea-button-content">投稿する</div>
      </a>
    </div>
  )
}

export default Ideas
