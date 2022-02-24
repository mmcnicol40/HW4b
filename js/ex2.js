console.log(" HW 4 ex 2 - Modeling a Circle");

const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here

const circle = {
 radius: 0,
 circumference: 0,
 area: 0,
 diameter: 0,

 //return the character desc
 describe() {
   return `${this.radius} has ${this.circumference} and ${this.area}`;
 }
}
circle.radius = r;
circle.circumference = 2 * Math.PI * circle.radius;
circle.area = circle.radius * circle.radius * Math.PI;
circle.diameter = circle.radius * 2;

console.log(`Its radius is ${circle.radius}`);
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
console.log(`Its area is ${circle.diameter}`);


