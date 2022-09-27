//Movie Class Task

class Movie{
    constructor(_title,_studio,_rating = "PG"){
        this.title=_title;
        this.studio=_studio;
        this.rating =_rating;
    }

}


let m1 = new Movie("Pushpa","Thenandal Films", "PG13");
let m2 = new Movie("Okadu","Thenandal Films", "PG");
let m3 = new Movie("Muthalvan","Thenandal Films");
let m4 = new Movie("Casino Royale","Eon Productions", "PG13");


console.log(`m1 is`, m1);
console.log("m3 is (with default rating) ", m3);


let arrayMovies = [m1,m2,m3,m4];

console.log(arrayMovies);

let arrayMoviesWithPG = arrayMovies.filter((m)=>m.rating === "PG");

console.log(arrayMoviesWithPG);


//Circle class Task

class Circle{
    constructor(_radius,_color){
        this.radius = _radius;
        this.color=_color;

    }

    get Area(){
        return Math.PI *this.radius*this.radius;
    }

    get Circumference(){
        return Math.PI*2*this.radius;
    }
}

let circleobj = new Circle(1.0, "red");

console.log(`Area of the Circle is ${circleobj.Area.toFixed(2) } sqm
and Circumference is ${circleobj.Circumference.toFixed(2)} m`);

//Write a “person” class to hold all the details.

class Person{
    constructor(_x,_y,_z){
        this.name = _x;
        this.dob=_y;
        this.age=_z;
    }
}

let student1= new Person("Sivaraj", "13th May 1997", 25);

console.log("the Person Class-Object student1 is", student1);


//write a class to calculate the uber price.

class Uber_class{
    constructor(_a,_b,_c){
        this.name=_a;
        this.mobile=_b;
        this.kms=_c;
        }

    get price(){
        return this.kms * 20;
    }
}



let p1=new Uber_class("Siva", 9500852762, 87);

console.log(`${p1.name} has travelled ${p1.kms} Kms and the fare is Rs.${p1.price}`);









