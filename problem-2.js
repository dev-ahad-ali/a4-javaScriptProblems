function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const nameLowerCase = name.toLowerCase();
  const nameArr = Array.from(nameLowerCase);
  const letters = ["a", "y", "i", "e", "o", "u", "w"];
  if (letters.includes(nameArr[nameArr.length - 1])) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

const names = checkName("RAFEE");
console.log(names);
