#!/usr/bin/env node

const axios = require('axios');
const { getCode } = require('country-list');
const chalk = require('chalk');

let code = getCode(process.argv[2]);
let date = process.argv[3];

axios.get('https://date.nager.at/api/v2/publicholidays/'+date+'/'+code)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })