// Objects >> colection of key value pair 

// stack and heap memory are there stores different content >> stack memory store object reference and main content is stored in heap memory, object refers to main contents
let obj = {
    "Name" : "Lucky",
    "age" : "22yrs",
    weight : "58kg",
    height : "5ft 5inch",

    Greet: function(){
        console.log("hello jee keise ho saare");
    }
};
console.log(obj);
obj.Greet();

console.log(typeof(obj));

let obj2 = obj1; // it is a shalow copy main content is same in heap but reference is obj2 and obj