const list = {};

/**
 * @param {*} action
 */
function setStudent (action) {
  list[action.index] = action.student;
}


// function setStudent(action) {
//   if (action) {
//     if (action.index && action.student) {
//       list[action.index] = action.student;
//     }
//   }
// }

// function setStudent (action) {
//   if (action?.index && action?.student) {
//     list[action.index] = action.student;
//   }
// }

const action = { index: 0, student: { name: 'chou' } };

// setStudent();
setStudent({});

console.log(list);
