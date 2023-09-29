// add whatever parameters you deem necessary
/**averagePair(array, target ) => pairExits
 * Params:
 * - array: array of numbers
 * - target: single number
 * 
 * returns:
 * pairExists: true or false depending on whether or not any pair of numbers in 
 * array average to target
 */
function averagePair(array, target) {
    //start with a naive solution of the double for loop
    let start = 1;
    for(let num of array){
        for(i=start; i<array.length; i++){
            if(num+array[i]===target*2) return true;
        }
        start++;
    }
    return false;
}
