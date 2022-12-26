/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

import { isExpressionWithTypeArguments } from "typescript";

function parse(input: string): string {
// 0. deklarēt tukšu akronīma stringu
// 1. sadalīt inputu vārdos => masīvs ar stringiem
// 2. iet cauri vārdu sarakstam => forEach
// 3. piekļūt katram vārdam, tā pirmajam burtam
// 4. uztaisīt lielo burtu
// 5. līmēt burtus klāt rezultātam
// 6. return
// 7. edge cases

// let result = '';
// const words = input.split(' ');
// words.forEach(word => {
//     result = result += word[0].toUpperCase();
// });
// return result;
// }

return input
.replace("_", "")
.split(/[ -]/g)
.map((word) => word[0])
.join("")
.toUpperCase();
}

export { parse };
