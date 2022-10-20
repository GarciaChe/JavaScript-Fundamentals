//function
const getCapsString = (str) => {
    if (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return null;
};

//console.log(getCapsString('the quick brown fox'));

//for a sentence
name = "the quick brown fox";
//output 'the quick brown fox'
const getCapsSentence = (sentence) => sentence
.split(" ")
.map((word) => getCapsString(word))
.join(" ");

console.log(getCapsSentence("i love you"));