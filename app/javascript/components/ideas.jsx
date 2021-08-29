import React, { Fragment, useEffect, useReducer } from 'react'

import { fetchIdeas } from '../apis/ideas'
import { REQUEST_STATE } from '../constants'

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
          <div key={idea.id}>
            id:{idea.id} user_id:{idea.user_id} title:{idea.title} elevatorpitch:{idea.elevatorpitch} solved:{idea.solved}
          </div>
        ))
      }
    </Fragment>
  )
}

export default Ideas
