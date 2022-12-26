/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n: number) {

    for(let row = 0; row < n; row++) {
        let level = "";
  
        for(let column = 0; column < n; column++) {
          if(row >= column) {
        level += "#";
        } else {
          level += " ";
        }
      }
        console.log(level)
    } 
    
  }
  

export { steps };
