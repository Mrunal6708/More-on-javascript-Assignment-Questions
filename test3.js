function fetchdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success =Math.random() > 0.5;
            success ? resolve("Data received") : reject("Error fetching data")
        }, 2000);
    });
}

async function  handalfatchdata(){
    try{
        const data = await fetchdata();
        console.log(data);
    }catch (error){
        console.log(error);
    }
}

handalfatchdata();