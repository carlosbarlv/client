import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';

interface MessageDialogProps {
  readonly title: string;
  readonly message: string;
  readonly isOpen: boolean;
  readonly secondaryOptionText?: string;
  readonly secondaryOptionOnClick?: any;
  readonly primaryOptionText?: string;
  readonly primaryOptionOnClick?: any;
  readonly onClose?: any;
}

const MessageDialog = ({
  title = '',
  message = '',
  isOpen = false,
  secondaryOptionOnClick = () => {},
  secondaryOptionText = '',
  primaryOptionOnClick = () => {},
  primaryOptionText = '',
  onClose = () => {},
}: MessageDialogProps) => {
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby={title}
      aria-describedby={message}
      open={isOpen}
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {secondaryOptionText && (
          <Button onClick={secondaryOptionOnClick}>
            {secondaryOptionText}
          </Button>
        )}

        {primaryOptionText && (
          <Button onClick={primaryOptionOnClick} color="primary">
            {primaryOptionText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog;
