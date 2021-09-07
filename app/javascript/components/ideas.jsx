import React, { Fragment, useEffect, useReducer, useState } from 'react'

import { FaRegHeart, FaComment, FaUserCircle } from 'react-icons/fa'
import fetchIdeas from '../apis/ideas'
import { REQUEST_STATE } from '../constants'

import { initialState, ideasActionTypes, ideasReducer } from '../reducers/ideas'

const Ideas = () => {
  const [state, dispatch] = useReducer(ideasReducer, initialState)
  const [solved, setSolved] = useState(false)

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
  }

  return (
    <>
      <div className="container button-container m-1">
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
                  <div className="column is-size-5">{idea.user_name}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Ideas
