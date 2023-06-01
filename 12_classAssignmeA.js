

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
    constructor(name, students , departments,grade){
        this.name = name;
        this.students = students ;
        this.departments = departments;
        this.grade = grade;
    }
    traverseObject(){
        console.log(`Details of vehicle is: ${this.name}, ${this.students }, ${this.departments}, ${this.grade} `);

    }
}
const dysp = new College("DYSP", 450, 5, "A+");
const sp = new College("SP", 700, 4, "A" );
const jspm = new College("JSPM", 800, 5, "A+");
const icoer = new College("ICOER",670, 3, "A");


 
dysp.traverseObject();
sp.traverseObject();
jspm .traverseObject();
icoer.traverseObject();

for (const key in person) { // key = "height"
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        console.log(`${key}, ${value}`);
    }
}