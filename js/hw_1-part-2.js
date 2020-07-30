//--------------------------------------------------------------------------------------//

// function findLongestWord(string = '') {
//   // Write code under this line
//   const wordSplit = string.split(' ');

//   let longestWord = '';

//   for (let i = 0; i < wordSplit.length; i += 1)
//     if (wordSplit.length > longestWord) {
//       longestWord = wordSplit.length;
//     }

//   return longestWord;
// }
//--------------------------------------------------------------------------------------//

// function findLongestWord(string = '') {
//   let longestWord = '';
//   string.split(' ');

//   for (longestWord.length of string.split('')) {
//     if (string > longestWord.length) {
//       longestWord.length = string;
//     }
//   }

//   return longestWord;
// }
//--------------------------------------------------------------------------------------//

function findLongestWord(string = '') {
  string.split(' ');
  let LongestWord = '';
  for (const words of string.split(' ')) {
    if (words > LongestWord) {
      LongestWord = words;
    }
  }

  return LongestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//'jumped'

console.log(findLongestWord('Google do a roll'));
//'Google'

console.log(findLongestWord('May the force be with you'));
//'force'
