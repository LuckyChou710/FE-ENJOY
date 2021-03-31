import React from 'react';
import { Provider, useSelector, useDispatch, useStore } from 'react-redux';
import { store } from './models';

const Counter = () => {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const store = useStore();
  console.log(store);
  return (
    <>
      <div>{counter.num}</div>
      <button onClick={() => dispatch.count.increment(1)}>+1</button>
      <button onClick={() => dispatch.count.increment(10)}>+10</button>
    </>
  );
};

export default function View() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
