function findNextSquare(sq) {
    if (!Number.isInteger(sq**.5)){
        return -1
    }else{
        let sq2 = sq**0.5;
        let sq3 = sq2+1
        let sq4 = sq3*sq3
        return sq4
    }
  }
  console.log(findNextSquare(4))

