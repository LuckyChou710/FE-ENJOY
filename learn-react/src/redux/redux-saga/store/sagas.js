/* eslint-disable require-yield */
import { takeEvery, put, all } from 'redux-saga/effects'
import { GET_NAME_VALUE } from './actionTypes'
import axios from 'axios'
import { getName } from './actionCreators'


<<<<<<< HEAD
function* helloSaga() {
  console.log('hello Saga')
}

// 执行副作用的函数
function* GetNameAsync() {
=======
function* fetchGetName(action) {
  console.log(action)
>>>>>>> b35608172a3c81fffd38755623ae3894566b37c1
  const res = yield axios.get('/test.json')
  const name = res.data.name
  console.log(name)
  yield put(getName(name))
}

function* watchFetchName() {
  yield takeEvery(GET_NAME_VALUE, GetNameAsync)
}

<<<<<<< HEAD
// 监听GET_NAME_VALUE action 在dispatch前执行fetchGetName 最后包装成原始action
function* mySaga() {
  yield all([helloSaga(), watchFetchName()])
=======
function* mySaga () {

  yield takeEvery(GET_NAME_VALUE, fetchGetName)
>>>>>>> b35608172a3c81fffd38755623ae3894566b37c1
}

export default mySaga
