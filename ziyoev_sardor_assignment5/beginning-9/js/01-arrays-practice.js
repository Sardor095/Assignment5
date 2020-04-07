//STEP 1
// var Movies = ["Mr & Mrs Smith", "Kill Bill", "James Bond", "Last Samuray", "Star Wars"];

// console.log(Movies[1]);

//STEP 2
// const myMovies = new Array(5);
// myMovies[0] = 'Punisher';
// myMovies[1] = 'Titanic';
// myMovies[2] = '1 + 1';
// myMovies[3] = 'Hard Die';
// myMovies[4] = 'Indiana Johns';
//
// console.log(myMovies[0]);

//STEP 3
// const myMovies = new Array(5);
// myMovies[0] = 'Punisher';
// myMovies[1] = 'Titanic';
// myMovies[2] = '1 + 1';
// myMovies[3] = 'Hard Die';
// myMovies[4] = 'Indiana Johns';
//
// myMovies.push('Prime');
// console.log(myMovies.length);
//STEP 4

// const myMovies = new Array(5);
// myMovies[0] = 'Punisher';
// myMovies[1] = 'Titanic';
// myMovies[2] = '1 + 1';
// myMovies[3] = 'Hard Die';
// myMovies[4] = 'Indiana Johns';

// var remove = myMovies.splice(0,1);

// console.log(myMovies);

//STEP 5

// let i;
// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];

// for (i = 0; i<myMovie.length; i++){
//     console.log(myMovie);
// }

//STEP 6

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];

// for (movie in myMovie){
//     console.log(myMovie[movie]);
// }

//STEP 7

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];
// let andMovies;
// for (andMovies in myMovie){
//     console.log(myMovie.sort()[andMovies]);
// }

//STEP 8

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];
// let leastFavMovies = ['IdonotKnow', 'What is in your mind', 'Friends'];

// console.log('Movies I like: ');

// function iWatch(films) {
//     let i = 1;
//     let film;
//     for (film of films) {
//         console.log(String(i), film);
//         i++;
//     }
//     console.log('');
// }
// iWatch(myMovie);

// console.log('Movies I regret watching: ');

// function didntLike(nots) {
//     let i = 1;
//     let bad;
//     for (bad of nots) {
//         console.log(String(i), bad);
//         i++;
//     }
//     console.log('');
// }
// didntLike(leastFavMovies);


//STEP 9

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];
// let leastFavMovies = ['IdonotKnow', 'What is in your mind', 'Friends'];

// myMovie = myMovie.concat(leastFavMovies);
// myMovie.sort();
// console.log(myMovie.reverse());

//STEP 10

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];

// console.log(myMovie[6]);

//STEP 11

// let myMovie = ['Titanic', 'Hello', 'What happened to you', 'Punisher', '1+1', 'how come', 'Only You'];

// console.log(myMovie[0]);

//STEP 12

//STEP 13

// let employee1 = [];
// let employee2 = [];

// employee1['id'] = 1234;
// employee1['name'] = 'Sanjar';
// employee1['title'] = 'Manager';
// employee1['department'] = 'Sardor.inc';
// employee1['current'] = true;

// employee2['id'] = 11111;
// employee2['name'] = 'Sardor';
// employee2['title'] = 'Boss';
// employee2['department'] = 'Sardor.inc';
// employee2['current'] = true;

// let employee;
// let employees = employee1.concat(employee2);

// for(employee in employees) {
//     console.log(employees[employee])
// }

// console.log(employee2['name']);

//STEP 14


// let employee1 = [];
// let employee2 = [];

// employee1['id'] = 1234;
// employee1['name'] = 'Sanjar';
// employee1['title'] = 'Manager';
// employee1['department'] = 'Sardor.inc';
// employee1['current'] = true;

// employee2['id'] = 11111;
// employee2['name'] = 'Sardor';
// employee2['title'] = 'Boss';
// employee2['department'] = 'Sardor.inc';
// employee2['current'] = true;

// let employee;
// let employees = employee1.concat(employee2);

// for(employee in employees) {
//     console.log(employees[employee])
// }

// console.log(employee1['name'],employee2['name']);

//STEP 15

let employee1 = [];
let employee2 = [];

employee1['id'] = 1234;
employee1['name'] = 'Sanjar';
employee1['title'] = 'Manager';
employee1['department'] = 'Sardor.inc';
employee1['current'] = true;

employee2['id'] = 11111;
employee2['name'] = 'Sardor';
employee2['title'] = 'Boss';
employee2['department'] = 'Sardor.inc';
employee2['current'] = true;

employee3['id'] = 11111;
employee3['name'] = 'Sardor';
employee3['title'] = 'Boss';
employee3['department'] = 'Sardor.inc';
employee3['current'] = true;

let employee;
let employees = employee1.concat(employee2);

for(employee in employees) {
    console.log(employees[employee])
}

console.log(employee1['name'],employee2['name']);


//STEP 16

// var movies;
// movies = [['Avangers', 1], ['Captine America', 2],['Black Widow', 3],['Knives Out', 4], ['Riddick', 5]];
//
// console.log(movies[0]);
//STEP 17

// var employe = ["Zak", " Jessica", " Mark", " Fred", " Sally"];

// function showEmployee() {

//     console.log("Employees: " + employe);
// }
// console.log(showEmployee());

//STEP 18

// function filt(sar) {
//     sar = sar.filter(isEligible);
//     return sar;
// }

// function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//         return value;
//     }
// }

// console.log(filt([58, '', 'abcd', true, null, false, 0]));

//STEP 19

// function any_item(items) {
//     return items[Math.floor(Math.random()*items.length)];
// }

// const items = [134, 356,355,245,90,34,567];
// console.log(any_item(items));

//STEP 20

// const numbers = [1,2,67,78,3,4,5,6,7];

// const largestNumber = (values) => {
//     let highest = 0;
//     for (let i = 0; i < values.length; i+=1) {
//         if (values[i] > highest) {
//             highest = values[i];
//         }
//     }
//     return highest;
// }

// console.log(largestNumber(numbers));
