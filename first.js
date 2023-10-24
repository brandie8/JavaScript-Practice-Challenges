let firstPalindrome = function(words) {
    for (const word of words) {
        if (word === word.split("").reverse().join("")) 
        return word;
    }
    
    return " ";
};


const wordsArr= ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(wordsArr)); 
