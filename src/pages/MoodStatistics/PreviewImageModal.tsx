import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import React from 'react';
import imagePlaceholder from '../../assets/image-placeholder.png';
/**
 * @component
 * A modal panel, which shows mood image in bigger size.
 * @param {*} props
 * @param {} modalState contains a useState for modal handling, needs to be deconstructed.
 */
const PreviewImageModal: React.FC<any> = ({
  displayModal,
  closeModal,
  imageSource,
}) => {
  return (
    <Dialog
      className="new-feeling-modal"
      open={displayModal}
      onClose={closeModal}
      fullWidth
      style={{ padding: 16 }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Image preview</Typography>
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent style={{ paddingBottom: 24, textAlign: 'center' }}>
        <img
          alt="preview"
          src={imageSource ? imageSource : imagePlaceholder}
          style={{
            maxWidth: 600,
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PreviewImageModal;
