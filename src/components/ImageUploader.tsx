import { Avatar } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import { Cancel } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import { FormikProps } from 'formik'

/**
 * @interface
 */
export interface ImageUploaderProps {
  /**
   * Existing profile picture
   */
  picture?: any
  name?: string
  onChange?: Function
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ picture, name, onChange }) => {
  const classes = useStyles()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<File | null>()
  const [preview, setPreview] = useState<string>(picture)
  useEffect(() => {
    if (image) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(image)
    } else if (image === null) {
      setPreview('')
      if (fileInputRef !== null && fileInputRef.current !== null) {
        fileInputRef.current.value = ''
      }
    }

    if (onChange) {
      onChange(image)
    }
  }, [image])

  return (
    <>
      <Avatar
        src={preview}
        alt=''
        className={classes.userShowImg}
        onClick={(event) => {
          event.preventDefault()
          if (fileInputRef !== null && fileInputRef.current !== null) fileInputRef.current.click()
        }}
      />

      {preview ? (
        <Cancel
          className={classes.imageCancel}
          onClick={(event) => {
            setImage(null)
          }}
        />
      ) : null}

      <input
        type='file'
        id='file'
        style={{ display: 'none' }}
        name={name}
        accept='image/*'
        onChange={(event: any) => {
          const file = event.target.files[0]
          if (file && file.type.substr(0, 5) === 'image') {
            setImage(file)
          }
        }}
        ref={fileInputRef}
      />
    </>
  )
}

const useStyles = makeStyles(() => ({
  userShowImg: {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
  imageCancel: {
    cursor: 'pointer',
  },
}))
export default ImageUploader
