import React from "react";




export default function UseStates(){
    const [raining, setRaining] = React.useState(true);
    function checkRaining() {
    
        setRaining(prevState => !prevState) 
        
     }
   return ( 
   
   <div>
    <h1 onClick={checkRaining}>{setRaining? "Yes" : "No"}</h1>
   

   </div>

   )
}