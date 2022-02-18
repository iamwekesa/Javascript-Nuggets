// MAP Method
const people = [
  {
    name: 'Dennis',
    age: 29,
    position: 'engineer',
  },
  {
    name: 'Wekesa',
    age: 25,
    position: 'DevOps',
  },
  {
    name: 'Elijah',
    age: 30,
    position: 'The boss',
  },
  {
    name: 'John',
    age: 26,
    position: 'Project Manager',
  },
];
// Maps : The map() method creates a - new array - populated with the results of
// calling a provided function on every element in the calling array

// Note:
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firsName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

