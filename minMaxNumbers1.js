function findMinAndMax(value) {
    var minNum = value[0];
    var maxNum = value[0];
    for(var i=0;i<value.length;i++){
        if (value[i]<minNum){
            minNum=value[i];
        }
        if (value[i]>maxNum){
            maxNum=value[i];
        }
    }
    console.log('Min -> '+minNum);
    console.log('Max -> '+maxNum);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
