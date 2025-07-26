function squreInput(input){
   try{
       const number =Number (input);
       if(isNaN(number)){
        throw new error("Not a valid number");
       }

       return number*number;

   }catch(Error){
       return "Invalid output";
   }
}

console.log(squreInput("5"));
console.log(squreInput("Abc"));