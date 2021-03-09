import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types'

const FileUploader: React.FC<any> = ({ handleFile, accept, children }) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  
  const handleClick = () => {
    if(hiddenFileInput !== null && hiddenFileInput.current !== null)
      hiddenFileInput.current.click();
  };
  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
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

FileUploader.propTypes = {
  accept: PropTypes.oneOf(['data:text/json']),
  handleFile: PropTypes.func
}

FileUploader.defaultProps = {
  accept: '*',
  handleFile: () => console.log('handleFile'),
}
export default FileUploader;