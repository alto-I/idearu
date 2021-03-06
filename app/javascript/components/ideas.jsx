import React, { useEffect, useReducer, useState } from 'react'
import DayJS from 'react-dayjs'

import { FaRegComment, FaPlus, FaAngleDown } from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import fetchIdeas from '../apis/ideas'
import { REQUEST_STATE } from '../constants'
import { initialState, ideasActionTypes, ideasReducer } from '../reducers/ideas'

const Ideas = () => {
  const [state, dispatch] = useReducer(ideasReducer, initialState)
  const [solved, setSolved] = useState(false)
  const [sort, setSort] = useState('created')
  const [sortDropDownIsActive, setSortDropDownIsActive] = useState(false)

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

  const switchSortDropDownIsActive = () => {
    if (sortDropDownIsActive) {
      setSortDropDownIsActive(false)
    } else {
      setSortDropDownIsActive(true)
    }
  }

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
    switchSortDropDownIsActive()
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
    switchSortDropDownIsActive()
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
    switchSortDropDownIsActive()
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
    <>
      <div className="button-container">
        <div className="button-container__inner container">
          <div
            className={sortDropDownIsActive ? 'dropdown is-active' : 'dropdown'}
          >
            <div className="dropdown-trigger">
              <button
                className="button is-normal"
                type="button"
                aria-haspopup
                aria-controls="dropdown-menu"
                onClick={switchSortDropDownIsActive}
              >
                <span>?????????</span>
                <span className="icon is-normal">
                  <FaAngleDown />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                <a
                  className={
                    sort === 'created'
                      ? 'dropdown-item created is-active'
                      : 'dropdown-item created'
                  }
                  onClick={ideaSortCreated}
                  role="button"
                  tabIndex="0"
                >
                  ?????????
                </a>
                <a
                  className={
                    sort === 'likes'
                      ? 'dropdown-item likes is-active'
                      : 'dropdown-item likes'
                  }
                  onClick={ideaSortLikes}
                  role="button"
                  tabIndex="0"
                >
                  ???????????????
                </a>
                <a
                  className={
                    sort === 'comments'
                      ? 'dropdown-item comments is-active'
                      : 'dropdown-item comments'
                  }
                  onClick={ideaSortLatestComments}
                  role="button"
                  tabIndex="0"
                >
                  ?????????????????????
                </a>
              </div>
            </div>
          </div>
          <div className="field has-addons">
            <div className="control">
              <button
                className={
                  solved
                    ? 'button is-normal'
                    : 'button is-normal is-link is-selected'
                }
                type="button"
                onClick={fetchIdeaNotSolved}
              >
                ?????????
              </button>
            </div>
            <div className="control">
              <button
                className={
                  solved
                    ? 'button is-normal is-link is-selected'
                    : 'button is-normal'
                }
                type="button"
                onClick={fetchIdeaSolved}
              >
                ?????????
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="ideas-container container">
        {state.fetchState === REQUEST_STATE.LOADING ? (
          <>????????????</>
        ) : (
          state.ideasList.map((idea) => (
            <div className="idea-outer" key={idea.id}>
              <div className="idea-caption__items">
                <div className="idea-caption__item">
                  {idea.likes} <AiOutlineLike />
                </div>
                <div className="idea-caption__item">
                  {idea.comments} <FaRegComment />
                </div>
              </div>
              <div className="idea-details">
                <div className="idea-title__container">
                  <a href={`ideas/${idea.id}`}>
                    {idea.title}
                    ?????????????????????????????????
                  </a>
                </div>
                <div className="idea-info is-size-7">
                  <div className="idea-posttime">
                    ????????????:
                    <DayJS format="YYYY???MM???DD???">{idea.createdAt}</DayJS>
                  </div>
                  <div className="idea-author">?????????:{idea.userName}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <a href="/ideas/new" className="new-idea-button-link is-hidden-desktop">
        <div className="new-idea-button">
          <FaPlus />
        </div>
        <div className="new-idea-button-content">????????????</div>
      </a>
    </>
  )
}

export default Ideas
