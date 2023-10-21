let s="This is a Sunny Day";
let c=s.split(' ');
let result='';
for(let i=0;i<c.length;i++){
    for(let j=c[i].length-1;j>=0;j--){
        result=result+c[i][j];
    }
    result=result+' ';
}
console.log(result);

// or

console.log(s.split(' ').map(word => word.split('').reverse().join('')).join(' '))