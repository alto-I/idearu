import axios from 'axios'

const fetchIdea = (ideaId) =>
  axios
    .get(`/api/v1/ideas/${ideaId}.json`)
    .then((res) => res.data)
    .catch((e) => console.error(e))

export default fetchIdea
