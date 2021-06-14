function reverse(str){
   str = str.toLowerCase();

   console.log(str === str.split('').reverse().join(''));
}
