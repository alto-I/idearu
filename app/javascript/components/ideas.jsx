import React, { useEffect, useReducer, useState } from 'react'
import '../stylesheets/ideas.scss'
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
    <div className="ideas-container">
      <div className="button-container">
        <div
          className={
            sortDropDownIsActive ? 'dropdown is-active m-1' : 'dropdown m-1'
          }
        >
          <div className="dropdown-trigger">
            <button
              className="button is-small"
              type="button"
              aria-haspopup
              aria-controls="dropdown-menu"
              onClick={switchSortDropDownIsActive}
            >
              <span>表示順</span>
              <span className="icon is-small">
                <FaAngleDown />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <a
                className={
                  sort === 'created'
                    ? 'dropdown-item is-active'
                    : 'dropdown-item'
                }
                onClick={ideaSortCreated}
                role="button"
                tabIndex="0"
              >
                新着順
              </a>
              <a
                className={
                  sort === 'likes' ? 'dropdown-item is-active' : 'dropdown-item'
                }
                onClick={ideaSortLikes}
                role="button"
                tabIndex="0"
              >
                欲しい！順
              </a>
              <a
                className={
                  sort === 'comments'
                    ? 'dropdown-item is-active'
                    : 'dropdown-item'
                }
                onClick={ideaSortLatestComments}
                role="button"
                tabIndex="0"
              >
                最新コメント順
              </a>
            </div>
          </div>
        </div>
        <div className="buttons has-addons m-1">
          <button
            className={
              solved
                ? 'button is-small'
                : 'button is-small is-success is-selected'
            }
            type="button"
            onClick={fetchIdeaNotSolved}
          >
            未解決
          </button>
          <button
            className={
              solved
                ? 'button is-small is-danger is-selected'
                : 'button is-small'
            }
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
          <div className="idea-wrapper" key={idea.id}>
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
                <a href={`ideas/${idea.id}`}>{idea.title}</a>
                <br />
                という問題を解決したい
              </div>
              <div className="idea-info is-size-7">
                <div className="idea-posttime">
                  投稿日時:
                  <DayJS format="YYYY年MM月DD日">{idea.createdAt}</DayJS>
                </div>
                <div className="idea-author">投稿者:{idea.userName}</div>
              </div>
            </div>
          </div>
        ))
      )}
      <a href="/ideas/new" className="new-idea-button-link is-hidden-desktop">
        <div className="new-idea-button">
          <FaPlus />
        </div>
        <div className="new-idea-button-content">投稿する</div>
      </a>
    </div>
  )
}

export default Ideas
