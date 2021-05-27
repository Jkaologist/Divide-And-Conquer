function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0

  return arr.length - firstZero
}

function findFirst(arr, left = 0, right = arr.length - 1) {
  if (right >= left) {
    let mid = left + Math.floor((right - left) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, right)
    }
    return findFirst(arr, left, mid - 1)
  }
  return -1;
}

module.exports = countZeroes