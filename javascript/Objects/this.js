/**
 * Use of this: this meaning has differe according to execution context.
 * 1. implicit binding
 * 2. explicit binding
 * 3. new binding
 * 4. window binding
 */


const obj = {
    name: "Pradeep",
    age: 30,
    salary: 40000,
    email: "arya.creativemind@gmail.com",
    current: true,
    details: function () { console.log(this.name) },
    isWorking: NaN,
    address: {
        city: "Delhi"
    }
}


