"use strict";
const cars = {
  color: `white`,
  isBuy: false,
  isArmor: function () {
    console.log(`Armor does not have`);
  },
};

const nexia = Object.create(cars);
console.log(nexia);
const bmw = {
  color: `red`,
};

Object.setPrototypeOf(bmw, cars);
bmw.isArmor();

console.log(bmw.isBuy);
