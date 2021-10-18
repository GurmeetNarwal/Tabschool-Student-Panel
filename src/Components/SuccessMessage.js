import React from 'react'
function SuccessMessage({SuccessMessage,handleChange,...otherProps})  {
    return (
<>
<div class="success-message green-back"> 
                
                <p class=" text-black  reminder-p"><img className="bell-width" src="img/menu-icon/green-tick.svg" alt="" ></img><span className="margl10">{SuccessMessage}
                  </span></p>
                  </div>
                
</>
    )
}
export default SuccessMessage;