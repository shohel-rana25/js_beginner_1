function myFunction()
{
    const meassage=document.getElementById("p01");
    meassage.innerHTML="";

    let x=document.getElementById('demo').value;
   
    if(x.trim() == "")meassage.innerHTML=("input is empty"); 
    else{
       
        x=Number(x);
        
        if(isNaN(x)) meassage.innerHTML=("input is not valid"); 
        else if(x<5) meassage.innerHTML=("number is low");
        else meassage.innerHTML=("number is large"); 
    }

}