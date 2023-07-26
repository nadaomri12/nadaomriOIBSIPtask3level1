document.getElementById("convertir").addEventListener("click", convertir)
document.getElementById("Clear").addEventListener("click", Clear)
function convertir(){
    
    const Temperature=document.getElementById("number").value; 
    const Type=document.getElementById("selecttype").value
   
     function converttocelsius(Temperature){
     var C=((Temperature-32)*5/9).toFixed(1);
     return(C);
    }
function converttofahrenheit(Temperature){
    var F=((Temperature*9/5)+32).toFixed(1);
    return(F);
}
    if (Type==="celsius"){
        document.getElementById("result").innerHTML=converttofahrenheit(Temperature)+"&#176;F"
    }
    else{
        document.getElementById("result").innerHTML= converttocelsius(Temperature)+"&#176;C"
    
}
}
function Clear(){
    document.getElementById("result").innerHTML= " "
    document.getElementById("number").value=""
}

