import React, { Fragment, useEffect, useReducer } from "react";

import { fetchIdeas } from "../apis/ideas";

import {
  initialState,
  ideasActionTypes,
  ideasReducer
} from "../reducers/ideas";

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
      {console.log(state.ideasList)}
      {state.ideasList.map(idea =>
        <div key={idea.id}>
          {idea.id}
          {idea.user_id}
          {idea.title}
          {idea.elevatorpitch}
          {idea.solved}
        </div>
      )}
    </Fragment>
  )
}

export default Ideas
