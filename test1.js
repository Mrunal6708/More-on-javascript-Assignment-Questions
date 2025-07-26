const Person ={
    name : `Raaj`,
    greet : function (){
        setTimeout (()=>{
            console.log("Hello, my name is",this.name);
        }, 1000);
    }
};

Person.greet();

//output: Hello, my name is Raaj

/**
 * Explanation:
 * 
 * 1. greet is regular function, So this inside it refers to the person object.
 * 2. Inside greet, we use setTimeout with Arrow function.
 * 3. Arrows function do not have their own this-instead, they lexically 
 *    inherit this frome thier surrounding scoping.
 * 4. So the arrow function inside setTimeout inherits this from greet, 
 *    which is person.
 * 5. Therefore, this.name correctly refers to "Raaj".
 */