const arr = [1,2,3,2,1,2,3,2,1,2,3,4,5,6,7,8,7,7,7,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9]
const items = arr.sort((prev, next) => prev - next)
const arrayAux = []
const reducedFq = items.reduce((fq, el) => {
  if (fq[el] === undefined) {
    fq[el] = 1
    return fq
  }
  fq[el]++
  return fq
}, {})
const groupedKeys = Object.keys(reducedFq).reduce((acc, key) => {
  if (acc[reducedFq[key]] === undefined) {
    acc[reducedFq[key]] = [+key]
    return acc
  }
  acc[reducedFq[key]].push(+key)
  acc[reducedFq[key]] = acc[reducedFq[key]].sort((a, b) => a <= b ? -1 : 1)
  return acc
}, {})
const keysSorted = Object.keys(groupedKeys).sort((a, b) => +a <= +b ? -1 : 1)
console.log(reducedFq, groupedKeys, keysSorted)

const result = keysSorted
    .reduce((acc, key) => [...acc, ...groupedKeys[key]], [])
    .reduce((acc, key) => [...acc, ...items.filter(el => el === key)], [])
console.log(result)
