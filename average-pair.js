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

    //given the fact that the countPairs function is very simmilar to this, there has to be
    /**some way to collect information while totalling the data that can be used to get a O(n)
     * function that can be used to determin sums of pairs of values from the total sum
     * all the ideas coming to mind are just more complicated ways of doing what I already am doing
     * array of subtotals.has(total-target*2) isn't robust enough
     * any other usage of a subtotal array is just more complicated versions of adding every 
     * pair together. 
     * How can I cut the problem in half?
     * How do I get around the fact that, at least at first glance, the only way make sure a pair
     * exists is to create an n**2 sized array with every different combination of average 
     * and check if the target exists in that array?
     */
}
