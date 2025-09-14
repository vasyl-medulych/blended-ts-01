// Завдання 2

// Виконуйте це завдання у файлі src/basic/2.ts.
// У вас є наступний JavaScript масив:
// let person = ['Max', 21];
// Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?

let person: [string, number] = ["Max", 21];
console.log(person);

// Завдання 3
// Виконуйте це завдання у файлі src/basic/3.ts.
// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

const a: number | string = 5;
const b: "enable" | "disable" = "enable";

console.log(a, b);

// Завдання 4
// Виконуйте це завдання у файлі src/basic/4.ts.
// У вас є такі функції JavaScript:
// Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

function showMessage(message: string): void {
  console.log(message);
}
function calc(num1: number, num2: number): number {
  return num1 + num2;
}
function customError(): never {
  throw new Error("Error");
}

// Завдання 5
// Виконуйте це завдання у файлі src/basic/5.ts.
// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day == DayOfWeek.Saturday || day == DayOfWeek.Sunday) {
    return true;
  } else return false;
};

console.log(isWeekend(DayOfWeek.Monday));

// Завдання 6
// Виконуйте це завдання у файлі src/basic/6.ts.
// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості. Зверніть увагу, що адреса є необов'язковою властивістю.

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

interface Address {
  city: string;
  country: string;
}

const mango: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};

console.log(mango, poly);

// Завдання 7
// Виконуйте це завдання у файлі src/basic/7.ts.
// У вас є два об'єкти:
// Створіть новий тип даних, який підходить для цих двох об'єктів.

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: { createAt: Date; updateAt: Date };
};

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log(page1, page2);

// Завдання 1
// Виконуйте це завдання у файлі src/generics/1.ts.
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics для типізації повернутих даних.

import axios from "axios";

async function fetchData(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
