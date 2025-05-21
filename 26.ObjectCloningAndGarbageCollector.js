// let obj = {
//     name : 'Lucky Kaushik',
//     clg : 'nsut',
//     branch : 'csai',
//     year : 2026
// };
// console.log(obj);

// obj.age = 22; // object is dynamic

// console.log(obj);

// obj.year = 2027;
// console.log(obj);


// OBJECT CLONING --> 1)spread operator,   2)assign method,  3)iteration

let src = {
    name : 'Lucky Kaushik',
    clg : 'nsut',
    branch : 'csai',
    year : 2026
};
// let dest = src; // this is coping >> change in one reflact in other

let dest = {...src}; // this is cloning >> spread operator ...src

console.log("src: ", src);
console.log("dest: ", dest);

src.age = 200;
src.year = 2050;

console.log("src: ", src);
console.log("dest: ", dest);

let student = {
    name : 'Adity Chauhan',
    clg : 'IITD',
    branch : 'cs',
    year : 2030
};

let cloneStudent = Object.assign({},student) // this is cloning >> assign method

console.log("original : ", student);
console.log("cloned : ", cloneStudent);

cloneStudent.age = 25;
cloneStudent.clg = 'IITB';

console.log("original : ", student);
console.log("cloned : ", cloneStudent);



let faculty = {
    name : 'R K Gupta',
    clg : 'IITB',
    branch : 'Mathematics',
    experiance : '12+ year'
};

let cloneFaculty = {};
// cloning using iteration
for(let key in faculty){
    let newKey = key;
    let newValue = faculty[key];
    // insert newKey and value in cloneFaculty and create a clone
    cloneFaculty[newKey] = newValue;
}
console.log("original: ",faculty);
console.log("cloned: ", cloneFaculty);

cloneFaculty.education = "PhD in physics";
cloneFaculty.branch = "Physics";
cloneFaculty.age = "56 years";

console.log("original: ",faculty);
console.log("cloned: ", cloneFaculty);



// GARBAGE COLLECTOR >> Garbage Collector is used for memory management. It automatically identifies and removes objects that are no longer in use, freeing up memory. This reduces memory leaks and ensures efficient use of resources
