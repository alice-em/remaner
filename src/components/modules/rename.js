const fs = require('fs');
const path = require('path');

var folder;
var regex;
var replacement;

let massRename = (folder, regex, replacement) => {
  let files = fs.readdirSync(folder);
  // console.dir(files);
  for (let i = 0; i < files.length; i++) {
    let check = fs.readdirSync(folder); // Updates per cycle
    let oldpath = path.join(folder, files[i]);
    let newpath;
    let stat = fs.statSync(oldpath);
    // console.log(prev)
    if (stat.isFile()) {
      if (files[i].match(regex) || files[i].match(/\s\s|\s\./) && files[i].charAt(0) != '.') {
        let ext = path.extname(files[i]).toLowerCase(); // Extension
        let basename = path.basename(files[i], ext) // basename with regex applied
          .replace(regex, replacement) // basename with regex applied
          .trim();
        newpath = path.join(folder, basename + ext);
        if (check.indexOf(basename) > -1) {
          // console.log(`:: Err! Program would overwrite existing file.\n:: File: ${prev}\n:: Dir: ${folder}`.red);
          break;
        } else {
          fs.renameSync(oldpath, newpath);
          console.log(`${files[i]} => ${basename}${ext}`);
        }
      }
    } else if (stat.isDirectory() && files[i].charAt(0) != '.') {
      newpath = path.join(folder, files[i]);
      // console.log(`: Switching to folder ${newpath}`.green);
      massRename(newpath, regex, replacement);
      // console.log(`: Returning to ${folder}`.green)
    } else {
      console.log(`No valid target file for ${files[i]}.`);
    }
  }
};

massRename(folder, regex, replacement);
