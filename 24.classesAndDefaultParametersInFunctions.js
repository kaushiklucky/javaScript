class Human {
    age = 13; // public variable
    #wt = 40; // private variable
    ht = 160;

    walking() {
        console.log("I am Walking");
        console.log(this.#wt); // accessing private variable
    }

    running() {
        console.log("I am running");
    }

    // Getter to fetch private value
    get fetchWeight() {
        return this.#wt;
    }

    // Setter to modify private value
    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human();
console.log(obj.fetchWeight); // accessing private variable outside the class

class Human2 {
    age;
    wt = 80;
    ht = 180;
    gender = "M";
    #body_count = 35;

    constructor(newAge, newHeight) {
        this.age = newAge;
        this.ht = newHeight;
    }

    get fetchBodyCount() {
        return this.#body_count;
    }

    set modifyBodyCount(val) {
        this.#body_count = val;
    }
}

let obj2 = new Human2(50, 190);
console.log("new ht: ", obj2.ht);
console.log("body count: ",obj2.fetchBodyCount); // Getter works fine

obj2.modifyBodyCount = 49; // Correct usage of the setter
console.log("new body count: ",obj2.fetchBodyCount); // Output will now reflect the updated value


// default parameters in function

function sayName(myName = "this is default value passing"){
    console.log("My name is", myName);
}
sayName();
sayName("Lucky Kaushik");

function sayName2(fName = "Shivaji", lName = "Maharaj"){
    // Check if the first argument is an empty string
    if (fName.trim() === "") {
        fName = "Shivaji";
    }
    console.log("My name is", fName, lName);
}
sayName2();
sayName2("Lucky", "Kaushik");
sayName2("Lucky");
sayName2( "", "Kaushik");

function passingObject(value = {age:15,wt:40,ht:160}){ // passing object as default value
    console.log("Hello Jii", value);
}
passingObject();
passingObject(null); // null store
passingObject(undefined); //undefined not stored

function passingArray(value2 = ["a","b","c"]){ // passing array as default value
    console.log("Hello Jii", value2);
}
passingArray();
passingArray(null);
passingArray(undefined);

function getAge() {
    return 22;
}

function utility(name = "Shambha ji Maharaj", age = getAge) { // passing funtion as default value
    console.log(name, age);
}

// Pass undefined for 'name' to use its default value
utility();
utility(undefined, 36);
utility("Lucky", );