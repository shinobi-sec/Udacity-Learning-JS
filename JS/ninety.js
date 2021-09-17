while (num >= 1) {
  console.log(num + " bottles of juice on the wall! "+ num +" bottles of juice! Take one down, pass it around... " + num + " bottles of juice on the wall!");
  num--;
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! "+ num +" bottle of juice! Take one down, pass it around... " + num + " bottle of juice on the wall!");
    break;
  }
}
