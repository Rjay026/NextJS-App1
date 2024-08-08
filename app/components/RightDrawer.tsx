import { Box, Drawer, Typography, Grid } from '@mui/material';
import { MdReport } from 'react-icons/md';
import CardItem from './CardItem';

const drawerWidth = 400;

const coachingData = [
  { title: 'Reports', description: 'Generate reports', Icon: MdReport },
];

export default function PermanentRightDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/*<CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box> */}
      <Drawer
        sx={{
          width: { sm: '300px', lg: drawerWidth },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { sm: '300px', lg: drawerWidth },
            boxSizing: 'border-box',
            // position: { sm: 'relative', height: '100vh', lg: 'fixed' },
          },
          display: { xs: 'none', sm: 'block' },
        }}
        variant="permanent"
        anchor="right"
      >
        {/* <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}

        <Grid item xs={12} sx={{ padding: '15px', paddingTop: '30px' }}>
          <Box>
            <Typography variant="h6" component="h2">
              Coaching feedback
            </Typography>
            <Grid container spacing={2}>
              {coachingData.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <CardItem {...card} height={195} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ padding: '15px', paddingTop: '30px' }}>
          <Box>
            <Typography variant="h6" component="h2">
              Soft Skills
            </Typography>
            <Grid container spacing={2}>
              {coachingData.map((card, index) => (
                <Grid item xs={12} key={index}>
                  <CardItem {...card} height={195} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

      </Drawer>
    </Box>
  );
}
