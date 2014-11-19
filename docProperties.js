function displayProperties(value){
    var i=0;
    var sortArr=value[i];
    while(i<sortArr.length){
        sortArr=value.sort();
        i++;
    }
    console.log(sortArr.join('\n'));
}
displayProperties(['activeElement','alinkColor','all','xmlVersion']);
console.log();
