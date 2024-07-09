function filterProps(object, ...props) {
  const result = { ...object };
  props.forEach((prop) => {
    delete result[prop];
  });
  return result;
}

const object = { a: 1, b: 2, c: 3, d: 4 };
console.log(filterProps(object, "b", "d"));
