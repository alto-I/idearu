import axios from 'axios'

const fetchLike = (likeId) =>
  axios
    .get(`/api/v1/likes/${likeId}`)
    .then((res) => res.data)
    .catch((e) => console.error(e))

export default fetchLike
