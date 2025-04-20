import React, { useState } from 'react'
import Form from './Form';
import DisplayData from './DisplayData';
import FormValidation from './FormValidation';

function ParentComponent(){
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : ""
      });
    
      function handleChange(event){
        const {name, value} = event.target
        setFormData((prev) => ({...prev, [name]:value }))
      }
      
      function handleSubmit(event){
        event.preventDefault()
        console.log("Form submited", formData)
      }
  return (
    <div>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} formData={formData}/>
      <DisplayData formData={formData}/>
      <FormValidation/>
    </div>
  )
}

export default ParentComponent
