const multiply = (a, b)=> a * b ;

const obj ={
    value: 10,
    add(num){
        return this.value+num;
    }
};

console.log(multiply(5,3));
console.log(obj.add(5));