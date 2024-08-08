"use client";

import { AppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CareCoach
        </Typography>
        {/* {!isMobile && (
          <div>
            {}
            <Typography variant="body1" component="span" sx={{ ml: 2 }}>
              Home
            </Typography>
            <Typography variant="body1" component="span" sx={{ ml: 2 }}>
              Profile
            </Typography>
          </div>
        )} */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
