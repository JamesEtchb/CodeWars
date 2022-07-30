let str = 'stongXoxoxXO'

function XO(str) {
    let xTotal = 0
    let oTotal = 0
    for (let i = 0; i < str.length; i++){
      if(str[i] == 'x'.toLowerCase){
        xTotal += 1
      } else if (str[i] == 'o'.toLowerCase){
        oTotal += 1
      } else {
        continue
      }
    }
    if (xTotal == oTotal){
        return true
    } else {
        return false
    }
}

console.log(XO(str))