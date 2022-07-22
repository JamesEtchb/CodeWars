function findGrade (x){
    if (x <= 100 && x > 90){
    return `A grade` 
    } else if (x <= 90 && x > 80){
        return `B grade`
    } else if (x <= 80 && x > 70){
        return `C grade`
    } else if (x <= 70 && x > 60){
        return 'D grade'
    } else {
        return 'F grade'
    } 
} 