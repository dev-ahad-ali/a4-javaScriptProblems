function password(obj) {
  if (Object.keys(obj).length < 3 || obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const website = obj.siteName;
  const websiteCapitalize = website.toUpperCase().charAt(0) + website.slice(1);
  const username = obj.name;
  const year = obj.birthYear;

  const password = `${websiteCapitalize}#${username}@${year}`;
  return password;
}

const generate = password({
  name: "rahat",
  birthYear: 200,
  siteName: "Facebook",
});
console.log(generate);
