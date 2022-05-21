const s = '423692'
const keypad = '923857614'
const matrix = [
  [...keypad.split('').slice(0, 3)],
  [...keypad.split('').slice(3, 6)],
  [...keypad.split('').slice(6, 9)],
]
matrix.forEach(el => console.log(el))

const coord = (ch) => {
  return matrix.reduce((acc, row, currentIndex) => {
    const col = row.indexOf(ch)
    if (acc.length === 0 && col !== -1) {
      return [currentIndex, col]
    }
    return acc
  }, [])
}
const splitted = s.split('')
let acc = 0
splitted.reduce((prevCoord, ch) => {
  const newCoord = coord(ch)
  if (newCoord === prevCoord) {
    return prevCoord
  }
  const rowDiff = Math.abs(prevCoord[0] - newCoord[0])
  const colDiff = Math.abs(prevCoord[1] - newCoord[1])

  if (rowDiff === 2 || colDiff === 2) {
    acc = acc + 2
  } else if (rowDiff === 1 || colDiff === 1) {
    acc = acc + 1
  }
  console.log(prevCoord, ch, newCoord, rowDiff, colDiff)
  return newCoord
}, coord(splitted.shift()))
console.log(acc)
