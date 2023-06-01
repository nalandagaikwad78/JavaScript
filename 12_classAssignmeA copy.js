

console.log("--------------------Vehicle Details--------------------------------------");
class Vehicle {
    constructor(color, price, engine,engineOutput){
        this.color = color;
        this.price = price;
        this.engine = engine;
        this.engineOutput = engineOutput;
    }
    showDetails(){
        console.log(`Details of vehicle is: ${this.color}, ${this.price}, ${this.engine}, ${this.engineOutput} `);

    }
}
const coupe = new Vehicle("Red", "94L", "6 Cylinder 24 Valve", "2.2 Lit 175 PS");
const sedan = new Vehicle("Black", "6.30L", " Inline Six", "2.2 Lit 185 PS" );
const suv = new Vehicle("Gray", "10L", "XUV700", "2 Lit 150 PS");
const maruti = new Vehicle("Blue", "9L", "K15C", "2 Lit 174 PS");
const bmw = new Vehicle("White", "71-73L", "Inline Four", "2.2 Lit 170 PS");

coupe.showDetails(); 
sedan.showDetails();
suv.showDetails();
maruti.showDetails();
bmw.showDetails();

console.log("--------------------College Details--------------------------------------");

class College {
    constructor(collegeName, students , departments,grade){
        this.collegeName = collegeName;
        this.students = students ;
        this.departments = departments;
        this.grade = grade;
    }
}


const c1 = new College("DYSP", 450, 5, "A+");
const c2 = new College("SP", 700, 4, "A" );
const c3 = new College("JSPM", 800, 5, "A+");
const c4 = new College("ICOER",670, 3, "A");


traverse(c1);
console.log("----------------------------------------------");
traverse(c2);
console.log("----------------------------------------------");
traverse(c3);
console.log("----------------------------------------------");
traverse(c4);


function traverse( collegeObject){
    for (const key in collegeObject) { // key = "height"
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const value = collegeObject[key];
            console.log(`${key}: ${value}`);
        }
    }
}





 
