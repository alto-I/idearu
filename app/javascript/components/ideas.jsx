import React, { Fragment, useEffect, useReducer } from 'react'

import { fetchIdeas } from '../apis/ideas'
import { REQUEST_STATE } from '../constants'

import { FaRegHeart, FaComment } from "react-icons/fa";

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
          <div className="card m-1" key={idea.id}>
            <div className="icons">
              <div className="icons-item">
                <FaRegHeart /> 1
              </div>
              <div className="icons-item">
                <FaComment /> 2
              </div>
            </div>
            user_id:{idea.user_id} title:{idea.title} elevatorpitch:{idea.elevatorpitch}
          </div>
        ))
      }
    </Fragment>
  )
}

export default Ideas
