function checkAnagram() {
    var word1 = document.getElementById("word1").value.toLowerCase().replace(/[^a-z]/g, '');
    var word2 = document.getElementById("word2").value.toLowerCase().replace(/[^a-z]/g, '');

    var resultElement = document.getElementById("result");

    if (!word1 || !word2) {
        resultElement.innerText = "Enter words in both boxes.";
        resultElement.style.color = "red";
        return;
    }

    if (word1.length !== word2.length) {
        resultElement.innerText = "Words are not anagrams.";
        resultElement.style.color = "red";
        return;
    }

    var charCount = {};//The result is stored in the charCount object, This object will be used to store the character count information.

    for (var i = 0; i < word1.length; i++) {
        var char = word1[i];
        charCount[char] = (charCount[char] || 0) + 1;//loop is use o check character count
    }

    for (var i = 0; i < word2.length; i++) {
        var char = word2[i];
        if (!charCount[char]) {
            resultElement.innerText = "Words are not anagrams.";
            resultElement.style.color = "red";
            return;
        }
        charCount[char]--;
    }

    // for (var char in charCount) {
    //     if (charCount[char] !== 0) {
    //         resultElement.innerText = "Words are not anagrams.";
    //         resultElement.style.color = "red";
    //         return;
    //     }
    // }

    resultElement.innerText = "Words are anagrams!";
    resultElement.style.color = "green";
}

function refreshPage() {
    location.reload();
}