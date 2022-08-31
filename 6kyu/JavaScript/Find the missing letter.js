function findMissingLetter(array) {
    array = array.map(letter=>letter.charCodeAt(0))
    
    const end = array[array.length-1]
    const start = array[0]
    
    const range = Array.from({length: end-start+1}, (_, i) => start + i)
    
    return String.fromCharCode(range.filter(code => !array.includes(code)))  
  }