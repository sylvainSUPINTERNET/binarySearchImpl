'use strict';

const methodsIndex = require('./utils/index');

/**
 * Binary Search
 * @param searchValue (from array sorted)
 * @param arrSorted (Array SORTED !)
 * @returns {Promise<any | any|*>}
 */
async function binary(searchValue, arrSorted){
    try {
        const test1 = await methodsIndex.tools_searchValueIsNotM(searchValue, arrSorted)
        console.log(test1);
        return test1;
    } catch (e){
        console.log(e);
        return e;
    }
}

const search = {
    binary: binary
};

module.exports = search;





