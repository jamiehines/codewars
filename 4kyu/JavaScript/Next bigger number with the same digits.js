function nextBigger(arr) {
    arr = [...String(arr)]
    let i = arr.length
  
    for(i; i>0; i--) {
      if (arr[i] > arr[i-1]) break
    }
  
    if (i==0) return -1
  
    let s = arr[i-1]
    let b = i
  
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] > s && arr[j] < arr[i]) b = j  
    }
    
    arr[i-1] = arr[b]
    arr[b] = s
     
    return parseInt(arr.concat((arr.splice(i, arr.length)).sort((a,b)=>a-b)).join(''))
}