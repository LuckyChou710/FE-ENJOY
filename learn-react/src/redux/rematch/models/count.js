const count = {
  state: {
    num: 0,
  },
  reducers: {
    setNum(state, num) {
      return { ...state, num };
    },
  },
  effects: (dispatch) => ({
    async increment(payload, rootState) {
      let { num } = rootState.count;
      num += payload;
      dispatch.count.setNum(num);
    },
  }),
};

export default count;
