let dobleNumber=[];
let number=[2,4,6,8,10]
for(let element of number){
    function sumNumber(){
        return element*2;
    }
    dobleNumber.push(sumNumber());
}
console.log(dobleNumber);

let person={
    name:'hani',
    age: 27,
    city:'Addis ababa'
};
for(let key in person){
    console.log('key:'+key,'value:'+person[key]);
}





let array = ['Hello', 'world', 'This', 'is', 'Delayed'];

for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
        console.log(array[i]);
    }, i * 1000); // Delay increases by 1 second for each iteration
}

