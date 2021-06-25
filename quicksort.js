var quicksort = function(arr){
    var sorted = [];
    var left = [];
    var right = [];

    if (arr && arr.length > 1){
        var mid = arr[0];

        for (var i=1;i<arr.length;i++){
            if (arr[i]<mid){
                left.push(arr[i]);
            }
            else {
                right.push(arr[i]);
            }
        }

        left = quicksort(left);
        right = quicksort(right);

        left.push(mid);
        sorted = left.concat(right);
    }
    else if (arr[0] !== undefined){
        sorted.push(arr[0]);
    }
    return sorted;
    }

    console.log(quicksort([1,7,5,23,9,34,12,100,2,6,0,-5,25]));
