function Prime(low, high){
    for (let i = low; i<high; i++){
        let flag = 0;
        for (let j = 2; j<i; j++)
        {
            if (i%j === 0) flag = 1;
            break;
        }
        if (i>1 && flag === 0) console.log(i);
    }
}
