import axios from 'axios'

const fetchIdeas = (solved) =>
  axios
    .get(`/api/v1/ideas.json?solved=${solved}`)
    .then((res) => res.data)
    .catch((e) => console.error(e))

export default fetchIdeas
