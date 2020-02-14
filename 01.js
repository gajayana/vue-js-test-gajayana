function grade(n) {
  let res
  if( !typeof n === 'number' ) return

  if ( n >= 90 ) { res = 'A' } else
  if ( n >= 80 && n <= 89) { res = 'B' } else
  if ( n >= 70 && n <= 79) { res = 'C' } else
  if ( n >= 60 && n <= 69) { res = 'D' } else
  { res = 'E' }


  return res
}

console.log( grade( 91 ) )
console.log( grade( 90 ) )
console.log( grade( 85 ) )
console.log( grade( 77 ) )
console.log( grade( 69 ) )
console.log( grade( 55 ) )