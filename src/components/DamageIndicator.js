import React from 'react'

function DamageIndicator(props){ 
    return (
      <div style={{"font-size": "2em"}} className="text-right">
       { props.damage }
      </div>
    )
}   

export default DamageIndicator;