import React, { useState } from 'react'

function FormValidation(event) {
    const [number, setNumber] = useState(6)
    const [isValidNumber, setIsValidNumber] = useState(null)

    function handleNumberChange(){
        const newNumber = parseInt(event.target.value)

        if(newNumber >= 0 && newNumber <= 5){
            setNumber(newNumber)
            setIsValidNumber(null)
        }
        else{
            setIsValidNumber(`${newNumber} is not a valid number`)
        }
    }
  return (
    <form>
        <input type="number" value={number} onChange={handleNumberChange} />
        {isValidNumber ? <span style={{color: "red"}}>{isValidNumber}</span>: null}
    </form>
    
  )
}

export default FormValidation
