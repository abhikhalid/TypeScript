"use strict";
// Decorator is an object oriented related feature, I will start by adding a class
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function logger(target) {
    console.log('logger decorator');
    console.log(target);
    return class extends target {
        constructor(...args) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    };
}
let Person = class Person {
    name = 'Khalid';
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};
Person = __decorate([
    logger
], Person);
const person = new Person();
const person2 = new Person();
//in the terminal
// tsc --init
// tsc
// node decorator.js
//# sourceMappingURL=decorator.js.map