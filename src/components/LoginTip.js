import React from "react";
import Tooltip from "@mui/material/Tooltip";

const LoginTip = () => {
  return (
    <Tooltip title="Tooltip Header" placement="left">
      <h3>Tooltip Header</h3> <p>tooltip paragraph</p>
      <span>close buttton</span>
    </Tooltip>
  );
};

export default LoginTip;
