// const chopShop = {
//     stones: [
//       { name: 'Emerald', price: 1300, quantity: 4 },
//       { name: 'Diamond', price: 2700, quantity: 3 },
//       { name: 'Sapphire', price: 1400, quantity: 7 },
//       { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//       const stone = this.stones.find(stone=>stone.name === stoneName);
//       if(stone){
//       return  stone.price*stone.quantity;
//       }else{
//         console.log(`Stone ${stoneName} is not found`);
//         return 0;
//       }
//     },
//   };
  
//   console.log(chopShop.calcTotalPrice('Emerald')); // 5200
//   console.log(chopShop.calcTotalPrice('Diamond')); // 8100
//   console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
//   console.log(chopShop.calcTotalPrice('Ruby')); // 1600



//   const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             id: this.generateId(),
//             createdAt: this.getDate(),
//             ...contact, 
//           };
//           this.contacts.push(newContact); 
//           return newContact;
//     },
//     generateId() {
//       return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };
  
//   console.log(
//     phonebook.add({
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     }),
//   );
//   console.log(
//     phonebook.add({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     }),
//   );

//   Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     a: 0,
//     b: 0,
//     read(a,b){
//     this.a = a;
//     this.b = b;
//     },
//     add(){
// let sum = this.a+this.b;
// return sum;
//     },
//     mult(){
// let mult = this.a * this.b;
// return mult;
//     },
// }

// calculator.read(5,4);
// console.log(calculator.add());
// console.log(calculator.mult());
// // ----------------------------Для Співбесіди-------------
// function func() {
//     console.log(this);
//   }
  
//   let user = {
//     firstName: 'Вася',
//     showInfo: func,
//     age: 20,
//   };
  
//   user.showInfo();
  
  // =========================================
  
  // =========================================
  
//   const obj2 = {
//     name: 'awdawd',
//   };
  
//   let obj1 = {
//     name: 'obj1',
//     func() {
//       return () => {
//         console.log(this);
//       };
//     +},
//   };
//   +/
//   const foo = obj1.func;
//   const newFunc = foo.call(obj1);
//   newFunc();
  
//   // =========================================
  
//   function foo() {
//     const foo1 = () => {
//       const foo2 = () => {
//         const foo3 = () => {
//           console.log(this);
//         };
//         foo3();
//       };
//       foo2();
//     };
//     foo1();
//   }
  
//   foo();
  
//   // =========================================
  
//   const obj1 = {
//     name: 'obj1',
//   };
  
//   let obj2 = {
//     name: 'obj2',
//     func() {
//       function foo() {
//         console.log(this);
//       }
//       return foo;
//     },
//   };
  
//   const result = obj2.func;
//   const newFunc2 = result.bind(obj1);
//   const newFunc3 = newFunc2.bind(obj2);
//   const res = newFunc3();
//   res();
  
//   // =========================================
  
//   const foo = () => {
//     console.log(this);
//   };
  
//   const obj = {
//     test: foo.bind(null),
//   };
  
//   obj.test();
//   // =========================================
  
//   let elem = {
//     value: '123',
//   };
  
//   function func(a, b) {
//     function arrow(a, b) {
//       console.log(this);
//     }
//     arrow();
//   }
  
//   func.call(elem);
  
//   // =========================================
  
//   const user = {
//     name: 'Vasya',
//     showName() {
//       console.log(this.name.toUpperCase().trim().replace(' ', '-'));
//     },
//   };
  
//   const user1 = {
//     name: 'Petro',
//   };
  
//   user.showName.call(user1);