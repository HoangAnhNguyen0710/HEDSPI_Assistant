import { Card } from '@mui/material'
import React from 'react'

const DocumentImageDetail = (props: any) => {
  const image = props.image;
  return (
    <div>
        <Card sx={{p: 1, minHeight: "fit-content", display: "flex", alignItems: "center"}} variant="outlined">
          <img
            src={image}
            alt={image.toString()}
            loading="lazy"
            className="w-full h-full rounded-md"
          />
        </Card>
    </div>
  )
}

export default DocumentImageDetail