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