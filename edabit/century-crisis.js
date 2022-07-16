// Earth wil explode in 40 years. in 30 years there will be a spaceship to take everyone to a new world.
//Determine how many people will be alive if n number of people are born every month

let spaceShip = 30

function newPop (x ,n) {
   return spaceShip * (n * 12) + x
   
}

console.log(newPop(256, 2))
console.log(newPop(3248, 6))
console.log(newPop(5240, 3))
