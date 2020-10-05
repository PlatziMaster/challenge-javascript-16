const { StackObj } = require ('./stack-obj');

const converter = (decNumber) => (base) => {
  let array = []
  let result = true
  while (result) {
    array = array.concat(decNumber % base)
    decNumber = Math.trunc(decNumber / base)
    if (decNumber < base) {
      if (decNumber !== 0) {
        array = array.concat(decNumber)
      }
      result = false
    }
  }
  if (base === 16 || base === 36) {
    array = array.map(current => {
      switch (current) {
        case 10:
          current = 'A'
          break
        case 11:
          current = 'B'
          break
        case 12:
          current = 'C'
          break
        case 13:
          current = 'D'
          break
        case 14:
          current = 'E'
          break
        case 15:
          current = 'F'
          break
        case 16:
          current = 'G'
          break
        default:
          current = current
          break
      }
      return current
    })
  }
  array = `${array.reverse().join('')}`
  return array
}

function baseConverter(decNumber, base) {
  if (base < 2 || isNaN(decNumber) || decNumber < 0 || base > 36) {
    return null
  }
  const result = converter(decNumber)
  return result(base)
}

module.exports = { baseConverter };
