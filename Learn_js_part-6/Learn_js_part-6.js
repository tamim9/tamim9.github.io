class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

myCar = new Car("Ford", 2014);
document.getElementById('clasout1').innerHTML = myCar.name + " " + myCar.year;


document.getElementById('clasout2').innerHTML = "My car is " + myCar.age() + " years old.";


{
    class Car {
        constructor(name, year) {
            this.name = name;
            this.year = year;
        }
        age(x) {
            return x - this.year;
        }
    }
    let date = new Date();
    let year = date.getFullYear();
    let myCar = new Car("Ford", 2014);
    document.getElementById('clasout3').innerHTML = "My car is " + myCar.age(year) + " years old.";
}


{
    let a = 5;
    let b = 6;
    let c = a + b;
    console.log("5 + 6 is equal to " + c);
}

{
    let x = 15 * 5;
    debugger;
    document.getElementById('debugout').innerHTML = x;
}


{
    var obj;
    obj = document.getElementById("speedup1");
    obj.innerHTML = "Hello";
}

{
    let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

    obj = JSON.parse(text);
    document.getElementById('jsonout').innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;
}