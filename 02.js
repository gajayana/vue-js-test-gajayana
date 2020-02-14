function reverse(str) {
  if(!str.trim()) return

  return str.split(' ').reverse().join(' ')
}

console.log( reverse( 'saya ingin makan nasi goreng' ) )