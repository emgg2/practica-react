import React from 'react';

const File = () => {
   const [selectedFile, setSelectedFile] = React.useState(null);
   
   const handleChange = event => {      
       setSelectedFile (event.target.files[0]);
   }

    return (
        <input type="file" name="file" onChange={handleChange} />
    );
};

export default File;