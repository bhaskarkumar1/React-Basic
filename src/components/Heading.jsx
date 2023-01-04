import React from "react";



function Header(){
    var greet="";
    const customStyle={
         color:""
    }
    
    let d=new Date();
    let hours=d.getHours();
    if(hours<12){
    greet= "Good Morning";
    customStyle.color="green";
    } 
    else if(hours<18 && hours>12){
    greet="Good AfterNoon";
    customStyle.color="red";
    } 
    else {
    customStyle.color="yellow";
    greet="Good Night";
    
    }
    return <h1 className="heading" style={customStyle}>{greet}</h1>;

}


  

  export default Header;