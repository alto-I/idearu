import axios from 'axios'

export const fetchIdea = (ideaId) => {
  return axios
    .get(`/api/v1/ideas/${ideaId}`)
    .then((res) => {
      return res.data
    })
    .catch((e) => console.error(e))
}
