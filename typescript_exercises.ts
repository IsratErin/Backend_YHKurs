// Union Types
//Exercise 1

type IDType = number | string;
function showID(id: IDType): void {
  console.log("Your ID is: " + id);
}
showID(2);
showID("Two");

//Exercise 2

type Fruit = "apple" | "banana" | "orange";
function eatFruit(fruit: Fruit): void {
  console.log(`You ate an ${fruit}.`);
}
eatFruit("apple");
eatFruit("orange");

//Exercise 3

type Result = true | false;
function printResult(result: Result): void {
  if (result) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
printResult(true);
printResult(false);

//Interfaces and Type Aliases

//Exercise 1

interface Book {
  title: string;
  pages: number;
}

function describeBook(book: Book): void {
  console.log(`The book ${book.title} has ${book.pages} pages.`);
}

const mybook: Book = { title: "Great", pages: 35 };

describeBook({
  title: "Memories",
  pages: 70,
});

describeBook(mybook);

//Exercise 2

interface Teacher {
  name: string;
  subject: string;
}

interface Employee {
  id: number;
  email: string;
}

type SchoolTeacher = Teacher & Employee;

function printTeacherInfo(info: SchoolTeacher): void {
  console.log("Information about the teacher:");
  console.log("Name: " + info.name);
  console.log("Subject: " + info.subject);
  console.log("Id: " + info.id);
  console.log("Email: " + info.email);
}

printTeacherInfo({
  name: "Israt Jahan",
  subject: "Math",
  id: 3,
  email: "isja@gmail.com",
});

//Exercise 3

interface Car {
  brand: string;
  year: number;
}

function printCar(car: Car): void {
  console.log("Information about the Car: ");
  console.log(`Brand: ${car.brand}`);
  console.log(`Year: ${car.year}`);
}

const myCar: Car = {
  brand: "Volvo",
  year: 2020,
};
printCar(myCar);

//Enums

//Exercise 1

enum Color {
  Red,
  Green,
  Blue,
}

const showColor = (color: Color) => {
  console.log("You chose " + Color[color] + ".");
};

showColor(Color.Red);

// Exercise 2

enum PizzaSize {
  Small,
  Medium,
  Large,
}

function orderPizza(pizza: PizzaSize): void {
  console.log(`You ordered a ${PizzaSize[pizza]} pizza.`);
}

orderPizza(PizzaSize.Medium);

//Exercise 3

enum Role {
  Admin,
  User,
  Guest,
}

function printRole(role: Role): void {
  if (role === Role.Admin) {
    console.log("You have full access.");
  } else if (role === Role.User) {
    console.log("You have limited access.");
  } else if (role === Role.Guest) {
    console.log("You have guest access.");
  }
}

printRole(Role.Guest);

//Generics

//Exercise 1

const wrapInArray = <T>(item: T): T[] => {
  return [item];
};

console.log(wrapInArray("cat"));

//Exercise 2

function firstItem<T>(item: T[]): T | undefined {
  return item[0];
}

const items = [1, 2, 3];
console.log(firstItem(items));
console.log(firstItem(["a", "b", "c"]));

// Exercise 3

function swap<T>(item1: T, item2: T): T[] {
  return [item2, item1];
}

console.log(swap("hello", "world"));
