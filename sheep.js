function countSheep (arrayOfSheep) {
    let total = 0
    for (let i = 0; i < arrayOfSheep.length; i++){
        if (arrayOfSheep[i] == true){
            total++
        }
    }
    return total
}