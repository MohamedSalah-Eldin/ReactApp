// const person1 = {
//     fname:"Hamza",
//     lname:"Eid"
// }

// //Shallow
// const person2 = person1

// // console.log(person2);

// person2.lname="Sarah"

// console.log("Person One: ", person1);
// console.log("*************************************************************");
// console.log("Person Two: ", person2);


const person1 = {
    fname:"Hamza",
    lname:"Eid"
}

//Deep Copying
const person2 = {...person1}

person2.lname="Sarah"

console.log("Person One: ", person1);
console.log("*************************************************************");
console.log("Person Two: ", person2);