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

const number = ["3", "3", "3"]
let i = 0
let text = ""

for (; number[i]; ) {
  text += number[i]
  i++
}

document.getElementById("answer").innerHTML = text
