import React, { useState } from 'react';
import FileUploader from './FileUploader';

const File = () => {
   const [name, setName] = useState("");
   const [selectedFile, setSelectedFile] = React.useState(null);
   
   const handleChange = event => {      
       setSelectedFile (event.target.files[0]);
   }

   const handleName = (e) => setName(e.target.value);
   const handleFile = (file) => setSelectedFile(file);
   const handleError = ({error}) => alert(error);

    return (
        <div>
            <input type="text" value={name} onChange={handleName} />
            <FileUploader 
                onFileSelectSuccess={handleFile}
                onFileSelectError={handleError}

            />
           
        </div>
    );
};

export default File;