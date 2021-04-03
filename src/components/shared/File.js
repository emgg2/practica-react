import React, { useRef } from 'react';


const File = ({onFileSelectSuccess, onFileSelectError}) => {
   
    const fileRef = useRef();

    const handleFileInput = (e) => {                
        const file = e.target.files[0];
        onFileSelectSuccess(file);
        // if(file.size > 1024) 
        //      onFileSelectError ({ error: "El fichero no puede exceder de 1MB"})
        // else  onFileSelectSuccess (file);        
        
    };
   
   
    return (
        <div>
            <input type='file' onChange= {handleFileInput} ref={fileRef} />
          
           
        </div>
    );
};

export default File;