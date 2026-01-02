import React from 'react'

function AdditionalButtons({removeAll, upperCaseAll, markAsDoneAll, upperCase}) {
  return (
    <div className="buttons">
        <button className="btn" onClick={removeAll}>Delete All</button>
        <button className="btn" onClick={upperCaseAll}>{upperCase ? "Capitalize All" : "Upper case All"}</button>
        <button className="btn" onClick={markAsDoneAll}>Mark as done All</button>
    </div>
  )
}

export default AdditionalButtons