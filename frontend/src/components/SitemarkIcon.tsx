import logo from '../assets/developer.png';
import { Box, Typography } from '@mui/material';

export default function SitemarkIcon() {
  return (
    <Box className="flex items-center">
        <img src={logo} alt="Logo" style={{ height: 35, width: 35, margin: 10 }} />
        <Typography color="text.secondary" className="mx-5 text-center">jakeyoon.dev</Typography>
    </Box>
  );
}
