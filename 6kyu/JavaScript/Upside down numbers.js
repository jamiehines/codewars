function solve(x, y) {
    const dict = {0: 0, 1: 1, 6: 9, 8: 8, 9: 6}
    const numbers = Array.from({length: y-x}, (_, i) => x + i)
    return numbers.filter(n=>String(n) === [...String(n)].reverse().map(v=>dict[v]).join('')).length  
}
  