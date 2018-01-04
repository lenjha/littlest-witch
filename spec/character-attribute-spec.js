// var Character = require('./../js/character-classes.js').characterModule;

import {WhiteWitch, BlackWitch, GrayWitch} from "./../js/character-classes.js";

describe("WhiteWitch", function(){
  it("should display attributes", function(){
    var witch = new WhiteWitch(1, 0, 5, 5, 3, 7, "heal")
    expect (witch.power).toEqual("heal")
  });
});
