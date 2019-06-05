'use strict';
const search = require('./methods/search');

/**
 * ;;; BINARY SEARCH IMPL ;;;
 */

//ASC sorted array
let arrSorted = [10, 29, 38, 48, 100, 120, 144];


//Search value
let searchingValue = 144 ;
// -> generate "error" -> let searchingValue = 100 ( 100 === M value);


search.binary(searchingValue, arrSorted);