export default function dupes(ARRAY) {
  let dupeIndices = [];
  for (let i = 0; i < ARRAY.length; i++) {
    let item = ARRAY[i].base;
    if (ARRAY.indexOf(item) !== i) {
      if (ARRAY.indexOf(item) >= 0) {
        if (dupeIndices.indexOf(i) === -1) {
          dupeIndices.push(i);
        }
      }
    }
  }
  return dupeIndices;
}
