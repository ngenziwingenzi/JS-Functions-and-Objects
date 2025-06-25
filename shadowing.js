//Demonstration of variable shadowing 
let name = "Alice";

function greet() {
    let name = "Bob"; // This 'name' shadows the outer 'name'
    console.log("Hello, " + name); // Outputs: Hello, Bob
}
greet();
console.log("Outside: " + name); // Outputs: Outside: Alice
