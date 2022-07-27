arr = [[1,2], [3,4], [5,6]]

function findFirst (arr){
    return arr[0][0]
}

function findLast (arr){
    let row = arr.length - 1
    let cell = arr[row].length -1
    return arr[row][cell]
}
