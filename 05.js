const cities = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

function duplicateRemover(items) {
  if( !Array.isArray(items) ) return
  return [...new Set(items)]
}

console.log( duplicateRemover(cities) )