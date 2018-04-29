/*
 
 Main Light Token app.

 Based on Aion Web3 API Example

 Author: Cosimo Iaia <cosimo.iaia@gmail.com>
 Date: 29/04/2018

 This file is distribuited under the terms of GNU General Public v3

*/


const core = require('./core.js');
const log = require('./core.js').log;
const parse = require('./parser.js').parse;
const execute = require('./executor.js').execute;

(async () => {
  try {
    const arguments = process.argv.slice(2);
    const statement = parse(arguments);
    execute(statement);
  } catch (e) {
    log(e);
  }
})();
