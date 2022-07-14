function isDivideBy(number, a, b) {
    let result = (number % a)
    let result2 = (number % b)
    let final = true
    if (result == 0 && result2 == 0){
      return final
    } else {
    return !final
    }
  }