// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {
    name: "Layla",
    age: 27,
    knownLanguages: 3
  }, {
    name: "Keanu",
    age: 54,
    knownLanguages: 1
  }, {
    name: "Jasmine",
    age: 35,
    knownLanguages: 2
  }
]

// #1: Use the `map` array method to create a new array containing the names of each
// person in the `people` array. Assign the returned array to a variable
// called `peopleNames`.
// Type your solution immediately below this line:

peopleNames = []

var maple = function(){
  for(var i = 0; i < people.length; i++){
    peopleNames.push(people[i].name)
  }
  // peopleNames.push(people.name)

}
// people.map(maple)
maple()
console.log(peopleNames)
// people.map(console.log(people.name))

//?
// #2: Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who know multiple languages. Assign the returned array
// to a variable called `polyglotPeople`.
// Type your solution immediately below this line:

polyglotPeople = []
polyglotPeople = people.filter(if(.knownLanguages > 1))
