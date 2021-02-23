const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1.slice();
console.log(arr2 === arr1);

const deepArr1 = [
  {
    users: {
      name: 'chou',
      age: 18,
    },
    job: ['doctor', 'teacher'],
  },
  18,
];

const deepArr2 = deepArr1.slice();

deepArr2[0].job.pop();

deepArr2.pop();

console.log(deepArr1);
console.log(deepArr2);