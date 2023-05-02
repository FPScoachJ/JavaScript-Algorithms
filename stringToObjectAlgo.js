let stringCount = "joeisthebestinstructorever";

function letterCount(string){
    let stringObject = {};
    for (let i = 0; i < string.length; i++){
        if (stringObject[string[i]] === 0){
            stringObject[string[i]] = 1;
        } else {
            stringObject[string[i]]++;
        }
    }
    return stringObject;
}
console.log(stringObject[string[i]]) 

function findLetters2(string) {
  const hashmap = {};
  for (let index = 0; index < string.length; index++) {
    const letter = string[index];
    if (!hashmap[letter]) {
      hashmap[letter] = 1;
    } else {
      hashmap[letter]++;
    }
  }
  return hashmap;
}