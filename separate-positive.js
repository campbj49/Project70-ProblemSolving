// add whatever parameters you deem necessary
//takes an array and pushes the positive numbers to the left and negative to right
function separatePositive(array) {
    //can just tweak the pivot function from quicksort
    let pivot = 0;
    let pivotIndex = 0;
    for(i=0; i<array.length; i++){
        if(pivot<array[i]){
            [array[i], array[pivotIndex]] = [array[pivotIndex],array[i]]
            pivotIndex++;
        }
    }
    return array;
}
