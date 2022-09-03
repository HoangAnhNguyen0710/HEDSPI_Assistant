import { Card } from '@mui/material'
import React from 'react'

const DocumentImageDetail = (props) => {
  const image = props.image;
  return (
    <div>
        <Card sx={{p: 1, m: 2, ml: 0, minHeight: "fit-content", display: "flex", alignItems: "center"}} variant="outlined">
          <img
            src={image.img}
            alt={image.title}
            loading="lazy"
            className="w-full h-full rounded-md"
          />
        </Card>
    </div>
  )
}

export default DocumentImageDetail