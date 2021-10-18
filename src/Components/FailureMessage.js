import React from 'react'
function FailureMessage({FailureMessage,handleChange,...otherProps}) {
    return (
<>
<div class="success-message red-back"> 
                
                <p class=" text-black  reminder-p"><img className="bell-width" src="img/menu-icon/red-cross.svg" alt="" ></img><span className="margl10">{FailureMessage}
                  </span></p>
                  </div>
                
</>
    )
}
export default FailureMessage;