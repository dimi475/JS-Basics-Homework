function createArray(value){
    var i,j;
    var numArr=new Array(value);
    for(i=0;i<numArr.length;i++){
        j=i*5;
        numArr[i]=j;
    }
        console.log(numArr);
}
createArray(20);
