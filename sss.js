/*
 * JS 代码片段
 */

// 数组去重， [1, 3, 5, 2, 4]
[... new Set([1, 3, 5, 1, 2, 3, 4])]

// 数组切片， array.slice([begin[, end]])
let a = [1, 2, 3, 4, 5]
// 获取第3个至最后一个元素， [3, 4, 5]
a.slice(2)
// 获取第2个至第3个元素， [2, 3]
a.slice(1, 3)
// 获取倒数第2个至最后的元素，[4, 5]
a.slice(-2)
// 获取倒数第3个至倒数第2个元素, [3, 4]
a.slice(-3, -1)

// 数组切片删除/添加， array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
let a = [1, 2, 3, 4, 5]
// 从第3个开始删除， a = [1, 2]
a.splice(2)
// 从第2个开始，删除3个， a = [1, 5]
a.splice(1, 3)
// todo more
a.splice(1, 3)
