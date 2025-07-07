const array = [];
const select1 = document.createElement("select");
const select2 = document.createElement("select");

select1.className = "form-select";
select2.className = "form-select";

const defaultOption1 = document.createElement("option");
defaultOption1.text = "Seleziona un Pet";

const defaultOption2 = document.createElement("option");
defaultOption2.text = "Seleziona un Pet";

select1.appendChild(defaultOption1);
select2.appendChild(defaultOption2);

dropdownContainer.appendChild(select1);
dropdownContainer2.appendChild(select2);

class Pet {
  constructor(_name, _owner, _species, _breed) {
    this.name = _name;
    this.owner = _owner;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner = function (obj) {
    return this.owner === obj.owner ? `Yes, same owner` : `Not the same owner`;
  };
}

const nameInput = document.getElementById("name");
const ownerInput = document.getElementById("owner");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

const form = document.getElementById("form1");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(
    nameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );
  console.log(pet);
  const li = document.createElement("li");
  li.innerText = `${pet.name}, ${pet.owner}, ${pet.species}, ${pet.breed}`;
  const ul = document.querySelector("ul");
  ul.appendChild(li);
  array.push(pet);

  const option1 = document.createElement("option");
  const option2 = document.createElement("option");

  option1.text = pet.name;
  option2.text = pet.name;

  select1.appendChild(option1);
  select2.appendChild(option2);
  form.reset();
});

const form2 = document.getElementById("form2");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const petName1 = select1.value;
  const petName2 = select2.value;

  const pet1 = array.find((p) => p.name === petName1);
  const pet2 = array.find((p) => p.name === petName2);
  const h3 = document.querySelector("h3");
  h3.innerText = pet1.sameOwner(pet2);
});
