import React, { Fragment, useEffect, useReducer } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import Like from './like'

import fetchIdea from '../apis/idea'
import { REQUEST_STATE } from '../constants'

import { initialState, ideasActionTypes, ideasReducer } from '../reducers/idea'

const Idea = () => {
  const [state, dispatch] = useReducer(ideasReducer, initialState)
  const urlArray = window.location.pathname.split('/')
  const params = urlArray[urlArray.length - 1]

  useEffect(() => {
    dispatch({ type: ideasActionTypes.FETCHING })
    fetchIdea(params).then((data) =>
      dispatch({
        type: ideasActionTypes.FETCH_SUCCESS,
        payload: {
          idea: data.idea,
          comments: data.comments,
        },
      })
    )
  }, [params])

  return (
    <>
      {state.fetchState === REQUEST_STATE.LOADING ? (
        <>ロード中</>
      ) : (
        <>
          <div className="container">
            <div className="idea-container card">
              <div className="card-header">
                <div className="card-header-title is-size-4">
                  {state.idea.title}という問題
                </div>
              </div>
              <div className="elevatorpitch-container card-content">
                {state.idea.elevatorpitch}
              </div>
            </div>
            <div className="comments-container">
              <div className="comment-title has-text-weight-bold my-2">
                コメント
              </div>
              {state.comments.map((comment) => (
                <div className="comment-container box columns m-1">
                  <div className="user-container column is-1">
                    <div className="user-icon">
                      <FaUserCircle />
                    </div>
                    <div className="user-name">{comment.user_name}</div>
                  </div>
                  <div className="comment-description column">
                    {comment.comment}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Idea
