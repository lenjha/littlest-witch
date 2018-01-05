// BEFORE ES6 PROCESS
// var Character = require('./../js/character-classes.js').characterModule;
// describe("WhiteWitch", function(){
//   it("should display power attributes", function(){
//     let witch = new WhiteWitch(1, 0, 5, 5, 3, 7, "heal")
//     expect (witch.power).toEqual("heal")
//   });
// });
//
// describe("WhiteWitch", function(){
//   it("should display level attributes", function(){
//     let witch = new WhiteWitch(1, 0, 5, 5, 3, 7, "heal")
//     expect (witch.level).toEqual(1)
//   });
// });

import {WhiteWitch, BlackWitch, GrayWitch} from "./../js/character-classes.js";

describe("WhiteWitch", function(){
  let witch;

  beforeEach(function() {
    witch = new WhiteWitch(1, 0, 5, 5, 3, 7, "heal");
  });
  it("should display power attributes", function(){
    expect (witch.level).toEqual(1)
  });
  it("should display power attributes", function(){
    expect (witch.power).toEqual("heal")
  });
});
