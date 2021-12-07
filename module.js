// export default function (numbers){
//     return numbers.reduce((acc, carry)=> acc + carry, 0);
// }

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

export default function countVowels(sentence) {
  let counts = 0;
  for(let i = 0; i < vowels.length; i++) {
    if(vowels.includes(sentence[i])) {
      counts++;
    }
  }
  return console.log(counts);
}