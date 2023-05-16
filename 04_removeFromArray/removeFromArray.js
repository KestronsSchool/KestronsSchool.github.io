const removeFromArray = function(arr,what1,what2,what3,what4,what5) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]===what1||arr[i]===what2||arr[i]===what3||arr[i]===what4||arr[i]===what5){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
