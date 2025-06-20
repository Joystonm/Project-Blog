import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  Close as CloseIcon,
} from "@mui/icons-material";

function Navbar() {
  const { authState, logout } = useAuth();
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    logout();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles" },
    { name: "Post", path: "/post" },
    { name: "Trend", path: "/trend" },
    { name: "Generate", path: "/generate" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="sticky" color="default" elevation={2} sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - visible on all screens */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Chai & Chapters
          </Typography>

          {/* Mobile menu icon */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMobileMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile logo */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
          >
            Chai & Chapters
          </Typography>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  mx: 1,
                  color: isActive(item.path) ? "primary.main" : "text.primary",
                  fontWeight: isActive(item.path) ? 600 : 400,
                  position: "relative",
                  "&::after": isActive(item.path)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "20%",
                        width: "60%",
                        height: "3px",
                        backgroundColor: "primary.main",
                        borderRadius: "2px",
                      }
                    : {},
                  "&:hover": {
                    backgroundColor: "transparent",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "20%",
                      width: "60%",
                      height: "3px",
                      backgroundColor: "primary.light",
                      borderRadius: "2px",
                    },
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* User menu */}
          <Box sx={{ flexGrow: 0 }}>
            {authState.isAuthenticated ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={authState.user?.username || "User"} src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem component={Link} to="/profile" onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: "flex" }}>
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  color="primary"
                  sx={{ mr: 1 }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile drawer menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: "70%",
            maxWidth: "300px",
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "primary.main",
              textDecoration: "none",
            }}
            onClick={toggleMobileMenu}
          >
            Chai & Chapters
          </Typography>
          <IconButton onClick={toggleMobileMenu}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={toggleMobileMenu}
                sx={{
                  backgroundColor: isActive(item.path) ? "rgba(58, 134, 255, 0.08)" : "transparent",
                }}
              >
                <ListItemText
                  primary={item.name}
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: isActive(item.path) ? 600 : 400,
                      color: isActive(item.path) ? "primary.main" : "inherit",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {!authState.isAuthenticated && (
          <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Button component={Link} to="/login" variant="outlined" color="primary" fullWidth onClick={toggleMobileMenu}>
              Login
            </Button>
            <Button component={Link} to="/signup" variant="contained" color="primary" fullWidth onClick={toggleMobileMenu}>
              Sign Up
            </Button>
          </Box>
        )}
        {authState.isAuthenticated && (
          <Box sx={{ p: 2 }}>
            <Button component={Link} to="/profile" variant="outlined" color="primary" fullWidth onClick={toggleMobileMenu}>
              Profile
            </Button>
            <Button variant="contained" color="primary" fullWidth onClick={handleLogout} sx={{ mt: 1 }}>
              Logout
            </Button>
          </Box>
        )}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
