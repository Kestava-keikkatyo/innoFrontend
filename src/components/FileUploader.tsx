import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { FileUploaderProps } from '../types/props';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../utils/store';
import { setFile } from '../actions/fileActions';

/**
 * @component
 * @desc A custom fileupload button. Hides default input and renders
 * MUI-Button component which has file input event listener.
 * @param {FileUploaderProps} props
 * @param {Function} handleFile Function which is fired after file being uploaded.
 * @param {string} accept String which contains acceptable datatypes.
 * @param {React.ReactNode} children Child components which are rendered inside button.
 */
const FileUploader: React.FC<FileUploaderProps> = ({
  handleFile,
  accept,
  children,
}) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const [filename, setFilename] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if (hiddenFileInput !== null && hiddenFileInput.current !== null)
      hiddenFileInput.current.click();
  };

  let currentFile: any = useSelector<IRootState>(
    (state) => state.file.currentFile
  );

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    setFilename(file.name);
    dispatch(setFile(file));
  };

  console.log('fileUploader:currentFile: ', currentFile);

  return (
    <div style={{ marginTop: 16 }}>
      <Button variant="outlined" onClick={handleClick}>
        {children}
      </Button>
      <input
        type="file"
        accept={accept}
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <Typography variant="caption" display="block" gutterBottom>
        {filename}
      </Typography>
    </div>
  );
};

FileUploader.defaultProps = {
  accept: '*',
};

export default FileUploader;
