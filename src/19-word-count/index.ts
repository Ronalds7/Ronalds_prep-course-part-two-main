/**
 * Given a phrase, count the occurrences
 *  of each word in that phrase.
 *
 * For example for the input "olly olly 
 * in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */

// interface Counts {
//   [key: string]: number; 
// }
// return str
//     .trim()
//     .toLowerCase()
//     .split(/\s+/g)
//     .reduce((countsResult, word) => {
//       countsResult[word] = (countsResult[word] || 0) + 1;
//       return countsResult;
//     }, {} as Counts);


class Words {
  count(str: string) {
    const counts: Record<string, number> = {};

    const occurences = str.toLowerCase().match(/[^\s]+/g);
       if(occurences !== null) {
      for(const occurence of occurences) {
        if(counts.hasOwnProperty(occurence)) counts[occurence]++;
        else counts[occurence] = 1;
      }
    }
    return counts
  }

}

export { Words };
