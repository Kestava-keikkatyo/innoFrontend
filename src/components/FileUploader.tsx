import { Button } from '@material-ui/core';
import React from 'react';
import { FileUploaderProps } from '../types/props'
import { useSelector } from 'react-redux';
import { IRootState } from '../utils/store';

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

  let currentFile:any = useSelector<IRootState>(state => state.file.currentFile)

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];

    currentFile.file = fileUploaded

    console.log("fileUploader:currentFile: ",currentFile)
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