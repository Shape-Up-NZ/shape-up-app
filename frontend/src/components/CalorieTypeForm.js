import React, {useState} from 'react';

export function CalorieTypeForm()
{
    const[Breakfast, setBreakfast] = useState(true);
    const[Lunch, setLunch] = useState(true);
    const[Dinner, setDinner] = useState(true);
    const[Snack, setSnack] = useState(true);

    const handleChange=(data)=>{

    }
    return(
      
      <div className = "CalorieTypeForm">

      <input type ="checkbox" value={Breakfast} onChange={()=>handleChange("Breakfast")}/> Breakfast
      <br></br>
      <input type ="checkbox" value={Lunch} onChange={()=>handleChange("Lunch")}/> Lunch
      <br></br>
      <input type ="checkbox" value={Dinner} onChange={()=>handleChange("Dinner")}/> Dinner
      <br></br>
      <input type ="checkbox" value={Snack} onChange={()=>handleChange("Snack")}/> Snack
      <br></br>
    
      </div>
    )
}