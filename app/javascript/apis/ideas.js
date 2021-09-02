import axios from 'axios'

const fetchIdeas = () =>
  axios
    .get('/api/v1/ideas.json')
    .then((res) => res.data)
    .catch((e) => console.error(e))

export default fetchIdeas
