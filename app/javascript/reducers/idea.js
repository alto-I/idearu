import { REQUEST_STATE } from '../constants'

export const initialState = {
  fetchState: REQUEST_STATE,
  idea: [],
  comments: [],
}

export const ideasActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
}

export const ideasReducer = (state, action) => {
  switch (action.type) {
    case ideasActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      }
    case ideasActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        idea: action.payload.idea,
        comments: action.payload.comments,
      }
    default:
      throw new Error()
  }
}
