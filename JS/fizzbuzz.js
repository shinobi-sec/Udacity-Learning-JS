var x = 1;

while (x <= 20) {
  if ((3 % x === 0) && (5 % x === 0)) {
    console.log("JuliaJames");
    if (3 % x === 0) {
      console.log("Julia")
    }
    else if (5 % x === 0) {
      console.log("James");
    }
    x++;
  }
}
