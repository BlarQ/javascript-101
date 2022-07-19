const ntells = "50years"
document.write(ntells)


// Assignment 
// 1
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise


let dateFunction = () => {
    let date = {
        date1: '2002-12-12',
        date2: '23-03-22',
    }
    if (date.date1 === date.date2) { console.log(true)
        
    } else { console.log(false)
        
    }
    
};

console.log(dateFunction())



// 2. 
// Write a function that takes two date 
// It should return true if they fall on the exact same day
// It should return false otherwise

const date1 = new Date('2022-06-19');
const date2 = new Date('2022-06-19');

if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
) {
    console.log(true)
} else {
    console.log(false)
}


// 3.
// Write a function that takes an object 
// It should return an object with all original object properties
// except for the property with key that is deleted

//1.
let laptopFunction = () => {
    let laptop = {
        keyboard: true,
        mouse: true,
        screen: true,
        charger: true,
        battery: "100%",
        webcam: "faultty",
        Ram: "4GRAM",
        ROM: 500,
        CD_ROM: false,
    }

    delete laptop.CD_ROM, delete laptop.ROM;

    return Object.keys(laptop)
    
};

console.log(laptopFunction());



//2.
function carFunction() {
    let car = {
        color: "red",
        tyre: "four",
    };

    delete car.color;

    return Object.keys(car);
};

console.log(carFunction())