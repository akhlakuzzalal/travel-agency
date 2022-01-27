import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LogoImg from '../../../img/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const pages = ['Products', 'Pricing', 'Blog'];

const ResponsiveAppBar = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   const [profile, setProfile] = React.useState({});
   const { user, logOut } = useAuth();

   const url = `https://bike-website-server.herokuapp.com/users/${user?.email}`
   React.useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setProfile(data)
         })
   }, [url]);


   return (
      <AppBar position="absolute">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex', cursor: 'pointer' } }}
               >
                  <Link to='/'><img height={'80px'} width={'100px'} src={LogoImg} alt="" /></Link>
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     {
                        profile?.role === 'admin' && <MenuItem onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">
                              <Link className='text-decoration-none text-light' to='dashboard'>Dashboard</Link>
                           </Typography>
                        </MenuItem>
                     }
                  </Menu>
               </Box>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
               >
                  <Link to='/'><img height={'80px'} width={'100px'} src={LogoImg} alt="" /></Link>
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                  {
                     !user.email && <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                        <Link className='text-decoration-none text-light' to='login'>LogIn</Link>
                     </Button>
                  }
                  {
                     profile?.role === 'admin' && <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                     >
                        <Link className='text-decoration-none text-light' to='dashboard'>Dashboard</Link>
                     </Button>
                  }
               </Box>

               <Box sx={{ flexGrow: 0, backgroundColor: "rgba(240, 255, 253, 0)" }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {
                           user?.email && <Avatar alt="Remy Sharp" src={profile?.img} />
                        }
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: '45px' }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >

                     <MenuItem onClick={handleCloseUserMenu}>
                        <Typography onClick={logOut} textAlign="center">LogOut</Typography>
                     </MenuItem>
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};
export default ResponsiveAppBar;
