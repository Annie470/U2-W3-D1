class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  whoSenior = function (otherObj) {
    if (this.age > otherObj.age) {
      return `${this.firstName} è piu grande di ${otherObj.firstName}`;
    } else {
      return `${this.firstName} NON è piu grande di ${otherObj.firstName}`;
    }
  };
}

const userX = new User("Dino", "Sauro", 2000, "Europa Ovest");
const userY = new User("Giulio", "Cesare", 55, "Europa Centrale");
const userZ = new User("Alieno", "Dei Plutone", 134, "Marte");

console.log(userX);
console.log(userY);
console.log(userX.whoSenior(userY));
console.log(userY.whoSenior(userZ));
