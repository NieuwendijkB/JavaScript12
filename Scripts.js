let colors = ["yellow", "blue", "red", "orange"];
let colorLength = colors.length;
var i = 0;

while (i < colorLength) {
  let result = colors[i];
  console.log(result);
  i++;
}

for (let i = 0; i < colorLength; i++) {
  let result = colors[i];
  console.log(result);
}

colors.forEach((element) => console.log(element));
