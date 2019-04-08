// given
function add(a, b) {
  return a + b;
}

// the old way
const addToThree = add.bind(this, 3);
console.log(addToThree(5));

// the new way
const addToThree_new = add(3, ?);
console.log(addToThree_new(6));
