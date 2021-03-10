const fetchData = function* () {
  yield axios.get('./data1.json').then((res) => console.log(res));
};

console.log(fetchData().next());
