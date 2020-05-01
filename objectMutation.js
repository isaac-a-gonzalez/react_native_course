const o = {
  a: "a",
  b: "b",
  obj: {
    key: "key",
  },
};

const o2 = Object.assign({}, o);

o2.obj.key = "new value";

console.log(o.obj.key);

// o2.a = 'new value'

// console.log(o.a)

// deep copy
function deepCopy(obj) {
  // check if values are objects
  // if so, copy that object (deep copy)
  // else return the value
  return Object.assign({}, obj);
}
