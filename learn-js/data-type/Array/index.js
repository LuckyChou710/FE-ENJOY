const arr = [1, 2, 3];

console.log(
  arr.reduce((prev, curr) => {
    prev.unshift(curr);
    return prev;
  }, [])
);
