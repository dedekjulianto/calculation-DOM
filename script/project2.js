console.log("Level 0");
var names = [
  "Mr.Fahri",
  "Mr.Abdul",
  "Mrs.Josephhine",
  "Mr.Joseph",
  "Mr.Paul",
  "Mrs.Paula",
  "Mr.Hakim",
];
console.log(names[0]);
console.log("-----------------");

var person = {
  first_name: "John",
  last_name: "Doe",
  age: 25
};

var text = "";
for (var i in person) {
  text += person[i]+ ",";
}
console.log(text);

console.log("-----------------");

console.log("Level 1");
