function foundPerson(people) {
  const candiate = ['Don', 'John', 'Kent'];
  return people.find((p) => candiate.includes(p) || '');
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
console.log(foundPerson(['Lee']));
