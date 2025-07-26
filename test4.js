function daly(ms){
    return new Promise(
        resolve => setTimeout(resolve,ms)
    );
}

async function proccessToOrder(){
        try{
        await daly(1000);
        console.log("Use data fetched");

        await daly(2000);
        console.log("Order detils fetched");

        await daly(3000);
        console.log("Payment status fetched")
        
        console.log("Order is completed");

        }catch(Error){
            console.log("An error occurred",Error);
        }
    }

proccessToOrder();    