import { Avatar } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Cancel } from '@mui/icons-material';
import React, { useEffect, useRef, useState } from 'react';


/**
 * @interface
 */
export interface ImageUploaderProps {
   /**
    * Existing profile picture
    */
   picture?: any;
 }

const ImageUploader: React.FC<ImageUploaderProps> = ({
    picture
  }) => {
    const classes = useStyles();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string>();
    useEffect(() => {
      if (image) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(image);
      } else {
        setPreview(undefined)
        if (fileInputRef !== null && fileInputRef.current !== null) {
          fileInputRef.current.value = '';  
        }
      }
    }, [image]);

    return (
        <>
            <Avatar
            src={ preview || picture }
            alt=""
            className={classes.userShowImg}
            onClick={(event) => { 
            event.preventDefault(); 
            if (fileInputRef !== null && fileInputRef.current !== null) fileInputRef.current.click(); }} 
            />

            {preview ? (
                <Cancel className={classes.imageCancel} onClick={(event) => {
                setImage(undefined);
                    } } />
                ) : null}

            
            <input type="file" id="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(event: any) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
                }
            }}
            ref={fileInputRef} />
        </>
    );
};

const useStyles = makeStyles(() => ({
  userShowImg: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer'
  },
  imageCancel: {
    cursor: 'pointer'
}
}));
export default ImageUploader;