function printNumbers(n){
    var arr=[];
    if (n>=0) {
        for (var i = 0; i <= n; i++) {
            if ((i % 4) != 0 || (i % 5) != 0) {
                arr.push(i);
            }

        }
        console.log(arr.join(','));
    }else{
        console.log('no');
    }
}

printNumbers(20);
printNumbers(-5);
printNumbers(13);
