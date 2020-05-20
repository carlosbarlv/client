import React from 'react';
import Typography from '@material-ui/core/Typography';

const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright © ${new Date().getFullYear()}  BPS&TEC.`}
    </Typography>
  );
};

export default Copyright;
