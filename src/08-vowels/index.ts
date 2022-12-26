/**
 * Vowels
 *
 * Write a function which returns number of vowels 
 * in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(str: string) {
    const vowels = str.match(/[aeiou]/gi)
    if(!vowels) {
    return 0;
    }
    return vowels.length;

}

export { vowels };
