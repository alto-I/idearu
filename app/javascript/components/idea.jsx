import React, { Fragment, useEffect, useReducer } from 'react'

import { fetchIdea } from '../apis/idea'
import { REQUEST_STATE } from '../constants'

import { FaRegHeart, FaComment, FaUserCircle } from "react-icons/fa";

import {
  initialState,
  ideasActionTypes,
  ideasReducer
} from '../reducers/idea'

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
          comments: data.comments
        }
      })
    )
  }, [])

  return (
    <Fragment>
      {state.fetchState === REQUEST_STATE.LOADING
        ? <Fragment>
          ロード中
        </Fragment>
        : <Fragment>
          <div className="idea-container">
            <div className="is-size-2">
              {state.idea.title}
            </div>
            <div className="elevatorpitch-container is-size-4">
              {state.idea.elevatorpitch}
            </div>
            {state.comments.map((comment) => (
                <div className="comment-container">
                  <div>
                    {comment.comment}
                  </div>
                  <div>
                    {comment.user_name}
                  </div>
              </div>
            ))}
          </div>
        </Fragment>
      }
    </Fragment>
  )
}

export default Idea
