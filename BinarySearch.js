function binarySearch(arr, elem){
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end)/2);
    while(arr[middle] !== elem){
        console.log(start,middle,end);
        if(elem < arr[middle]){
            end = middle -1;
          }  else {
                start = middle+1;
            }
         middle = Math.floor((start + end)/2);

        }
        console.log(start,middle,end);
    }


binarySearch([2,5,6,9,13,15,28], 28)
