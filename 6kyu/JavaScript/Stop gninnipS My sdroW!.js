const spinWords=(s)=>s.split(' ').map(word=>word.length>4 ? [...word].reverse().join('') : word).join(' ')