import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { getName } from './actionCreators';

// 执行副作用的函数
function* fetchGetName(action) {
  const res = yield axios.get('/__mock__.json');
  const name = res.data.data;
  yield put(getName(name));
}

// 监听GET_NAME_VALUE action 在dispatch前执行fetchGetName 最后包装成原始action
function* mySaga() {
  yield takeEvery("GET_NAME_VALUE_ASYNC", fetchGetName);
}

export default mySaga;
