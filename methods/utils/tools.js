'use strict';

const methodsIndex = require('./index');

/**
 * HELP :
 // + M = value at index arr.length/2 (middle)
 */


/**
 * Get m value from array (at index arrSorted.length/2)
 * @param arrSorted
 * @returns {*}
 */
function getMiddleValue(arrSorted){
    return arrSorted[Math.round(arrSorted.length/2)]
}


/**
 * Check the searchValue is not EQUAL to the arr[m] value
 * @param searchingValue
 * @param arrSorted
 * @returns {Promise<any>}
 *  * ;; METHODS :
 *          -> getMiddleValue(arrSorted)
 */
function searchValueIsNotM(searchingValue, arrSorted){
    return new Promise( (resolve, reject) => {
        let m = getMiddleValue(arrSorted);

        if(m === searchingValue){
            reject(`${searchingValue} is M (index -> ${Math.round(arrSorted.length/2)})`)
        } else {
            resolve("Can continue ...")
        }
    })
}

/**
 * Register methods to allow them in ./methods/utils/index.js (make them usable in search.js);
 * @type {{searchValueIsNotM: (function(*, *=): Promise<any>), getMiddleValue: (function(*): *)}}
 */
const tools = {
  getMiddleValue: getMiddleValue,
  searchValueIsNotM: searchValueIsNotM
};
module.exports = tools;