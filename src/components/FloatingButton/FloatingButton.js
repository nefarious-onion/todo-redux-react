import React, { useEffect } from 'react';

const FloatingButton = () => {

    const handleContentLoaded = () => {
        var elems = document.querySelectorAll(".fixed-action-btn");
        const instances = M.FloatingActionButton.init(elems, {
            direction: 'left'
        });
    }

   useEffect( () => {
       handleContentLoaded()
       
   }, [])

    return (
        <div class="fixed-action-btn" >
            < button class="btn-floating btn-large red" onMouseEnter={instance.open()}>
                <i class="large material-icons">mode_edit</i>
            </button>
            <ul>
                <li><button class="btn-floating red"><i class="material-icons">insert_chart</i></button></li>
                <li><button class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></button></li>
                <li><button class="btn-floating green"><i class="material-icons">publish</i></button></li>
                <li><button class="btn-floating blue"><i class="material-icons">attach_file</i></button></li>
            </ul>
        </div>
    );
}

export default FloatingButton;
