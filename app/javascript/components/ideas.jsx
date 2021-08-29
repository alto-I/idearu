import React, { Fragment, useEffect, useReducer } from 'react'

import { fetchIdeas } from '../apis/ideas'
import { REQUEST_STATE } from '../constants'

import { FaRegHeart, FaComment, FaUserCircle } from "react-icons/fa";

import {
  initialState,
  ideasActionTypes,
  ideasReducer
} from '../reducers/ideas'

const Ideas = () => {
  const [state, dispatch] = useReducer(ideasReducer, initialState)

  useEffect(() => {
    dispatch({ type: ideasActionTypes.FETCHING })
    fetchIdeas().then((data) =>
      dispatch({
        type: ideasActionTypes.FETCH_SUCCESS,
        payload: {
          ideas: data.ideas
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
        : state.ideasList.map((idea) => (
          <a href={`ideas/${idea.id}`} key={idea.id}>
            <div className="card m-1" >
              <div className="idea-container columns m-1">
                <div className="icons column is-1">
                  <div className="icons-item is-size-5">
                    1 <FaRegHeart />
                  </div>
                  <div className="icons-item is-size-5">
                    2 <FaComment />
                  </div>
                </div>
                <div className="idea column is-narrow">
                  <div className="is-size-5">
                    {idea.title}
                  </div>
                  <div className="user-container columns is-size-5">
                    <div className="idea column is-1 mr-1">
                      <FaUserCircle/>
                    </div>
                    <div className="column is-size-5">
                      {idea.user_name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))
      }
    </Fragment>
  )
}

export default Ideas
