/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    
return (parseFloat(int.toString().split('').reverse().join('')) * Math.sign(int))
    
    
    // const numToString = int
    //     .toString()
    //     .split('')
    //     .reverse()
    //     .join('')
  
    // const newNumber = parseFloat(numToString) * Math.sign(int)
    // return newNumber
}

export { reverse };
