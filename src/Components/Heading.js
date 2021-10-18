import React from 'react'
function Heading({text,handleChange,...otherProps}){
    return (
<>
<div class="row">
                            <div class="col-12">
                                <div class=" d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="page_title_left d-flex align-items-center">
                                        <h3 class="f_s_25 f_w_700 dark_text mr_30 ">{text}</h3>

                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                      
</>
    )
}
export default Heading;