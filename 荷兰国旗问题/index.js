// 荷兰国旗问题

// 给定一个任意的数字数组和一个任意目标值，将小于等于目标值的元素放置在原数组的左侧，将大于目标值的元素放置在原数组的右侧
// (不能创建新数组，只能操作原数组)

function part(arr, target) {
  // left表示在arr数组中下标小于等于left都是满足值小于等于target的范围
  let left = -1
  // right表示在arr数组中下标大于right的都是满足值大于target的范围
  let right = arr.length
  // 定义控制循环的变量
  let index = 0
  while (index < right) {
    if (arr[index] <= target) {
      left++
      let temp = arr[index]
      arr[index] = arr[left]
      arr[left] = temp
      index++
    } else if (arr[index] > target) {
      right--
      let temp = arr[index]
      arr[index] = arr[right]
      arr[right] = temp
    } else {
      // let temp = arr[index]
      // arr[index] = arr[index + 1]
      // arr[index + 1] = temp
      index++
    }
  }
  return arr
}
console.log(part([67, 32, 4, 5, 11,11, 2, 33, 44, 99, 87, 54, 66,66, 21, 55, 44], 33));
// [21, 32, 4, 5, 11, 2, 33, 99, 87, 54, 66, 44, 55, 44, 67]
