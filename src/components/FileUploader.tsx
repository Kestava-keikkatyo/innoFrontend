import { Button } from '@material-ui/core';
import React from 'react';
import { FileUploaderProps } from '../types/props'
import axios from 'axios'
import {v4 as uuidv4}  from 'uuid'

/**
 * @component
 * @desc A custom fileupload button. Hides default input and renders
 * MUI-Button component which has file input event listener.
 * @param {FileUploaderProps} props
 * @param {Function} handleFile Function which is fired after file being uploaded.
 * @param {string} accept String which contains acceptable datatypes.
 * @param {React.ReactNode} children Child components which are rendered inside button.
 */
const FileUploader: React.FC<FileUploaderProps> = ({ handleFile, accept, children }) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if(hiddenFileInput !== null && hiddenFileInput.current !== null)
      hiddenFileInput.current.click();
  };
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);


    let file = fileUploaded.name;
    // split the filename to get the name and type
    let fileParts = fileUploaded.name.split('.');
    let fileName = fileParts[0]
    let fileType = fileParts[1]
    console.log("preparing the upload")

    // Generate unique id to add it to the filename, since AWS S3 overrides files which have the same name
    const uniqueId = uuidv4()+'-'

    file = uniqueId+file;
    fileName = uniqueId+fileName;

    axios.post("http://localhost:3001/api/uploads", {
      file: file,
      fileName: fileName,
      fileType: fileType
    }).then(response => {
      let returnData = response.data.data.returnData
      console.log("returnData", returnData)
      let signedReguest = returnData.signedRequest
      let url = returnData.url
      console.log("retrunData ", returnData)
      console.log("signedReguest ", signedReguest)
      console.log("url ",url)

      // put the fileType in the headers for the upload
      let options = {
        headers:{
          'content-Type': fileType
        }
      }

      axios.put(signedReguest, fileUploaded, options).then(result => {
        console.log("Response from s3")
      }).catch(error => {console.log(error)})
    })

    console.log("file uploaded successfully");

}



  return (
    <>
      <Button onClick={handleClick}>
        {children}
      </Button>
      <input type="file"
            accept={accept}
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}}
      />
    </>
  );
};

FileUploader.defaultProps = {
  accept: '*',
}


export default FileUploader;