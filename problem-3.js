function deleteInvalids(arr) {
  if (Array.isArray(arr) === false) {
    return "Invalid Array";
  }
  const cleanArray = [];
  for (item of arr) {
    if (typeof item === "number" && isNaN(item) === false) {
      cleanArray.push(item);
    }
  }
  return cleanArray;
}

const cleanArray = deleteInvalids([
  1,
  null,
  undefined,
  18,
  -19,
  NaN,
  "12",
  [1, 2],
  { ob: "lala" },
]);
console.log(cleanArray);
