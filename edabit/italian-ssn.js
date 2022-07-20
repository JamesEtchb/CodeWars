//Add to it later
​
const data = require("./theFiscalCode.json")
const { person } = data
​
// let person = {
//     name: "Matt",
//     surname: "Edabit",
//     gender: "Male",
//     dateOfBirth: "1/1/1900",
//   }
​
function fiscalCode(person) {
  //This creates array to call the letter for the later part
  const months = " ABCDEHLMPRST"
  const getV = (s) => s.toUpperCase().replace(/[^AEIOU]/g, "")
  const getC = (s) => s.toUpperCase().replace(/[AEIOU]/g, "")
  const code = (s) => (getC(s) + getV(s) + "XXX").slice(0, 3)
  const [d, m, y] = person.dateOfBirth.split("/")
​
  let sCode = code(person.surname)
  let fCon = getC(person.name)
  let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name)
  let nCode =
    y.slice(-2) +
    months[m] +
    (person.gender === "Male" ? ("0" + d).slice(-2) : +d + 40)
  return sCode + fCode + nCode
}
​
​
​
//Add json Later
// for (let i = 0; i < person.length; i++) {
//   console.log(`${person[i]}\n=>${fiscalCode(person[i])}`)
// }