function sot(str){
    //put string in lowercase and remove spaces from it.
        str=str.toLowerCase(). replace(/[^a-zA-Z0-9]+/g,'');
    //sort the string.
        return str.split("").sort().join("");
    }console.log(sot("telephone"));