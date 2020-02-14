const people = [
  { id: 1, name: 'Udin', age: 12 },
  { id: 2, name: 'Wati', age: 51 },
  { id: 3, name: 'Budi', age: 34 },
  { id: 4, name: 'Agus', age: 16 },
  { id: 5, name: 'Sari', age: 19 },
  { id: 6, name: 'Ririn', age: 21 },
]

function filteringAge(items) {
  if(!Array.isArray(items)) return

  return items.filter( ob => ob.age <= 21 )
}

// soalnya gini lho "Make function filteringAge to filtering people age *lower or equal* 21." --> jadi usia 21 masuk kriteria kan?
console.log( filteringAge(people) )