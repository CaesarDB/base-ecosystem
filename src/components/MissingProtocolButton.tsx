import { Box, Button, Typography } from '@mui/material';

const MissingProtocolButton = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 0,
        display: 'flex',
        gap: '0.25rem',
        alignItems: 'center',
      }}
    >
      <Typography>Missing Protocols?</Typography>
      <Button
        onClick={() =>
          window.open('https://github.com/chrischang/base-ecosystem', '_blank')
        }
      >
        Submit a PR
      </Button>
    </Box>
  );
};

export default MissingProtocolButton;
