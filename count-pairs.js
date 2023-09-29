// add whatever parameters you deem necessary
/** finds number of pairs in array that sum to target */
function countPairs(array, target) {
    //start with a naive solution of the double for loop from the average-pair funtion
    let pairs = []
    let start = 1;
    for(let num of array){
        for(i=start; i<array.length; i++){
            if(num+array[i]===target) pairs.push([num, array[i]]);
        }
        start++;
    }
    return pairs.length;
}
