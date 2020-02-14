function mirror(str) {
  if(!str.trim()) return

  return str + [...str].reverse().join('')
}

console.log( mirror( 'abc--' ) )
console.log( mirror( '12345' ) )
console.log( mirror( 'madam' ) )