import React from "react";

function Form({
  handleSubmit, 
  handleChange, 
  formData}) {

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.firstName} name="firstName" onChange={handleChange}/>
      <input type="text" value={formData.lastName} name="lastName"  onChange={handleChange}/>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
