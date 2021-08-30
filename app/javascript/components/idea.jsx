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
          idea: data.idea
        }
      })
    )
  }, [])

  console.log(state.idea)

  return (
    <Fragment>
      {state.fetchState === REQUEST_STATE.LOADING
        ? <Fragment>
          ロード中
        </Fragment>
        : <Fragment>
          <p>
            {state.idea.title}
          </p>
        </Fragment>
      }
    </Fragment>
  )
}

export default Idea
