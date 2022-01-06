async function foo(){
    try {
        let res=await fetch("https://api.openbrewerydb.org/breweries");
    let result=await res.json();
    for(var i in result){
        console.log(`Name:${result[i].name}, Type:${result[i].brewery_type}, 
        Address1:${result[i].address_2}, Address2:${result[i].address_3}, 
        Website:${result[i].website_url}, Phone No:${result[i].phone}`);
    }
        
    } catch (error) {
        console.log(error);
        
    }
    
}
foo();