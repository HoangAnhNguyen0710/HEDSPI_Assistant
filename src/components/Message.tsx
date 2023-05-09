import React from "react";
import MuiAlert from "@mui/material/Alert";

export const Message = React.forwardRef<any, any>(function Message(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Message;
