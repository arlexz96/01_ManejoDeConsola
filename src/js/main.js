// var userName = "Arlex" /* antes del 2015 */ 
// let lastName = "Zapata" /* se recomienda utilizar */
// const age = "25" /* se recomienda utilizar */
// const email = "Arlex.Z96@gmail.com"
// let address = "Cra 74"
// let phoneNumber = "3116200055"
// let afirmative = true

var userName = prompt("Enter Your UserName") /* antes del 2015 */ 
let lastName = prompt("Enter Your LastName") /* se recomienda utilizar */
const age = prompt("Enter Your Age") /* se recomienda utilizar */
const email = prompt("Enter Your Email")
let address = prompt("Enter Your Address")
let phoneNumber = prompt("Enter Your PhoneNumber")

/* console.log(userName)
console.error(lastName)
console.warn(age)
console.debug(email)
console.info(address)
console.log(phoneNumber)
console.assert(afirmative)
 */

console.log("Nombre: "+userName+" "+lastName+" - Edad: "+age+" - Email: "+email+" - Direccion: "+address+" - Numero De Telefono: "+phoneNumber)

console.warn("Nombre:",userName,lastName,"- Edad:",age,"- Email:",email,"- Direccion:",address,"- Numero De Telefono:",phoneNumber)

console.error(`Nombre: ${userName} ${lastName} - Edad: ${age} - Email: ${email} - Direccion: ${address} - Numero De Telefono: ${phoneNumber}`)

/* //GRUPOS
console.group("Data Basic Information")

console.log(`Nombre: ${userName} ${lastName}`)
console.log(`Edad: ${age}`)
console.log(`Direccion: ${address}`)

console.groupEnd()

console.group("Contact Information")

console.log(`Email: ${email}`)
console.log(`Numero De Telefono: ${phoneNumber}`)

console.groupEnd() */

/* listCodersGates = ["Simon Arias","Jonathan Escobar","Arlex Zapata"]
console.table(listCodersGates)
 */