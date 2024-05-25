// creating a variable of type array to store multiple values
const arraynfts=[];

//creating a function naming nftObject inside which a object is creted eith some properties 
function nftObject (username,password,age,dob,style,state) {
    const objnft={
         "username":username,
         "pass":password,
         "age":age,
         "date of birth":dob,
         "styling":style,
         "belonging":state
    }
    arraynfts.push(objnft);
}

//creating a function named listNfts in while a while loop is used to iterate through the arrray and print the metadata
function listNFTs () {
    let i=0;
    while(i<arraynfts.length){
        console.log(arraynfts[i]);
        i=i+1;
    }
}

// in this printing the total number of nfts present inserted by counting the array length
function getTotalSupply() {
      console.log("total number of nfts present :- " + arraynfts.length);
}

//calling all the function i created to run and print the values
nftObject ("amrita","Amr$567",19,"August","indowestern","jharkhand");
listNFTs ();
getTotalSupply()
