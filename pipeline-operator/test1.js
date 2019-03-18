// given
function doubleSay(str) {
  return str + ", " + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + "!";
}

// the old way:
const result1 = exclaim(capitalize(doubleSay("hello world")));
console.log(result1);

// the new way:
const result2 = "hello world" |> doubleSay |> capitalize |> exclaim;
console.log(result2);
