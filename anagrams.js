const anagrams = (word, words) => words.filter(w => word.split('').sort().join('') === w.split('').sort().join('') ? true : false);

