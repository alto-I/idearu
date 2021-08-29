import axios from 'axios'

export const fetchIdeas = () => {
  return axios
    .get('/api/v1/ideas.json')
    .then((res) => {
      return res.data
    })
    .catch((e) => console.error(e))
}
