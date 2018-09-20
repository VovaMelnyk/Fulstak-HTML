// const TANK = {
//   name: 'Tiger',
//   speed: 50,
//   hp: 100,
//   armor: 100,
//   amunition: 10,
//   x: 10,
//   y: 20,

//   fire() {
//     this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
//   },

//   move(a, b) {
//     this.x = a;
//     this.y = b;
//   },

//   repair(size) {
//     if (this.canRepair()) {
//       if (this.hp + size > 100) {
//         this.hp = 100;
//       } else {
//         this.hp += size;
//       }
//     } else {
//       alert('you are have full hp')
//     }
//   },

//   canFire() {
//     return this.amunition > 0;
//   },

//   canRepair() {
//     return this.hp < 100;
//   },
// }

// TANK.move(50, 50)
// TANK.fire();
// TANK.fire();
// TANK.hp = 78;
// TANK.move(55, 60);
// TANK.repair(50);
// console.log(TANK);

// function Tank(x, y, name, hp, armor, amunition, speed) {
//   // this = {}
//   // Tank.prototype = {constructor: Tank}
//   this.x = x;
//   this.y = y;
//   this.name = name;
//   this.hp = hp;
//   this.armor = armor;
//   this.amunition = amunition;
//   this.speed = speed;
// }

// Tank.prototype.fire = function () {
//   this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
// };
// Tank.prototype.move  = function (a, b) {
//   this.x = a;
//   this.y = b;
// };

// Tank.prototype.repair = function (size) {
//   if (this.canRepair()) {
//     if (this.hp + size > 100) {
//       this.hp = 100;
//     } else {
//       this.hp += size;
//     }
//   } else {
//     alert('you are have full hp')
//   }
// };

// Tank.prototype.canFire = function () {
//   return this.amunition > 0;
// };

// Tank.prototype.canRepair = function () {
//   return this.hp < 100;
// };

// let tiger = new Tank(10, 10, 'Tiger', 100, 100, 10, 50);
// let panzar = new Tank(20, 20, 'Panzar', 150, 50, 8, 80);
// let leopard = new Tank(30, 48, 'Leopard', 120, 30, 10, 100);


// console.log(tiger);
// console.log(panzar);
// console.log(leopard);

// let animal = {
//   canSleep: true,
//   canEat: true,
//   canBreathe: true,
// }

// let dog = {
//   canBark: true,
//   canJump: true,
//   canBite: true,
// }

// let doberman = {
//   canFind: true,
//   canRun: true
// }

// console.log(doberman);
// console.log(doberman.canSleep);

// let dog = Object.create(animal);
// dog.canBark = true;
// dog.canJump = true;
// dog.canBite = true;
// console.log(dog);
// console.log(dog.canJump);
// console.log(dog.canSleep);
// console.log(dog.hasOwnProperty('canEat'));
// console.log(Object.prototype);
// console.log([1,2,3]); // new Array