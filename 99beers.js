let sing = function () {
  let result = []
  for (let i = 99; i > 1; i--) {
    let x = i
    let y = x - 1
    result.push(
      `${x} bottles of beer on the wall, ${x} bottles of beer. Take one down and pass it around, ${y} bottles of beer on the wall.`
    )
}
result.push(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.`)

  console.log(result)
}

sing()
