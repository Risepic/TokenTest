/*
 
 Parser for Light Token app.

 Heavily Based on Aion Web3 API Example

 Author: Cosimo Iaia <cosimo.iaia@gmail.com>
 Date: 29/04/2018

 This file is distribuited under the terms of GNU General Public v3

*/

const tokens = require('./token.js');

// tokens
const DEPLOY = tokens.DEPLOY;
const TRANSFER = tokens.TRANSFER;
const MINT = tokens.MINT;
const BALANCE = tokens.BALANCE;

// special keyword HELP

const parseDeploy = (input) => {
  console.log(input);
  if (input.length != 0)
    throw "should not have any more arguments"
  return {
    token: DEPLOY
  }
}

const parseMint = (input) => {
  if (input.length != 2)
    throw "mint should have two arguments address (hex) and value (decimal)"
  return {
    token: MINT,
    address: input[0],
    value: input[1]
  }
}

const parseTransfer = (input) => {
  if (input.length != 2)
    throw "transfer should have two arguments address (hex) and value (decimal)"
  return {
    token: TRANSFER,
    address: input[0],
    value: input[1]
  }
}

const parseBalance = (input) => {
  if (input.length != 1)
    throw "balance should only have one argument (the address)"
  return {
    token: BALANCE,
    address: input[0]
  }
}

module.exports.parse = (input) => {
  if (input[0] === DEPLOY)
    return parseDeploy(input.slice(1));

  if (input[0] === MINT)
    return parseMint(input.slice(1));

  if (input[0] === TRANSFER)
    return parseTransfer(input.slice(1));

  if (input[0] === BALANCE)
    return parseBalance(input.slice(1));
}
