function longestConsec(a, k) {
    const words = a.map((e,i)=>a.slice(i,i+k).join(''))
    const longestWord = Math.max(...(words.map(w => w.length)))
    return (k>0 && k<a.length) && a.length > 0 ? words.find(w=>w.length===longestWord) : ''
}