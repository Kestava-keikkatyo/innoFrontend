import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
//import { FileUploaderProps } from '../types/props';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../utils/store';
import { setFiles } from '../actions/fileActions';

/**
 * @interface
 */
export interface FileUploaderProps {
  /**
   * Function which is fired after file being uploaded.
   */
  handleFile?: Function;
  name: string;
  /**
   * String which contains acceptable datatypes.
   */
  accept?: string;
  /**
   * Child components which are rendered inside button.
   */
  // children: React.ReactNode
}

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
  name,
}) => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const [filename, setFilename] = useState('');
  const dispatch = useDispatch();

  let currentFiles: any = useSelector<IRootState>(
    (state) => state.files.currentFiles
  );

  const handleClick = () => {
    if (hiddenFileInput !== null && hiddenFileInput.current !== null)
      hiddenFileInput.current.click();
  };

  const handleChange = (event: any) => {
    const file = event.target.files[0];
    setFilename(file.name);

    let copyOfCurrentFiles = [...currentFiles.files];

    if (
      name.toLowerCase() === 'change picture' ||
      name.toLowerCase() === 'vaihda kuva'
    ) {
      copyOfCurrentFiles[0] = file;
    } else if (
      name.toLowerCase() === 'change cover' ||
      name.toLowerCase() === 'vaihda kehys'
    ) {
      copyOfCurrentFiles[1] = file;
    } else if (
      name.toLowerCase() === 'change introduction video' ||
      name.toLowerCase() === 'vaihda esittelyvideo'
    ) {
      copyOfCurrentFiles[2] = file;
    } else {
      copyOfCurrentFiles = [file, null, null];
    }
    dispatch(setFiles(copyOfCurrentFiles));
  };

  return (
    <div style={{ marginTop: 16 }}>
      <Button variant="outlined" onClick={handleClick}>
        {name}
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
