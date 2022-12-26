/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string) {
    
    let occurences = str.toLowerCase().split('');

    for(let i = 0; i < occurences.length; i++) {
      let counts: any;
      if(occurences !== null) {
        for(const occurence of occurences) {
          if(counts.hasOwnProperty(occurence)) counts[occurence]++;
          else counts[occurence] = 1;
    }
      } console.log(counts)
    }
    
}
  
  
  
  
  


export { maxChar };
