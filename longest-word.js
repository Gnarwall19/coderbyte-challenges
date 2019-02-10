/*
Have the function LongestWord(sen) take the sen parameter being passed
and return the largest word in the string. If there are two or more 
words that are the same length, return the first word from the string 
with that length. Ignore punctuation and assume sen will not be empty.
*/

function longestWord(sen) {

    var newSen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var lgth = 0;
    var longest;

    var arr = newSen.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }
    }

    return longest;

};

// Should return 'This'
console.log(longestWord('This is it, bro.'));