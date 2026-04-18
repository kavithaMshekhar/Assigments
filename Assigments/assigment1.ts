// 1.Temperature of a city in degrees Celsius: 25.5
let temperature : number = 25.5;
console. log (`Temperature of a city in degrees Celsius:${temperature} c`);

// 2.Whether a customer has placed an order: true or false
function customerPlacedanOrder(orderPlaced: boolean) : string {
    if (orderPlaced) {
        return "customer has placed an order.";
    } else { 
        return "customer has not placed an order.";
    }
}

console.log(customerPlacedanOrder(true));
console.log(customerPlacedanOrder(false));

const hasOrder =  true;
console.log(hasOrder ? "customer has placed an order" : "customer has not placed an order");

// 3.Person's phone number: "123-456-7890"
let phoneNumber : string ='"123-456-7890" ';
console. log("Person's phone number ="+phoneNumber+"");

interface personInfo {
    personName : string ;
    personPhoneNumber : string;
}
let person : personInfo ={
    personName : "suma", 
    personPhoneNumber : "123-456-7890"
}
console.log(person.personPhoneNumber);

//4.Amount of money in a customer's bank account: 1000.50
let money : number = 1000.50;
console.log (`Amount of money in a customer's bank account:${money}`);

//5.Person's email address: "john.doe@example.com"
const emailAddress : string = '"john.doe@example.com" ';
console.log ("Person's email address = "+emailAddress+"");

// 6.Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let latitude : number = 37.7749;
let longitude : number = -122.4194;
console.log (`Coordinates of a location latitude:${latitude}`);
console.log (`Coordinates of a location longitude:${longitude}`);

// 7.Person's marital status: true or false
 let status1 : string = "person married";
 let status2 : string = "person not married";
console.log(status1);
console.log(status2);

//8.Person's occupation: "Software Engineer"
let personOccupation : string ='"Software Engineer" ';
console.log("Person's occupation = "+personOccupation+"");

// 9.Person's favourite colour: "Blue"
let personfavouritecolour : string = '"Blue" ';
console.log("Person's favourite colour= "+personfavouritecolour+"");

// 10. Current year: 2023
let oldYear: number = 2023;
console.log("Current Year="+oldYear+" ");


let currentDate = new Date ();
console.log(currentDate);
console.log(currentDate.getFullYear);

//11.Number of followers on a social media platform: 1,000,000
let mediafollowers : string = "1,000,000";
console.log("Number of followers on a social media platform = "+mediafollowers+" ");

// 12.Rating of a movie: 7.5
let newMovie : number = 7.5;
console.log("Rating of a movie="+newMovie+" ");

//13.Person's blood type: 'A'
let bloodGroup : string = " 'A'";
console.log("Person's blood type="+ bloodGroup+"");

//14.Title of a book: "To Kill a Mockingbird"
const bookTitle:string = '"To Kill a Mockingbird" ';
console.log("Title of a book="+bookTitle+"");

//15.Number of employees in a company: 500
let companyEmp : number = 500;
console.log ("Number of employees in a company="+companyEmp+" ");

//16.Time of an event: 2:30 PM
let eventTime : string = "2:30 PM";
console.log("Time of an event="+eventTime+"");

//17.Name of a country: "United States"
const countryName:string = '"United States" ';
console.log("Name of a country="+countryName+"");

//18.Person's eye color: "Brown"
const eyeColour:string = '"Brown" ';
console.log("Person's eye color="+eyeColour+"");

//19.Person's birthplace: "New York City"
const birthPlace:string = '"New York City" ';
console.log("Person's birthplace="+birthPlace+"");


//20. Distance between two cities: 200.5
let cityDistance : number = 200.5;
console.log ("Distance between two cities = "+cityDistance+"");
