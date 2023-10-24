const yearOfBirth = parseInt(prompt("Please enter your year of birth:"));
const age = 2023 - yearOfBirth;

if (age < 18) {
  console.log("minor");
} else if (age >= 18 && age <= 36) {
  console.log("youth");
} else {
 console.log("elder");
}


