function Anagram(word) {
    this.word = word;

    Anagram.prototype.sortAlphabet = function (item) {
        return item.toLowerCase().split('').sort().join('')
    }

    Anagram.prototype.lengthAndWordCheck = function (listOfWords, word) {
        return listOfWords.length == word.length && listOfWords.toLowerCase() !== word.toLowerCase();
    }

    var sortedWord = this.sortAlphabet(this.word);

    Anagram.prototype.matches = function (words) {
        var arrayWithWords = [];
        var sortedArray = [];
        var finalArr = [];

        if (typeof words == 'string') {
            words = Array.from(arguments);
        }

        for (value of words) {
            if (this.lengthAndWordCheck(value, this.word)) {
                arrayWithWords.push(value);
                var sortedItems = this.sortAlphabet(value);
                sortedArray.push(sortedItems);
            }
        }

        for (var i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i].indexOf(sortedWord) > -1) {
                finalArr.push(arrayWithWords[i]);
            }
        }
        return finalArr;

    }

};

module.exports = Anagram;