import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@emotion/react";

const pages = ["Варианты размещения", "Чем заняться", "Контакты"];
const settings = ["Варианты размещения", "Чем заняться", "Контакты"];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}
function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

export default function Header(props: Props) {
  const checkAdmin = localStorage.getItem("adminAuth");

  const exitAdmin = () => {
    localStorage.removeItem("adminAuth");
    window.location.replace("/");
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar
            sx={{ backgroundColor: "#3a3a3a" }} // Темный цвет
            enableColorOnDark
          >
            <Toolbar>
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    236 метров
                  </Typography>

                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                  >
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    ></IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{ display: { xs: "block", md: "none" } }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography sx={{ textAlign: "center" }}>
                            {page}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>

                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: "flex", md: "none" },
                      flexGrow: 1,
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    236 метров
                  </Typography>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  >
                    {pages.map((page) => {
                      let href = "";
                      switch (page) {
                        case "Варианты размещения":
                          href = "#rooms";
                          break;
                        case "Чем заняться":
                          href = "#activities";
                          break;
                        case "Контакты":
                          href = "#about";
                          break;
                        default:
                          href = "#";
                      }

                      return (
                        <Button
                          key={page}
                          href={href} // Ссылка на раздел
                          onClick={handleCloseNavMenu}
                          sx={{
                            my: 3,
                            color: "white",
                            display: "block",
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                              opacity: 0.5,
                            },
                          }}
                        >
                          {page}
                        </Button>
                      );
                    })}
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Menu" src="/static/images/avatar/2.jpg" />
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
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography sx={{ textAlign: "center" }}>
                            {setting}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Toolbar>
              </Container>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </React.Fragment>
    </AppBar>
  );
}
