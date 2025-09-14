// interface Container<T> {
//   items: T[];
//   addItem(item: T): void;
//   getItem(index: number): T;
// }

// const numberContainer: Container<number> = {
//   items: [1, 2, 3],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItem(index) {
//     return this.items[index];
//   },
// };

// const stringContainer: Container<string> = {
//   items: ["1", "2", "3"],
//   addItem(item) {
//     this.items.push(item);
//   },
//   getItem(index) {
//     return this.items[index];
//   },
// };

// numberContainer.addItem(7);
// stringContainer.addItem("Hello");

// function getLastElement<T>(items: T[]): T {
//   return items[items.length - 1];
// }

// console.log(getLastElement(numberContainer.items));
// console.log(getLastElement(stringContainer.items));

// Створи інтерфейс Pair<T>, який описує пару значень одного типу:
// поле first — перше значення типу T
// поле second — друге значення типу T

// Створи дві змінні:
// numberPair, яка зберігає два числа
// stringPair, яка зберігає два рядки

// Напиши функцію swap<T>(pair: Pair<T>): Pair<T>, яка міняє місцями first і second.
// 🔹 Підказка
// Тут теж використовується дженерик <T>, але все набагато простіше, бо без методів.

// Функція swap буде приймати Pair<T> і повертати новий Pair<T>.

// interface Pair<T> {
//   first: T;
//   second: T;
// }

// const numberPair: Pair<number> = {
//   first: 10,
//   second: 20,
// };

// const stringPair: Pair<string> = {
//   first: "first",
//   second: "second",
// };

// function swap<T>(pair: Pair<T>): Pair<T> {
//   return { first: pair.second, second: pair.first };
// }

// const swappedNumber = swap(numberPair);
// console.log(swappedNumber);

// const swappedString = swap(stringPair);
// console.log(swappedString);

// 🔹 Завдання: Масив пар

// Створи тип Pair<T> як у попередній задачі (два значення одного типу).

// Створи функцію getFirstElements<T>(pairs: Pair<T>[]): T[], яка з масиву пар повертає масив перших елементів кожної пари.

// Створи функцію getSecondElements<T>(pairs: Pair<T>[]): T[], яка повертає масив других елементів кожної пари.

// Перевір роботу на:

// interface Pair<T> {
//   first: T;
//   second: T;
// }

// function getFirstElements<T>(pairs: Pair<T>[]): T[] {
//   return pairs.map((pair) => pair.first);
// }

// const numberPairs: Pair<number>[] = [
//   { first: 1, second: 2 },
//   { first: 3, second: 4 },
//   { first: 5, second: 6 },
// ];

// const stringPairs: Pair<string>[] = [
//   { first: "a", second: "b" },
//   { first: "c", second: "d" },
// ];

// console.log(getFirstElements(numberPairs));
// console.log(getFirstElements(stringPairs));
