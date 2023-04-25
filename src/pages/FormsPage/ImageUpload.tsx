import { Card, CardContent, Fab, Typography } from "@mui/material";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Link } from "react-router-dom";
import { Add } from '@mui/icons-material'

export function ImageUpload() {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                }) => (
                    <div>
                        <div style={{ display: 'flex', paddingTop: '1rem' }} className="new-form-btn">
                            <Typography style={{ paddingTop: '0.5rem', paddingBottom: '0rem', fontSize: '20px', fontWeight: 'bold'}} >
                                {"Muu materiaali"}
                            </Typography>
                            <Link style={{ marginLeft: '20px' }} onClick={onImageUpload} aria-label='add' to={"/forms"}>
                                <Fab size="medium" color="primary" aria-label="add">
                                    <Add />
                                </Fab>
                            </Link>
                        </div>
                        &nbsp;
                        <Card variant="outlined">
                        <CardContent >            
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.dataURL} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    <button onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        </CardContent>
                          </Card>
                    </div>
                )} 
            </ImageUploading>
        </div>
    );
}
