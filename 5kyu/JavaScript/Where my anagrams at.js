function anagrams(word, words) {
    word = [...word].sort().join('')
    return words.filter(i=>word === [...i].sort().join(''))
}
