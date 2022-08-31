function moveZeros(arr) {
    let lastNonZeroFoundAt = 0
  
    for (let i=0; i < arr.length; i++) {
      if (arr[i] !== 0) arr[lastNonZeroFoundAt++] = arr[i]  
    }
   
    for (let i=lastNonZeroFoundAt; i<arr.length; i++) {
      arr[i] = 0
    }
    
    return arr
}