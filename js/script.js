// Created by: Anita Kay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates your age on Mars and Venus.
 */
function calculate () {
  // get the user's name and age
  let name = document.getElementById('name').value;
  let age = parseFloat(document.getElementById('age').value);
  // calculate the age on Mars and Venus
  let mars = age / 1.88;
  let venus = age / 0.615;
  //display the age on Mars and Venus
  document.getElementById('answers').innerHTML = name + " is " + mars.toFixed(0) + " years old on Mars, and " + venus.toFixed(0) + " years old on Venus.";
}