// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-06/sw.js", {
    scope: "/ICS2O-5-06/",
  })
}

while (i < 10) {
  text += "The number is " + i
  i++
}

document.getElementById("answer").innerHTML = text