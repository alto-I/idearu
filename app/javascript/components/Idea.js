import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchIdeas } from '../apis/ideas'

fetchIdeas()
  .then((data) => console.log(data))

class Idea extends React.Component {
  render () {
    return (
      <React.Fragment>アイデア一覧</React.Fragment>
    )
  }
}

export default Idea
