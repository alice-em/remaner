const path = require('path');

export default function pathObjects(file) {
  const obj = {
    path: file,
    base: path.basename(file),
    dirname: path.dirname(file),
    ext: path.ext(file),
  };
  return obj;
}
