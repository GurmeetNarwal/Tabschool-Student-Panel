import React from 'react';

function Input({handleChange,Placeholder,type,...otherProps}) {
    return (
<>
<div class="input-container">
        <input type={type} class="input" autocomplete="off" spellcheck="false" maxlength="25"></input>
        <div class="placeholder">
            {Placeholder}
        </div>
</div>
<br></br>
        
</>
    )}
    export default Input;