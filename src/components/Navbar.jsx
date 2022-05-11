import { AppBar, Toolbar, Typography, Button , Box , IconButton , Avatar, Badge } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  return (
    <AppBar position='sticky' sx={{marginBottom:3 ,bgcolor:'#134B8A'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
        <Box>
          <IconButton sx={{display:{xs:'none',md:'inline-flex'}}}>
            <Badge badgeContent=" " color="error" >
              <NotificationsIcon fontSize="large" sx={{color:'white'}}/>
            </Badge>
          </IconButton>
          <IconButton >
            <Avatar alt="S" src="/" />
          </IconButton>
          <Button endIcon={<KeyboardArrowDownIcon />} color='inherit' sx={{display:{xs:'none',md:'inline-flex'}}}>
            Phayuphat trilao
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
