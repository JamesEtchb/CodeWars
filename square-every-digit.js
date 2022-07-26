function squareDigits(num) {
  num = num.toString()
  let newStr = ''
  for (let i = 0; i < num.length; i++) {
    newStr += num[i] * num[i]
  }
  return Number(newStr)
}

console.log(squareDigits(9119))
