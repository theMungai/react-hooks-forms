import React from 'react'

function DisplayData({formData}) {
  return (
    <div>
      <h1>{formData.firstName}</h1>
      <h1>{formData.lastName}</h1>
    </div>
  )
}

export default DisplayData

