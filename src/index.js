
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix[0] === undefined) {
    return []
  }
  let arr = matrix.map(function(el, index) {
    if (index % 2 !== 0) {
      el.reverse()
    }
    return el
  })
  return arr.join(',').split(',')
}
