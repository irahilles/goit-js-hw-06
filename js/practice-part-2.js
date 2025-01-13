
// Клас Calculator: Реалізуйте клас Calculator, який матиме методи для
// Основні математичні операції: add, subtract, multiply, і divide. Кожен
// метод прийматиме два числа і повертатиме результат відповідної операції.
// class Calculator {
//     constructor(a,b){
//       a = this.a;
//       b = this.b;
//     }
//     add(a,b){
//         return a + b;
//     }
//     substract(a,b){
//         return a - b;
//     }
//     multiply(a,b){
//         return a * b;
//     }
//     divide(a,b){
//         return a/b;
//     }
// }
// const calc = new Calculator();
// console.log(calc.add(2,3));
// console.log(calc.substract(2,3));
// console.log(calc.multiply(2,3));
// console.log(calc.divide(2,3));

// Клас ContactBook: Створіть клас Contact для подання контакту з полями name, email та phone. Потім реалізуйте клас ContactBook, який зберігатиме список контактів та надавати методи для додавання, видалення та пошуку контактів.

// class Contact {
//     constructor(name, email, phone){
//         this.name = name,
//         this.email = email;
//         this.phone = phone;
//     }
// }
// class ContactBook {
//     constructor(){
//         this.contacts = [];
//     }

//     addContact(name,email,phone){
// const contact = new Contact(name, email, phone);
// this.contacts.push(contact);
// console.log(`Контакт "${name}" додано.`);
//     }
//     deleteContact(name){
//         const index = this.contacts.findIndex(contact=>contact.name.toLowerCase() === name.toLowerCase());
//         this.contacts.splice(index,1);
//         console.log(`Contact ${name} was deleted`);
//     }
//     searchContact(name){
//         const result = this.contacts.filter(contact => contact.name.toLowerCase().includes(name.toLowerCase()));
//         if(result.length>0){
//             console.log('Following contacts are found:');
//             result.forEach(contact=>console.log(contact));
//     }else{console.log(`Контакт з ім'ям "${name}" не знайдено.`);}
//     }
// }
// const add = new ContactBook();
// add.addContact('Iryna', 'irapart@gmail.com', +971544937763);
// add.addContact('Petro', 'ahmed.hi@gmail.com',+975632145);
// add.deleteContact('Petro');
// add.searchContact('iryna');

// Клас Rectangle: Напишіть клас Rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Конструктор клас повинен приймати довжини двох сторін.
// class Rectangle {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     calcS(){
// return this.x*this.y;
//     }
//     calcP(){
// return 2*(this.x+this.y);
//     }
// }
// const rect1 = new Rectangle();
// console.log(rect1.calcS(4,2));
// console.log(rect1.calcP(4,2));
// console.log(rect1.calcS(8,3));
// console.log(rect1.calcP(8,3));

// Клас ToDoList: Створіть клас Task для представлення задач з полями title, description та completed. Потім реалізуйте клас ToDoList, який зберігатиме список задач та методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// class Task{
//     constructor(title, description, due_date, priority){
//         this.title = title;
//         this.description = description;
//         this.due_date = due_date;
//         this.priority = priority;
//     }
// }
// class ToDoList {
//     constructor(){
//         this.tasks = [];
//     }
// add_task(task){
// if(task.title&&task.description&&task.due_date&&task.priority){
//     this.tasks.push(task);
//     console.log(`Task ${task.title} successfully added`)
// }else{
//     console.log("Invalid task. Please provide all required properties.");
// }
//     }
// remove_task(task_title){
// const index = this.tasks.findIndex(task => task.title === task_title);
// if(index === -1){console.log(`Task with title "${task_title}" not found.`)}else{
//     const removedTask = this.tasks.splice(index, 1)[0];
//     console.log(`Task ${removedTask.title} successfully removed`);
// }
// }
// get_task(task_title){
// const founTask = this.tasks.find(task=>task.title === task_title);
// console.log(`The task ${task_title} is found`);
// }
// get_all_tasks(){
// if(this.tasks.length === 0){
//     console.log('There are no tasks found');
// }else{console.log('Tasks list:');
//    this.tasks.forEach(task=>{console.log(`Task: ${task.title}, Description: ${task.description}, Due Date: ${task.due_date}, Priority: ${task.priority}`);});
// }
// }
// get_tasks_by_priority(priority){
// const tasksByPriority = this.tasks.filter(task => task.priority === priority);
// if(tasksByPriority.length === 0){
//     console.log(`No tasks with priority "${priority}" found.`);
// }else{console.log('Tasks by priority list:');
//    tasksByPriority.forEach(task=>{console.log(`Task: ${task.title}, Description: ${task.description}, Due Date: ${task.due_date}, Priority: ${task.priority}`);});
// }
// }
// get_tasks_by_due_date(date){
//     const filteredTasks = this.tasks.filter(task => task.due_date === date);
//     if(filteredTasks.length === 0){
//         console.log(`No tasks with due "${date}" was found.`);
//     }else{console.log(`Task due on ${date}`);
//        filteredTasks.forEach(task=>{console.log(`${task.title}, Description: ${task.description}, Priority: ${task.priority}`);});
//     }
// }
// }

// const task1 = new Task(
//   'Підготувати презентацію',
//   'Підготувати матеріали та слайди для презентації',
//   '2023-09-01',
//   3,
// );
// const task2 = new Task(
//   'Зробити покупки',
//   'Купити продукти для приготування обіду',
//   '2023-08-25',
//   2,
// );
// const task3 = new Task(
//   'Записати відеоурок',
//   'Записати урок з програмування',
//   '2023-08-28',
//   4,
// );

// const toDoList = new ToDoList();

// toDoList.add_task(task1);
// toDoList.add_task(task2);
// toDoList.add_task(task3);

// toDoList.get_all_tasks();

// toDoList.remove_task('Підготувати презентацію');

// toDoList.get_all_tasks();
// toDoList.get_task('Записати відеоурок');
// toDoList.get_tasks_by_priority(2);
// toDoList.get_tasks_by_due_date('2023-08-28');

// Клас LibraryCatalog: Створіть клас Book для представлення книги з полями title, author та ISBN. Потім реалізуйте клас LibraryCatalog, який буде зберігати список книг у бібліотеці та надавати методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// class Book {
//     constructor(title, author, ISBN) {
//         this.title = title;
//         this.ISBN = ISBN;
//         this.author = author;
//     }
// }

// class LibraryCatalog {
//     constructor() {
//         this.books = [];
//     }

   
//     addBook(book) {
//         if (book.title && book.author && book.ISBN) {
//             this.books.push(book);
//             console.log(`Book '${book.title}' is successfully added.`);
//         } else {
//             console.log("Invalid book. Please provide all required properties.");
//         }
//     }

 
//     searchByAuthor(author) {
//         const booksByAuthor = this.books.filter(book => book.author === author);
//         if (booksByAuthor.length === 0) {
//             console.log(`No books found by author "${author}".`);
//         } else {
//             console.log(`Books by author "${author}":`);
//             booksByAuthor.forEach(book => {
//                 console.log(`- Title: ${book.title}, ISBN: ${book.ISBN}`);
//             });
//         }
//     }

 
//     searchByISBN(ISBN) {
//         const bookByISBN = this.books.find(book => book.ISBN === ISBN);
//         if (bookByISBN) {
//             console.log(`Book with ISBN "${ISBN}": Title: ${bookByISBN.title}, Author: ${bookByISBN.author}`);
//         } else {
//             console.log(`No book found with ISBN "${ISBN}".`);
//         }
//     }

   
//     listBooks() {
//         if (this.books.length === 0) {
//             console.log("The library catalog is empty.");
//         } else {
//             console.log("Library Catalog:");
//             this.books.forEach(book => {
//                 console.log(`- Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`);
//             });
//         }
//     }
// }


// const book1 = new Book('Barista', 'John Smith', '32015');
// const book2 = new Book('Tamara', 'Ivan Franko', '85641');
// const book3 = new Book('Secrets Of The Millionaire Mind', 'John Karry', '32054');


// const library = new LibraryCatalog();
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);


// library.listBooks(); 
// library.searchByAuthor('Ivan Franko'); 
// library.searchByISBN('32015'); 
// library.searchByAuthor('Unknown Author'); 



// Клас BankAccount: Реалізуйте клас BankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів.
// Ви розробляєте систему управління банківськими рахунками. Вам потрібно створити клас BankAccount для подання банківського рахунку з різними властивостями та функціональністю.

// Створіть клас BankAccount з приватною статичною властивістю bankName, яке зберігатиме ім'я банку за умовчанням.

// Додайте приватні властивості accountNumber, balance та ownerName, які зберігатимуть номер рахунку, баланс та ім'я власника.

// Створіть геттери та сеттери для властивостей balance та ownerName. Геттер для балансу має форматувати його як грошову суму.

// Додайте статичний метод setBankName(bankName), який дозволить змінити ім'я банку за промовчанням всім рахунків.

// Реалізуйте метод deposit(amount), який збільшуватиме баланс рахунку на зазначену суму.

// Реалізуйте метод withdraw(amount), який зменшуватиме баланс рахунку на зазначену суму, але якщо на рахунку достатньо коштів.

// Приклад:
// Створюємо банківський рахунок
// const account = new BankAccount('12345', 1000, 'John Doe');

// console.log(account.getAccountInfo());

// account.deposit(500);
// console.log(account.getAccountInfo());

// account.withdraw(200);
// console.log(account.getAccountInfo());

// account.balance = 1500;
// console.log(account.getAccountInfo());

// account.ownerName = 'Jane Smith';
// console.log(account.getAccountInfo());

// BankAccount.setBankName('NewBank');
// console.log(account.getAccountInfo());
// У цій задачі використовуються статичні властивості, приватні властивості, гетери та сеттери, щоб створити клас BankAccount, який представляє банківський рахунок з функціональністю для внесення депозитів, зняття коштів, зміни імені власника та виведення інформації про рахунок.




// Завдання для класу FriendList: Управління списком друзів

// Ви розробляєте програму для керування списком друзів користувачів. Вам потрібно створити клас Friend для подання інформації про друга з полями:

// name (ім'я друга)
// age (вік друга)
// email (електронна пошта друга)
// isBestFriend (прапор, що вказує, чи є один найкращим другом)

// Потім створіть клас FriendList, який представлятиме список друзів користувача. Клас повинен мати такі методи:
// addFriend(friend: Friend): Додає переданого друга до списку друзів.
// removeFriend(email: string): Видаляє друга електронною поштою.
// getFriendByEmail(email: string): Повертає інформацію про друга щодо нього електронній пошті.
// getBestFriends(): Повертає список усіх найкращих друзів.
// getFriendsByAge(age: number): Повертає список друзів певного віку

// Приклад використання:
// Створюємо об'єкти Friend
// const friend1 = new Friend("John", 25, "john@example.com", true);
// const friend2 = new Friend("Jane", 30, "jane@example.com", false);
// const friend3 = new Friend("Michael", 28, "michael@example.com", true);
// // Створюємо об'єкт FriendList
// const myFriendList = новий FriendList();
// // Додаємо друзів до списку
// myFriendList.addFriend(friend1);
// myFriendList.addFriend(friend2);
// myFriendList.addFriend(friend3);
// // Видаляємо друга електронною поштою
// myFriendList.removeFriend("jane@example.com");
// // Отримуємо інформацію про друга електронною поштою
// const foundFriend = myFriendList.getFriendByEmail("john@example.com");
// // Отримуємо список найкращих друзів
// const bestFriends = myFriendList.getBestFriends();
// // Отримуємо список друзів певного віку
// const friendsWithAge28 = myFriendList.getFriendsByAge(28);
// Завдання полягає в реалізації класу FriendList з методами, які дозволяють керувати списком друзів, додавати та видаляти друзів, а також виконувати пошук та фільтрацію друзів за різними критеріями.



// Завдання Створення ієрархії фігур

// Ви розробляєте програму для роботи з геометричними фігурами. Вам потрібно створити ієрархію класів для представлення різних фігур: кола, прямокутника та трикутника. Усі фігури повинні мати спільний метод calculateArea(), який обчислюватиме і повертатиме площу фігури.

// Створіть базовий клас Shape, який міститиме конструктор з координатами центру фігури та метод calculateArea(). Метод calculateArea() у базовому класі має повертати 0.

// Створіть підкласи для кожної геометричної фігури: Circle, Rectangle та Triangle. Кожен підклас повинен успадковувати від Shape.

// Реалізуйте метод calculateArea() для кожного підкласу, щоб він коректно обчислював площу відповідної фігури.

// Створіть кілька об'єктів кожного типу фігур та виведіть їх площі.

// Приклад:

// const circle = new Circle(0, 0, 5);
// const rectangle = new Rectangle(0, 0, 4, 6);
// const triangle = new Triangle(0, 0, 8, 5);

// console.log('Circle area:', circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log('Rectangle area:', rectangle.calculateArea()); // Output: Rectangle area: 24
// console.log('Triangle area:', triangle.calculateArea()); // Output: Triangle area: 20
// Завдання полягає у створенні ієрархії класів з використанням успадкування, реалізації методу calculateArea() для кожного підкласу та демонстрації розрахунків площ різних постатей.



// Завдання Онлайн магазин електроніки

// Ви розробляєте веб-додаток для онлайн-магазину електроніки. Вам потрібно створити ієрархію класів для різних типів продуктів: смартфонів, ноутбуків та навушників. Кожен продукт має свої характеристики, такі як бренд, модель, ціна та характеристики (наприклад, роздільна здатність екрану для смартфона, тип процесора для ноутбука та тип підключення для навушників).

// Створіть базовий клас Product, який міститиме конструктор з основними характеристиками продукту, такими як бренд, модель та ціна.

// Створіть підкласи для кожного типу продуктів: Smartphone, Laptop і Headphones. Кожен підклас повинен успадковувати від Product.

// Додайте додаткові характеристики для кожного типу продуктів, наприклад, для смартфонів - роздільна здатність екрана, для ноутбуків - тип процесора, для навушників – тип підключення.

// Реалізуйте метод productDescription(), який повертатиме рядок з опис продукту, включаючи всі його характеристики.

// Створіть декілька об'єктів кожного типу продуктів та виведіть їх описи.

// Приклад:

// const smartphone = новий Smartphone ("Apple", "iPhone 13", 999, "1920x1080");
// const laptop = new Laptop("Dell", "XPS 15", 1499, "Intel Core i7");
// const headphones = New Headphones("Sony", "WH-1000XM4", 349, "Bluetooth");

// console.log(smartphone.productDescription());
// console.log(laptop.productDescription());
// console.log(headphones.productDescription());
// Завдання полягає у створенні ієрархії класів з використанням успадкування, додаванні характеристик для кожного підкласу, реалізації методу productDescription() та демонстрації описів різних типів продуктів.



// // Клас ShoppingCart: Реалізуйте клас Product для представлення товару з полями name, price та quantity. Потім створіть клас ShoppingCart, який зберігатиме список товарів та надавати методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.

// Клас SocialNetworkUser: Створіть клас SocialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.

// Клас MusicPlayer: Реалізуйте клас Song для представлення пісні з полями title, артист і тривалість. Потім створіть клас MusicPlayer, який зберігатиме список пісень та надавати методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.

// Реалізуйте клас MyString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовком і метод ucWords, який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.

// Реалізуйте клас Validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, клас буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону: