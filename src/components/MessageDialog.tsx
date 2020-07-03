import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'

interface MessageDialogProps {
  isOpen: boolean
  message: string
  onClose?: () => void
  primaryOptionOnClick?: () => void
  primaryOptionText?: string
  secondaryOptionOnClick?: () => void
  secondaryOptionText?: string
  title: string
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
  )
}

export default MessageDialog
