import React from 'react'

export const Square = (): React.ReactElement => {
  return (
    <svg width="30" height="30" version="1.1" style={{ margin: '2px' }}>
      <rect
        x={'1'}
        y={'1'}
        width="30"
        height="30"
        stroke="pink"
        strokeWidth="30"
      />
    </svg>
  )
}
