
    function append(char) 
    {
        document.getElementById("display").value+=char;
    }

    function cleardisplay() 
    {
        document.getElementById("display").value=" ";
    }
    
    function calculate()
    {
        const expression=document.getElementById("display").value;
        try{
            const result=eval(expression);
            document.getElementById("display").value=result;
        }
        catch{
            document.getElementById("display").value="Error";
        }
    }
