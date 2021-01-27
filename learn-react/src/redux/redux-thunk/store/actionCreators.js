import axios from 'axios'
import { GET_NAME_VALUE } from './actionTypes'
export const _getName = (name) => ({
  type: GET_NAME_VALUE,
  name,
})

export const getName = () => {
  return (dispatch) => {
    axios.get('/test.json').then((res) => {
      const data = res.data
      dispatch(_getName(data.name))
    })
  }
}
