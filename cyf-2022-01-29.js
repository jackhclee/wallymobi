let person3 = {
    name: "Alice",
    friends: ["John", "Nina"],
    newFriend: function(friend) {
       this.friends.push(friend)
    }
  };

  console.log(person3)
  person3.newFriend("Jack")
  console.log(person3.friends)//.forEach(f => console.log(f))

  let coffeeMachine = {
    brand: "Super Coffee",
    prices: {
      cappuccino: 2.4,
      blackCoffee: 1.5,
      flatWhite: 3.0,
    },
    insertedAmount: 0,
    insertMoney: function (amount) {
        this.insertedAmount = amount
    },
    getCoffee: function (coffeeType) {
        if (this.insertedAmount >= this.prices[coffeeType]) {
            this.insertedAmount = this.insertedAmount - this.prices[coffeeType]
            return coffeeType
        }
        return this.insertedAmount
    },
  };

coffeeMachine.insertMoney(2.4);
console.log(`Expected result: 'Please take your cappuccino'. Actual result: ${coffeeMachine.getCoffee("cappuccino")}`);
coffeeMachine.insertMoney(1.5);
console.log(`Expected result: 'Please take your blackCoffee'. Actual result: ${coffeeMachine.getCoffee("blackCoffee")}`);
coffeeMachine.insertMoney(4.0);
console.log(`Expected result: 'Please take your flatWhite'. Actual result: ${coffeeMachine.getCoffee("flatWhite")}`);
coffeeMachine.insertMoney(2.4);
console.log(`Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: ${coffeeMachine.getCoffee("flatWhite")}`);

// Exercise 5
// Define an array containing the 3 people defined below.
// Return an array of the people's names (hint: use map).
// Filter the people to return an array with the person younger than 28 years old (hint: use filter).
// let person1 = {
//   name: "Alice",
//   age: 25,
// };
// let person2 = {
//   name: "Bob",
//   age: 30,
// };
// let person3 = {
//   name: "John",
//   age: 20,
// };
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/
// let people = // Complete here
// let peoplesNames = // Complete here
// let peopleYoungerThan28YearsOld = // Complete here
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
// console.log("Array defined with 3 people -> ", people[0] === person1 && people[1] === person2 && people[2] === person3 ? "Passed :)" : "Not yet :(");
// console.log("Array containing the person names -> ", peoplesNames[0] === "Alice" && peoplesNames[1] === "Bob" && peoplesNames[2] === "John" ? "Passed :)" : "Not yet :(");
// console.log("Array containing the people younger than 28 years old -> ", peopleYoungerThan28YearsOld[0] === person1 && peopleYoungerThan28YearsOld[1] === person3 ? "Passed :)" : "Not yet :(");
// Exercise 6
// An array of travel destinations is defined below. Each destination has a name, a distance from Glasgow, and a list of transportations available to go there.
// Filter the travelDestinations array to return all destination names reachable within 500 kms.
// Find a destination name reachable by ferry.
// Print in the console all the destination names more than 300 kms far away and reachable by train.
let destination1 = {
  destinationName: "Edinburgh",
  distanceKms: 80,
  transportations: ["car", "bus", "train"],
};
let destination2 = {
  destinationName: "London",
  distanceKms: 650,
  transportations: ["car", "bus", "train"],
};
let destination3 = {
  destinationName: "Paris",
  distanceKms: 900,
  transportations: ["train", "plane"],
};
let destination4 = {
  destinationName: "Dublin",
  distanceKms: 350,
  transportations: ["plane", "ferry"],
};
let travelDestinations = [
  destination1,
  destination2,
  destination3,
  destination4,
];
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

console.log("Exercise 6")
let destinationNamesWithin500Kms = 
    travelDestinations.filter( d => d.distanceKms <= 500).map(d => d.destinationName)// Complete here

let destinationNameReachableByFerry = 
    travelDestinations.filter( d => d.transportations.includes("ferry")).map(d => d.destinationName)

let destinationNamesMoreThan300KmsAwayByTrain = // Complete here (PRINT THE RESULT IN THE CONSOLE USING FOREACH)
    travelDestinations.filter( d => d.transportations.includes("train") && d.distanceKms > 300).map(d => d.destinationName)// Complete here

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(`Expected result: Edinburgh,Dublin, actual result: ${destinationNamesWithin500Kms}`);
console.log(`Expected result: Dublin, actual result: ${destinationNameReachableByFerry}`);
console.log(`Expected result: London,Paris, actual result: ${destinationNamesMoreThan300KmsAwayByTrain}`);


console.log("Exercise 7")
// Exercise 7
// Below are some restaurants in Glasgow. Each restaurant has a name, the number of total seats, the number of customers in the restaurant at the moment and the menu with prices.
// We want to build an object to simulate a Restaurant Finder application (see below restaurantFinderApplication).
// Define a method findAvailableRestaurants which takes a number of people as a parameter and returns all the restaurant names which have the required number of seats available at the moment.
// Define a method findRestaurantServingDish which takes a dish name as a parameter and returns all the restaurant names serving this dish.
// Define a method countNumberOfRestaurantsInArea which takes an area of Glasgow as a parameter (center, west), and returns the number of restaurants in this area.
let restaurant1 = {
  name: "Paesano",
  totalSeats: 10,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["pizza", "calzone", "salad"],
};
let restaurant2 = {
  name: "Ubiquitous Chip",
  totalSeats: 20,
  numberOfCustomers: 10,
  address: {
    city: "Glasgow",
    area: "west",
  },
  menu: ["salad", "chocolate cake", "roast lamb"],
};
let restaurant3 = {
  name: "Monkeyz",
  totalSeats: 15,
  numberOfCustomers: 8,
  address: {
    city: "Glasgow",
    area: "center",
  },
  menu: ["stew", "chocolate cake", "panini"],
};
let restaurants = [restaurant1, restaurant2, restaurant3];
/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/
let restaurantFinderApplication = {
  applicationName: "Restaurant Finder",
  applicationVersion: "1.0",
  restaurants: restaurants,
  findAvailableRestaurants: function (numberOfPeople) {
    return this.restaurants
    .filter(r => (r.totalSeats - r.numberOfCustomers) >= numberOfPeople)
    .map(r => r.name)
  },
  findRestaurantServingDish: function (dishName) {
    return this.restaurants.filter(r => r.menu.includes(dishName)).map(r => r.name)
  },
  countNumberOfRestaurantsInArea: function (area) {
    return this.restaurants.filter(r => r.address.area === area).map(r => r.name).length
  },
};
/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/
let restaurantsAvailableFor5People = restaurantFinderApplication.findAvailableRestaurants(5);
console.log(`Find available restaurants for 5 people: Expected result: Ubiquitous Chip,Monkeyz, actual result: ${restaurantsAvailableFor5People}`);
let restaurantsServingSalad = restaurantFinderApplication.findRestaurantServingDish("salad");
console.log(`Find restaurants serving salad: Expected result: Paesano,Ubiquitous Chip, actual result: ${restaurantsServingSalad}`);
let numberOfRestaurantsInCityCentre = restaurantFinderApplication.countNumberOfRestaurantsInArea("center");
console.log(`Number of restaurants in city centre: Expected result: 2, actual result: ${numberOfRestaurantsInCityCentre}`);

// Return the keys and values of the following object
let capitalCities = {
  scotland: "Edinburgh",
  kenya: "Nairobi",
  australia: "Canberra",
  canada: "Ottawa",
};
let highScores = {
  55: "Alistair",
  100: "David",
  89: "Hannah",
  34: ["Sergi", "Frank"],
};
// ONLY EDIT BELOW HERE
let capitalCitiesKeys = Object.keys(capitalCities);
let highScoresKeys = Object.keys(highScores);
let capitalCitiesValues = Object.values(capitalCities);
let highScoresValues =  Object.values(highScores)//.vaklues();
// ONLY EDIT ABOVE HERE
console.log(capitalCitiesKeys);
// prints [ 'scotland', 'kenya', 'australia', 'canada' ]
console.log(highScoresKeys);
// prints ['34, '55', '89', '100']
console.log(capitalCitiesValues);
// prints [ 'Edinburgh', 'Nairobi', 'Canberra', 'Ottawa' ]
console.log(highScoresValues);
// prints [[ 'Sergi', 'Frank' ], 'Alistair, 'David', 'Hannah']
// Exercise 9
// You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. 
// You want to return an array of mentors with the names in uppercase.
let mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30,
};
// ONLY EDIT BELOW THIS LINE
let mentorsNames = Object.keys(mentorsAges) ;
let mentorsNamedUppercased = mentorsNames.map(name => name.toUpperCase());
// ONLY EDIT ABOVE THIS LINE
console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]
// Exercise 10
// Objects very often contain other objects. This exercise will give you practice in getting
// the keys of objects inside other objects.
// Use the provided console.log statements below and follow the instructions above them.
let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },
  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
};
// ONLY EDIT BELOW THIS LINE
// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(Object.keys(storeBranches));
// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow))//.keys());
// # 3
// prints [ 'head_intern', 'intern' ]
console.log(Object.keys(storeBranches.edinburgh.interns))//keys());
// ONLY EDIT ABOVE THIS LINE

// Exercise 11
// You are given an object of trainee names and grades. 
// Loop through all the trainees' grades and console log the name and grade of the ones with grade higher than 18.
// Try to solve this once using for…in and then again using Object.keys().

console.log('Exercise 11')

const traineeGrades = {
  tom: 20,
  maria: 17,
  abdul: 19,
  samira: 20,
};
// Prints
// TOM - 20
// ABDUL - 19
// SAMIRA - 20

for (key in traineeGrades) {
    if (traineeGrades[key] > 18) {
        console.log(`${key.toUpperCase()} - ${traineeGrades[key]}`)
    }
}

let keys = Object.keys(traineeGrades)

keys.forEach(
    key => { 
        if (traineeGrades[key] > 18) { 
            console.log(`${key.toUpperCase()} - ${traineeGrades[key]}`)
        }
    }
);





